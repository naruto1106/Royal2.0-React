import React from 'react';
// import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

// import { Typography } from 'antd';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import ActionButton from 'components/common/ActionButton';

// const { Title } = Typography;
function ListGroups() {
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
  const columns = [
    {
      accessor: 'row',
      Header: 'Row'
      // Cell: rowData => {
      //   return <>{rowData.row.index + 1}</>;
      // }
    },
    {
      accessor: 'code',
      Header: 'Code'
    },
    {
      accessor: 'name',
      Header: 'Name'
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
      row: 3,
      code: 'react',
      name: 'john'
    },
    {
      row: 4,
      code: 'vue',
      name: 'smith'
    },
    {
      row: 7,
      code: 'laravel',
      name: 'harry'
    },
    {
      row: 3,
      code: 'wordpress',
      name: 'potter'
    },
    {
      row: 9,
      code: 'blockchain',
      name: 'golden'
    },
    {
      row: 2,
      code: 'python',
      name: 'mary'
    }
  ];

  return (
    <>
      <h4>All group/tier records</h4>
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
export default ListGroups;
