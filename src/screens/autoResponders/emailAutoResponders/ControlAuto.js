import React from 'react';
import { Row, Col, Switch, Typography, TimePicker } from 'antd';
import { Button } from 'react-bootstrap';
// import dayjs from 'dayjs';
const format = 'HH:mm';
const { Paragraph } = Typography;
function ControlAuto() {
  // const handleChange = info => {
  //   console.log(info, 'image');
  // };
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Row align="middle">
            <Col span={18}>
              <Paragraph className="text-label m-0">
                Turn autoresponders on
              </Paragraph>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Switch onChange={onChange} />
            </Col>
          </Row>
          <Row align="middle" className="mt-3">
            <Col span={18}>
              <Paragraph className="text-label m-0">
                BCC autoresponder emails
              </Paragraph>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Switch onChange={onChange} />
            </Col>
          </Row>
          <Row align="middle" className="mt-3">
            <Col span={18}>
              <Paragraph className="text-label m-0">
                Disable autoresponder messages to opt-out members
              </Paragraph>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Switch onChange={onChange} />
            </Col>
          </Row>
          <Row align="middle" className="mt-3">
            <Col span={18}>
              <Paragraph className="text-label m-0">
                Delay 'new member' outgoing autoresponder messages and send
                daily at
              </Paragraph>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              {/* <Upload
                colorBorder="blue"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                onChange={handleChange}
              >
                <Button variant="light" className="rounded-pill px-4 py-2">
                  Select
                </Button>
              </Upload> */}
              <TimePicker
                style={{ borderRadius: '10px' }}
                // defaultValue={dayjs('12:08', format)}
                format={format}
                placeholder="Do not delay"
              />
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
