import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  //   Tooltip,
  Form,
  Divider,
  Input,
  Switch,
  Row,
  Col,
  message,
  Modal,
  InputNumber,
  DatePicker,
} from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setPointMenuData } from 'redux/slices/currentDataSlice';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import { ExclamationCircleFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
const { confirm } = Modal;
const { Title, Text } = Typography;
// const btnQuestion = {
//   backgroundColor: '#359DD9',
//   borderRadius: '50%',
//   border: 'none',
//   color: 'white',
//   fontSize: '21px',
//   float: 'right'
// };
const inputBorderRadius = { borderRadius: '10px' };

function SettingsUpdate() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _isMounted = useRef(false);
  let { routeKey, id } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getPointDataManagerSchemaEndpoint(`${routeKey}/${id}`);
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(setPointMenuData({ currentPointMenuSchema: schema.menu })); // store current point menu

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
      const { _id, first_name, last_name, email } = values;

      const updateMember = await Axios.patch(
        endpoint.appUsers(`/app/users/${_id}`),
        {
          _id,
          first_name,
          last_name,
          email,
          user_type: 3
        }
      );
      const user = updateMember.data;
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
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  const showDeleteConfirm = id => {
    confirm({
      title: 'Are you sure delete?',
      icon: <ExclamationCircleFilled />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDelete(id);
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };
  const onDelete = async id => {
    try {
      _isMounted.current && setLoadingSchema(true);

      const deleteMember = await Axios.delete(
        endpoint.appUsers(`/app/users/${id}`)
      );
      const user = deleteMember.data;
      if (user.error) return message.error(user.error);
      message.success('Deleted successful!');
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
      navigate('/manage_users');
    }
  };

  let FieldsData = layoutData.data;
  form.setFieldsValue({
    ownerISbb_usersID: FieldsData[0][0].ownerISbb_usersID,
    memberISbb_usersID: FieldsData[0][0].memberISbb_usersID,
    pointsNUM: FieldsData[0][0].pointsNUM,
    transaction_date: FieldsData[0][0].transaction_date,
    code: FieldsData[0][0].code,
    branchISbb_loyal2_branchesID: FieldsData[0][0].branchISbb_loyal2_branchesID,
    _id: FieldsData[0][0]._id
  });
  const dateFormat = 'YYYY/MM/DD';
  const dateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
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
            form={form}
            autoComplete="off"
          >
            <Form.Item name="_id" hidden="hidden">
              <Input />
            </Form.Item>
      <Row className="mx-4">
        <Col>
          <Title strong className="my-6" level={4} style={{ color: '#444444' }}>
            Update this point
          </Title>
        </Col>
      </Row>
      <Row className="mx-4">
        <Col span={20}>
          <Text strong style={{ color: '#444444' }}>
            Member*
          </Text>
          <Form.Item
                      name="memberISbb_usersID"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Owner!'
                        }
                      ]}
                    >
                    <Input style={{ borderRadius: '10px' }} type="text"  />
                    </Form.Item>
          
        </Col>
      </Row>
      <Row className="my-7 mx-4">
        <Col span={9}>
          <Text strong style={{ color: '#444444' }}>
            Points*
          </Text>
          <Form.Item
                      name="pointsNUM"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Owner!'
                        }
                      ]}
                    >
                        
          <InputNumber style={{ width: '100%', borderRadius: '10px' }} />
                    </Form.Item>
        </Col>
        <Col span={2}></Col>
        <Col span={9}>
          <Text strong style={{ color: '#444444' }}>
            Code
          </Text>
          <Form.Item
                      name="code"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Owner!'
                        }
                      ]}
                    >

          <Input type="text" style={{ borderRadius: '10px' }} />
                    </Form.Item>
        </Col>
      </Row>
      <Row className="my-5 mx-4">
        <Col xs={23} sm={23} md={4} lg={7} xl={7} xxl={7}>
        {/* <Form.Item
                      name="transaction_date"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Owner!'
                        }
                      ]}
                    > */}
                        <DatePicker defaultValue={dayjs(FieldsData[0][0].transaction_date, dateFormat)} format={dateFormat} onChange={dateChange}
            style={{ width: '100%', borderRadius: '10px', color: '#444444' }} 
          />
                        {/* </Form.Item> */}
          
        </Col>
        <Col xs={23} sm={23} md={4} lg={3} xl={3} xxl={3}>
          <Text
            strong
            className="me-2 my-1"
            style={{ float: 'right', color: '#444444' }}
          >
            Branch
          </Text>
        </Col>
        <Col xs={23} sm={23} md={4} lg={8} xl={8} xxl={8}>
          <BootstrapForm.Select
            defaultValue="lucy"
            style={{ width: '100%', borderRadius: '10px' }}
            // onChange={handleChange}
          >
            <option>123345</option>
            <option>123345</option>
            <option>123345</option>
            <option>123345</option>
            <option>123345</option>
            <option>123345</option>
            <option>123345</option>
          </BootstrapForm.Select>
        </Col>
        <Col className="mx-3">
          <Button variant="outline-primary" className="rounded-pill py-2 px-4">
            Add
          </Button>
        </Col>
      </Row>
      {/* <Row className="mx-4 mt-3">
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
            form={form}
            autoComplete="off"
          >
            <Form.Item name="_id" hidden="hidden">
              <Input />
            </Form.Item>
            <Row gutter={[24, 16]}>
              <Col xs={12} lg={10}>
                <Text strong style={{ color: '#444444' }}>
                  First Name
                </Text>
                <Row className="mt-1">
                  <Col span={24}>
                    <Form.Item
                      name="first_name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input First name!'
                        }
                      ]}
                    >
                      <Input style={inputBorderRadius} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={10}>
                <Text strong style={{ color: '#444444' }}>
                  Last Name
                </Text>
                <Row className="mt-1">
                  <Col span={24}>
                    <Form.Item
                      name="last_name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Last name!'
                        }
                      ]}
                    >
                      <Input style={inputBorderRadius} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Text strong style={{ color: '#444444' }}>
              Email
            </Text>
            <Row className="mt-1">
              <Col xs={21} lg={20}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      required: true,
                      message: 'Please input Email!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col>
            </Row>
            <Text strong style={{ color: '#444444' }}>
              Code
            </Text>
            <Row className="mt-1">
              <Col xs={21} lg={20}>
                <Form.Item
                  name="code"
                  rules={[
                    {
                      required: false,
                      message: 'Please input Code!'
                    }
                  ]}
                >
                  <Input style={inputBorderRadius} />
                </Form.Item>
              </Col> */}
              {/* <Col sm={3} lg={1}>
                <Tooltip placement="right" title="Code" color="#359dd9">
                  <QuestionCircleOutlined
                    className="mt-1"
                    style={btnQuestion}
                  />
                </Tooltip>
              </Col> */}
            {/* </Row>
            <Row className="mt-3" align="middle" gutter={[24, 24]}>
              <Col xs={12} lg={10}>
                <Row align="middle">
                  <Col span={18}>
                    <Text style={{ color: '#444444' }} strong>
                      Disable Backoffice Access
                    </Text>
                  </Col>
                  <Col span={6}>
                    <Switch onChange={onChange} />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={10}>
                <Row align="middle">
                  <Col span={8}>
                    <Text style={{ color: '#444444' }} strong>
                      Branch
                    </Text>
                  </Col>
                  <Col span={16}>
                    <BootstrapForm.Select
                      placeholder="Select"
                      style={{ borderRadius: '10px' }}
                    >
                      <option value="option1">option1</option>
                    </BootstrapForm.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12} lg={10}>
                <Row align="middle">
                  <Col span={6}>
                    <Text style={{ color: '#444444' }} strong>
                      Set password
                    </Text>
                  </Col>
                  <Col span={18}>
                    <Input style={inputBorderRadius} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12} lg={10}>
                <Button
                  className="btn-active-command rounded-pill px-4"
                  type="submit"
                >
                  Save
                </Button>
              </Col>
              <Col xs={12} lg={10}>
                <Button
                  variant="outline-primary"
                  className="rounded-pill px-4"
                  style={{ float: 'right' }}
                  onClick={() => showDeleteConfirm(id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row> */}
      </Form>
    </>
  );
}
export default SettingsUpdate;
