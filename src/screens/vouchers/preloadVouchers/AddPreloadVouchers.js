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
  Tooltip,
  message
  // DatePicker
} from 'antd';
// import { useParams } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import endpoint from '../../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { Button } from 'react-bootstrap';

const { Title, Text } = Typography;

const inputBorderRadius = { borderRadius: '10px' };
const btnQuestion = {
  backgroundColor: '#359DD9',
  borderRadius: '50%',
  border: 'none',
  color: 'white',
  fontSize: '21px'
};
// const inputNumberStyle = { borderRadius: '10px', width: '100%' };

function AddPreloadVouchers() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataPreloadVoucherSchemaEndpoint('add');
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
      const { code, voucherISbb_loyal2_vouchersID } = values;
      const addMember = await Axios.post(
        endpoint.getDataAddEndpoint('bb_loyal2_vouchers_precodes'),
        {
          code,
          voucherISbb_loyal2_vouchersID
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
            Add a pre-loaded voucher code
          </Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-3">
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
            <Row gutter={[16, 16]} className="mt-4" align="middle">
              <Col xs={24} sm={12} md={9} lg={9} xl={9}>
                <Row align="middle">
                  {' '}
                  <Text strong className="text-label">
                    Code
                  </Text>{' '}
                  <Tooltip
                    placement="right"
                    className="mx-2"
                    title="code"
                    color="#359dd9"
                  >
                    <QuestionCircleOutlined style={btnQuestion} />
                  </Tooltip>
                </Row>

                <Form.Item
                  name="code"
                  className="mt-1"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Cod!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={9} lg={9} xl={9}>
                <Row align="middle">
                  {' '}
                  <Text strong className="text-label">
                    Voucher
                  </Text>{' '}
                  <Tooltip
                    placement="right"
                    className="mx-2"
                    title="voucher"
                    color="#359dd9"
                  >
                    <QuestionCircleOutlined style={btnQuestion} />
                  </Tooltip>
                </Row>
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
              <Col
                xs={24}
                sm={24}
                md={6}
                lg={6}
                xl={6}
                style={{ textAlign: 'end' }}
              >
                <Button
                  variant="outline-primary"
                  className="rounded-pill px-4 py-2"
                  type="submit"
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
export default AddPreloadVouchers;
