import React from 'react';
import { Typography, Row, Col, Radio, Form, Input, InputNumber } from 'antd';

import Form1 from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';

const { Title, Paragraph, Text } = Typography;
const inputBorderRadius = { borderRadius: '10px', width: '100%' };
const cardStyle = {
  backgroundColor: '#F8F8F8',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
};
function Communication_settings_1() {
  // const value = 0;
  return (
    <>
      <Row justify="center">
        <Col span={10}>
          <Title level={4} style={{ textAlign: 'center' }}>
            Select your members
          </Title>
        </Col>
      </Row>

      <Row className="mt-4 mx-4">
        <Col span={24}>
          <Paragraph className="text-label" strong>
            Use this module to build lists and personalized for communication
            with you members
          </Paragraph>
        </Col>
      </Row>
      <Card
        className="overflow-hidden z-index-1 card-main_layout mb-5"
        style={cardStyle}
      >
        <Card.Body className="p-2">
          <Form>
            <Row align="middle" gutter={[16, 16]} className="mt-4">
              <Col span={6}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={{ width: '100%', borderRadius: '10px' }}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Group1</option>
                  <option value="2">Group2</option>
                  <option value="2">Group3</option>
                </Form1.Select>
              </Col>
              <Col span={4} style={{ textAlign: 'center' }}>
                <Text className="text-label" strong>
                  {' '}
                  the group/tier
                </Text>
              </Col>
              <Col span={14}>
                <Radio.Group style={{ width: '100%' }}>
                  <Row align="middle">
                    <Col span={8}>
                      <Radio name="group" value={0}>
                        No Group
                      </Radio>
                    </Col>
                    <Col span={8}>
                      <Radio name="group" value={1}>
                        Group1
                      </Radio>
                    </Col>
                    <Col span={8}>
                      <Radio name="group" value={2}>
                        Group1
                      </Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Col>
            </Row>
            <Row align="middle" gutter={[16, 16]} className="mt-4">
              <Col span={6}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={{ width: '100%', borderRadius: '10px' }}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Branch1</option>
                  <option value="2">Branch2</option>
                  <option value="2">Branch3</option>
                </Form1.Select>
              </Col>
              <Col span={4} style={{ textAlign: 'center' }}>
                <Text className="text-label" strong>
                  {' '}
                  the branch/store
                </Text>
              </Col>
              <Col span={14}>
                <Radio.Group style={{ width: '100%' }}>
                  <Row align="middle">
                    <Col span={8}>
                      <Radio name="group" value={0}>
                        No Branch/Store
                      </Radio>
                    </Col>
                    <Col span={8}>
                      <Radio name="group" value={1}>
                        Branch1
                      </Radio>
                    </Col>
                    <Col span={8}>
                      <Radio name="group" value={2}>
                        Branch2
                      </Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Col>
            </Row>
            <Row align="middle" gutter={[16, 16]} className="mt-4">
              <Col span={3}>
                <Text className="text-label" strong>
                  {' '}
                  Who have a
                </Text>
              </Col>
              <Col span={6}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={{ width: '100%', borderRadius: '10px' }}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Person1</option>
                  <option value="2">Person2</option>
                  <option value="2">Person3</option>
                </Form1.Select>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Text className="text-label" strong>
                  starting with
                </Text>
              </Col>
              <Col span={9}>
                <Form.Item name="starting_with" className="m-0">
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={8}>
                <Text className="text-label" strong>
                  Who have joined/been added in the past
                </Text>
              </Col>
              <Col span={5}>
                <Form.Item className="m-0">
                  <InputNumber style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col span={9} style={{ textAlign: 'end' }}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={4}>
                <Text className="text-label" strong>
                  Who have spent
                </Text>
              </Col>
              <Col span={4}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
              <Col span={2}>
                <Text className="text-label" strong>
                  {' '}
                  than
                </Text>
              </Col>
              <Col span={2}>
                <Form.Item className="m-0">
                  <InputNumber style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Text className="text-label" strong>
                  {' '}
                  in the past
                </Text>
              </Col>
              <Col span={2}>
                <Form.Item className="m-0">
                  <InputNumber style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={4}>
                <Text className="text-label" strong>
                  Who have earned
                </Text>
              </Col>
              <Col span={4}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
              <Col span={2}>
                <Text className="text-label" strong>
                  {' '}
                  than
                </Text>
              </Col>
              <Col span={2}>
                <Form.Item className="m-0">
                  <InputNumber style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Text className="text-label" strong>
                  {' '}
                  points in the past
                </Text>
              </Col>
              <Col span={2}>
                <Form.Item className="m-0">
                  <InputNumber style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={8}>
                <Text className="text-label" strong>
                  Who have had a birthday in the past
                </Text>
              </Col>
              <Col span={5}>
                <Form.Item className="m-0">
                  <InputNumber style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col span={9} style={{ textAlign: 'end' }}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={8}>
                <Text className="text-label" strong>
                  Who have a current points balance
                </Text>
              </Col>

              <Col span={9} style={{ textAlign: 'end' }}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
              <Col span={3}>
                <Form.Item className="m-0">
                  <InputNumber style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col span={2} style={{ textAlign: 'end' }}>
                <Text className="text-label" strong>
                  points
                </Text>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={8}>
                <Text className="text-label" strong>
                  Who have points expiring in
                </Text>
              </Col>
              <Col span={3}>
                <Form.Item className="m-0">
                  <InputNumber style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col>
                <Text className="text-label" strong>
                  months
                </Text>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={2}>
                <Text className="text-label" strong>
                  Who
                </Text>
              </Col>

              <Col span={5} style={{ textAlign: 'end' }}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
              <Col span={3} style={{ textAlign: 'center' }}>
                <Text className="text-label" strong>
                  an active
                </Text>
              </Col>

              <Col span={5} style={{ textAlign: 'end' }}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={9}>
                <Text className="text-label" strong>
                  Who have not received this template yet
                </Text>
              </Col>

              <Col span={13} style={{ textAlign: 'end' }}>
                <Form.Item className="m-0">
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle" className="mt-4" gutter={[16, 16]}>
              <Col span={9}>
                <Text className="text-label" strong>
                  Who received QuickScan points for the reason
                </Text>
              </Col>

              <Col span={5} style={{ textAlign: 'end' }}>
                <Form1.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={inputBorderRadius}
                  // onChange={e => handleChange(e)}
                >
                  <option value="0"></option>
                  <option value="1">Select1</option>
                  <option value="2">Select2</option>
                  <option value="2">Select3</option>
                </Form1.Select>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default Communication_settings_1;
