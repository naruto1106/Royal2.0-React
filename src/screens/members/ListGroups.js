import React from 'react';
// import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { Typography, Row, Col } from 'antd';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import ActionButton from 'components/common/ActionButton';

const { Title } = Typography;
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
      Header: 'Row',
      Cell: rowData => {
        return <>{rowData.row.index + 1}</>;
      },
      headerProps: {
        style: {
          width: 5
        }
      },
      cellProps: {
        style: {
          maxWidth: 5
        }
      }
    },
    {
      accessor: 'code',
      Header: 'Code',
      headerProps: {
        style: {
          maxWidth: 10
        }
      },
      cellProps: {
        style: {
          maxWidth: 10
        }
      }
    },
    {
      accessor: 'name',
      Header: 'Name',
      headerProps: {
        style: {
          maxWidth: 200
        }
      },
      cellProps: {
        style: {
          maxWidth: 200
        }
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
          width: 10
        }
      },
      cellProps: {
        style: {
          width: 10
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
      headerProps: {
        style: {
          width: 10
        }
      },
      cellProps: {
        style: {
          width: 10
        }
      },
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
      <Row>
        <Col>
          <Title level={4} style={{ paddingLeft: '35px' }}>
            All group/tier records
          </Title>
        </Col>
      </Row>
      <Row style={{ marginTop: '37px' }}>
        <Col span={22}>
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
        </Col>
      </Row>
    </>
  );
}
export default ListGroups;
