import React from 'react';
import { Typography, Button, Tooltip, Form, Input } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

const { Title } = Typography;
const btnQuestion = {
  backgroundColor: '#359dd9',
  marginTop: '-10px',
  color: 'white',
  float: 'right'
};
const inputStyle = { width: '93%', marginTop: '-15px' };
const inputBorderRadius = { borderRadius: '15px' };
const inputQuestion = {
  display: 'inline-block',
  width: '93%',
  marginTop: '-15px',
  borderRadius: '15px'
};

function AddGroups() {
  const onFinish = values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Title level={4}>Add a group tier</Title>

      <Form
        name="basic"
        labelCol={{
          span: 1
        }}
        wrapperCol={{
          span: 23
        }}
        // style={{
        //   maxWidth: 550
        // }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p>Name</p>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input Name!'
            }
          ]}
          style={inputStyle}
        >
          <Input placeholder="Name" style={inputBorderRadius} />
        </Form.Item>
        <p>Code</p>
        <Form.Item
          name="code"
          rules={[
            {
              required: true,
              message: 'Please input Code!'
            }
          ]}
          style={inputQuestion}
        >
          <Input placeholder="Code" style={inputBorderRadius} />
        </Form.Item>
        <Tooltip placement="left" title="Add group" color="#359dd9">
          <Button
            shape="circle"
            icon={<QuestionOutlined />}
            style={btnQuestion}
            size="small"
          ></Button>
        </Tooltip>
        <br />
        <Button
          style={{
            borderRadius: '15px',
            backgroundColor: 'white',
            borderColor: '#359dd9',
            color: '#359dd9',
            marginTop: '5px',
            width: '150px'
          }}
          htmlType="submit"
        >
          Add
        </Button>
      </Form>
    </>
  );
}
export default AddGroups;
