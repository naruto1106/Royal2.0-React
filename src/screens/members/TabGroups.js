import React from 'react';
import { Typography, Row, Col, InputNumber } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
// import { Outlet, useNavigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';
const { Title, Text } = Typography;

function TabGroups() {
  return (
    <>
      <Row className="mx-4 mt-7">
        <Col span={24}>
          <Title level={4} className="mb-3">
            Groups/Tiers Settings
          </Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-4">
        <Text style={{ color: '#444444' }} strong>
          {' '}
          Automate based on
        </Text>
      </Row>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Tabs defaultActiveKey="action" id="group_settings" fill>
            <Tab eventKey="action" title="Action" className="border-0 p-5">
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Text style={{ color: '#444444' }} strong>
                      Action
                    </Text>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Text style={{ color: '#444444' }} strong>
                      Applied group
                    </Text>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  lg={{ span: 9, offset: 1 }}
                ></Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 1 }}>
                  <Row justify="end">
                    <Button
                      variant="outline-primary"
                      className="rounded-pill mt-5 px-6"
                    >
                      Save
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="member_number_code"
              title="Member number/code"
              className="border-0 p-5"
            >
              <Row className="mt-3">
                <Col
                  xs={{ span: 20 }}
                  sm={{ span: 17 }}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 12, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Text style={{ color: '#444444' }} strong>
                      Code range
                    </Text>
                  </Row>
                </Col>
                <Col
                  xs={{ span: 4 }}
                  sm={{ span: 7 }}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Text style={{ color: '#444444' }} strong>
                      Group to apply
                    </Text>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col
                  xs={20}
                  sm={17}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 12, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                    <span className="mx-3">to</span>
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col
                  xs={4}
                  sm={7}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col
                  xs={20}
                  sm={17}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 12, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                    <span className="mx-3">to</span>
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col
                  xs={4}
                  sm={7}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col
                  xs={20}
                  sm={17}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 12, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                    <span className="mx-3">to</span>
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col
                  xs={4}
                  sm={7}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  sm={{ span: 12, offset: 1 }}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 9, offset: 1 }}
                ></Col>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  sm={{ span: 6, offset: 1 }}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 8, offset: 1 }}
                >
                  <Row justify="end">
                    <Button
                      variant="outline-primary"
                      className="rounded-pill mt-5 px-6"
                    >
                      Save
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="points_balance"
              title="Points balance"
              className="border-0 p-5"
            >
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Text style={{ color: '#444444' }} strong>
                      Maximum of points
                    </Text>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Text style={{ color: '#444444' }} strong>
                      Applied group
                    </Text>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  lg={{ span: 9, offset: 1 }}
                ></Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 1 }}>
                  <Row justify="end">
                    <Button
                      variant="outline-primary"
                      className="rounded-pill mt-5 px-6"
                    >
                      Save
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="points_issued"
              title="Points issued"
              className="border-0 p-5"
            >
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Text style={{ color: '#444444' }} strong>
                      Maximum of points
                    </Text>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Text style={{ color: '#444444' }} strong>
                      Applied group
                    </Text>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber style={{ borderRadius: '10px' }} />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Form.Select
                      placeholder="Select"
                      style={{ width: '80%', borderRadius: '10px' }}
                    >
                      <option value="group1">group1</option>
                    </Form.Select>
                  </Row>
                </Col>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  lg={{ span: 9, offset: 1 }}
                ></Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 1 }}>
                  <Row justify="end">
                    <Button
                      variant="outline-primary"
                      className="rounded-pill mt-5 px-6"
                    >
                      Save
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
export default TabGroups;
