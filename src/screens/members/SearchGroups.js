import React from 'react';
import { Typography, DatePicker, Input, Button } from 'antd';
const { Title } = Typography;
const inputStyle = {
  width: '95%',
  borderRadius: '15px'
};
const dateStyle = {
  borderRadius: '15px'
};
const btnStyle = {
  borderRadius: '15px',
  backgroundColor: 'white',
  borderColor: '#359dd9',
  color: '#359dd9',
  marginTop: '5px',
  width: '150px'
};
function SearchGroups() {
  return (
    <>
      <Title level={4}>Search branches/stores</Title>
      <br />
      <h6>Free text search</h6>
      <Input placeholder="text" style={inputStyle} />
      <br />
      <br />
      <span>Date Added/Imported between</span>
      <DatePicker placeholder="from" style={dateStyle} className="mx-3" />
      <span>and</span>
      <DatePicker placeholder="to" style={dateStyle} className="mx-3" />
      <Button style={btnStyle} className="mx-5">
        Search
      </Button>
    </>
  );
}
export default SearchGroups;
