import React, { useState } from 'react';
import { Typography, Row, Col, Tooltip, Upload } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'react-bootstrap';
const { Title } = Typography;
const toolTip = {
  background: 'rgb(53, 157, 217)',
  borderRadius: '50px',
  color: 'white',
  scale: '1.5'
};

function ImportVoucher() {
  const [btncolor, setBtncolor] = useState('outline-secondary');
  const [btndisable, setBtndisable] = useState(true);
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
      <Row>
        <Col offset={1}>
          <Title level={4} style={{ marginBottom: '40px', marginTop: '5px' }}>
            Import data from CSV/Excel file
          </Title>
        </Col>
        <Col offset={13}>
          <Tooltip title="234567890" placement="right">
            <QuestionCircleOutlined style={toolTip}>?</QuestionCircleOutlined>
          </Tooltip>
        </Col>
      </Row>

      <Row style={{ marginBottom: '20px' }}>
        <Col offset={1}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
          >
            <Button
              lavel="Get sample CSV"
              variant="outline-primary"
              style={{ borderRadius: '15px', padding: '13px 20px' }}
            >
              Get sample CSV
            </Button>
          </Upload>
        </Col>
        <Col offset={10}>
          <Upload
            colorBorder="blue"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            onChange={handleChange}
          >
            <Button
              variant="light"
              style={{ borderRadius: '15px', padding: '13px 30px' }}
            >
              Select file
            </Button>
          </Upload>
        </Col>
        <Col style={{ marginLeft: '10px' }}>
          <Button
            lavel="Upload CSV"
            style={{ borderRadius: '15px', padding: '13px 30px' }}
            disabled={btndisable}
            variant={btncolor}
          >
            Upload CSV
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col offset={1}>
          <Title level={4}>Export data to CSV/Excel file</Title>
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1}>
          <Button
            style={{ borderRadius: '15px', padding: '13px 20px' }}
            variant="outline-primary"
          >
            Get sample CSV
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default ImportVoucher;
