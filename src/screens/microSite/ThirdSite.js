import React from 'react';
import {
  Typography,
  Row,
  Col,
  Tooltip,
  Upload,
  InputNumber,
  Input
} from 'antd';
import { Button, Card, Carousel } from 'react-bootstrap';
import { QuestionCircleOutlined } from '@ant-design/icons';
// import { AiOutlineCoffee } from 'react-icons/ai';
import { ImPhone, ImHome, ImCart } from 'react-icons/im';
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

function ThirdSite() {
  const handleChange = info => {
    console.log(info, 'image');
  };

  return (
    <>
      <Row className="mx-4 mt-5">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={3}>Virtual Stamp for card</Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-5">
        <Col span={24}>
          <Card style={cardStyle}>
            <Card.Body className="p-4">
              <Row className="mt-3">
                <Title level={4}>Virtual 'Rubber Stamp' Display </Title>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={22}>
                  <Text>
                    If you would like your member points to display as a grid of
                    'rubber stamps'
                  </Text>
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
              <Row className="mt-5" align="middle">
                <Col xxl={8} xl={12} lg={14}>
                  <Text strong className="text-label">
                    Points required per stamp: eg 1 (required)
                  </Text>
                </Col>
                <Col xxl={8} xl={6} lg={4}>
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
                <Col xxl={8} xl={6} lg={6} style={{ textAlign: 'end' }}>
                  <InputNumber style={{ borderRadius: '10px' }} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col xxl={8} xl={12} lg={14}>
                  <Text strong className="text-label">
                    Stamps per grid: eg 4, 8, 12 or 16 (required)
                  </Text>
                </Col>
                <Col xxl={8} xl={6} lg={4}>
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
                <Col xxl={8} xl={6} lg={6} style={{ textAlign: 'end' }}>
                  <InputNumber style={{ borderRadius: '10px' }} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col xxl={8} xl={12} lg={14}>
                  <Text strong className="text-label">
                    Free stamps per grid: eg 1 (optional)
                  </Text>
                </Col>
                <Col xxl={8} xl={6} lg={4}>
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
                <Col xxl={8} xl={6} lg={6} style={{ textAlign: 'end' }}>
                  <InputNumber style={{ borderRadius: '10px' }} />
                </Col>
              </Row>
              <Row className="mt-5" align="middle">
                <Col xxl={9} xl={14} lg={18}>
                  <Text strong className="text-label">
                    Voucher to issue when grid is complete: (required)
                  </Text>
                </Col>
                <Col xxl={15} xl={10} lg={6}>
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
              <Row className="mt-2">
                <Input style={inputStyle} />
              </Row>
              <Row className="my-5">
                <Col span={12}>
                  <Row align="middle">
                    <Col span={12}>
                      <Text strong className="text-label">
                        Upload Stamp Image
                      </Text>
                    </Col>
                    <Col span={12}>
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
                  <Row className="mt-3" align="middle">
                    <Col span={12}>
                      <Upload
                        colorBorder="blue"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        onChange={handleChange}
                      >
                        <Button
                          variant="light"
                          className="rounded-pill px-4 py-2"
                        >
                          Select Image
                        </Button>
                      </Upload>
                    </Col>
                    {/* <Col span={12}>
                      <AiOutlineCoffee style={{ scale: '2' }} />
                    </Col> */}
                  </Row>
                </Col>
                <Col span={12} style={{ textAlign: 'center' }}>
                  <Text strong className="text-label">
                    Or use standard image
                  </Text>
                  <Row className="mt-3" align="middle">
                    <Col span={24}>
                      <Carousel
                        indicators={false}
                        variant="dark"
                        style={{ height: '70px' }}
                      >
                        <Carousel.Item style={{ marginTop: '22px' }}>
                          <Row style={{ height: '55px' }}>
                            <Col span={8} style={{ textAlign: 'end' }}>
                              <ImHome style={{ scale: '2' }} />
                            </Col>
                            <Col span={8} style={{ textAlign: 'center' }}>
                              <ImPhone style={{ scale: '2' }} />
                            </Col>
                            <Col span={8} style={{ textAlign: 'start' }}>
                              <ImCart style={{ scale: '2' }} />
                            </Col>
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item style={{ marginTop: '22px' }}>
                          <Row style={{ height: '60px' }}>
                            <Col span={8} style={{ textAlign: 'end' }}>
                              <ImPhone style={{ scale: '2' }} />
                            </Col>
                            <Col span={8} style={{ textAlign: 'center' }}>
                              <ImHome style={{ scale: '2' }} />
                            </Col>
                            <Col span={8} style={{ textAlign: 'start' }}>
                              <ImCart style={{ scale: '2' }} />
                            </Col>
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item style={{ marginTop: '22px' }}>
                          <Row style={{ height: '60px' }}>
                            <Col span={8} style={{ textAlign: 'end' }}>
                              <ImPhone style={{ scale: '2' }} />
                            </Col>
                            <Col span={8} style={{ textAlign: 'center' }}>
                              <ImHome style={{ scale: '2' }} />
                            </Col>
                            <Col span={8} style={{ textAlign: 'start' }}>
                              <ImPhone style={{ scale: '2' }} />
                            </Col>
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default ThirdSite;
