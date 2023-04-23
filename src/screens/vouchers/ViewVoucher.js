import React from 'react';
import { Typography, Row, Col } from 'antd';
import { Table, Button } from 'react-bootstrap';
const { Title } = Typography;
const btnstyle = {
  marginRight: '10px',
  borderRadius: '10px'
};
function ViewVoucher() {
  return (
    <>
      <Row>
        <Col offset={1}>
          <Title level={4}>Viewing voucher</Title>
        </Col>
        <Col offset={12}>
          <Button style={btnstyle} variant="outline-primary">
            {' '}
            Edit{' '}
          </Button>
          <Button style={btnstyle} variant="outline-primary">
            Preview
          </Button>
          <Button style={btnstyle} variant="outline-primary">
            Issue voucher
          </Button>
          <Button style={btnstyle} variant="outline-primary">
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
                <td>Name</td>
                <td>Group 1</td>
              </tr>
              <tr>
                <td>Points Required</td>
                <td>111</td>
              </tr>
              <tr>
                <td>Code </td>
                <td>V00001</td>
              </tr>
              <tr>
                <td style={{ lineHeight: '100px' }}>Image</td>
                <td>
                  <img
                    src="/a.png"
                    style={{ width: '100px', height: '100px' }}
                  />{' '}
                </td>
              </tr>
              <tr>
                <td>Available For Self Selection</td>
                <td>No</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
export default ViewVoucher;
