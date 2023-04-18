import React from 'react';
import { useState, useEffect } from 'react';

import { Typography, Row, Col, InputNumber, Tooltip, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;
const buttonStyle = {
    'boxSizing': 'border-box',
    'height': '38px',
    'background': '#ffffff',
    'border': '0.5px solid #359dd9',
    "color": "#359dd9"
};
function SettingsMember() {
    const onChange = (value) => {
        console.log('changed', value);
    }

    const [prefix_num, setPrefix_num] = useState(1);
    const [start_num, setStart_num] = useState(0);
    const updateSetting = (value) => {
        console.log("prefix_num", prefix_num);
        console.log("start_num", start_num);
    }
    return (
        <>
            <Row>
                <Col span="2"></Col>
                <Col span="5">Membership Number Prefix</Col>

                <Col span="4">
                    <InputNumber min={0} defaultValue={prefix_num} onChange={onChange} style={{ borderRadius: "10px", marginRight: "10px" }} />
                    <Tooltip placement="right" color="#359dd9" title=" Prefix">
                        <QuestionCircleOutlined style={{ backgroundColor: "#359dd9", borderRadius: "50%", border: "none", color: "white", fontSize: "20px" }} />
                    </Tooltip>
                </Col>

                <Col span="6">Membership Number Starting Point</Col>
                <Col span={4}>
                    <InputNumber min={0} defaultValue={start_num} onChange={onChange} style={{ borderRadius: "10px", marginRight: "10px" }} />
                    <Tooltip placement="right" color="#359dd9" title=" Starting point">
                        <QuestionCircleOutlined style={{ backgroundColor: "#359dd9", borderRadius: "50%", border: "none", color: "white", fontSize: "20px" }} />

                    </Tooltip>
                </Col>

            </Row>
            <br /><br /><br />
            <Row>
                <Col span="15"></Col>
                <Col span="7">
                    <Button style={buttonStyle} onClick={() => updateSetting()} >Update settings</Button>
                </Col>
            </Row>

        </>
    )
}
export default SettingsMember;