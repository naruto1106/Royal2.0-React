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
  DatePicker,
  Divider,
  message
} from 'antd';
import { useParams } from 'react-router-dom';
import endpoint from '../../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import moment from 'moment';
const { Title, Text } = Typography;

const inputBorderRadius = { borderRadius: '10px' };
// const inputNumberStyle = { borderRadius: '10px', width: '100%' };

function UpdateIssuedVouchers() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dateFormat = 'YYYY-MM-DD HH:mm:ss';
  const _isMounted = useRef(false);
  let { routeKey, id } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [branches, setBranches] = useState(null);
  const [branchISbb_loyal2_branchesID, set_branchISbb_loyal2_branchesID] =
    useState(null);
  //   const [transaction_date, setTransaction_date] = useState('');
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataIssuedVoucherSchemaEndpoint(
        `${routeKey}/${id}`
      );
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(layoutSchema, ' schema.menu schema.menu schema.menu');
      dispatch(setMemberMenuData({ currentMemberMenuSchema: schema.menu })); // store current member menu
      const branchesList = await Axios.get(
        endpoint.getModuleDataEndpoint('bb_loyal2_branches')
      );
      setBranches(branchesList.data.list);
      _isMounted.current && setLayoutData(layoutSchema);
      set_branchISbb_loyal2_branchesID(
        layoutSchema.data[0][0].branchISbb_loyal2_branchesID
      );
      //   setTransaction_date(layoutSchema.data[0][0].transaction_date);
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
        _id,
        voucherISbb_loyal2_vouchersID,
        ownerISbb_usersID
        // code,
        // points_usedNUM,
        // memberISbb_usersID
      } = values;
      const transaction_date = values['transaction_date'].format(
        'YYYY-MM-DD HH:mm:ss'
      );
      const addMember = await Axios.patch(
        endpoint.getDataAddEndpoint(`bb_loyal2_vouchers_issued/${_id}`),
        {
          _id,
          voucherISbb_loyal2_vouchersID,
          ownerISbb_usersID,
          transaction_date,
          // code,
          // points_usedNUM,
          // memberISbb_usersID,
          branchISbb_loyal2_branchesID
        }
      );
      const user = addMember.data;
      if (user.error) return message.error(user.error);
      message.success('Updated successful!');
      initPageModule();
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const changeBranch = e => {
    set_branchISbb_loyal2_branchesID(e.target.value);
  };
  let FieldsData = layoutData.data[0];
  const selectedStartDate = moment(FieldsData[0].transaction_date, dateFormat);

  const initValues = {
    transaction_date: selectedStartDate
  };
  form.setFieldsValue({
    voucherISbb_loyal2_vouchersID: FieldsData[0].voucherISbb_loyal2_vouchersID,
    ownerISbb_usersID: FieldsData[0].ownerISbb_usersID,
    _id: FieldsData[0]._id
  });
  return (
    <>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Title level={3}>Vouchers Issued</Title>
        </Col>
      </Row>
      <Divider />
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Title level={4} className="mb-3">
            Edit a voucher issued record
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
            initialValues={initValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
            autoComplete="off"
          >
            <Form.Item name="_id" hidden="hidden">
              <Input />
            </Form.Item>
            <Row gutter={[16, 16]}>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Text strong className="text-label">
                  Voucher
                </Text>
                <Form.Item
                  name="voucherISbb_loyal2_vouchersID"
                  className="mt-1"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Voucher!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Text strong className="text-label">
                  Qty
                </Text>
                <Form.Item
                  name="ownerISbb_usersID"
                  className="mt-1"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Qty!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Text strong className="text-label">
                  Member
                </Text>
                <Form.Item
                  name="memberISbb_usersID"
                  className="mt-1"
                  rules={[
                    {
                      required: false,
                      message: 'Please input Member!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Text strong className="text-label">
                  Code
                </Text>
                <Form.Item
                  name="code"
                  className="mt-1"
                  rules={[
                    {
                      required: false,
                      message: 'Please input code!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Text strong className="text-label">
                  Transaction Date
                </Text>
                <Form.Item name="transaction_date" className="mt-1">
                  <DatePicker
                    value={selectedStartDate}
                    style={{ borderRadius: '10px', width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Text strong className="text-label">
                  Points Used
                </Text>
                <Form.Item
                  name="points_usedNUM"
                  className="mt-1"
                  rules={[
                    {
                      required: false,
                      message: 'Please input Points!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle" gutter={[16, 16]}>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Row align="middle">
                  <Col span={12}>
                    <Text strong className="text-label">
                      Branch
                    </Text>
                  </Col>
                  <Col span={12}>
                    <BootstrapForm.Select
                      style={inputBorderRadius}
                      defaultValue={branchISbb_loyal2_branchesID}
                      onChange={e => changeBranch(e)}
                    >
                      <option key={'null'} value={null}></option>
                      {branches.map((item, index) => {
                        return (
                          <>
                            <option key={index} value={item._id}>
                              {item.name}
                            </option>
                          </>
                        );
                      })}
                    </BootstrapForm.Select>
                  </Col>
                </Row>
              </Col>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Row justify="end" align="middle">
                  <Button
                    variant="outline-primary"
                    className="rounded-pill px-4 py-2"
                    type="submit"
                  >
                    Save
                  </Button>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}
export default UpdateIssuedVouchers;
