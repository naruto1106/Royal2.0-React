import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Tooltip, Typography, Switch } from 'antd';
import { Button } from 'react-bootstrap';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setPointMenuData } from 'redux/slices/currentDataSlice';

const { Title } = Typography;
const TooltipStyle = {
  background: 'rgb(53, 157, 217)',
  borderRadius: '50px',
  color: 'white',
  scale: '1.5',
  marginLeft: '50px'
};
function SettingsSetting() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getPointDataManagerSchemaEndpoint(
        routeKey.replace('/', '')
      );
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
      <Row className="py-5">
        <Col className="my-2" xs={23} sm={23} md={10} lg={9} xl={9} xxl={9}>
          <Title level={4} style={{ marginLeft: '20px' }}>
            For multi-branch:apply points globally
          </Title>
        </Col>
        <Col className="my-2" xs={23} sm={23} md={4} lg={4} xl={4} xxl={4}>
          <Switch
            defaultChecked
            style={{
              scale: '1.9',
              marginLeft: '50px',
              backgroundColor: 'rgb(86, 204, 242)'
            }}
          />
        </Col>
        <Col
          style={{ textAlign: 'end' }}
          xs={23}
          sm={23}
          md={6}
          lg={9}
          xl={9}
          xxl={9}
        >
          <Button
            className="px-5 py-2 rounded-pill me-1 mb-1"
            variant="outline-primary"
            onClick={() => updateSetting()}
          >
            Update settings
          </Button>
        </Col>
        <Col
          xs={23}
          sm={23}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          style={{ textAlign: 'end' }}
          className="my-1"
        >
          <Tooltip title="234567890" placement="right">
            <QuestionCircleOutlined style={TooltipStyle}>
              ?
            </QuestionCircleOutlined>
          </Tooltip>
        </Col>
      </Row>
    </>
  );
}
export default SettingsSetting;
