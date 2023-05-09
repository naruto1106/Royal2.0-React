import React from 'react';
// import { BtnStyle } from './PointsStyle';
import { Button } from 'react-bootstrap';

import {
  Typography,
  Row,
  Col,
  Input,
  InputNumber,
  Space,
  DatePicker,
  Select
} from 'antd';
const { Title } = Typography;
function SettingsAdd() {
  return (
    <>
      <Col lg={{ span: 20 }}>
        <Title className="my-6" level={4}>
          Add a new points reacord
        </Title>
        <Title level={5}>Member*</Title>
        <Input size="large" type="text" />
      </Col>
      <Row className="my-7">
        <Col span={9}>
          <Title level={5}>Points*</Title>
          <InputNumber size="large" style={{ width: '100%' }} />
        </Col>
        <Col className="mx-7" span={10}>
          <Title level={5}>Code</Title>
          <Input size="large  borderd" type="text" />
        </Col>
      </Row>
      <Space className="my-5" direction="horizontal" size="2">
        <DatePicker size="large" style={{ width: '615px' }} />
        <Title className="mx-6" level={5}>
          Branch
        </Title>
        <Select
          defaultValue="lucy"
          style={{ width: '480px' }}
          size="large"
          // onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true }
          ]}
        />
        <Button
          // style={BtnStyle}
          className="mx-4 rounded-pill me-1 mb-1"
          variant="outline-primary"
          // onClick={() => updateSetting()}
        >
          Add
        </Button>
      </Space>
    </>
  );
}
export default SettingsAdd;
