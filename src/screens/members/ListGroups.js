import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Modal, Typography, Row } from 'antd';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import ActionButton from 'components/common/ActionButton';
import endpoint from '../../utils/endpoint';
const { confirm } = Modal;
import TabGroups from './TabGroups';

const { Title } = Typography;

// const { Title } = Typography;
function ListGroups() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [memberLists, setMemeberLists] = useState([]);
  const [columns, setColumns] = useState([]);
  const [resultsPerPage, SetresultsPerPage] = useState(999);
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <Form.Check
          type="checkbox"
          className="form-check fs-0 mb-0 d-flex align-items-center"
        >
          <Form.Check.Input type="checkbox" ref={resolvedRef} {...rest} />
        </Form.Check>
      );
    }
  );
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataManagerGroupSchemaEndpoint('list');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      dispatch(setMemberMenuData({ currentMemberMenuSchema: schema.menu })); // store current member menu
      _isMounted.current && setLayoutData(layoutSchema);
      // end default part
      const memberRes = await Axios.get(
        endpoint.appUsers('/app/users/') + `?user_type=3`
      );
      setMemeberLists(memberRes.data);
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
    }
  };
  useEffect(() => {
    _isMounted.current = true;
    initPageModule();
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const editRow = row => {
    navigate('/datamanager/bb_loyal2_members/edit/' + row._id);
  };
  const deleteRow = () => {
    showDeleteConfirm();
  };
  const AllChange = row => {
    console.log('checkbox_alldddd', row);
  };
  const onChange = row => {
    console.log('check_box_click', row); // isSelected: true, false
  };

  const row_select = row => {
    navigate('/datamanager/bb_loyal2_members/view/' + row._id);
  };
  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete?',
      icon: <ExclamationCircleFilled />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };
  useEffect(() => {
    console.log(layoutData, 'this is layoutdata------');
    if (layoutData) {
      console.log(layoutData.options.columns);
      let objectData = layoutData.options.columns;
      SetresultsPerPage(
        layoutData.options.pagination.results_per_page
          ? layoutData.options.pagination.results_per_page
          : 999
      );
      let tempArray = [
        {
          accessor: 'row',
          Header: 'Row',
          Cell: rowData => {
            return <>{rowData.row.index + 1}</>;
          }
        }
      ];
      for (const key in objectData) {
        let tempElement = {};
        tempElement.accessor = key;
        tempElement.Header = objectData[key];
        tempElement.Cell = function (rowData) {
          //  const { code } = rowData.row.original;
          const value = rowData.row.original[key];
          const divTag = (
            <div
              onClick={() => {
                row_select(rowData.row.original);
              }}
              style={{ cursor: 'pointer' }}
            >
              {value}
            </div>
          );
          return divTag;
        };
        tempArray.push(tempElement);
      }
      let editBtn = {
        id: 'Edit',
        Header: (
          <>
            <ActionButton
              icon="trash-alt"
              onClick={() => deleteRow()}
              title="Delete"
              variant="action"
              className="p-0 me-2"
            />
          </>
        ),
        // headerProps: {
        //   style: {
        //     maxWidth: 10
        //   }
        // },
        // cellProps: {
        //   style: {
        //     maxWidth: 10
        //   }
        // },
        Cell: rowData => {
          return (
            <>
              <ActionButton
                icon="edit"
                title="Edit"
                onClick={() => editRow(rowData.row.original)}
                variant="action"
                className="p-0 me-2"
              />
            </>
          );
        }
      };
      tempArray.push(editBtn);

      let checkBtn = {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <IndeterminateCheckbox
            {...getToggleAllRowsSelectedProps()}
            onClick={getToggleAllRowsSelectedProps =>
              AllChange(getToggleAllRowsSelectedProps)
            }
          />
        ),
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox
              {...row.getToggleRowSelectedProps()}
              onClick={() => onChange(row)}
            />
          </div>
        )
      };
      tempArray.push(checkBtn);
      setColumns(tempArray);
    }
  }, [layoutData]);

  // Loading part
  if (loadingSchema) {
    return <Loading style={{ marginTop: 150 }} msg="Loading Schema..." />;
  }
  if (!layoutData) return getErrorAlert({ onRetry: initPageModule });
  // end Loading part

  return (
    <>
      <Row className="mx-4">
        <Title level={4} className="mb-3">
          All group/tier records
        </Title>
      </Row>

      <AdvanceTableWrapper
        columns={columns}
        data={memberLists}
        sortable
        // pagination
        // selection
        perPage={resultsPerPage}
      >
        <AdvanceTable
          table
          headerClassName="bg-200 text-900 text-nowrap align-middle"
          rowClassName="align-middle white-space-nowrap"
          tableProps={{
            bordered: true,
            striped: true,
            className: 'fs--1 mb-0 overflow-hidden'
          }}
        />
        <div className="mt-3">
          <AdvanceTableFooter
            rowCount={memberLists.length}
            table
            rowInfo
            navButtons
            // rowsPerPageSelection
          />
        </div>
      </AdvanceTableWrapper>

      <TabGroups />
    </>
  );
}
export default ListGroups;
