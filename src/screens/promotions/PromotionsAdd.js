import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setPromotionsMenuData } from 'redux/slices/currentDataSlice';

import {
  Form,
  Input,
  Col,
  DatePicker,
  Typography,
  Row,
  message,
  InputNumber
} from 'antd';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// const { TextArea } = Input;
// const { Option } = Select;
const { Title, Text } = Typography;
const inputStyle = { width: '93%' };
const inputBorderRadius = { borderRadius: '10px' };
// const twoInputStyle = {
//   display: 'inline-block',
//   width: '45%'
//   // marginTop: '-15px'
// };
// const dateStyle = { width: '100%', borderRadius: '15px' };
const inputQuestion = {
  display: 'inline-block',
  width: '93%',
  // marginTop: '-15px',
  borderRadius: '15px'
};

function PromotionsAdd() {
  const dispatch = useDispatch();
  let { routeKey } = useParams();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [branchISbb_loyal2_branchesID, setBranch] = useState('');
  const [groupISbb_loyal2_groupsID, setGroup] = useState('');
  const [eventISbb_loyal2_eventsID, setAuto] = useState('');

  const handleChange1 = e => {
    console.log(e.target.value);
    setBranch(e.target.value);
  };
  const handleChange2 = e => {
    console.log(e.target.value);
    setGroup(e.target.value);
  };
  const handleChange3 = e => {
    console.log(e.target.value);
    setAuto(e.target.value);
  };
  const initPageModule = async () => {
    try {
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getPromotionsDataManagerSchemaEndpoint(
        routeKey.replace('/', '')
      );
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(
        setPromotionsMenuData({ currentPromotionsMenuSchema: schema.menu })
      ); // store current Promotions menu
      _isMounted.current && setLayoutData(layoutSchema);
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
      const { name, points_to_awardNUM, code, quickscan_function } = values;
      console.log('123456789');
      const date_from = values['date_from'].format('YYYY-MM-DD HH:mm:ss');
      const date_to = values['date_to'].format('YYYY-MM-DD HH:mm:ss');
      console.log('23456789');
      console.log(date_from, 'date_from');
      console.log(date_to, 'date_to');
      // console.log(endpoint.appUsers(layoutData.options.post_endpoint));

      const addPromotions = await Axios.post(
        endpoint.getDataAddEndpoint('bb_loyal2_promotions'),
        {
          name,
          points_to_awardNUM,
          code,
          quickscan_function,
          date_from,
          date_to,
          branchISbb_loyal2_branchesID,
          groupISbb_loyal2_groupsID,
          eventISbb_loyal2_eventsID
          // user_type: 3
        }
      );
      const user = addPromotions.data;
      if (user.error) return message.error(user.error);
      message.success('Added successful!');
      // console.log(`${endpoint.appUsers} response -> `, user);
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  let layoutFields = layoutData.options.fields;
  return (
    <>
      <Row className="mx-4">
        <Col span={20}>
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
            <Row>
              <Title level={4} className="mb-4">
                Add a new non-transactional promotion record
              </Title>
            </Row>
            <Row>
              <Col span={12}>
                {layoutFields.name ? (
                  <>
                    <Text strong className="text-label">
                      {layoutFields.name}
                    </Text>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Name!'
                        }
                      ]}
                      style={inputStyle}
                    >
                      <Input
                        className="mt-1"
                        placeholder={layoutFields.name}
                        style={inputBorderRadius}
                      />
                    </Form.Item>
                  </>
                ) : null}
              </Col>
              <Col span={12}>
                {layoutFields.points_to_awardNUM ? (
                  <>
                    <Text strong className="text-label">
                      {layoutFields.points_to_awardNUM}
                    </Text>
                    <Form.Item
                      name="points_to_awardNUM"
                      rules={[
                        {
                          required: false,
                          message: 'Please input your Points to awardNUM!'
                        }
                      ]}
                      style={inputStyle}
                    >
                      <InputNumber
                        className="mt-1"
                        style={{ borderRadius: '10px', width: '100%' }}
                        placeholder={layoutFields.points_to_awardNUM}
                      />
                    </Form.Item>
                  </>
                ) : null}
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                {layoutFields.code ? (
                  <>
                    <Text strong className="text-label">
                      {layoutFields.code}
                    </Text>
                    <Form.Item
                      name="code"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Code!'
                        }
                      ]}
                      style={inputStyle}
                    >
                      <Input
                        className="mt-1"
                        placeholder={layoutFields.code}
                        style={inputBorderRadius}
                      />
                    </Form.Item>
                  </>
                ) : null}
              </Col>
              <Col span={12}>
                {layoutFields.quickscan_function ? (
                  <>
                    <Text strong className="text-label">
                      {layoutFields.quickscan_function}
                    </Text>
                    <Form.Item
                      name="quickscan_function"
                      rules={[
                        {
                          required: false,
                          message: 'Please input your Mobile!'
                        }
                      ]}
                      style={inputQuestion}
                    >
                      <Input
                        className="mt-1"
                        placeholder={layoutFields.quickscan_function}
                        style={inputBorderRadius}
                      />
                    </Form.Item>
                  </>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                {layoutFields.date_from ? (
                  <>
                    <Row align="middle">
                      <Col span={10}>
                        <Text strong className="text-label">
                          {layoutFields.date_from}
                        </Text>
                      </Col>
                      <Col span={14}>
                        <Form.Item
                          name="date_from"
                          rules={[
                            {
                              required: false,
                              message: 'Please input your Date from!'
                            }
                          ]}
                          style={inputQuestion}
                        >
                          <DatePicker
                            placeholder={layoutFields.date_from}
                            style={inputBorderRadius}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                ) : null}
              </Col>
              <Col span={12}>
                {layoutFields.branchISbb_loyal2_branchesID ? (
                  <Form.Item
                    name="branchISbb_loyal2_branchesID"
                    rules={[
                      {
                        required: false,
                        message: 'Please input State!'
                      }
                    ]}
                    style={inputStyle}
                  >
                    <Row align="middle">
                      <Col span={8}>
                        <Text strong className="text-label">
                          {layoutFields.branchISbb_loyal2_branchesID}
                        </Text>
                      </Col>
                      <Col span={16}>
                        <BootstrapForm.Select
                          placeholder={
                            layoutFields.branchISbb_loyal2_branchesID
                          }
                          style={inputBorderRadius}
                          onChange={e => handleChange1(e)}
                        >
                          <option value=""></option>
                          <option value="1">branch1</option>
                          <option value="2">branch2</option>
                          <option value="3">branch3</option>
                        </BootstrapForm.Select>
                      </Col>
                    </Row>
                  </Form.Item>
                ) : null}
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                {layoutFields.date_to ? (
                  <>
                    <Row align="middle">
                      <Col span={10}>
                        <Text strong className="text-label">
                          {layoutFields.date_to}
                        </Text>
                      </Col>
                      <Col span={14}>
                        <Form.Item
                          name="date_to"
                          rules={[
                            {
                              required: false,
                              message: 'Please input your Date to!'
                            }
                          ]}
                          style={inputQuestion}
                        >
                          <DatePicker
                            placeholder={layoutFields.date_to}
                            style={inputBorderRadius}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                ) : null}
              </Col>
              <Col span={12}>
                {layoutFields.groupISbb_loyal2_groupsID ? (
                  <Form.Item
                    name="groupISbb_loyal2_groupsID"
                    rules={[
                      {
                        required: false,
                        message: 'Please input State!'
                      }
                    ]}
                    style={inputStyle}
                  >
                    <Row align="middle">
                      <Col span={8}>
                        <Text strong className="text-label">
                          {layoutFields.groupISbb_loyal2_groupsID}
                        </Text>
                      </Col>
                      <Col span={16}>
                        <BootstrapForm.Select
                          placeholder={layoutFields.groupISbb_loyal2_groupsID}
                          style={inputBorderRadius}
                          onChange={e => handleChange2(e)}
                        >
                          <option value=""></option>
                          <option value="1">Group1</option>
                          <option value="2">Group2</option>
                          <option value="3">Group3</option>
                        </BootstrapForm.Select>
                      </Col>
                    </Row>
                  </Form.Item>
                ) : null}
              </Col>
            </Row>
            <Row className="my-5">
              <Col span={19}>
                {layoutFields.eventISbb_loyal2_eventsID ? (
                  <>
                    <Form.Item
                      name="eventISbb_loyal2_eventsID"
                      rules={[
                        {
                          required: false,
                          message: 'Please input your Date to!'
                        }
                      ]}
                      style={inputQuestion}
                    >
                      <Row align="middle">
                        <Col span={10}>
                          <Text strong className="text-label">
                            Auto Allocate On Event
                          </Text>
                        </Col>
                        <Col span={14}>
                          <BootstrapForm.Select
                            placeholder={layoutFields.eventISbb_loyal2_eventsID}
                            style={inputBorderRadius}
                            onChange={e => handleChange3(e)}
                          >
                            <option value=""></option>
                            <option value="1">Auto1</option>
                            <option value="2">Auto2</option>
                            <option value="3">Auto3</option>
                          </BootstrapForm.Select>
                        </Col>
                      </Row>
                    </Form.Item>
                  </>
                ) : null}
              </Col>
              <Col span={4} style={{ textAlign: 'end' }}>
                <Button
                  className="rounded-pill py-2 px-4"
                  variant="outline-primary"
                  type="submit"
                  //   onClick={() => updateSetting()}
                >
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}
export default PromotionsAdd;
