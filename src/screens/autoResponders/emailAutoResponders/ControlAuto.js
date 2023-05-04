import React from 'react';
import { Row, Col, Switch, Upload, Typography } from 'antd';
import { Button } from 'react-bootstrap';
const { Text } = Typography;
function ControlAuto() {
  const handleChange = info => {
    console.log(info, 'image');
  };
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Row align="middle">
            <Col span={18}>
              <Text strong className="text-label">
                Turn autoresponders on
              </Text>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Switch onChange={onChange} />
            </Col>
          </Row>
          <Row align="middle" className="mt-3">
            <Col span={18}>
              <Text strong className="text-label">
                BCC autoresponder emails
              </Text>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Switch onChange={onChange} />
            </Col>
          </Row>
          <Row align="middle" className="mt-3">
            <Col span={18}>
              <Text strong className="text-label">
                Disable autoresponder messages to opt-out members
              </Text>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Switch onChange={onChange} />
            </Col>
          </Row>
          <Row align="middle" className="mt-3">
            <Col span={18}>
              <Text strong className="text-label">
                Delay 'new member' outgoing autoresponder messages and send
                daily at
              </Text>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Upload
                colorBorder="blue"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                onChange={handleChange}
              >
                <Button variant="light" className="rounded-pill px-4 py-2">
                  Select
                </Button>
              </Upload>
            </Col>
          </Row>
          <Row className="mt-5">
            <Button
              className="rounded-pill px-4 py-2"
              variant="outline-primary"
              type="submit"
            >
              Save
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default ControlAuto;
