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
  message
} from 'antd';
// import { useParams } from 'react-router-dom';
import endpoint from '../../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { Button, Form as BootstrapForm } from 'react-bootstrap';

const { Title, Text } = Typography;

const inputBorderRadius = { borderRadius: '10px' };
// const inputNumberStyle = { borderRadius: '10px', width: '100%' };

function AddIssuedVouchers() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [branches, setBranches] = useState([]);
  const [branchISbb_loyal2_branchesID, set_branchISbb_loyal2_branchesID] =
    useState(null);
  const [transaction_date, setTransaction_date] = useState('');
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataIssuedVoucherSchemaEndpoint('add');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(setMemberMenuData({ currentMemberMenuSchema: schema.menu })); // store current member menu
      const branchesList = await Axios.get(
        endpoint.getModuleDataEndpoint('bb_loyal2_branches')
      );
      setBranches(branchesList.data.list);
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
    console.log('Success:', values, transaction_date);
    try {
      _isMounted.current && setLoadingSchema(true);
      const {
        voucherISbb_loyal2_vouchersID,
        ownerISbb_usersID
        // code,
        // points_usedNUM,
        // memberISbb_usersID
      } = values;
      const addMember = await Axios.post(
        endpoint.getDataAddEndpoint('bb_loyal2_vouchers_issued'),
        {
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
  const changeBranch = e => {
    set_branchISbb_loyal2_branchesID(e.target.value);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setTransaction_date(dateString);
  };
  return (
    <>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Title level={4} className="mb-3">
            Add a voucher issued record
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
                <Form.Item className="mt-1">
                  <DatePicker
                    onChange={onChange}
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
                    Add
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
export default AddIssuedVouchers;
