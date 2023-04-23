import React from 'react';
import { Typography, Row, Col } from 'antd';
import { Table, Button } from 'react-bootstrap';
const { Title } = Typography;
const text_position = {
  textAlign: 'right'
};
function ViewTransaction() {
  return (
    <>
      <Row>
        <Col offset={1}>
          <Title level={4}>Viewing transaction</Title>
        </Col>
        <Col offset={12}>
          <Button
            style={{ marginRight: '20px', borderRadius: '10px' }}
            variant="outline-primary"
          >
            Edit
          </Button>
          <Button style={{ borderRadius: '10px' }} variant="outline-primary">
            Delete
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col offset={1} span={13}>
          <Table responsive>
            <tbody>
              <tr>
                <td>Member</td>
                <td style={text_position}>M00001 Max Max</td>
              </tr>
              <tr>
                <td>Total Value</td>
                <td style={text_position}>100.00</td>
              </tr>
              <tr>
                <td>Transaction Date</td>
                <td style={text_position}>08-02-2023</td>
              </tr>
              <tr>
                <td>Code</td>
                <td style={text_position}>T00001</td>
              </tr>
              <tr>
                <td>Points</td>
                <td style={text_position}>100</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
export default ViewTransaction;
