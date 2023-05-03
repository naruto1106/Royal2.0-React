import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Typography, Input, InputNumber } from 'antd';
import { Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setPromotionsMenuData } from 'redux/slices/currentDataSlice';
const { Text, Title, Paragraph } = Typography;

const inputStyle = {
  borderRadius: '10px',
  width: '100%'
};
function PromotionsSettings() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getPromotionsDataManagerSchemaEndpoint('settings');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(
        setPromotionsMenuData({ currentPromotionsMenuSchema: schema.menu })
      ); // store current Promotions menu
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
  // const onChange = value => {
  //   console.log('changed', value);
  // };

  const updateSetting = () => {
    console.log('updated');
  };

  if (loadingSchema) {
    return <Loading style={{ marginTop: 150 }} msg="Loading Schema..." />;
  }
  if (!layoutData) return getErrorAlert({ onRetry: initPageModule });

  return (
    <>
      <Row className="mx-4">
        <Col span={22}>
          <Paragraph strong className="text-label">
            Non-transactional promotions are once-off coded promotions which you
            offer to your members - whereby they log into your Micro-site and
            enter the code you have specified for the promotion, or scan the QR
            code for that promotion with their mobile phones, and gain a certain
            number of points for doing so.
          </Paragraph>
        </Col>
      </Row>
      <Row className="mx-4 pt-6">
        <Col>
          <Title level={4}>Basic Non-Transactional Promotion Setup</Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-5" align="middle">
        <Col span={22}>
          <Row gutter={[16, 16]} align="middle">
            <Col span={3}>
              <Text strong className="text-label">
                Code
              </Text>
            </Col>
            <Col span={6}>
              <Input style={inputStyle} />
            </Col>

            <Col span={3}>
              <Text strong className="text-label">
                Points
              </Text>
            </Col>
            <Col span={6}>
              <InputNumber style={inputStyle} />
            </Col>
            <Col span={6} style={{ textAlign: 'end' }}>
              <Button
                className="rounded-pill py-2 px-4"
                variant="outline-primary"
                onClick={() => updateSetting()}
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
export default PromotionsSettings;
