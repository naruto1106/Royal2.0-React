import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Row, Col, Tooltip, Upload } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { Button } from 'react-bootstrap';
import TabGroups from './TabGroups';

const ToolTip = {
  background: 'rgb(53, 157, 217)',
  borderRadius: '50px',
  color: 'white',
  scale: '1.5'
  // marginLeft: '39em'
};

const { Title } = Typography;

function CsvGroup() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [btncolor, setBtncolor] = useState('outline-secondary');
  const [btndisable, setBtndisable] = useState(true);

  const initPageModule = async () => {
    try {
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataManagerSchemaEndpoint(
        routeKey.replace('/', '')
      );
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu');
      dispatch(setMemberMenuData({ currentMemberMenuSchema: schema.menu })); // store current member menu

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

  const handleChange = info => {
    let newFileList = [...info.fileList];
    if (newFileList.length > 0) {
      setBtncolor('outline-primary');
      setBtndisable(false);
    } else {
      setBtncolor('outline-secondary');
      setBtndisable(true);
    }
  };

  return (
    <>
      <Row className="mx-4 mt-5">
        <Col xs={23} lg={20}>
          <Title level={4}>Import data from CSV/Excel file</Title>
        </Col>
        <Col xs={1} lg={4} style={{ textAlign: 'end' }}>
          <Tooltip title="Import data from CSV/Excel file" placement="right">
            <QuestionCircleOutlined style={ToolTip}>?</QuestionCircleOutlined>
          </Tooltip>
        </Col>
      </Row>
      <Row className="mx-4 mt-3" gutter={[0, 24]}>
        <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
          >
            <Button
              className="rounded-pill px-4"
              lavel="Get sample CSV"
              variant="outline-primary"
            >
              Get sample CSV
            </Button>
          </Upload>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Upload
            colorBorder="blue"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            onChange={handleChange}
          >
            <Button variant="light" className="rounded-pill px-4">
              Select file
            </Button>
          </Upload>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
          <Button
            lavel="Upload CSV"
            className="rounded-pill px-4"
            disabled={btndisable}
            variant={btncolor}
          >
            Upload CSV
          </Button>
        </Col>
      </Row>

      <Row className="mx-4 mt-7">
        <Col span={24}>
          <Title level={4}>Export data to CSV/Excel file</Title>
        </Col>
      </Row>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Button className="rounded-pill px-4" variant="outline-primary">
            Get sample CSV
          </Button>
        </Col>
      </Row>
      <TabGroups />
    </>
  );
}

export default CsvGroup;
