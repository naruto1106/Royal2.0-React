import React from 'react';
import { Typography, Row, Col, Input, InputNumber, DatePicker, Button } from 'antd';
import {
    DownOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';

const { Title } = Typography;
const buttonStyle = {
    'boxSizing': 'border-box',
    'height': '40px',
    'background': '#ffffff',
    'border': '0.5px solid #359dd9',
    "color": "#359dd9",
    "borderRadius": "10px",
    "padding": "10px 90px"
};
function AddTransaction() {

    const onChange = (value) => {
        console.log('changed', value);
    }
    const DateChange = (date, dateString) => {
        console.log(date, dateString);
    }
    const [setting_show, setSetting_show] = useState(false);
    const setting_click = () => {
        if (setting_show == false) {
            setSetting_show(true)
        }
        if (setting_show == true) {
            setSetting_show(false)
        }
    }
    return (
        <>
            <Row>
                <Col offset={1}>
                    <Title level={2}>Add a transaction</Title>

                </Col>
            </Row>
            <br />
            <Row>
                <Col offset={1} >
                    Member
                </Col>
            </Row>
            <Row>
                <Col offset={1} span={20}>
                    <Input type="text" size="large" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col offset={1} >
                    Total value
                </Col>
                <Col offset={4}>
                    Oty
                </Col>
            </Row>
            <Row>
                <Col offset={1} span={6}>
                    <InputNumber min={1} defaultValue={3} style={{ width: "100%" }} onChange={onChange} />
                </Col>
                <Col offset={1} span={6}>
                    <InputNumber min={1} defaultValue={3} style={{ width: "100%" }} onChange={onChange} />
                </Col>
                <Col offset={2} span={5}>
                    Transaction Date &nbsp;&nbsp;&nbsp;  <DatePicker style={{ width: "50%" }} onChange={DateChange} />
                </Col>

            </Row>
            <br /><br />
            <Row>
                <Col offset={1} span={17} >
                    <h4 level={2} style={{ color: "#359dd9", fontFamily: "bold" }} onClick={() => setting_click()}>Advanced Settings &nbsp;&nbsp;&nbsp; <DownOutlined /></h4>

                </Col>
                <Col span>
                    <Button style={buttonStyle} block> Add</Button>
                </Col>
            </Row>
            <br /><br /><br />
            {
                setting_show == true && (<>
                    <Row>
                        <Col offset={16}>Notes</Col>
                    </Row>
                    <Row>
                        <Col offset={1} span={6}>
                            <Input type="text" onChange={onChange} />
                        </Col>
                        <Col offset={1} span={6}>
                            <Input type="text" onChange={onChange} />
                        </Col>
                        <Col offset={2} span={5}>
                            <Input type="text" onChange={onChange} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col offset={1} span={6}>
                            Ex Tax Amount
                        </Col>
                        <Col offset={1} span={6}>
                            Tax Amount
                        </Col>
                        <Col offset={2} span={5}>
                            Tax Type
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={1} span={6}>
                            <InputNumber min={0} style={{ width: "100%" }} onChange={onChange} />
                        </Col>
                        <Col offset={1} span={6}>
                            <InputNumber min={0} style={{ width: "100%" }} onChange={onChange} />
                        </Col>
                        <Col offset={2} span={5}>
                            <Input type="text" onChange={onChange} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col offset={1} span={6}>
                            Branch
                        </Col>
                        <Col offset={1} span={6}>
                            Grand Total
                        </Col>
                        <Col offset={2} span={5}>
                            Unit Price
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={1} span={6}>
                            <InputNumber min={0} style={{ width: "100%" }} onChange={onChange} />
                        </Col>
                        <Col offset={1} span={6}>
                            <InputNumber min={0} style={{ width: "100%" }} onChange={onChange} />
                        </Col>
                        <Col offset={2} span={5}>
                            <InputNumber min={0} style={{ width: "100%" }} onChange={onChange} />
                        </Col>
                    </Row>
                </>)
            }

        </>
    )
}
export default AddTransaction;