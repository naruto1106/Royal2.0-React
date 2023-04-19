import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography, Row, Col } from 'antd';
import { getColor, rgbaColor } from 'helpers/utils';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import endpoint from 'utils/endpoint';

const { Title } = Typography;
function HistoryTransaction() {
  let [labels, setLables] = useState([]);
  let [data_member, setData_member] = useState([]);

  useEffect(() => {
    let getlabels = [];
    let getdata_member = [];
    axios.get(endpoint.historytransaction).then(response => {
      for (
        let i = Object.values(response.data.layout.data).length;
        i > 0;
        i--
      ) {
        getlabels.push(Object.values(response.data.layout.data)[i - 1].title);
        getdata_member.push(
          Object.values(response.data.layout.data)[i - 1].value
        );
      }

      setLables(getlabels);
      setData_member(getdata_member);
    });
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: 'Sales history',
        borderColor: getColor('primary'),
        borderWidth: 2,
        fill: false,
        data: data_member,
        tension: 0.3
      }
    ]
  };

  const options = {
    plugins: {
      tooltip: chartJsDefaultTooltip()
    },
    scales: {
      x: {
        grid: {
          color: rgbaColor(getColor('black'), 0.1)
        }
      },
      y: {
        grid: {
          color: rgbaColor(getColor('black'), 0.1),
          drawBorder: true
        }
      }
    }
  };

  return (
    <>
      <Row>
        <Col offset={1}>
          <Title level={4}>Sales history </Title>
        </Col>
      </Row>
      <Row span={2}>
        <Col offset={1} span={22}>
          <Card style={{ width: '100%' }}>
            <Card.Body style={{ marginLeft: '20px' }}>
              <Card.Title as="h6">Sales Total Per Month</Card.Title>
              <Line data={data} options={options} height={500} width={1618} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default HistoryTransaction;
