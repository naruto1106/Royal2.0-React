import React from 'react';
import { Typography, Tooltip, Button } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
const { Title } = Typography;
const btnQuestion = {
  backgroundColor: '#359dd9',
  marginTop: '-10px',
  color: 'white',
  float: 'right'
};

function CsvGroups() {
  return (
    <>
      <Title level={6}>Import data from CSV/Excel file</Title>
      <Tooltip placement="right" title="Company name" color="#359dd9">
        <Button
          shape="circle"
          icon={<QuestionOutlined />}
          style={btnQuestion}
          size="small"
        ></Button>
      </Tooltip>
      <Title level={6}>Export data to CSV/Excel file</Title>
    </>
  );
}
export default CsvGroups;
