import React from 'react';
import { Typography, Row, Col, Tooltip, Upload, Input } from 'antd';
import { Button, Card, Form as BootstrapForm } from 'react-bootstrap';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;
const cardStyle = {
  // backgroundColor: '#F8F8F8',
  borderRadius: '10px',
  border: '0 solid white',
  boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 1)'
};
const cardStyle1 = {
  // backgroundColor: '#F8F8F8',
  borderRadius: '10px',
  border: '0 solid white',
  boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 1)'
};

const inputStyle = {
  width: '100%',
  borderRadius: '10px'
};
function SecondSite() {
  const handleChange = info => {
    console.log(info, 'image');
  };
  // const onFinish = async values => {
  //   console.log('Success:', values);
  // };
  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };
  return (
    <>
      <Row className="mx-4 mt-5">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={3}>Design your Microsite</Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-5">
        <Col span={24}>
          <Card style={cardStyle1}>
            <Card.Body className="p-4">
              <Row className="mt-3">
                <Title level={4}>Your Logo and Micro-site Design </Title>
              </Row>
              <Row align="middle" className="mt-3">
                <Col span={15}>
                  <Text strong className="text-label">
                    Logo{' '}
                  </Text>
                </Col>
                <Col span={7} style={{ textAlign: 'end' }}>
                  <Upload
                    colorBorder="blue"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    onChange={handleChange}
                  >
                    <Button variant="light" className="rounded-pill px-4 py-2">
                      Select Image
                    </Button>
                  </Upload>
                </Col>
                <Col span={2} style={{ textAlign: 'end' }}>
                  <Tooltip
                    placement="bottom"
                    title="300px х 150px tall. It is used in various places but most notably as the header of your micro-site."
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
              <Row align="middle" className="mt-3">
                <Col span={15}>
                  <Text strong className="text-label">
                    Micro-site background image{' '}
                  </Text>
                </Col>
                <Col span={7} style={{ textAlign: 'end' }}>
                  <Upload
                    colorBorder="blue"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    onChange={handleChange}
                  >
                    <Button variant="light" className="rounded-pill px-4 py-2">
                      Select Image
                    </Button>
                  </Upload>
                </Col>
              </Row>
              <Row align="middle" className="mt-3">
                <Col span={15}>
                  <Text strong className="text-label">
                    Micro-site background color{' '}
                  </Text>
                </Col>
                <Col span={7} style={{ textAlign: 'end' }}>
                  {/* <BootstrapForm.Select style={inputStyle}>
                    <option value="0">select</option>
                    <option value="1">select1</option>
                  </BootstrapForm.Select> */}
                  <Input type="color" style={inputStyle} />
                </Col>
              </Row>
              <Row align="middle" className="mt-3">
                <Col span={15}>
                  <Text strong className="text-label">
                    Micro-site theme{' '}
                  </Text>
                </Col>
                <Col span={7} style={{ textAlign: 'end' }}>
                  <BootstrapForm.Select style={inputStyle}>
                    <option value="0">select</option>
                    <option value="1">White</option>
                    <option value="2">Dark</option>
                  </BootstrapForm.Select>
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

      <Row className="mx-4 mt-4">
        <Col span={24}>
          <Card style={cardStyle}>
            <Card.Body className="p-4">
              <Row className="mt-3">
                <Title level={4}>Your Branding</Title>
              </Row>
              {/* <Form
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
              > */}
              <Row align="middle" className="mt-3">
                <Col span={10}>
                  <Text strong className="text-label">
                    Program/Brand Name
                  </Text>
                </Col>
                <Col span={12}>
                  {/* <Form.Item
                      name="name"
                      className="m-0"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    > */}
                  <Input style={inputStyle} />
                  {/* </Form.Item> */}
                </Col>
              </Row>
              <Row align="middle" className="mt-3">
                <Col span={10}>
                  <Text strong className="text-label">
                    Program E-mail Address
                  </Text>
                </Col>
                <Col span={12}>
                  {/* <Form.Item
                      name="name"
                      className="m-0"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    > */}
                  <Input style={inputStyle} />
                  {/* </Form.Item> */}
                </Col>
                <Col span={2} style={{ textAlign: 'end' }}>
                  <Tooltip
                    placement="bottom"
                    title="300px х 150px tall. It is used in various places but most notably as the header of your micro-site."
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
              <Row align="middle" className="mt-3">
                <Col span={10}>
                  <Text strong className="text-label">
                    Micro-site Web-address
                  </Text>
                </Col>
                <Col span={12}>
                  <Row align="middle" gutter={[8, 8]}>
                    <Col span={6} style={{ textAlign: 'end' }}>
                      <Text strong className="text-label">
                        https://
                      </Text>
                    </Col>
                    <Col span={12}>
                      {/* <Form.Item
                          name="name"
                          className="m-0"
                          rules={[
                            {
                              required: true,
                              message: 'Please input Name!'
                            }
                          ]}
                        > */}
                      <Input style={inputStyle} />
                      {/* </Form.Item> */}
                    </Col>
                    <Col span={6}>
                      <Text strong className="text-label">
                        .loyal2.com
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col span={2} style={{ textAlign: 'end' }}>
                  <Tooltip
                    placement="bottom"
                    title="300px х 150px tall. It is used in various places but most notably as the header of your micro-site."
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
              <Row className="mt-4">
                <Text strong className="text-label">
                  Program social media description
                </Text>
              </Row>
              <Row className="mt-2">
                <Col span={22}>
                  {/* <Form.Item
                      name="name"
                      className="m-0"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Name!'
                        }
                      ]}
                    > */}
                  <TextArea
                    rows={3}
                    style={inputStyle}
                    placeholder="Description used when your members post/like/share to social media sites like Facebook or Twitter"
                  />
                  {/* </Form.Item> */}
                </Col>
              </Row>
              <Row align="middle" className="mt-5">
                <Col span={10}>
                  <Text strong className="text-label">
                    Program social media image
                  </Text>
                </Col>
                <Col span={5} style={{ textAlign: 'end' }}>
                  <Text>Upload Logo</Text>
                </Col>
                <Col span={7} style={{ textAlign: 'end' }}>
                  <Upload
                    colorBorder="blue"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    onChange={handleChange}
                  >
                    <Button variant="light" className="rounded-pill px-4 py-2">
                      Select Image
                    </Button>
                  </Upload>
                </Col>
                <Col span={2} style={{ textAlign: 'end' }}>
                  <Tooltip
                    placement="bottom"
                    title="300px х 150px tall. It is used in various places but most notably as the header of your micro-site."
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
              {/* </Form> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default SecondSite;
