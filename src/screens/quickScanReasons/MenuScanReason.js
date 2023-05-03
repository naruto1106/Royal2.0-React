import React from 'react';
import { Divider, Typography, Row, Col, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
const { Title } = Typography;

function MenuScanReason() {
  const navigate = useNavigate();
  const { routeKey } = useParams();

  // const { currentTransactionMenuSchema } = useSelector(
  //   state => state.currentData
  // );
  return (
    <>
      <Row>
        <Col xs={23} sm={23} md={8} lg={8} xl={8} xxl={8}>
          <Title level={3} className="mx-4">
            QuickScan Reasons
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
            {/* {Object.entries(currentTransactionMenuSchema).map((row, index) => {
              return index <= 5 && row[0] != 'Settings' || row[0] !='History' ? (
                <Button
                  key={index}
                  className={
                    row[1].active ? 'btn-active-menu' : 'btn-inactive-menu'
                  }
                  onClick={() =>
                    navigate(
                      row[1].route === '/datamanager/bb_loyal2_transactions/'
                        ? '/transactions'
                        : row[1].route
                    )
                  }
                >
                  {row[0] == 'Add' ? (
                    <PlusOutlined style={{ marginTop: '-2px' }} />
                  ) : null}
                  {row[0]}
                </Button>
              ) : null;
            })} */}
            <Button
              className={!routeKey ? 'btn-active-menu' : 'btn-inactive-menu'}
              onClick={() => navigate('/QuickScan_reasons')}
            >
              List
            </Button>
            <Button
              className={
                routeKey === 'add' ? 'btn-active-menu' : 'btn-inactive-menu'
              }
              onClick={() =>
                navigate('/datamanager/bb_loyal2_quickscan_reasons/add')
              }
            >
              {<PlusOutlined style={{ marginBottom: '3px' }} />}Add
            </Button>
            <Button
              className={
                routeKey === 'search' ? 'btn-active-menu' : 'btn-inactive-menu'
              }
              onClick={() =>
                navigate('/datamanager/bb_loyal2_quickscan_reasons/search')
              }
            >
              Search
            </Button>
            <Button
              className={
                routeKey === 'csv' ? 'btn-active-menu' : 'btn-inactive-menu'
              }
              onClick={() =>
                navigate('/datamanager/bb_loyal2_quickscan_reasons/csv')
              }
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
export default MenuScanReason;
