import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Row, Col, Radio, Tooltip, Upload } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
import { Button } from 'react-bootstrap';

const ToolTip = {
  background: 'rgb(53, 157, 217)',
  borderRadius: '50px',
  color: 'white',
  scale: '1.5'
  // marginLeft: '39em'
};
const titleStyle = {
  marginBottom: '50px'
};
const { Title } = Typography;

function CsvMember() {
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
      <Row className="mx-4">
        <Col span={16}>
          <Title level={3} style={titleStyle}>
            Import data from CSV/Excel file
          </Title>
        </Col>
        <Col span={8} style={{ textAlign: 'end' }}>
          <Tooltip title="Import data from CSV/Excel file" placement="right">
            <QuestionCircleOutlined style={ToolTip}>?</QuestionCircleOutlined>
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Col className="mx-4" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
          >
            <Button
              className="me-3"
              lavel="Get sample CSV"
              variant="outline-primary"
              style={{ borderRadius: '15px', padding: '8px 20px' }}
            >
              Get sample CSV
            </Button>
          </Upload>
        </Col>
        <Col xs={6} sm={6} md={6} lg={8} xl={3} xxl={3}>
          <Upload
            colorBorder="blue"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            onChange={handleChange}
          >
            <Button
              variant="light"
              style={{ borderRadius: '15px', padding: '10px 20px' }}
            >
              Select file
            </Button>
          </Upload>
        </Col>
        <Col xs={6} sm={6} md={6} lg={8} xl={4} xxl={4}>
          <Button
            lavel="Upload CSV"
            style={{
              borderRadius: '15px',
              padding: '8px 20px',
              boxShadow: 'none'
            }}
            disabled={btndisable}
            variant={btncolor}
          >
            Upload CSV
          </Button>
        </Col>
      </Row>
      <Row className="mx-4 my-3">
        <Col span={20}>
          <Radio ghost className="mt-5 mb-3">
            Halt on duplicate email/mobile data
          </Radio>
        </Col>
      </Row>

      <Row className="mx-4 my-3">
        <Col span={16}>
          <Radio ghost>
            Force unique email/mobile data by adding unique text to duplicate
            entries
          </Radio>
        </Col>
        <Col span={8} style={{ textAlign: 'end' }}>
          <Tooltip title="234567890" placement="right">
            <QuestionCircleOutlined style={ToolTip}>?</QuestionCircleOutlined>
          </Tooltip>
        </Col>
      </Row>
      <Row className="mx-4 my-3">
        <Col span={20}>
          <Radio ghost className="mb-5 mt-3">
            Skip duplicate email/mobile data
          </Radio>
        </Col>
      </Row>

      <Row className="mx-4 ">
        <Col span={20}>
          <Title level={3} style={{ color: '#444444' }}>
            Export data to CSV/Excel file
          </Title>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="mx-4">
          <Button
            style={{ borderRadius: '15px', padding: '8px 20px' }}
            variant="outline-primary"
          >
            Export Data
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default CsvMember;
