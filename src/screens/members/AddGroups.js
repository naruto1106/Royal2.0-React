import React from 'react';
import { Typography, Tooltip, Input, Row, Col } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Form, Button } from 'react-bootstrap';

const { Title } = Typography;

function AddGroups() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <>
      <Row>
        <Col>
          <Title level={4} style={{ marginLeft: '44px' }}>
            Add a group tier
          </Title>
        </Col>
      </Row>
      <Row style={{ marginLeft: '44px' }}>
        <Col span={20}>
          <Form.Group className="mb-3">
            <p>Name</p>
            <Input
              type="text"
              style={{ borderRadius: '15px', width: '100%' }}
              size="large"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ marginLeft: '44px' }}>
        <Col span={20}>
          <Form.Group className="mb-3">
            <p>Code</p>
            <Input
              type="text"
              style={{ borderRadius: '15px', width: '100%' }}
              size="large"
            />
          </Form.Group>
        </Col>
        <Col span={1}>
          <br />
          <Tooltip placement="left" title="Add group" color="#359dd9">
            <QuestionCircleOutlined
              style={{
                backgroundColor: '#359dd9',
                borderRadius: '50%',
                border: 'none',
                color: 'white',
                fontSize: '21px',
                marginTop: '25px',
                marginLeft: '96px'
              }}
            />
          </Tooltip>
        </Col>
      </Row>
      <Row style={{ marginLeft: '44px' }}>
        <Col>
          <Button
            style={{
              borderRadius: '15px',
              borderColor: '#359dd9',
              marginTop: '29px',
              width: '171px',
              height: '38px'
            }}
            variant="outline-primary"
            onClick={() => onFinish()}
          >
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default AddGroups;
