import React from 'react';
import {
  Typography,
  Row,
  Col,
  Switch,
  Select,
  DatePicker,
  Input,
  Tooltip
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tabs, Tab, Button } from 'react-bootstrap';
const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

const tooltip_style = {
  color: 'black',
  padding: '19px 16px 11px 24px',
  width: '239px',
  height: '84px',
  fontSize: '10px',
  borderRadius: '10px'
};
const btn_update = {
  borderRadius: '15px',
  height: '38px',
  padding: '13px',
  lineHeight: '12px',
  fontSize: '13px',
  fontWeight: '700'
};
const btn_back = {
  borderRadius: '15px',
  height: '38px',
  padding: '13px',
  lineHeight: '12px',
  fontSize: '13px',
  marginLeft: '10px',
  fontWeight: '700'
};
const btn_log = {
  boxSizing: 'border-box',
  height: '38px',
  border: '1px solid #359dd9',
  borderRadius: '15px',
  padding: '13px 40px',
  lineHeight: '12px',
  fontSize: '13px',
  fontWeight: '700'
};
const btn_view = {
  boxSizing: 'border-box',
  height: '38px',
  border: '1px solid #359dd9',
  borderRadius: '15px',
  padding: '13px 29px',
  lineHeight: '12px',
  fontSize: '13px',
  fontWeight: '700'
};
const datapicker = {
  borderRadius: '10px',
  width: '100%'
};
function MemberSubscription() {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  const dateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Row style={{ marginTop: '50px', marginLeft: '100px' }}>
        <Col span={24}>
          <Title level={3}>Membership & Subscriptions</Title>
        </Col>
        <Col>
          <p>
            By default members have access to your program without subscribing.
            Use the <br /> settings below in combination with the subscription
            dates for each member to <br /> restrict membership if required.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: '62px', marginLeft: '100px' }}>
        <Col span={6}>
          <Title level={4}>Subscription required for access</Title>
        </Col>
        <Col span={2}>
          <Switch onChange={onChange} />
        </Col>
        <Col span={2} offset={11}>
          <Tooltip
            placement="bottom"
            color="white"
            overlayInnerStyle={tooltip_style}
            title="Valid member subscription dates will be required for each member to earn points and access micro-site or widget."
          >
            <QuestionCircleOutlined
              style={{
                backgroundColor: '#359dd9',
                borderRadius: '50%',
                border: 'none',
                color: 'white',
                fontSize: '20px'
              }}
            />
          </Tooltip>
        </Col>
      </Row>
      {/* <Divider /> */}
      <Row style={{ marginLeft: '100px' }}>
        <Col span={18}>
          <Tabs
            defaultActiveKey="home"
            style={{ marginTop: '30px' }}
            id="uncontrolled-tab-example"
            justify
            className="mb-3"
          >
            <Tab
              eventKey="home"
              title="Subscription Expired Message"
              className="border-bottom border-x p-3"
            >
              <Row>
                <Col span={20}>
                  <TextArea rows={4} style={{ marginTop: '38px' }} />
                </Col>
                <Col span={24} style={{ marginTop: '32px' }}>
                  <Button variant="info" style={btn_update}>
                    {' '}
                    Update settings
                  </Button>
                  <Button variant="outline-primary" style={btn_back}>
                    {' '}
                    Back to members
                  </Button>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="profile"
              title="Subscription Events"
              className="border-bottom border-x p-3"
            >
              <Row style={{ marginTop: '63px' }}>
                <Col span={5}>
                  <p className="my-2">Show log entires between</p>
                </Col>
                <Col span={4}>
                  <DatePicker
                    size="large"
                    style={datapicker}
                    onChange={() => dateChange()}
                  />
                </Col>

                <Col span={2} offset={1}>
                  <p className="my-2"> and </p>
                </Col>
                <Col span={4}>
                  <DatePicker
                    size="large"
                    style={datapicker}
                    onChange={() => dateChange()}
                  />
                </Col>
                <Col span={3} offset={2}>
                  <Button
                    style={btn_log}
                    variant="outline-primary"
                    size="large"
                  >
                    View log
                  </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: '57px' }}>
                <Col span={20}>
                  <Input
                    type="text"
                    size="large"
                    style={{ borderRadius: '15px' }}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: '33px' }}>
                <Col span={5}>
                  <p className="my-2">Group</p>
                </Col>
                <Col span={4}>
                  <Select placeholder="Select" style={{ width: '80%' }}>
                    <Option value="group1">group1</Option>
                  </Select>
                </Col>

                <Col span={2} offset={1}></Col>
                <Col span={4}></Col>
                <Col span={3} offset={2}>
                  <Button
                    style={btn_view}
                    variant="outline-primary"
                    size="large"
                  >
                    View report
                  </Button>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
        <Col span={2} offset={1}>
          <Tooltip
            placement="bottom"
            color="white"
            overlayInnerStyle={tooltip_style}
            title="Valid member subscription dates will be required for each member to earn points and access micro-site or widget."
          >
            <QuestionCircleOutlined
              style={{
                backgroundColor: '#359dd9',
                borderRadius: '50%',
                border: 'none',
                color: 'white',
                fontSize: '20px'
              }}
            />
          </Tooltip>
        </Col>
      </Row>
    </>
  );
}
export default MemberSubscription;
