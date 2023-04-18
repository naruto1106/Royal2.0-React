import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';

function AddMember() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Row>
        <Col span={12} offset={12}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
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
                  message: 'Please input your First name!',
                },
              ]}
            >
              <Input
                placeholder='First name'
              />
            </Form.Item>
            <Form.Item
              name="lastname"
              rules={[
                {
                  required: true,
                  message: 'Please input your Last name!',
                },
              ]}
            >
              <Input
                placeholder='Last name'
              />
            </Form.Item>
            <Form.Item
              name="companyname"
              rules={[
                {
                  required: true,
                  message: 'Please input your Company name!',
                },
              ]}
            >
              <Input
                placeholder='Company name'
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input
                placeholder='Email'
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

    </>
  )
}

export default AddMember;