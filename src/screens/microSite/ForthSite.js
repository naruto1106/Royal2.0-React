import React from 'react';
import { Typography, Row, Col, Switch } from 'antd';
import { Button, Card } from 'react-bootstrap';

const { Title, Text } = Typography;
const cardStyle = {
  // backgroundColor: '#F8F8F8',
  borderRadius: '10px',
  border: '0 solid white',
  boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 1)'
};

function ForthSite() {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <Row className="mx-4 mt-5">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={3}>Lets set your micro-site permissions</Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-5">
        <Col span={24}>
          <Card style={cardStyle}>
            <Card.Body className="p-4">
              <Row className="mt-3">
                <Title level={4}>Micro-site Permissions </Title>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Allow members online access?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Can members register themselves online?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Can members update their profile?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Display member QR/bar-code on their home page?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Hide member points balance on home page?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Can members see detailed points statements?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Can members select vouchers?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Can members view their vouchers?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
                  <Switch onChange={onChange} />
                </Col>
              </Row>
              <Row className="mt-3" align="middle">
                <Col span={20}>
                  <Text>Can members view their Group/Tier?</Text>
                </Col>
                <Col span={4} style={{ textAlign: 'end' }}>
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
export default ForthSite;
