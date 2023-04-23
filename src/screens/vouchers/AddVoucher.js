import React from 'react';
import {
  Typography,
  Row,
  Col,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Switch,Upload
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
function AddVoucher() {
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
  const handleChange = info => {
    let newFileList = [...info.fileList];
    console.log("success", newFileList.length)
  };
  return (
    <>
      <Row>
        <Col offset={1}>
          <Title level={4}>Add a voucher</Title>
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1} span={9}>
          <Form.Group className="mb-3">
            <p>Member</p>
            <Input type="text" style={{ borderRadius: '15px' }} size="large" />
          </Form.Group>
        </Col>
        <Col offset={2} span={9}>
          <Form.Group className="mb-3">
            <p>Points Required</p>
            <InputNumber
              style={{ borderRadius: '15px', width: '100%' }}
              min={0}
              size="large"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col offset={1} span={9}>
          <Row justify="space-between">
            <Col span={5}>
              <p>Add File</p>
            </Col>
            <Col span={6}>
            <Upload
            colorBorder="blue"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            onChange={handleChange}
          >
              <Button
                variant="light"
                style={{
                  padding: '13px 21px',
                  borderRadius: '15px',
                  width: '100%'
                }}
              >
                Select Image
              </Button>
              </Upload>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
        <Col span={9}>
          <Row justify="space-between">
            <Col span={12}>
              <p>Available For Self Selection</p>
            </Col>
            <Col span={2}>
              <Switch onChange={onChange} />
            </Col>
          </Row>
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
export default AddVoucher;
