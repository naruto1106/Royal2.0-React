import React from 'react';
import { Typography, Row, Col, Switch, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tabs, Tab, Button } from 'react-bootstrap';

const { Title } = Typography;

const tooltip_style = {
  color: 'black',
  padding: '14px 11px 45px 18px',
  width: '290px',
  height: '90px',
  fontSize: '10px',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px rgba(217,217,217,0.66)'
};

const btn_duplicate = {
  boxSizing: 'border-box',
  height: '38px',
  border: '1px solid #359dd9',
  borderRadius: '15px',
  padding: '13px 21px',
  lineHeight: '12px',
  fontSize: '13px',
  fontWeight: '700',
  marginLeft: '87px'
};
const btn_back = {
  boxSizing: 'border-box',
  height: '38px',
  border: '1px solid #359dd9',
  borderRadius: '15px',
  padding: '12px 13px 12px 13px',
  lineHeight: '12px',
  fontSize: '13px',
  fontWeight: '700',
  marginLeft: '10px'
};

function MembersDatacleaner() {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <Row style={{ marginTop: '50px', marginLeft: '100px' }}>
        <Col span={24}>
          <Title level={3}>Data Cleaner</Title>
        </Col>
      </Row>

      <Row style={{ marginLeft: '100px', marginTop: '47px' }}>
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
              title="Find Duplicates"
              className="border-bottom border-x p-3"
            >
              <Row>
                <Col span={24}>
                  <p style={{ marginTop: '50px', marginLeft: '88px' }}>
                    Find memberes where the following fields are duplicated
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: '42px' }}>
                <Col span={5} offset={1}>
                  <p>First and Last Name</p>
                </Col>
                <Col span={2}>
                  <Switch onChange={onChange} />
                </Col>
                <Col span={5} offset={5}>
                  <p>Mobile Number</p>
                </Col>
                <Col span={2}>
                  <Switch onChange={onChange} />
                </Col>
                <Col span={5} offset={1}>
                  <p>Email</p>
                </Col>
                <Col span={2}>
                  <Switch onChange={onChange} />
                </Col>
                <Col span={5} offset={5}>
                  <p>Member Number</p>
                </Col>
                <Col span={2}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row style={{ marginTop: '46px' }}>
                <Col>
                  <Button variant="outline-primary" style={btn_duplicate}>
                    Find Duplicates
                  </Button>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="profile"
              title="Delete Data"
              className="border-bottom border-x p-3"
            >
              <Row>
                <Col span={24}>
                  <p style={{ marginTop: '50px', marginLeft: '88px' }}>
                    Find old/document/stale members and delete their accounts
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: '42px', marginLeft: '88px' }}>
                <Col span={5} offset={1}>
                  <p>First and Last are empty</p>
                </Col>
                <Col span={2}>
                  <Switch onChange={onChange} />
                </Col>
                <Col span={5} offset={5}>
                  <p>Mobile Number is empty</p>
                </Col>
                <Col span={2}>
                  <Switch onChange={onChange} />
                </Col>
                <Col span={5} offset={1}>
                  <p>Email is empty</p>
                </Col>
                <Col span={2}>
                  <Switch onChange={onChange} />
                </Col>
                <Col span={5} offset={5}>
                  <p>Member Number is empty</p>
                </Col>
                <Col span={2}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row style={{ marginTop: '46px' }}>
                <Col>
                  <Button variant="outline-primary" style={btn_duplicate}>
                    Find member
                  </Button>
                  <Button variant="outline-primary" style={btn_back}>
                    Back to members
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
            title="For the safest search we suggest that you start by selecting ALL the fields below to YES- this will ensure that you have the smallest chance of merging records that should not be merged."
          >
            <QuestionCircleOutlined
              style={{
                backgroundColor: '#359dd9',
                borderRadius: '50%',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                marginTop: '90px'
              }}
            />
          </Tooltip>
        </Col>
      </Row>
    </>
  );
}
export default MembersDatacleaner;
