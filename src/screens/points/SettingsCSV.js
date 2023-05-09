import React, { useState } from 'react';
import { Typography, Row, Col, Upload } from 'antd';
import { Button } from 'react-bootstrap';
const { Title } = Typography;

function CsvGroups() {
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
      <Title className="mx-5 py-4" level={4}>
        Import data from CSV/Excel file
      </Title>
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
            style={{
              borderRadius: '15px',
              padding: '13px 30px',
              boxShadow: 'none'
            }}
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
export default CsvGroups;
