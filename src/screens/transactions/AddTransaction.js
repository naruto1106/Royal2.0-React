import React from 'react';
import {
  Typography,
  Row,
  Col,
  Input,
  InputNumber,
  DatePicker,
  Select
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Form, Button } from 'react-bootstrap';

import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setTransactionMenuData } from 'redux/slices/currentDataSlice';

const { Title } = Typography;
const buttonStyle = {
  boxSizing: 'border-box',
  height: '40px',
  border: '0.5px solid #359dd9',
  borderRadius: '10px',
  padding: '10px 90px'
};
function AddTransaction() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  // let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);

  const initPageModule = async () => {
    try {
      // default part
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataTransactionSchemaEndpoint('add');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      dispatch(
        setTransactionMenuData({ currentTransactionMenuSchema: schema.menu })
      ); // store current member menu
      _isMounted.current && setLayoutData(layoutSchema);
      // end default part
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
    }
  };
  useEffect(() => {
    _isMounted.current = true;
    initPageModule();
    return () => {
      _isMounted.current = false;
    };
  }, []);

  // Loading part
  if (loadingSchema) {
    return <Loading style={{ marginTop: 150 }} msg="Loading Schema..." />;
  }
  if (!layoutData) return getErrorAlert({ onRetry: initPageModule });

  const onChange = value => {
    console.log('changed', value);
  };
  const DateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [setting_show, setSetting_show] = useState(false);
  const setting_click = () => {
    if (setting_show == false) {
      setSetting_show(true);
    }
    if (setting_show == true) {
      setSetting_show(false);
    }
  };
  const onselectChange = value => {
    console.log(`selected ${value}`);
  };
  const onSearch = value => {
    console.log('search:', value);
  };
  return (
    <>
      <Row>
        <Col offset={1}>
          <Title level={4}>Add a transaction</Title>
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1} span={20}>
          <Form.Group className="mb-3">
            <Form.Label>Member</Form.Label>
            <br />
            <Input type="text" size="large" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col offset={1} span={6}>
          <Form.Group className="mb-3">
            <Form.Label>Total value</Form.Label>
            <br />
            <InputNumber
              min={1}
              size="large"
              defaultValue={3}
              style={{ width: '100%' }}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col offset={1} span={6}>
          <Form.Group className="mb-3">
            <Form.Label>Oty</Form.Label>
            <br />
            <InputNumber
              min={1}
              size="large"
              defaultValue={3}
              style={{ width: '100%' }}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col offset={1} span={6}>
          <Form.Group className="mb-3">
            <Form.Label>Transaction Date</Form.Label>
            <br />
            <DatePicker
              size="large"
              onChange={DateChange}
              style={{ width: '100%' }}
            />
          </Form.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col offset={1} span={5} style={{ cursor: 'pointer' }}>
          <Title
            level={4}
            style={{ color: '#359dd9' }}
            onClick={() => setting_click()}
          >
            Advanced Settings &nbsp;&nbsp;&nbsp;
            <DownOutlined style={{ fontSize: '14px' }} />
          </Title>
        </Col>
        <Col offset={12}>
          <Button style={buttonStyle} variant="outline-primary">
            Add{' '}
          </Button>
        </Col>
      </Row>
      <br />
      {setting_show == true && (
        <>
          <Row>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>&nbsp;</Form.Label>
                <br />
                <Input type="text" size="large" onChange={onChange} />
              </Form.Group>
            </Col>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>&nbsp;</Form.Label>
                <br />
                <Input type="text" size="large" onChange={onChange} />
              </Form.Group>
            </Col>
            <Col offset={2} span={5}>
              <Form.Group className="mb-3">
                <Form.Label>Notes</Form.Label>
                <br />
                <Input type="text" size="large" onChange={onChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>Ex Tax Amount</Form.Label>
                <br />
                <InputNumber
                  min={0}
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tax Amount</Form.Label>
                <br />
                <InputNumber
                  min={0}
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col offset={2} span={5}>
              <Form.Group className="mb-3">
                <Form.Label>Tax Type</Form.Label>
                <br />
                <Input
                  type="text"
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>Branch</Form.Label>
                <br />
                <Select
                  showSearch
                  placeholder="Select"
                  size="large"
                  optionFilterProp="children"
                  style={{ width: '100%' }}
                  onChange={onselectChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? '')
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack'
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy'
                    },
                    {
                      value: 'tom',
                      label: 'Tom'
                    }
                  ]}
                />
              </Form.Group>
            </Col>
            <Col offset={1} span={6}>
              <Form.Group className="mb-3">
                <Form.Label>Grand Total</Form.Label>
                <br />
                <InputNumber
                  min={0}
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col offset={2} span={5}>
              <Form.Group className="mb-3">
                <Form.Label>Unit Price</Form.Label>
                <br />
                <InputNumber
                  min={0}
                  size="large"
                  style={{ width: '100%' }}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
export default AddTransaction;
