import React from 'react';
import { useState } from 'react';

import { Row, Col, InputNumber, Tooltip, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const buttonStyle = {
  boxSizing: 'border-box',
  height: '38px',
  background: '#ffffff',
  border: '0.5px solid #359dd9',
  color: '#359dd9'
};
const settingStyle = {
  marginTop: '82px',
  fontFamilly: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  color: '#000000',
  letterSpacing: '-0.019em'
};
function SettingsMember() {
  const onChange = value => {
    console.log('changed', value);
  };

  const [prefix_num, setPrefix_num] = useState(1);
  const [start_num, setStart_num] = useState(0);
  const updateSetting = () => {
    console.log('prefix_num', prefix_num);
    console.log('start_num', start_num);
  };
  return (
    <>
      <Row style={settingStyle}>
        <Col span="2"></Col>
        <Col span="5">
          <p>Membership Number Prefix</p>
        </Col>

        <Col span="4">
          <InputNumber
            min={0}
            defaultValue={prefix_num}
            onChange={onChange}
            style={{ borderRadius: '10px', marginRight: '10px' }}
          />
          <Tooltip placement="right" color="#359dd9" title=" Prefix">
            <QuestionCircleOutlined
              style={{
                backgroundColor: '#359dd9',
                borderRadius: '50%',
                border: 'none',
                color: 'white',
                fontSize: '20px'
              }}
            />
          </Tooltip>
        </Col>

        <Col span="6">
          <p>Membership Number Starting Point</p>
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            defaultValue={start_num}
            onChange={onChange}
            style={{ borderRadius: '10px', marginRight: '10px' }}
          />
          <Tooltip placement="right" color="#359dd9" title=" Starting point">
            <QuestionCircleOutlined
              style={{
                backgroundColor: '#359dd9',
                borderRadius: '50%',
                border: 'none',
                color: 'white',
                fontSize: '20px'
              }}
            />
          </Tooltip>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col span="15"></Col>
        <Col span="7">
          <Button style={buttonStyle} onClick={() => updateSetting()}>
            Update settings
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default SettingsMember;
