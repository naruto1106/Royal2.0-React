import React from 'react';
import { Typography, DatePicker, Input, Row, Col } from 'antd';
import { Form, Button } from 'react-bootstrap';

const { Title } = Typography;

const buttonStyle = {
  boxSizing: 'border-box',
  height: '40px',
  border: '0.5px solid #359dd9',
  borderRadius: '10px',
  padding: '7px 40px'
};
const datapicker = {
  borderRadius: '10px',
  width: '100%'
};
function SearchGroups() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Row>
        <Col>
          <Title level={4} style={{ marginLeft: '39px' }}>
            Search branches/stores
          </Title>
        </Col>
      </Row>
      <Row style={{ marginLeft: '39px', marginTop: '30px' }}>
        <Col span={20} xxl={20}>
          <Form.Group >
            <p>Free text search</p>
            <Input type="text" style={{ borderRadius: '15px' }}  size="large" />
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ marginLeft: '39px', marginTop: '22px' }}>
        <Col span={5} xxl={5}>
          <p className="my-2"> Date Added/Imported between </p>
        </Col>
        <Col span={4} xxl={4}>
          <DatePicker size="large" style={datapicker} onChange={onChange} />
        </Col>

        <Col span={2} offset={1} xxl={2}>
          <p className="my-2"> and </p>
        </Col>
        <Col span={4} xxl={4}>
          <DatePicker size="large" style={datapicker} onChange={onChange} />
        </Col>
        <Col span={3} offset={2} xxl={2}>
          <Button style={buttonStyle} variant="outline-primary" size="large">
            Search
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default SearchGroups;
