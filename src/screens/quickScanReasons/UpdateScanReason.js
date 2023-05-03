import React from 'react';
import { Typography, Row, Col, Input, message, Divider } from 'antd';
import { Button } from 'react-bootstrap';
import Form1 from 'react-bootstrap/Form';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setTransactionMenuData } from 'redux/slices/currentDataSlice';
import { useParams, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const inputStyle = {
  borderRadius: '10px'
};
function UpdateScanReason() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  let { routeKey, id } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  //   const [branchISbb_loyal2_branchesID, setBranchISbb_loyal2_branchesID] =useState('');
  const handleChange = e => {
    console.log(e.target.value);
    // setBranchISbb_loyal2_branchesID(e.target.value);
  };
  const handleChange2 = e => {
    console.log(e.target.value);
    // setBranchISbb_loyal2_branchesID(e.target.value);
  };
  const initPageModule = async () => {
    try {
      // default part
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataQuickScanReasonSchemaEndpoint(
        `${routeKey}/${id}`
      );
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      _isMounted.current && setOwner(layoutSchema.data[0][0].ownerISbb_usersID);
      _isMounted.current && setName(layoutSchema.data[0][0].name);
      //    _isMounted.current && setName(layoutSchema.data[0][0]._id);
      // console.log("sssssss",layoutSchema.data[0][0].ownerISbb_usersID);
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(
        setTransactionMenuData({ currentTransactionMenuSchema: schema.menu })
      ); // store current point menu
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

  // Loading part
  if (loadingSchema) {
    return <Loading style={{ marginTop: 150 }} msg="Loading Schema..." />;
  }
  if (!layoutData) return getErrorAlert({ onRetry: initPageModule });
  let layoutFields = layoutData.options.fields;

  const onFinish = async () => {
    // console.log('Success:', values);
    try {
      _isMounted.current && setLoadingSchema(true);
      const addMember = await Axios.patch(
        endpoint.appUsers(`/module/bb_loyal2_quickscan_reasons/${id}`),
        {
          ownerISbb_usersID: owner,
          name,
          _id: routeKey
        }
      );
      const user = addMember.data;
      if (user.error) return message.error(user.error);
      message.success('Updated successful!');
      navigate('/QuickScan_reasons');

      console.log(`${endpoint.appUsers} response -> `, user);
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
    }
  };

  return (
    <>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Title level={3}>QuickScan Reasons</Title>
        </Col>
      </Row>
      <Divider />
      <Row className="mx-4 mt-4">
        <Col>
          <Title level={4}>Update QuickScan reason</Title>
        </Col>
      </Row>
      <Input type="hidden" value={routeKey} />
      <Row className="mx-4 mt-3">
        <Col span={24}>
          {layoutFields.ownerISbb_usersID ? (
            <Row>
              <Col span={20}>
                <Text className="text-label" strong>
                  Owner
                </Text>
                <Input
                  style={inputStyle}
                  placeholder={layoutFields.ownerISbb_usersID}
                  className="mt-1"
                  value={owner}
                  onChange={e => setOwner(e.target.value)}
                  required
                />
              </Col>
            </Row>
          ) : null}
          {layoutFields.name ? (
            <Row className="mt-3">
              <Col span={20}>
                <Text className="text-label" strong>
                  Name
                </Text>
                <Input
                  style={inputStyle}
                  placeholder={layoutFields.name}
                  className="mt-1"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </Col>
            </Row>
          ) : null}
          <Row className="mt-3">
            <Col span={20}>
              <Text className="text-label" strong>
                Autoresponder1
              </Text>
              <Form1.Select
                defaultValue="select"
                placeholder="Select"
                style={{ width: '100%', borderRadius: '10px' }}
                onChange={e => handleChange(e)}
              >
                <option value="0"></option>
                <option value="1">Autoresponder1_1</option>
                <option value="2">Autoresponder1_2</option>
                <option value="2">Autoresponder1_3</option>
              </Form1.Select>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col span={20}>
              <Text className="text-label" strong>
                Autoresponder2
              </Text>
              <Form1.Select
                defaultValue="select"
                placeholder="Select"
                style={{ width: '100%', borderRadius: '10px' }}
                onChange={e => handleChange2(e)}
              >
                <option value="0"></option>
                <option value="1">Autoresponder2_1</option>
                <option value="2">Autoresponder2_2</option>
                <option value="2">Autoresponder3_3</option>
              </Form1.Select>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Button
                variant="outline-primary"
                className="rounded-pill py-2 px-4"
                onClick={() => onFinish()}
              >
                Update
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default UpdateScanReason;
