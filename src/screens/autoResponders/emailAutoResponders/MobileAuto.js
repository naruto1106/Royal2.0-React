import React from 'react';
import { Row, Col, Typography } from 'antd';
const { Text } = Typography;
function MobileAuto() {
  return (
    <>
      <Row>
        <Col span={20}>
          <Text strong className="text-label">
            Mobile Autoresponders are currently not enabled on your account.{' '}
            <u>(Find out more)</u>
          </Text>
        </Col>
      </Row>
    </>
  );
}
export default MobileAuto;
