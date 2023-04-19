import React from 'react';
import { Typography, Row, Col, Input, DatePicker, Button } from 'antd';
const { Title } = Typography;
const buttonStyle = {
  boxSizing: 'border-box',
  height: '40px',
  background: '#ffffff',
  border: '0.5px solid #359dd9',
  color: '#359dd9',
  borderRadius: '10px',
  padding: '10px 40px'
};
function SearchTransaction() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Row>
        <Col offset={1}>
          <Title level={4}>Search transactions</Title>
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1} span={20}>
          <Input
            type="text"
            style={{ borderRadius: '10px' }}
            size="large"
            placeholder="Free text search"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1} span={20}>
          <Input
            type="text"
            style={{ borderRadius: '10px' }}
            size="large"
            placeholder="Member"
          />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col offset={1} span={5}>
          <p> Transaction Date between </p>
        </Col>
        <Col span={3}>
          <DatePicker onChange={onChange} />
        </Col>

        <Col span={2} offset={1}>
          <p> and </p>
        </Col>
        <Col span={3}>
          <DatePicker onChange={onChange} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1} span={5}>
          <p> Date Added/Imported between </p>
        </Col>
        <Col span={3}>
          <DatePicker onChange={onChange} />
        </Col>

        <Col span={2} offset={1}>
          <p> and </p>
        </Col>
        <Col span={3}>
          <DatePicker onChange={onChange} />
        </Col>
        <Col span="3" offset={2}>
          <Button style={buttonStyle}>Search</Button>
        </Col>
      </Row>
    </>
  );
}
export default SearchTransaction;
