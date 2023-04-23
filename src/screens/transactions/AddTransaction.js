import React from 'react';
import {
  Typography,
  Row,
  Col,
  Input,
  InputNumber,
  DatePicker,
  Select
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const { Title } = Typography;
const buttonStyle = {
  boxSizing: 'border-box',
  height: '40px',
  border: '0.5px solid #359dd9',
  borderRadius: '10px',
  padding: '10px 90px'
};
function AddTransaction() {
  const onChange = value => {
    console.log('changed', value);
  };
  const DateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [setting_show, setSetting_show] = useState(false);
  const setting_click = () => {
    if (setting_show == false) {
      setSetting_show(true);
    }
    if (setting_show == true) {
      setSetting_show(false);
    }
  };
  const onselectChange = value => {
    console.log(`selected ${value}`);
  };
  const onSearch = value => {
    console.log('search:', value);
  };
  return (
    <>
      <Row>
        <Col offset={1}>
          <Title level={4}>Add a transaction</Title>
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1} span={20}>
          <Form.Group className="mb-3">
            <Form.Label>Member</Form.Label>
            <br />
            <Input type="text" size="large" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col offset={1} span={6}>
          <Form.Group className="mb-3">
            <Form.Label>Total value</Form.Label>
            <br />
            <InputNumber
              min={1}
              size="large"
              defaultValue={3}
              style={{ width: '100%' }}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col offset={1} span={6}>
          <Form.Group className="mb-3">
            <Form.Label>Oty</Form.Label>
            <br />
            <InputNumber
              min={1}
              size="large"
              defaultValue={3}
              style={{ width: '100%' }}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col offset={1} span={6}>
          <Form.Group className="mb-3">
            <Form.Label>Transaction Date</Form.Label>
            <br />
            <DatePicker
              size="large"
              onChange={DateChange}
              style={{ width: '100%' }}
            />
          </Form.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1} span={5} style={{ cursor: 'pointer' }}>
          <Title
            level={4}
            style={{ color: '#359dd9' }}
            onClick={() => setting_click()}
          >
            Advanced Settings &nbsp;&nbsp;&nbsp;
            <DownOutlined style={{ fontSize: '14px' }} />
          </Title>
        </Col>
        <Col offset={12}>
          <Button style={buttonStyle} variant="outline-primary">
            Add{' '}
          </Button>
        </Col>
      </Row>
      <br />
      {setting_show == true && (
        <>
          <Row>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>&nbsp;</Form.Label>
                <br />
                <Input type="text" size="large" onChange={onChange} />
              </Form.Group>
            </Col>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>&nbsp;</Form.Label>
                <br />
                <Input type="text" size="large" onChange={onChange} />
              </Form.Group>
            </Col>
            <Col offset={2} span={5}>
              <Form.Group className="mb-3">
                <Form.Label>Notes</Form.Label>
                <br />
                <Input type="text" size="large" onChange={onChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>Ex Tax Amount</Form.Label>
                <br />
                <InputNumber
                  min={0}
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tax Amount</Form.Label>
                <br />
                <InputNumber
                  min={0}
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col offset={2} span={5}>
              <Form.Group className="mb-3">
                <Form.Label>Tax Type</Form.Label>
                <br />
                <Input
                  type="text"
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>Branch</Form.Label>
                <br />
                <Select
                  showSearch
                  placeholder="Select"
                  size="large"
                  optionFilterProp="children"
                  style={{ width: '100%' }}
                  onChange={onselectChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? '')
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack'
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy'
                    },
                    {
                      value: 'tom',
                      label: 'Tom'
                    }
                  ]}
                />
              </Form.Group>
            </Col>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>Grand Total</Form.Label>
                <br />
                <InputNumber
                  min={0}
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col offset={2} span={5}>
              <Form.Group className="mb-3">
                <Form.Label>Unit Price</Form.Label>
                <br />
                <InputNumber
                  min={0}
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
export default AddTransaction;
