import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import ActionButton from 'components/common/ActionButton';

function ListMember() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [memberLists, setMemeberLists] = useState([]);
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataManagerSchemaEndpoint('list');
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
  // Loading part
  if (loadingSchema) {
    return <Loading style={{ marginTop: 150 }} msg="Loading Schema..." />;
  }
  if (!layoutData) return getErrorAlert({ onRetry: initPageModule });
  // end Loading part

  // const [perpage, setPerpage] = useState(3);
  const editRow = index => {
    alert('comming soon' + index);
  };
  const deleteRow = () => {
    alert('comming soon');
  };
  const AllChange = () => {
    // console.log("checkbox_all",row);
  };
  const onChange = row => {
    console.log('check_box_click', row); // isSelected: true, false
  };
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
  const row_select = row => {
    navigate('/datamanager/bb_loyal2_members/view/' + row._id);
  };
  const columns = [
    {
      accessor: 'row',
      Header: 'Row',
      Cell: rowData => {
        return <>{rowData.row.index + 1}</>;
      }
    },
    {
      accessor: 'code',
      Header: 'Code',
      Cell: rowData => {
        // const { code } = rowData.row.original;
        return (
          <div
            onClick={() => row_select(rowData.row.index)}
            style={{ cursor: 'pointer' }}
          >
            {}
          </div>
        );
      }
    },
    {
      accessor: 'name',
      Header: 'Name/Company',
      Cell: rowData => {
        const { first_name, last_name } = rowData.row.original;
        return (
          <div
            onClick={() => row_select(rowData.row.original)}
            style={{ cursor: 'pointer' }}
          >
            {first_name + '  ' + last_name + '  /'}
          </div>
        );
      }
    },
    {
      accessor: 'groupISbb_users_groupsID',
      Header: 'Group/Tier',
      Cell: rowData => {
        const { groupISbb_users_groupsID } = rowData.row.original;
        return (
          <div
            onClick={() => row_select(rowData.row.original)}
            style={{ cursor: 'pointer' }}
          >
            {groupISbb_users_groupsID}{' '}
          </div>
        );
      }
    },
    {
      accessor: 'point',
      Header: 'Points',
      Cell: rowData => {
        // const { point } = rowData.row.original;
        return (
          <div
            onClick={() => row_select(rowData.row.index)}
            style={{ cursor: 'pointer' }}
          >
            {' '}
          </div>
        );
      }
    },
    {
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
      headerProps: {
        style: {
          maxWidth: 10
        }
      },
      cellProps: {
        style: {
          maxWidth: 10
        }
      },
      Cell: rowData => {
        return (
          <>
            <ActionButton
              icon="edit"
              title="Edit"
              onClick={() => editRow(rowData.row.index)}
              variant="action"
              className="p-0 me-2"
            />
          </>
        );
      }
    },
    {
      id: 'selection',
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <IndeterminateCheckbox
          {...getToggleAllRowsSelectedProps()}
          onClick={() => AllChange()}
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
    }
  ];

  const data = [
    {
      name: 'Anna',
      email: 'test@example.com',
      age: 18,
      type: 18,
      res: 18
    },
    {
      name: 'Homer',
      email: 'test@example.com',
      age: 18,
      type: 18,
      res: 18
    }
  ];

  return (
    <>
      <AdvanceTableWrapper
        columns={columns}
        data={memberLists}
        sortable
        pagination
        perPage={5}
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
            rowCount={data.length}
            table
            rowInfo
            navButtons
            rowsPerPageSelection
          />
        </div>
      </AdvanceTableWrapper>
    </>
  );
}
export default ListMember;
