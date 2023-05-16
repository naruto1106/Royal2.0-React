import React from 'react';
import { Typography, Row, Col, Form, Input } from 'antd';
import { Button, Card } from 'react-bootstrap';

const { Title, Text } = Typography;
const cardStyle = {
  // backgroundColor: '#F8F8F8',
  borderRadius: '10px',
  border: '0 solid white',
  boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 1)'
};
const inputStyle = {
  width: '100%',
  borderRadius: '10px'
};

function SixthSite() {
  const onFinish = async values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row className="mx-4 mt-5">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={3}>Micro-site Content</Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-5">
        <Col span={24}>
          <Card style={cardStyle}>
            <Card.Body className="p-4">
              <Form
                name="basic"
                labelCol={{
                  span: 0
                }}
                wrapperCol={{
                  span: 24
                }}
                initialValues={{
                  remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Row>
                  <Text strong className="text-label">
                    Micro-site Welcome Message (Not logged in)
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Micro-site About Message
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Micro-site Contact Details
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Micro-site Home Page Message (Logged in)
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Member Suspended Message
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Subscription Expired Message
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Micro-site External Menu Links
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Micro-site External Registration Form
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Micro-site External Contact Form
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Text strong className="text-label">
                    Micro-site Terms & Conditions/Privacy Policy
                  </Text>
                </Row>
                <Row>
                  <Col span={22}>
                    <Form.Item
                      name="name"
                      className="mt-1"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    >
                      <Input style={inputStyle} />
                    </Form.Item>
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
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default SixthSite;
