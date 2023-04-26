import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Row, Col, Upload } from 'antd';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setPointMenuData } from 'redux/slices/currentDataSlice';
import { Button } from 'react-bootstrap';

const titleStyle = {
  marginBottom: '50px'
};

const { Title, Text } = Typography;

function SettingsCSV() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [btndisable, setBtndisable] = useState(true);
  const [btncolor, setBtncolor] = useState('outline-secondary');
  const initPageModule = async () => {
    try {
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getPointDataManagerSchemaEndpoint('csv');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu');
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
      <Row className="mx-4 pt-5">
        <Col>
          <Title level={4} style={titleStyle}>
            Import data from CSV/Excel file
          </Title>
        </Col>
      </Row>
      <Row>
        <Col className="mx-4" xs={12} sm={12} md={6} lg={8} xl={8} xxl={8}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
          >
            <Button
              variant="outline-primary"
              className="rounded-pill py-2 px-4"
            >
              Get sample CSV
            </Button>
          </Upload>
        </Col>
        <Col xs={6} sm={6} md={8} lg={6} xl={4} xxl={4}>
          <Upload
            colorBorder="blue"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            onChange={handleChange}
          >
            <Button variant="right" className="rounded-pill py-2 px-4">
              Select file
            </Button>
          </Upload>
        </Col>
        <Col xs={6} sm={6} md={5} lg={8} xl={6} xxl={6}>
          <Button
            variant={btncolor}
            className="rounded-pill py-2 px-5"
            disabled={btndisable}
          >
            Upload CSV
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="mx-4 pt-5">
          <Text strong style={{ color: '#444444' }}>
            Export data to CSV/Excel file
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="mx-4 my-3">
          <Button variant="outline-primary" className="rounded-pill py-2 px-5">
            Export Data
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default SettingsCSV;
