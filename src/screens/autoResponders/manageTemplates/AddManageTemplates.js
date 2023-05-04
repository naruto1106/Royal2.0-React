import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Form,
  // InputNumber,
  Input,
  Row,
  Col,
  message,
  Tooltip
} from 'antd';
// import { useParams } from 'react-router-dom';
import endpoint from '../../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const ToolTip = {
  background: 'rgb(53, 157, 217)',
  borderRadius: '50px',
  color: 'white',
  scale: '1.5'
  // marginLeft: '39em'
};
const inputBorderRadius = { borderRadius: '10px' };
// const inputNumberStyle = { borderRadius: '10px', width: '100%' };

function AddManageTemplates() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataManageTemplateSchemaEndpoint('add');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(setMemberMenuData({ currentMemberMenuSchema: schema.menu })); // store current member menu
      _isMounted.current && setLayoutData(layoutSchema);
      // end default part
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
    }
  };

  useEffect(() => {
    _isMounted.current = true;
    initPageModule();
    return () => {
      _isMounted.current = false;
    };
  }, []);

  if (loadingSchema) {
    return <Loading style={{ marginTop: 150 }} msg="Loading Schema..." />;
  }
  if (!layoutData) return getErrorAlert({ onRetry: initPageModule });

  const onFinish = async values => {
    console.log('Success:', values);
    try {
      _isMounted.current && setLoadingSchema(true);
      const {
        name
        // ownerISbb_usersID
        // transaction_date,
        // code,
        // points_usedNUM,
        // memberISbb_userID
      } = values;
      const addMember = await Axios.post(
        endpoint.getDataAddEndpoint('bb_loyal2_templates'),
        {
          name
          // ownerISbb_usersID
          // transaction_date,
          // code,
          // points_usedNUM,
          // memberISbb_userID
        }
      );
      const user = addMember.data;
      if (user.error) return message.error(user.error);
      message.success('Added successful!');
      console.log(`${endpoint.appUsers} response -> `, user);
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Title level={4} className="mb-3">
            Add a custom template
          </Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Form
            name="basic"
            labelCol={{
              span: 0
            }}
            wrapperCol={{
              span: 24
            }}
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row align="middle">
              <Col span={20}>
                <Text strong className="text-label">
                  Type
                </Text>
              </Col>
              <Col span={4} style={{ textAlign: 'end' }}>
                <Tooltip title="Email template" placement="right">
                  <QuestionCircleOutlined style={ToolTip}>
                    ?
                  </QuestionCircleOutlined>
                </Tooltip>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col span={20}>
                <BootstrapForm.Select
                  placeholder="Select"
                  style={inputBorderRadius}
                >
                  <option value="select">select</option>
                  <option value="select">select1</option>
                </BootstrapForm.Select>
              </Col>
            </Row>
            <Row align="middle" className="mt-1">
              <Col span={20}>
                <Text strong className="text-label">
                  Name
                </Text>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col span={20}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please input name' }]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle mt-1">
              <Col span={20}>
                <Text strong className="text-label">
                  Subject Template
                </Text>
              </Col>
              <Col span={4} style={{ textAlign: 'end' }}>
                <Tooltip title="Email template" placement="right">
                  <QuestionCircleOutlined style={ToolTip}>
                    ?
                  </QuestionCircleOutlined>
                </Tooltip>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col span={20}>
                <BootstrapForm.Select
                  placeholder="Select"
                  style={inputBorderRadius}
                >
                  <option value="select">select</option>
                  <option value="select">select1</option>
                </BootstrapForm.Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col span={20}>
                {' '}
                <Form.Item
                  name="textarea"
                  rules={[
                    { required: false, message: 'Please input textarea' }
                  ]}
                >
                  <Input.TextArea rows={3} style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row className="mt-5">
              <Button
                variant="outline-primary"
                className="rounded-pill px-4 py-2"
              >
                View tag list
              </Button>
            </Row>
            <Row align="middle mt-3">
              <Col span={20}>
                <Text strong className="text-label">
                  Message Template
                </Text>
              </Col>
              <Col span={4} style={{ textAlign: 'end' }}>
                <Tooltip title="Email template" placement="right">
                  <QuestionCircleOutlined style={ToolTip}>
                    ?
                  </QuestionCircleOutlined>
                </Tooltip>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col span={20}>
                <BootstrapForm.Select
                  placeholder="Select"
                  style={inputBorderRadius}
                >
                  <option value="select">select</option>
                  <option value="select">select1</option>
                </BootstrapForm.Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col span={20}>
                {' '}
                <Form.Item
                  name="textarea"
                  rules={[
                    { required: false, message: 'Please input textarea' }
                  ]}
                >
                  <Input.TextArea rows={5} style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle" className="mt-5">
              <Col span={10}>
                <Row>
                  <Col span={12}>
                    {' '}
                    <Button
                      variant="outline-primary"
                      className="rounded-pill px-4 py-2"
                    >
                      View tag list
                    </Button>
                  </Col>
                  <Col span={12}>
                    {' '}
                    <Button
                      variant="outline-dark"
                      className="rounded-pill px-4 py-2"
                    >
                      HTML editor
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col span={10}>
                <Row align="middle" gutter={[16, 16]}>
                  <Col span={10} style={{ textAlign: 'end' }}>
                    <Text strong className="text-label">
                      Branch
                    </Text>
                  </Col>
                  <Col span={14}>
                    <BootstrapForm.Select
                      placeholder="Select"
                      style={inputBorderRadius}
                    >
                      <option value="select">select</option>
                      <option value="select">select1</option>
                    </BootstrapForm.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5 mb-3">
              <Button
                variant="outline-primary"
                className="rounded-pill px-4 py-2"
                type="submit"
              >
                Add
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}
export default AddManageTemplates;
