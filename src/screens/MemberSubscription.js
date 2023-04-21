import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Loading from 'components/loading';
import handleError from 'utils/handleError';

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
import { Tabs, Tab, Button, Card } from 'react-bootstrap';
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
// const btn_update = {
//   borderRadius: '15px',
//   height: '38px',
//   padding: '13px',
//   lineHeight: '12px',
//   fontSize: '13px',
//   fontWeight: '700'
// };
const btn_back = {
  borderRadius: '50rem',
  // height: '38px',
  padding: '0.3825rem 22px',
  // lineHeight: '12px',
  // fontSize: '13px',
  marginLeft: '10px'
  // fontWeight: '700'
};
const btn_log = {
  boxSizing: 'border-box',
  borderRadius: '50rem',
  padding: '0.3825rem 40px',
};
const btn_view = {
  boxSizing: 'border-box',
  borderRadius: '50rem',
  padding: '0.41rem 29px',
};
const datapicker = {
  borderRadius: '10px',
  width: '100%'
};
function MemberSubscription() {
  const _isMounted = useRef(false);
  const [loadingSchema, setLoadingSchema] = useState(true);
  const initPageModule = async () => {
    try {
      _isMounted.current && setLoadingSchema(true);
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

  if (loadingSchema) {
    return <Loading style={{ marginTop: 150 }} msg="Loading Schema..." />;
  }

  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  const dateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Card className="overflow-hidden z-index-1 card-main_layout">
        <Card.Body className="p-0">
          <Row style={{ marginTop: '50px', marginLeft: '100px' }}>
            <Col span={24}>
              <Title level={3}>Membership & Subscriptions</Title>
            </Col>
            <Col>
              <p>
                By default members have access to your program without
                subscribing. Use the <br /> settings below in combination with
                the subscription dates for each member to <br /> restrict
                membership if required.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: '62px', marginLeft: '100px' }}>
            <Col xxl={7} xl={10} lg={13} md={13} sm={13} xs={13}>
              <Title level={4}>Subscription required for access</Title>
            </Col>
            <Col xxl={2} xl={3} lg={4} md={4} sm={4} xs={13}>
              <Switch onChange={onChange} />
            </Col>
            <Col
              xxl={{ span: 2, offset: 10 }}
              xl={{ span: 2, offset: 7 }}
              lg={{ span: 2, offset: 4 }}
              md={{ span: 2, offset: 4 }}
              sm={{ span: 2, offset: 4 }}
              xs={{ span: 2, offset: 4 }}
            >
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
            <Col xxl={18} xl={19} lg={21} md={21} sm={21} xs={17}>
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
                    <Col span={24}>
                      <TextArea rows={4} style={{ marginTop: '38px' }} />
                    </Col>
                  </Row>
                  <Row justify="space-between" style={{ marginTop: '32px' }}>
                    <Col span={12}>
                      <Button variant="outline-primary" style={btn_back}>
                        {' '}
                        Back to members
                      </Button>
                    </Col>
                    <Col span={12} style={{ textAlign: 'end' }}>
                      <Button className="btn-active-command rounded-pill">
                        {' '}
                        Update settings
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
                    <Col span={7}>
                      <p className="my-2">Show log entires between</p>
                    </Col>
                    <Col span={3}>
                      <DatePicker
                        size="large"
                        style={datapicker}
                        onChange={() => dateChange()}
                        placeholder="Select"
                      />
                    </Col>

                    <Col span={2} offset={1}>
                      <p className="my-2"> and </p>
                    </Col>
                    <Col span={3}>
                      <DatePicker
                        size="large"
                        style={datapicker}
                        onChange={() => dateChange()}
                        placeholder="Select"
                      />
                    </Col>
                    <Col span={5} offset={2}>
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
                    <Col span={5} offset={2}>
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
            <Col xxl={{ span: 2, offset: 1 }} xl={{ span: 2, offset: 1 }}>
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
        </Card.Body>
      </Card>
    </>
  );
}
export default MemberSubscription;
