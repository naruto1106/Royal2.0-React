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
  padding: '7px 40px'
};
const datapicker = {
  borderRadius: '10px',
  width: '100%'
};
function SearchVoucher() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Row>
        <Col offset={1}>
          <Title level={4}>Search vouchers</Title>
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
      <br />

      <Row>
        <Col offset={1} span={5}>
          <p> Date Added/Imported between </p>
        </Col>
        <Col span={4}>
          <DatePicker size="large" style={datapicker} onChange={onChange} />
        </Col>

        <Col span={2} offset={1}>
          <p> and </p>
        </Col>
        <Col span={4}>
          <DatePicker size="large" style={datapicker} onChange={onChange} />
        </Col>
        <Col span="3" offset={2}>
          <Button style={buttonStyle} size="large">
            Search
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default SearchVoucher;
