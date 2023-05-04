import React from 'react';
import Axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Row, Col, Divider, message, Modal, Image } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import endpoint from '../../../utils/endpoint';
import { getErrorAlert } from 'helpers/utils';
import Loading from 'components/loading';
import handleError from 'utils/handleError';
import { setMemberMenuData } from 'redux/slices/currentDataSlice';
// import { Link } from 'react-router-dom';
import { Dropdown, ButtonGroup, Table } from 'react-bootstrap';
// import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { ExclamationCircleFilled } from '@ant-design/icons';

const { Title, Text } = Typography;
const { confirm } = Modal;
const tdpadding = {
  paddingLeft: '0px',
  color: '#444444'
};
const tdright = { textAlign: 'right', color: '#444444' };
// const tdright = { textAlign: 'right', color: '#444444' };
function ViewAllVouchers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _isMounted = useRef(false);
  let { id } = useParams();
  const [loadingSchema, setLoadingSchema] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [memberData, setMemberData] = useState(null);
  const initPageModule = async () => {
    try {
      _isMounted.current && setLoadingSchema(true);
      const ep = endpoint.getDataAllVoucherSchemaEndpoint(`view/${id}`);
      console.log(ep, 'ep');
      const moduleSchemaRes = await Axios.get(ep);
      let schema = moduleSchemaRes.data;
      console.log('menuSchema:->', schema);
      let layoutSchema = schema.layout;
      console.log(schema.menu, ' schema.menu schema.menu schema.menu');
      dispatch(setMemberMenuData({ currentMemberMenuSchema: schema.menu })); // store current member menu

      const memberRes = await Axios.get(
        endpoint.getModuleDataEndpoint(`bb_loyal2_vouchers/${id}`)
      );
      setMemberData(memberRes.data);
      console.log(memberRes, 'memberres');
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
  // let layoutFields = layoutData.options.fields;

  let layoutFields = layoutData.options.fields;

  const editUser = id => {
    navigate(`/bb_loyal2_vouchers/edit/${id}`);
  };
  const showDeleteConfirm = id => {
    confirm({
      title: 'Are you sure delete?',
      icon: <ExclamationCircleFilled />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDelete(id);
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };
  const onDelete = async id => {
    try {
      _isMounted.current && setLoadingSchema(true);

      const deleteMember = await Axios.delete(
        endpoint.getDataAddEndpoint(`bb_loyal2_vouchers/${id}`)
      );
      const user = deleteMember.data;
      if (user.error) return message.error(user.error);
      message.success('Deleted successful!');
    } catch (error) {
      handleError(error, true);
    } finally {
      _isMounted.current && setLoadingSchema(false);
      navigate('/all_vouchers');
    }
  };
  return (
    <>
      <Row className="mx-4 mt-3">
        <Col span={24}>
          <Title level={3}>Vouchers</Title>
        </Col>
      </Row>
      <Divider />
      <Row className="mx-4" align="middle">
        <Col span={10}>
          <Title level={4}>Viewing voucher</Title>
        </Col>
        <Col span={13} style={{ textAlign: 'end' }}>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              id="dropdown-custom-1"
              variant="outline-primary"
              className="rounded-pill px-4 py-2"
            >
              Select action
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              <Dropdown.Item>
                <Text strong className="text-label">
                  Preview
                </Text>
              </Dropdown.Item>
              <Dropdown.Item>
                <Text strong className="text-label">
                  Issue voucher
                </Text>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => editUser(id)}>
                <Text strong className="text-label">
                  Edit
                </Text>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => showDeleteConfirm(id)}>
                <Text strong className="text-label">
                  Delete
                </Text>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="mx-4">
        <Col span={20}>
          <Table responsive style={{ marginTop: '60px', width: '100%' }}>
            <tbody style={tdpadding}>
              {layoutFields.name ? (
                <tr>
                  <td style={tdpadding}>
                    <Text strong className="text-label">
                      {layoutFields.name}
                    </Text>
                  </td>
                  <td style={tdright}>
                    <Text strong className="text-label">
                      {memberData ? memberData.name : ''}
                    </Text>
                  </td>
                </tr>
              ) : null}
              {layoutFields.points_requiredNUM ? (
                <tr>
                  <td style={tdpadding}>
                    <Text strong className="text-label">
                      {layoutFields.points_requiredNUM}
                    </Text>
                  </td>
                  <td style={tdright}>
                    <Text strong className="text-label">
                      {memberData ? memberData.points_requiredNUM : ''}
                    </Text>
                  </td>
                </tr>
              ) : null}
              {layoutFields.code ? (
                <tr>
                  <td style={tdpadding}>
                    <Text strong className="text-label">
                      {layoutFields.code}
                    </Text>
                  </td>
                  <td style={tdright}>
                    <Text strong className="text-label">
                      {memberData ? memberData.code : ''}
                    </Text>
                  </td>
                </tr>
              ) : null}
              {layoutFields.imageISfile ? (
                <tr>
                  <td style={tdpadding}>
                    <Text strong className="text-label">
                      {layoutFields.imageISfile}
                    </Text>
                  </td>
                  <td style={tdright}>
                    {memberData ? (
                      <Image.PreviewGroup
                        preview={{
                          onChange: (current, prev) =>
                            console.log(
                              `current index: ${current}, prev index: ${prev}`
                            )
                        }}
                      >
                        <Image width={150} src="/img/coffee.png" />
                      </Image.PreviewGroup>
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              ) : null}
              {layoutFields.available_for_self_selectionYN ? (
                <tr>
                  <td style={tdpadding}>
                    <Text strong className="text-label">
                      {layoutFields.available_for_self_selectionYN}
                    </Text>{' '}
                  </td>
                  <td style={tdright}>
                    <Text strong className="text-label">
                      {memberData
                        ? memberData.available_for_self_selectionYN
                        : ''}
                    </Text>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </Col>
      </Row>
      {/* <Row className="mx-4 mt-7" align="middle" justify="start">
        <Col span={11}>
          <Text strong className="text-label">
            {layoutFields.name}
          </Text>
        </Col>
        <Col span={10} className="px-5">
          <Text strong className="text-label">
            {memberData.name}
          </Text>
        </Col>
      </Row>
      <Row className="mx-4 mt-4" align="middle" justify="start">
        <Col span={11}>
          <Text strong className="text-label">
            {layoutFields.points_requiredNUM}
          </Text>
        </Col>
        <Col span={10} className="px-5">
          <Text strong className="text-label">
            {memberData.points_requiredNUM}
          </Text>
        </Col>
      </Row>
      <Row className="mx-4 mt-4" align="middle" justify="start">
        <Col span={11}>
          <Text strong className="text-label">
            {layoutFields.code}
          </Text>
        </Col>
        <Col span={10} className="px-5">
          <Text strong className="text-label">
            {memberData.code}
          </Text>
        </Col>
      </Row>
      <Row className="mx-4 mt-4" align="middle" justify="start">
        <Col span={11}>
          <Text strong className="text-label">
            {layoutFields.imageISfile}
          </Text>
        </Col>
        <Col span={10}>
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`)
            }}
          >
            <Image width={150} src="/img/coffee.png" />
          </Image.PreviewGroup>
        </Col>
      </Row>
      <Row className="mx-4 mt-4" align="middle" justify="start">
        <Col span={11}>
          <Text strong className="text-label">
            {layoutFields.available_for_self_selectionYN}
          </Text>
        </Col>
        <Col span={10} className="px-5">
          <Text strong className="text-label">
            {memberData.available_for_self_selectionYN}
          </Text>
        </Col>
      </Row> */}
    </>
  );
}
export default ViewAllVouchers;
