import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Form,
  InputNumber,
  Input,
  Row,
  Col,
  Upload,
  Switch,
  DatePicker,
  message
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import { useParams } from 'react-router-dom';
import endpoint from '../../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { Button, Form as BootstrapForm, Collapse } from 'react-bootstrap';

const { Title, Text } = Typography;

const inputBorderRadius = { borderRadius: '10px' };
const inputNumberStyle = { borderRadius: '10px', width: '100%' };

function AddAllVouchers() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [open, setOpen] = useState(false);
  // const [imageISfile, setImageISfile] = useState([]);
  // const [eventISbb_loyal2_eventsID, set_eventISbb_loyal2_eventsID] =
  //   useState('select1');
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataAllVoucherSchemaEndpoint('add');
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
      const { name, points_requiredNUM } = values;
      const addMember = await Axios.post(
        endpoint.getDataAddEndpoint('bb_loyal2_vouchers'),
        {
          name,
          points_requiredNUM
          // eventISbb_loyal2_eventsID,
          // imageISfile
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
  const handleChange = info => {
    console.log(info);
    // setImageISfile(info.file);
    // let newFileList = [...info.fileList];
  };
  const onChangeEvent = event => {
    console.log(event);
    // set_eventISbb_loyal2_eventsID(event);
  };
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Title level={4} className="mb-3">
            Add a voucher
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
              <Col span={20}>
                <Text strong className="text-label">
                  Name
                </Text>
                <Form.Item
                  name="name"
                  className="mt-1"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Name!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-2" align="middle">
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Row align="middle">
                  <Col span={12}>
                    <Text strong className="text-label">
                      Points Required
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="points_requiredNUM" className="m-0">
                      <InputNumber style={inputNumberStyle} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Row align="middle">
                  <Col span={12}>
                    <Text strong className="text-label">
                      Auto Allocate On Event
                    </Text>
                  </Col>
                  <Col span={12}>
                    <BootstrapForm.Select
                      placeholder="Select"
                      style={inputBorderRadius}
                      onChange={e => onChangeEvent(e.target.value)}
                    >
                      <option value="select1">Select1</option>
                      <option value="select2">Select2</option>
                    </BootstrapForm.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row align="middle" gutter={[16, 16]} className="mt-4">
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Row align="middle">
                  <Col span={12}>
                    <Text strong className="text-label">
                      Add File
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Upload
                      colorBorder="blue"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture"
                      onChange={handleChange}
                    >
                      <Button
                        variant="light"
                        className="rounded-pill px-4 py-2"
                      >
                        Select Image
                      </Button>
                    </Upload>
                  </Col>
                </Row>
              </Col>
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Row>
                  <Col span={16}>
                    <Text strong className="text-label">
                      Available For Self Selection
                    </Text>
                  </Col>
                  <Col span={8} style={{ textAlign: 'end' }}>
                    <Switch onChange={onChange} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row align="middle" gutter={[16, 16]} className="mt-6">
              <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                <Button
                  variant="outline-primary"
                  onClick={() => setOpen(!open)}
                  className="rounded-pill px-4 py-2"
                >
                  Advanced Settings{<DownOutlined />}
                </Button>
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

            <Row>
              <Collapse in={open} className="px-0 mx-0">
                <div className="border rounded border-0 w-100 px-0 mx-0">
                  <Row gutter={[16, 16]} className="mt-4">
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Text strong className="text-label">
                        Trigger On Total Points Earned
                      </Text>
                      <Form.Item name="points_required" className="mt-1">
                        <InputNumber style={inputNumberStyle} />
                      </Form.Item>
                    </Col>
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Text strong className="text-label">
                        Points Earned In Month
                      </Text>
                      <Form.Item name="points_required" className="mt-1">
                        <InputNumber style={inputNumberStyle} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
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
                            message: 'Please input Code!'
                          }
                        ]}
                      >
                        <Input style={inputBorderRadius} />
                      </Form.Item>
                    </Col>
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Text strong className="text-label">
                        Can Be Redeemed For Points
                      </Text>
                      <Form.Item name="points_required" className="mt-1">
                        <InputNumber style={inputNumberStyle} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Text strong className="text-label">
                        Value
                      </Text>
                      <Form.Item name="points_required" className="mt-1">
                        <InputNumber style={inputNumberStyle} />
                      </Form.Item>
                    </Col>
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Text strong className="text-label">
                        Expire After Days
                      </Text>
                      <Form.Item name="points_required" className="mt-1">
                        <InputNumber style={inputNumberStyle} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]} align="middle">
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Text strong className="text-label">
                        Min Sale Value
                      </Text>
                      <Form.Item name="points_required" className="mt-1">
                        <InputNumber style={inputNumberStyle} />
                      </Form.Item>
                    </Col>
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Row align="middle">
                        <Col span={12}>
                          <Text strong className="text-label">
                            Brance
                          </Text>
                        </Col>
                        <Col span={12}>
                          <BootstrapForm.Select
                            placeholder="Select Image"
                            style={inputBorderRadius}
                          >
                            <option>option</option>
                          </BootstrapForm.Select>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Row align="middle">
                        <Col span={12}>
                          <Text strong className="text-label">
                            Value Type
                          </Text>
                        </Col>
                        <Col span={12}>
                          <BootstrapForm.Select
                            placeholder="Select Image"
                            style={inputBorderRadius}
                          >
                            <option>option</option>
                          </BootstrapForm.Select>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Row align="middle">
                        <Col span={12}>
                          <Text strong className="text-label">
                            Group
                          </Text>
                        </Col>
                        <Col span={12}>
                          <BootstrapForm.Select
                            placeholder="Select Image"
                            style={inputBorderRadius}
                          >
                            <option>option</option>
                          </BootstrapForm.Select>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]} align="middle" className="mt-4">
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Row align="middle">
                        <Col span={6}>
                          <Text strong className="text-label">
                            Date From
                          </Text>
                        </Col>
                        <Col span={7}>
                          <Form.Item name="from" className="m-0">
                            <DatePicker
                              style={inputBorderRadius}
                              className="w-100"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                          <Text strong className="text-label">
                            to
                          </Text>
                        </Col>
                        <Col span={7}>
                          <Form.Item name="to" className="m-0">
                            <DatePicker
                              style={inputBorderRadius}
                              className="w-100"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={20} sm={10} md={10} lg={10} xl={10}>
                      <Row align="middle">
                        <Col span={12}>
                          <Text strong className="text-label">
                            Limited To Per Member
                          </Text>
                        </Col>
                        <Col span={12}>
                          <BootstrapForm.Select
                            placeholder="Select Image"
                            style={inputBorderRadius}
                          >
                            <option>option</option>
                          </BootstrapForm.Select>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Collapse>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}
export default AddAllVouchers;
