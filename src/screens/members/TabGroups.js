import React from 'react';
import { Typography, Row, Col, Select, InputNumber } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
// import { Outlet, useNavigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const { Title, Paragraph } = Typography;
const { Option } = Select;

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
      <Row className="mx-4 mt-3">
        <Paragraph> Automate based on</Paragraph>
      </Row>
      <Row className="mx-4">
        <Col span={24}>
          <Tabs defaultActiveKey="action" id="group_settings" fill>
            <Tab
              eventKey="action"
              title="Action"
              className="border-bottom border-x p-5"
            >
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Paragraph>Action</Paragraph>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Paragraph>Applied group</Paragraph>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
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
              className="border-bottom border-x p-5"
            >
              <Row className="mt-3">
                <Col
                  sm={{ span: 14, offset: 0 }}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 12, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Paragraph>Code range</Paragraph>
                  </Row>
                </Col>
                <Col
                  sm={{ span: 10, offset: 0 }}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Paragraph>Group to apply</Paragraph>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col
                  sm={18}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 12, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <InputNumber />
                    <span className="mx-3">to</span>
                    <InputNumber />
                  </Row>
                </Col>
                <Col
                  sm={6}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col
                  sm={18}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 12, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <InputNumber />
                    <span className="mx-3">to</span>
                    <InputNumber />
                  </Row>
                </Col>
                <Col
                  sm={6}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col
                  sm={18}
                  md={{ span: 12, offset: 1 }}
                  lg={{ span: 12, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <InputNumber />
                    <span className="mx-3">to</span>
                    <InputNumber />
                  </Row>
                </Col>
                <Col
                  sm={6}
                  md={{ span: 6, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                  xl={{ span: 9, offset: 1 }}
                >
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
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
              className="border-bottom border-x p-5"
            >
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Paragraph>Maximum of points</Paragraph>
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Paragraph>Applied group</Paragraph>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
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
              className="border-bottom border-x p-5"
            >
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">Maximum of points</Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">Applied group</Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <InputNumber />
                  </Row>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 9, offset: 1 }}>
                  <Row justify="center">
                    <Select placeholder="Select" style={{ width: '80%' }}>
                      <Option value="group1">group1</Option>
                    </Select>
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
