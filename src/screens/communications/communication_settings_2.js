import React,{useState} from 'react';
import { Typography, Row, Col, Switch, Tooltip,Steps, message } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tabs, Tab, Button, Card } from 'react-bootstrap';

const Step = Steps.Step;

const { Title } = Typography;
 

function Communication_settings_2() {
    const steps = [{
        title: 'First',
        content: 'First-content',
      }, {
        title: 'Second',
        content: 'Second-content',
      }, {
        title: 'Last',
        content: 'Last-content',
      }];
      const [current,setCurrent]=useState(0);
      
  const next=() => {
    setCurrent(current+1);
  }

  const prev=() => {
    setCurrent(current-1);
  }

  return (
    <>
      <Row>
            <Col>
                Content 222222222222
            </Col>
        </Row>
    </>
  );
}
export default Communication_settings_2;
