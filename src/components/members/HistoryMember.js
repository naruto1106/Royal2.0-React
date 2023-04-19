import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography, Row, Col } from 'antd';

import { getColor, rgbaColor } from 'helpers/utils';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

import endpoint from '../../utils/endpoint';

const { Title } = Typography;

function HistoryMember() {
  let [labels, setLables] = useState([]);
  let [data_member, setData_member] = useState([]);

  useEffect(() => {
    let getlabels = [];
    let getdata_member = [];
    axios.get(endpoint.historymember).then(response => {
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
  // console.log('labels', labels);
  // console.log('data_member', data_member);

  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: '',
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
          <Title level={2}>New Members per Month</Title>
        </Col>
      </Row>
      <Row span={2}>
        <Col offset={1} span={20}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Line data={data} options={options} height={500} width={1618} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default HistoryMember;

// for (
//   var i = 0;
//   i < Object.values(response.data.layout.data).length;
//   i++
// ) {
//   labels.push(Object.values(response.data.layout.data)[i].title);
//   data_member.push(Object.values(response.data.layout.data)[i].value);
// }
