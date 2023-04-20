import React from 'react';
import { Typography, Row, Col, Button, Tooltip, Upload } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const btnStyle = {
  borderColor: 'rgb(53, 157, 217)',
  color: 'rgb(53, 157, 217)',
  borderRadius: '15px',
  width: '150px'
};
const btnStyle1 = {
  borderColor: 'gray',
  color: 'gray',
  borderRadius: '15px',
  width: '150px'
};
const titleStyle = {
  marginBottom: '50px'
};

const toolTip = {
  background: 'rgb(53, 157, 217)',
  borderRadius: '50px',
  color: 'white',
  scale: '1.5'
};

const radioBottom = {
  marginBottom: '20px'
};

function ImportVoucher() {
  return (
    <>
      <br />
      <Row>
        <Col offset={1}>
          <Title level={4} style={titleStyle}>
            Import data from CSV/Excel file
          </Title>
        </Col>
        <Col offset={13}>
          <Tooltip title="234567890" placement="right">
            <QuestionCircleOutlined style={toolTip}>?</QuestionCircleOutlined>
          </Tooltip>
        </Col>
      </Row>

      <Row style={radioBottom}>
        <Col offset={1}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            // defaultFileList={[...fileList]}
          >
            <Button lavel="Get sample CSV" style={btnStyle}>
              Get sample CSV
            </Button>
          </Upload>
        </Col>
        <Col offset={10}></Col>
        <Col offset={1}>
          <Button lavel="Upload CSV" style={btnStyle1}>
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
          <Button style={btnStyle}>Export data</Button>
        </Col>
      </Row>
    </>
  );
}
export default ImportVoucher;
