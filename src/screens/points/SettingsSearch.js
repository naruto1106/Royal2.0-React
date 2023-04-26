import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, DatePicker, Input, Row, Col } from 'antd';
import { Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setPointMenuData } from 'redux/slices/currentDataSlice';
const { Title, Text } = Typography;
const inputStyle = {
  borderRadius: '10px',
  width: '100%'
};

function SettingsSearch() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getPointDataManagerSchemaEndpoint('search');
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

  return (
    <>
      <Row className="mx-4 mb-4">
        <Col span={20}>
          <Title level={4} className="mb-3">
            Search points records
          </Title>
        </Col>
      </Row>
      <Row className="mx-4 mb-4">
        <Col span={20}>
          <Input placeholder="Free text search" style={inputStyle} />
        </Col>
      </Row>
      <Row className="mx-4">
        <Col span={20}>
          <Input placeholder="Member" style={inputStyle} />
        </Col>
      </Row>
      <Row className="mx-4 mt-4" gutter={[16, 16]}>
        <Col xs={24} md={24} lg={11} xl={8}>
          <Text strong>Transaction Date between</Text>
        </Col>
        <Col xs={10} md={7} lg={3} xl={4}>
          <DatePicker placeholder="from" style={inputStyle} />
        </Col>
        <Col xs={4} md={4} lg={2} xl={2}>
          <Text strong style={{ textAlign: 'center' }}>
            and
          </Text>
        </Col>
        <Col xs={10} md={7} lg={3} xl={4}>
          <DatePicker placeholder="to" style={inputStyle} />
        </Col>
      </Row>
      <Row className="mx-4 mt-4 mb-4" gutter={[16, 16]}>
        <Col xs={24} md={24} lg={11} xl={8}>
          <Text strong>Transaction Date between</Text>
        </Col>
        <Col xs={10} md={7} lg={3} xl={4}>
          <DatePicker placeholder="from" style={inputStyle} />
        </Col>
        <Col xs={4} md={4} lg={2} xl={2}>
          <Text strong style={{ textAlign: 'center' }}>
            and
          </Text>
        </Col>
        <Col xs={10} md={7} lg={3} xl={4}>
          <DatePicker placeholder="to" style={inputStyle} />
        </Col>
        <Col xs={24} md={6} lg={5} xl={6}>
          <Button variant="outline-primary" className="rounded-pill py-2 px-4">
            Search
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default SettingsSearch;
