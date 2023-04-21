import { useParams } from 'react-router-dom';
import React from 'react';
import { Row, Col } from 'antd';
import HistoryMember from './members/HistoryMember';
import SettingsMember from './members/SettingsMember';
import ListMember from './members/ListMember';
import AddMember from './members/AddMember';
import SearchMember from './members/SearchMember';
import CsvMember from './members/CsvMember';
import MemberMenu from './members/MemberMenu';
import NewMenu from './members/NewMenu';
import ViewMember from './members/ViewMember';
import UpdateMember from './members/UpdateMember';
function PageComponent() {
  let { routeKey } = useParams();
  console.log(routeKey, 'this is routekey');
  if (routeKey == 'settings') {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <SettingsMember></SettingsMember>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}></Col>
      </Row>
    );
  } else if (routeKey == 'list') {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <ListMember></ListMember>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}></Col>
      </Row>
    );
  } else if (routeKey == 'add') {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <AddMember></AddMember>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}></Col>
      </Row>
    );
  } else if (routeKey == 'search') {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <SearchMember></SearchMember>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}></Col>
      </Row>
    );
  } else if (routeKey == 'csv') {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <CsvMember></CsvMember>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}></Col>
      </Row>
    );
  } else if (!routeKey) {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <HistoryMember></HistoryMember>
        </Col>
        <Col xs={1} sm={1} md={1} lg={2} xl={1} xxl={2}></Col>
      </Row>
    );
  } else if (routeKey == 'view') {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <ViewMember></ViewMember>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}></Col>
      </Row>
    );
  } else if (routeKey == 'edit') {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <UpdateMember></UpdateMember>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}></Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={22}>
          <MemberMenu></MemberMenu>
          <NewMenu></NewMenu>
        </Col>
        <Col xs={1} sm={1} md={1} lg={2} xl={1} xxl={2}></Col>
      </Row>
    );
  }
}

export default PageComponent;
