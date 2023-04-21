import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { InputNumber, DatePicker, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import endpoint from '../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
const { Title } = Typography;
function SearchMember() {
  const dispatch = useDispatch();
  const _isMounted = useRef(false);
  let { routeKey } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);

  const initPageModule = async () => {
    try {
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataManagerSchemaEndpoint(
        routeKey.replace('/', '')
      );
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(setMemberMenuData({ currentMemberMenuSchema: schema.menu })); // store current member menu

      _isMounted.current && setLayoutData(layoutSchema);
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

  if (loadingSchema) {
    return <Loading style={{ marginTop: 150 }} msg="Loading Schema..." />;
  }
  if (!layoutData) return getErrorAlert({ onRetry: initPageModule });

  return (
    <>
      <Form>
        <Row className="mb-5">
          <Col md={10}>
            <Title level={4} style={{ color: '#444444' }}>
              Search Members
            </Title>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={5}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={6} style={{ color: '#444444' }}>
                Points balance between
              </Form.Label>
              <Col sm={2}>
                <InputNumber
                  min={1}
                  max={1000}
                  defaultValue={1}
                  style={{ width: '100%' }}
                />
              </Col>
              <Form.Label
                column
                sm={2}
                className="text-center"
                style={{ color: '#444444' }}
              >
                and
              </Form.Label>
              <Col sm={2}>
                <InputNumber
                  min={1}
                  max={1000}
                  defaultValue={1}
                  style={{ width: '100%' }}
                />
              </Col>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label
                column
                sm={4}
                lg={4}
                className="text-end"
                style={{ color: '#444444' }}
              >
                Group
              </Form.Label>
              <Col sm={8} lg={8}>
                <Form.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={{ width: '100%' }}
                >
                  <option>Default select</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} style={{ color: '#444444' }}>
                Activity
              </Form.Label>
              <Col sm={5}>
                <Form.Select
                  defaultValue="select"
                  placeholder="Select"
                  style={{ width: '100%' }}
                >
                  <option value="1">Activity</option>
                  <option value="0">Inactive</option>
                </Form.Select>
              </Col>

              <Col sm={4}>
                <DatePicker placeholder="since" />
              </Col>
            </Form.Group>
          </Col>
          <Col md={4} style={{ textAlign: 'end' }}>
            <Button
              variant="outline-primary"
              className="rounded-pill me-1 mb-1"
              style={{ padding: '8px 22px' }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default SearchMember;
