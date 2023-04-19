import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import endpoint from '../../utils/endpoint';
import AdvanceTableWrapper from '../common/advance-table/AdvanceTableWrapper';
import AdvanceTable from '../common/advance-table/AdvanceTable';
import AdvanceTableFooter from '../common/advance-table/AdvanceTableFooter';
import ActionButton from '../common/ActionButton';

function ListMember() {
  const gettabledata = axios.get(endpoint.listmember);
  const tabledata = gettabledata.data;
  console.log('tabledata123', tabledata);
  // const [perpage, setPerpage] = useState(3);
  const editRow = index => {
    alert(index);
  };
  const deleteRow = () => {
    alert('index');
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
  const row_select = index => {
    console.log('row_index', index);
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
      accessor: 'email',
      Header: 'Code',
      Cell: rowData => {
        const { email } = rowData.row.original;
        return (
          <div
            onClick={() => row_select(rowData.row.index)}
            style={{ cursor: 'pointer' }}
          >
            {email}{' '}
          </div>
        );
      }
    },
    {
      accessor: 'name',
      Header: 'Name/Company',
      Cell: rowData => {
        const { name } = rowData.row.original;
        return (
          <div
            onClick={() => row_select(rowData.row.index)}
            style={{ cursor: 'pointer' }}
          >
            {name}{' '}
          </div>
        );
      }
    },
    {
      accessor: 'group',
      Header: 'Group/Tier',
      Cell: rowData => {
        const { group } = rowData.row.original;
        return (
          <div
            onClick={() => row_select(rowData.row.index)}
            style={{ cursor: 'pointer' }}
          >
            {group}{' '}
          </div>
        );
      }
    },
    {
      accessor: 'point',
      Header: 'Points',
      Cell: rowData => {
        const { point } = rowData.row.original;
        return (
          <div
            onClick={() => row_select(rowData.row.index)}
            style={{ cursor: 'pointer' }}
          >
            {point}{' '}
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
      email: 'anna@example.com',
      group: 18,
      point: 18
    },
    {
      name: 'Homer',
      email: 'homer@example.com',
      group: 'homer@example.com',
      point: 35
    },
    {
      name: 'Oscar',
      email: 'homer@example.com',
      group: 'homer@example.com',
      point: 52
    },
    {
      name: 'Anna',
      email: 'anna@example.com',
      group: 18,
      point: 18
    },
    {
      name: 'Homer',
      email: 'homer@example.com',
      group: 'homer@example.com',
      point: 35
    },
    {
      name: 'Oscar',
      email: 'homer@example.com',
      group: 'homer@example.com',
      point: 52
    }
  ];
  return (
    <>
      <AdvanceTableWrapper
        columns={columns}
        data={data}
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
