import React, { useState } from 'react';
import { Typography, Row, Col, Switch, Tooltip, Steps, message } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tabs, Tab, Button, Card } from 'react-bootstrap';
import Communication_settings_1 from './communications/communication_settings_1';
import Communication_settings_2 from './communications/communication_settings_2';
import Communication_settings_3 from './communications/communication_settings_3';
const Step = Steps.Step;

const { Title } = Typography;

function Communication_settings() {
  const steps = [
    {
      title: 'First',
      content: 'First-content'
    },
    {
      title: 'Second',
      content: 'Second-content'
    },
    {
      title: 'Last',
      content: 'Last-content'
    }
  ];
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Card className="overflow-hidden z-index-1 card-main_layout">
        <Card.Body className="p-0">
          <Row className="mt-4 mx-4">
            <Col>
              <Title level={3}>Communicate with your members</Title>
            </Col>
          </Row>
          <Row justify="center" className="mt-5">
            <Col span={19}>
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} />
                ))}
              </Steps>
            </Col>
          </Row>
          <Row className="mx-4 mt-5">
            <Col>
              {(current == 0 && <Communication_settings_1 />) ||
                (current == 1 && <Communication_settings_2 />) ||
                (current == 2 && <Communication_settings_3 />)}
            </Col>
          </Row>
          <div className="steps-content">{/* {steps[current].content} */}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success('Processing complete!')}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
export default Communication_settings;
