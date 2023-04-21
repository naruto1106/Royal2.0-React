import React from 'react';
import { Divider, Typography, Row, Col, Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
const buttonStyle = {
  boxSizing: 'border-box',
  // 'width': '67px',
  height: '38px',
  background: '#ffffff',
  color: '#a79f9f',
  borderRadius: '10px'
};
const SelButtonStyle = {
  boxSizing: 'border-box',
  height: '38px',
  border: '0.5px solid #359dd9',
  borderRadius: '10px',
  color: '#359dd9'
};
function MemberMenu() {
  const navigate = useNavigate();
  const { currentMemberMenuSchema } = useSelector(state => state.currentData);
  return (
    <>
      <Row>
        <Col span={8}>
          <Title level={3}>Members</Title>
        </Col>
        <Col span={16} style={{ textAlign: 'end' }}>
          <Space>
            {Object.entries(currentMemberMenuSchema).map((row, index) => {
              return index <= 5 ? (
                <Button
                  key={index}
                  icon={row[0] == 'Add' ? <PlusOutlined /> : null}
                  style={row[1].active ? SelButtonStyle : buttonStyle}
                  onClick={() => navigate(row[1].route)}
                >
                  {row[0]}
                </Button>
              ) : null;
            })}
          </Space>
        </Col>
      </Row>
      <Divider />
    </>
  );
}
export default MemberMenu;
