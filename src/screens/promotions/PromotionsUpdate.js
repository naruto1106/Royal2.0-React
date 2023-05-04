import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
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
import moment from 'moment';

const { Title, Text } = Typography;
// const inputStyle = { width: '100%' };
const inputBorderRadius = { borderRadius: '10px', width: '100%' };

function PromotionsUpdate() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let { routeKey, id } = useParams();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [branchISbb_loyal2_branchesID, setBranch] = useState('');
  const [groupISbb_loyal2_groupsID, setGroup] = useState('');
  const [eventISbb_loyal2_eventsID, setAuto] = useState('');
  const [date_from, setDate_from] = useState('');
  const [date_to, setDate_to] = useState('');
  const dateFormat = 'YYYY-MM-DD';
  //   console.log(routeKey, id, '12311111111111111');
  const onDate_from = a => {
    setDate_from(a.format('YYYY-MM-DD HH:mm:ss'));
  };
  const onDate_to = a => {
    setDate_to(a.format('YYYY-MM-DD HH:mm:ss'));
  };
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
        `${routeKey}/${id}`
      );
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      if (layoutSchema.data[0][0].date_from) {
        _isMounted.current &&
          setDate_from(moment(layoutSchema.data[0][0].date_from, dateFormat));
      }
      if (layoutSchema.data[0][0].date_to) {
        _isMounted.current &&
          setDate_to(moment(layoutSchema.data[0][0].date_to, dateFormat));
      }
      _isMounted.current &&
        setBranch(layoutSchema.data[0][0].branchISbb_loyal2_branchesID);
      _isMounted.current &&
        setGroup(layoutSchema.data[0][0].groupISbb_loyal2_groupsID);
      _isMounted.current &&
        setAuto(layoutSchema.data[0][0].eventISbb_loyal2_eventsID);
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
      const { _id, name, points_to_awardNUM, code, quickscan_function } =
        values;

      const addPromotions = await Axios.patch(
        endpoint.getDataAddEndpoint(`bb_loyal2_promotions/${_id}`),
        {
          _id,
          ownerISbb_usersID: 4,
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
      message.success('Updated successful!');
      navigate('/datamanager/bb_loyal2_promotions/list');
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
  let FieldsData = layoutData.data;

  //   const selectedStartDate = moment(FieldsData[0][0].date_from, dateFormat);
  //   const selectedEndDate = moment(FieldsData[0][0].date_to, dateFormat);
  const initValues = {
    date_from: date_from,
    date_to: date_to
  };
  form.setFieldsValue({
    ownerISbb_usersID: FieldsData[0][0].ownerISbb_usersID,
    name: FieldsData[0][0].name,
    points_to_awardNUM: FieldsData[0][0].points_to_awardNUM,
    quickscan_function: FieldsData[0][0].quickscan_function,
    _id: FieldsData[0][0]._id,
    code: FieldsData[0][0].code,
    branchISbb_loyal2_branchesID: FieldsData[0][0].branchISbb_loyal2_branchesID,
    groupISbb_loyal2_groupsID: FieldsData[0][0].groupISbb_loyal2_groupsID,
    eventISbb_loyal2_eventsID: FieldsData[0][0].eventISbb_loyal2_eventsID
  });
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
            initialValues={initValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Form.Item name="_id" hidden="hidden">
              <Input />
            </Form.Item>
            <Row>
              <Title level={4} className="mb-4">
                Update non-transactional promotion record
              </Title>
            </Row>
            <Row gutter={[16, 16]}>
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
                          required: true,
                          message: 'Please input your Points to awardNUM!'
                        }
                      ]}
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

            <Row gutter={[16, 16]}>
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
                    <Form.Item name="quickscan_function">
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
            <Row gutter={[16, 16]} className="mt-3">
              <Col span={12}>
                {layoutFields.date_from ? (
                  <>
                    <Row align="middle">
                      <Col span={8}>
                        <Text strong className="text-label">
                          {layoutFields.date_from}
                        </Text>
                      </Col>
                      <Col span={16}>
                        <Form.Item name="date_from" className="m-0">
                          <DatePicker
                            placeholder={layoutFields.date_from}
                            style={inputBorderRadius}
                            value={date_from}
                            onChange={onDate_from}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                ) : null}
              </Col>
              <Col span={12}>
                {layoutFields.branchISbb_loyal2_branchesID ? (
                  //   <Form.Item
                  //     name="branchISbb_loyal2_branchesID"
                  //     style={inputStyle}
                  //   >
                  <Row align="middle">
                    <Col span={8}>
                      <Text
                        strong
                        className="text-label"
                        style={{ padding: '0px 3px' }}
                      >
                        {layoutFields.branchISbb_loyal2_branchesID}
                      </Text>
                    </Col>
                    <Col span={16}>
                      <BootstrapForm.Select
                        placeholder={layoutFields.branchISbb_loyal2_branchesID}
                        defaultValue={
                          FieldsData[0][0].branchISbb_loyal2_branchesID
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
                ) : null}
              </Col>
            </Row>

            <Row gutter={[16, 16]} className="mt-4">
              <Col span={12}>
                {layoutFields.date_to ? (
                  <>
                    <Row align="middle">
                      <Col span={8}>
                        <Text strong className="text-label">
                          {layoutFields.date_to}
                        </Text>
                      </Col>
                      <Col span={16}>
                        <Form.Item name="date_to" className="m-0">
                          <DatePicker
                            placeholder={layoutFields.date_to}
                            style={inputBorderRadius}
                            value={date_to}
                            onChange={onDate_to}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                ) : null}
              </Col>
              <Col span={12}>
                {layoutFields.groupISbb_loyal2_groupsID ? (
                  //   <Form.Item
                  //     name="groupISbb_loyal2_groupsID"
                  //     style={inputStyle}
                  //   >
                  <Row align="middle">
                    <Col span={8}>
                      <Text
                        strong
                        className="text-label"
                        style={{ padding: '0px 3px' }}
                      >
                        {layoutFields.groupISbb_loyal2_groupsID}
                      </Text>
                    </Col>
                    <Col span={16}>
                      <BootstrapForm.Select
                        placeholder={layoutFields.groupISbb_loyal2_groupsID}
                        style={inputBorderRadius}
                        onChange={e => handleChange2(e)}
                        defaultValue={
                          FieldsData[0][0].groupISbb_loyal2_groupsID
                        }
                      >
                        <option value=""></option>
                        <option value="1">Group1</option>
                        <option value="2">Group2</option>
                        <option value="3">Group3</option>
                      </BootstrapForm.Select>
                    </Col>
                  </Row>
                ) : null}
              </Col>
            </Row>
            <Row className="my-5" align="middle">
              <Col span={19}>
                {layoutFields.eventISbb_loyal2_eventsID ? (
                  <>
                    {/* <Form.Item
                      name="eventISbb_loyal2_eventsID"
                      style={inputQuestion}
                    > */}
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
                          defaultValue={
                            FieldsData[0][0].eventISbb_loyal2_eventsID
                          }
                        >
                          <option value=""></option>
                          <option value="1">Auto1</option>
                          <option value="2">Auto2</option>
                          <option value="3">Auto3</option>
                        </BootstrapForm.Select>
                      </Col>
                    </Row>
                    {/* </Form.Item> */}
                  </>
                ) : null}
              </Col>
              <Col span={5} style={{ textAlign: 'end' }}>
                <Button
                  className="rounded-pill py-2 px-4"
                  variant="outline-primary"
                  type="submit"
                  //   onClick={() => updateSetting()}
                >
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}
export default PromotionsUpdate;
