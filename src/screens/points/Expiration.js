import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Typography, DatePicker, Row, Col, InputNumber, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Card } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setPointMenuData } from 'redux/slices/currentDataSlice';
import TabGroups from './TabGroups';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';
const { Title, Text } = Typography;
const inputStyle = {
  borderRadius: '10px',
  width: '100%'
};
const ToolTip = {
  background: 'rgb(53, 157, 217)',
  borderRadius: '50px',
  color: 'white',
  scale: '1.5'
  // marginLeft: '39em'
};
function Expiration() {
  const selectedStartDate = moment('2021-1-21', dateFormat);
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getPointDataManagerSchemaEndpoint('');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(setPointMenuData({ currentPointMenuSchema: schema.menu })); // store current Point menu
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
      <Card className="overflow-hidden z-index-1 card-main_layout">
        <Card.Body className="p-0">
          <Row className="mx-4">
            <Col span={20}>
              <Title level={3} className="mb-3">
                Points Expiration & Usage
              </Title>
            </Col>
          </Row>
          <Row className="mx-4 mt-7" align="middle" gutter={[24, 24]} span={20}>
            <Col span={5}>
              <Text strong className="text-lebel mb-2">
                Points expire
              </Text>
              <Text className="text-lebel mb-2"> after</Text>
            </Col>
            <Col span={4}>
              {/* <Text style={{color:'#444444'}} strong className="mb-2">Free text search</Text> */}
              <InputNumber style={inputStyle} />
            </Col>
            <Col span={6}>
              <Text className="text-lebel mb-2">month/s</Text>
            </Col>
            <Col span={3}>
              <Button
                className="rounded-pill py-2 px-4"
                variant="outline-primary"
              >
                Update
              </Button>
            </Col>
            <Col span={2} style={{ textAlign: 'end' }}>
              <Tooltip title="234567890" placement="right">
                <QuestionCircleOutlined style={ToolTip}>
                  ?
                </QuestionCircleOutlined>
              </Tooltip>
            </Col>
          </Row>
          <Row className="mx-4 my-7" span={20} align="middle" gutter={[16, 16]}>
            <Col span={15}>
              <Title level={4} className="m-0">
                Points Expiring & Used Report
              </Title>
            </Col>
            <Col span={5}>
              <DatePicker defaultValue={selectedStartDate} style={inputStyle} />
            </Col>
          </Row>
          <TabGroups />
        </Card.Body>
      </Card>
    </>
  );
}
export default Expiration;
