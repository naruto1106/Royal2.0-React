import React from 'react';
import { Divider, Typography, Row, Col, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

function GroupMenu() {
  const navigate = useNavigate();
  // const { currentMemberMenuSchema } = useSelector(state => state.currentData);
  // const data = useSelector(state => state.currentData);
  return (
    <>
      <Row>
        <Col xs={23} sm={23} md={8} lg={8} xl={8} xxl={8}>
          <Title level={3} style={{ marginLeft: '20px' }}>
            Groups/Tiers
          </Title>
        </Col>
        <Col
          xs={23}
          sm={23}
          md={16}
          lg={16}
          xl={16}
          xxl={16}
          style={{ textAlign: 'end' }}
        >
          <Space>
            {/* {Object.entries(currentMemberMenuSchema).map((row, index) => {
              return index <= 5 ? (
                <Button
                  key={index}
                  // icon={row[0] === 'Add' ? <PlusOutlined /> : null}
                  // type={row[1].active ? "primary" : null}
                  className={
                    row[1].active ? 'btn-active-menu' : 'btn-inactive-menu'
                  }
                  // style={row[1].active ? SelButtonStyle : buttonStyle}
                  onClick={() => navigate(row[1].route)}
                >
                  {row[0] === 'Add' ? (
                    <PlusOutlined style={{ marginBottom: '3px' }} />
                  ) : null}{' '}
                  {row[0]}
                </Button>
              ) : null;
            })} */}
            <Button
              key="1"
              className="btn-active-menu"
              onClick={() => navigate('/members_groups')}
            >
              List
            </Button>
            <Button
              key="2"
              className="btn-inactive-menu"
              onClick={() => navigate('/members_groups/add')}
            >
              {<PlusOutlined style={{ marginBottom: '3px' }} />} Add
            </Button>
            <Button
              key="3"
              className="btn-inactive-menu"
              onClick={() => navigate('/members_groups/search')}
            >
              Search
            </Button>
            <Button
              key="4"
              className="btn-inactive-menu"
              onClick={() => navigate('/members_groups/csv')}
            >
              Import/Export
            </Button>
          </Space>
        </Col>
      </Row>
      <Divider />
    </>
  );
}
export default GroupMenu;
