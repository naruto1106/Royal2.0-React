import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setPointMenuData } from 'redux/slices/currentDataSlice';

import { Form } from 'react-bootstrap';

import {
  Typography,
  Row,
  Col,
  Input,
  InputNumber,
  DatePicker,
  message
} from 'antd';
const { Title, Text } = Typography;
function SettingsAdd() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  // const ownerISbb_usersID="";
  // const _id="";
  // const internal_notesISsmallplaintextbox="";
  const [memberISbb_usersID, setMemberISbb_usersID] = useState('');
  const [code, setCode] = useState('');
  const [transaction_date, setTransaction_date] = useState('');
  const [pointsNUM, setPointsNUM] = useState('');
  const [branchISbb_loyal2_branchesID, setBranchISbb_loyal2_branchesID] =
    useState('');
  const datechange = (a, b) => {
    console.log(a, 'aaa');
    console.log(b, 'bbb');
    setTransaction_date(b);
  };
  const handleChange = e => {
    console.log(e.target.value);
    setBranchISbb_loyal2_branchesID(e.target.value);
  };
  const pointChange = e =>{
    setPointsNUM(e);
  }
  const initPageModule = async () => {
    try {
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getPointDataManagerSchemaEndpoint('add');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(setPointMenuData({ currentPointMenuSchema: schema.menu })); // store current point menu
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
  const Add= async () =>{
    try {
      _isMounted.current && setLoadingSchema(true);

      
      console.log(endpoint.appUsers(layoutData.options.post_endpoint));
      console.log(memberISbb_usersID,"memberISbb_usersID")
      console.log(code,"code")
      console.log(transaction_date,"transaction_date")
      console.log(pointsNUM,"pointsNUM")
      console.log(branchISbb_loyal2_branchesID,"branchISbb_loyal2_branchesID")
      console.log(endpoint.appUsers(layoutData.options.post_endpoint));

      const addMember = await Axios.post(
        endpoint.appUsers(layoutData.options.post_endpoint),
        {
          memberISbb_usersID,
          code,
          transaction_date,
          pointsNUM,
          branchISbb_loyal2_branchesID,
          ownerISbb_usersID:145,
          internal_notesISsmallplaintextbox:11

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
  }
  return (
    <>
      <Row className="mx-4">
        <Col>
          <Title strong className="my-6" level={4} style={{ color: '#444444' }}>
            Add a new points record
          </Title>
        </Col>
      </Row>
      <Row className="mx-4">
        <Col span={20}>
          <Text strong style={{ color: '#444444' }}>
            Member*
          </Text>
          <Input
            style={{ borderRadius: '10px' }}
            type="text"
            value={memberISbb_usersID}
            onChange={e => setMemberISbb_usersID(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="my-7 mx-4">
        <Col span={9}>
          <Text strong style={{ color: '#444444' }}>
            Points*
          </Text>
          <InputNumber
            style={{ width: '100%', borderRadius: '10px' }}
            value={pointsNUM}
            onChange={pointChange}
          />
        </Col>
        <Col span={2}></Col>
        <Col span={9}>
          <Text strong style={{ color: '#444444' }}>
            Code
          </Text>
          <Input
            type="text"
            style={{ borderRadius: '10px' }}
            value={code}
            onChange={e=>setCode(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="my-5 mx-4">
        <Col xs={23} sm={23} md={4} lg={7} xl={7} xxl={7}>
          <DatePicker
            onChange={datechange} format="YYYY-MM-DD HH:mm:ss"
            style={{ width: '100%', borderRadius: '10px', color: '#444444' }}
          />
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
          <Form.Select
            style={{ width: '100%', borderRadius: '10px' }}
            onChange={e => handleChange(e)}
          >
            <option value=""></option>
            <option value="branch1">Branch1</option>
            <option value="branch2">Branch2</option>
            <option value="branch3">Branch3</option>
          </Form.Select>
        </Col>
        <Col className="mx-3">
          <Button variant="outline-primary" className="rounded-pill py-2 px-4" onClick={()=>Add()}>
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default SettingsAdd;
