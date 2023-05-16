import React from 'react';
import { Typography, Row, Col, Switch, InputNumber } from 'antd';
import { Button, Card } from 'react-bootstrap';

const { Title, Text } = Typography;
const cardStyle = {
  // backgroundColor: '#F8F8F8',
  borderRadius: '10px',
  border: '0 solid white',
  boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 1)'
};

function FifthSite() {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <Row className="mx-4 mt-5">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={3}>Let’s set your micro-site required fields</Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-5">
        <Col span={24}>
          <Card style={cardStyle}>
            <Card.Body className="p-4">
              <Row className="mt-3">
                <Title level={4}>Micro-site Required Fields </Title>
              </Row>

              <Row className="mt-3" align="middle">
                <Col xxl={22} xl={22} lg={20}>
                  <Text>
                    Require 'mobile number' entry in member signup form?
                  </Text>
                </Col>
                <Col xxl={2} xl={2} lg={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col xxl={22} xl={22} lg={20}>
                  <Text>Require 'telephone' entry in member signup form?</Text>
                </Col>
                <Col xxl={2} xl={2} lg={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col xxl={22} xl={22} lg={20}>
                  <Text>
                    Require 'date of birth' entry in member signup form?
                  </Text>
                </Col>
                <Col xxl={2} xl={2} lg={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={15}>
                  <Text>Min. age required for signup</Text>
                </Col>
                <Col xxl={7} xl={7} lg={5} style={{ textAlign: 'end' }}>
                  <InputNumber style={{ borderRadius: '10px' }} />
                </Col>
                <Col xxl={2} xl={2} lg={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col xxl={22} xl={22} lg={20}>
                  <Text>Require 'address' entry in member signup form</Text>
                </Col>
                <Col xxl={2} xl={2} lg={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col xxl={22} xl={22} lg={20}>
                  <Text>
                    Disable 'card-number' entry in member signup form?
                  </Text>
                </Col>
                <Col xxl={2} xl={2} lg={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col xxl={22} xl={22} lg={20}>
                  <Text>
                    Hide member opt-out options when editing their profile?
                  </Text>
                </Col>
                <Col xxl={2} xl={2} lg={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col xxl={22} xl={22} lg={20}>
                  <Text>Hide password entry in the sign-up form?</Text>
                </Col>
                <Col xxl={2} xl={2} lg={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-5 mb-3">
                <Button
                  variant="outline-primary"
                  className="btn-active-command rounded-pill px-4 py-2"
                >
                  Save
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default FifthSite;
