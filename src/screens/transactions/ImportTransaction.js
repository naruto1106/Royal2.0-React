import React from 'react';
import { Typography, Row, Col, Radio, Space, Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const btnStyle = {
    borderColor: "rgb(53, 157, 217)",
    color: "rgb(53, 157, 217)",
    borderRadius: "15px",
    width: "150px"
}
const btnStyle1 = {
    borderColor: "gray",
    color: "gray",
    borderRadius: "15px",
    width: "150px"
}
const titleStyle = {
    marginBottom: "50px",
}
const PtagStyle = {
    marginTop: "6px"
}
const toolTip = {
    background: "rgb(53, 157, 217)",
    borderRadius: "50px",
    color: "white",
    scale: "1.5"
}
const toolTip1 = {
    background: "rgb(53, 157, 217)",
    borderRadius: "50px",
    color: "white",
    scale: "1.5",
    marginLeft: "505px"
}
const radioBottom = {
    marginBottom: "20px"
}
const Bottom1 = {
    marginBottom: "50px"
}
function ImportTransaction() {




    return (
        <>
            <br />
            <Row >
                <Col offset={1}>
                    <Title level={3} style={titleStyle}>Import data from CSV/Excel file</Title>

                </Col>
                <Col offset={13}>
                    <Tooltip title="234567890" placement="right" >
                        <QuestionCircleOutlined style={toolTip}>?</QuestionCircleOutlined>
                    </Tooltip>
                </Col>
            </Row>

            <Row style={radioBottom}>
                <Col offset={1}>
                    <Button lavel="Get sample CSV" style={btnStyle}>Get sample CSV</Button>
                </Col>
                <Col offset={10}>
                    <p style={PtagStyle}>Select file</p>

                </Col>
                <Col offset={1}>
                    <Button lavel="Upload CSV" style={btnStyle1}>Upload CSV</Button>
                </Col>
            </Row>
            <br /><br />
            <Row>
                <Col offset={1}>
                    <Title level={3} >Export data to CSV/Excel file</Title>
                </Col>
            </Row>
            <br />
            <Row>
                <Col offset={1}>
                    <Button style={btnStyle}>Export data</Button>
                </Col>
            </Row>
        </>
    )
}
export default ImportTransaction;