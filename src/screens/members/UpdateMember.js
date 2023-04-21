import React from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  Tooltip,
  DatePicker,
  Radio,
  Switch,
  Select,
  Divider
} from 'antd';
import { Button } from 'react-bootstrap';
import { CalendarOutlined, QuestionOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;
const inputStyle = { width: '93%', marginTop: '-15px' };
const inputBorderRadius = { borderRadius: '15px' };
const twoInputStyle = {
  display: 'inline-block',
  width: '45%',
  marginTop: '-15px'
};
const dateStyle = { width: '100%', borderRadius: '15px' };
const inputQuestion = {
  display: 'inline-block',
  width: '93%',
  marginTop: '-15px',
  borderRadius: '15px'
};
const btnQuestion = {
  backgroundColor: '#359dd9',
  marginTop: '-10px',
  color: 'white',
  float: 'right'
};

function UpdateMember() {
  let date = new Date();
  let date_value =
    date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear();
  const onFinish = values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <h3>Members</h3>
      <Divider />
      <Row justify="center">
        <Col>
          <h4 className="d-flex justify-content-center mb-4">
            Update this member record
          </h4>
          <Form
            name="basic"
            labelCol={{
              span: 1
            }}
            wrapperCol={{
              span: 23
            }}
            style={{
              maxWidth: 550
            }}
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="firstname"
              rules={[
                {
                  required: true,
                  message: 'Please input your First name!'
                }
              ]}
              style={inputStyle}
            >
              <Input placeholder="First name" style={inputBorderRadius} />
            </Form.Item>
            <Form.Item
              name="lastname"
              rules={[
                {
                  required: true,
                  message: 'Please input your Last name!'
                }
              ]}
              style={inputStyle}
            >
              <Input placeholder="Last name" style={inputBorderRadius} />
            </Form.Item>
            <Form.Item
              name="companyname"
              rules={[
                {
                  required: true,
                  message: 'Please input your Company name!'
                }
              ]}
              style={inputQuestion}
            >
              <Input placeholder="Company name" style={inputBorderRadius} />
            </Form.Item>
            <Tooltip placement="right" title="Company name" color="#359dd9">
              <Button
                shape="circle"
                icon={<QuestionOutlined />}
                style={btnQuestion}
                size="small"
              ></Button>
            </Tooltip>
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input your Email!'
                }
              ]}
              style={inputQuestion}
            >
              <Input placeholder="Email" style={inputBorderRadius} />
            </Form.Item>
            <Tooltip placement="right" title="Email" color="#359dd9">
              <Button
                shape="circle"
                icon={<QuestionOutlined />}
                style={btnQuestion}
                size="small"
              ></Button>
            </Tooltip>
            <Form.Item
              name="country"
              rules={[
                {
                  required: true,
                  message: 'Please input your Country!'
                }
              ]}
              style={inputStyle}
            >
              <Input placeholder="Country" style={inputBorderRadius} />
            </Form.Item>
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: 'Please input your Mobile!'
                }
              ]}
              style={inputQuestion}
            >
              <Input placeholder="Mobile" style={inputBorderRadius} />
            </Form.Item>
            <Tooltip placement="right" title="Mobile" color="#359dd9">
              <Button
                shape="circle"
                icon={<QuestionOutlined />}
                style={btnQuestion}
                size="small"
              ></Button>
            </Tooltip>

            <Form.Item
              name="birth"
              rules={[
                { required: true, message: 'Please input your Date of Birth' }
              ]}
              style={twoInputStyle}
            >
              <DatePicker style={dateStyle} placeholder="Input Date of Birth" />
            </Form.Item>
            <Form.Item
              name="postal"
              rules={[
                { required: true, message: 'Please input your Postal code' }
              ]}
              style={twoInputStyle}
            >
              <Input
                placeholder="Input Postal code"
                style={inputBorderRadius}
              />
            </Form.Item>

            <Form.Item
              name="city or state"
              rules={[
                {
                  required: true,
                  message: 'Please input City or State!'
                }
              ]}
              style={inputStyle}
            >
              <Input placeholder="City or State" style={inputBorderRadius} />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: 'Please input Address!'
                }
              ]}
              style={inputStyle}
            >
              <TextArea
                placeholder="Address"
                rows={4}
                style={inputBorderRadius}
              />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[{ required: true, message: 'Please input code' }]}
              style={twoInputStyle}
            >
              <Input placeholder="Code" style={inputBorderRadius} />
            </Form.Item>
            <Tooltip placement="right" title="Code" color="#359dd9">
              <Button
                shape="circle"
                icon={<QuestionOutlined />}
                style={btnQuestion}
                size="small"
              ></Button>
            </Tooltip>
            <Form.Item
              name="code"
              rules={[{ required: true, message: 'Please input code' }]}
              style={twoInputStyle}
            >
              <Input placeholder="Code" style={inputBorderRadius} />
            </Form.Item>
            <Form.Item
              name="subscription_date_from"
              rules={[
                {
                  required: true,
                  message: 'Please input Subscription date from'
                }
              ]}
              style={twoInputStyle}
            >
              <DatePicker
                style={dateStyle}
                placeholder="Subscription date from"
              />
            </Form.Item>
            <Form.Item
              name="subscription_date_to"
              rules={[
                { required: true, message: 'Please input Subscription date to' }
              ]}
              style={twoInputStyle}
            >
              <DatePicker
                style={dateStyle}
                placeholder="Subscription date to"
              />
            </Form.Item>
            <Tooltip placement="right" title="Subscription" color="#359dd9">
              <Button
                shape="circle"
                icon={<QuestionOutlined />}
                style={btnQuestion}
                size="small"
              ></Button>
            </Tooltip>
            <p
              style={{ display: 'inline-block', marginTop: '5px' }}
              className="mx-4"
            >
              <strong>Group</strong>
            </p>
            <Form.Item
              name="group"
              style={{
                display: 'inline-block'
              }}
            >
              <Select placeholder="No groups/tiers added yet.">
                <Option value="group1"></Option>
                <Option value="group2"></Option>
                <Option value="group3"></Option>
              </Select>
            </Form.Item>
            <span className="mx-4">
              <NavLink to="#">Manage</NavLink>
            </span>
            <br />
            <p
              style={{ display: 'inline-block', marginTop: '5px' }}
              className="mx-4"
            >
              <strong>Branch</strong>
            </p>
            <Form.Item
              name="branch"
              style={{
                display: 'inline-block'
              }}
            >
              <Select placeholder="Select options.">
                <Option value="group1"></Option>
                <Option value="group2"></Option>
                <Option value="group3"></Option>
              </Select>
            </Form.Item>
            <br />
            <span>Email communications</span>
            <Radio style={{ float: 'right' }} value="radio1" />
            <br />
            <br />
            <span>Mobile communications</span>
            <Radio style={{ float: 'right' }} value="radio1" />
            <br />
            <br />
            <span>Postal communications</span>
            <Radio style={{ float: 'right' }} value="radio1" />
            <br />
            <br />
            <span>Sign up date</span>
            <span className="mx-5">{date_value}</span>
            <CalendarOutlined style={{ marginTop: '-3px' }} />

            <Form.Item
              style={{
                display: 'inline-block',
                marginTop: '-7px',
                float: 'right'
              }}
            >
              <Switch />
            </Form.Item>
            <span style={{ float: 'right', marginRight: '10px' }}>
              Suspended
            </span>
            <br />
            <br />
            <Button
              className="btn-active-command rounded-pill mt-2"
              htmlType="submit"
              // style={{paddingLeft:'20px',paddingRight:'20px'}}
            >
              Save
            </Button>
            <br></br>
            <Button className="rounded-pill mt-2" variant="outline-primary">
              Delete
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default UpdateMember;
