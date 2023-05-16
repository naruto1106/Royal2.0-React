import React from 'react';
import {
  Typography,
  Row,
  Col,
  Switch,
  Tooltip,
  Divider,
  Input,
  Badge,
  InputNumber,
  Upload,
  Image
} from 'antd';
import { useState } from 'react';

import { QuestionCircleOutlined, DownOutlined } from '@ant-design/icons';
import { Tabs, Tab, Button, Card } from 'react-bootstrap';

const { Title, Text, Paragraph } = Typography;

const tooltip_style = {
  color: 'black',
  padding: '14px 11px 45px 18px',
  width: '290px',
  height: '90px',
  fontSize: '10px',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px rgba(217,217,217,0.66)'
};

const inputBorderRadius = {
  borderRadius: '10px',
  width: '100%'
};
function QuickScanSettingPage() {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
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
  const handleChange = info => {
    console.log(info, 'uploading');
  };
  return (
    <>
      <Card className="overflow-hidden z-index-1 card-main_layout">
        <Card.Body className="p-0">
          <Row className="mx-4 mt-4">
            <Col span={24}>
              <Title level={3}>QuickScan, Tags and Barcodes</Title>
            </Col>
          </Row>
          <Row className="mt-4 mx-4">
            <Col>
              <Paragraph>
                This page gives you URLs and barcodes you can use to automate
                you member's interaction in-store.
              </Paragraph>
              <Paragraph>
                For more info see
                <a href="#"> this article </a>
              </Paragraph>
            </Col>
          </Row>

          <Row className="mx-4 mt-4">
            <Col span={22}>
              <Tabs
                defaultActiveKey="access"
                style={{ marginTop: '30px' }}
                id="uncontrolled-tab-example"
                justify
                className="mb-3"
              >
                <Tab
                  eventKey="access"
                  title="QuickScan Access"
                  className="border-0 p-0"
                >
                  <Row className="mt-5 mx-4">
                    <Col>
                      <Paragraph strong>
                        Your QuickScan URL{' '}
                        <a href="#"> https://63bff7ca241de.loyal2.com/?Scan</a>
                      </Paragraph>
                    </Col>
                  </Row>
                  <Divider />
                  <Row className="mt-5">
                    <Col span={15}>
                      <Title level={4}>Enable QuickScan mode</Title>
                    </Col>
                    <Col span={9} style={{ textAlign: 'end' }} className="my-1">
                      <Tooltip
                        placement="bottom"
                        color="white"
                        overlayInnerStyle={tooltip_style}
                        title="For the safest search we suggest that you start by selecting ALL the fields below to YES- this will ensure that you have the smallest chance of merging records that should not be merged."
                      >
                        <QuestionCircleOutlined
                          style={{
                            backgroundColor: '#359dd9',
                            borderRadius: '50%',
                            border: 'none',
                            color: 'white',
                            fontSize: '20px'
                          }}
                        />
                      </Tooltip>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <Text className="text-label " strong>
                        Enter a special QuickScan Password
                      </Text>
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col span={13}>
                      <Input style={inputBorderRadius} className="my-1" />
                    </Col>
                    <Col span={9} style={{ textAlign: 'right' }}>
                      <Button
                        variant="outline-primary"
                        className="rounded-pill px-4 py-2"
                      >
                        &nbsp;Update Password&nbsp;
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mt-4" align="middle">
                    <Col span={11}>
                      <Text className="text-label" strong>
                        Allow backoffice users to login to QuickScan
                      </Text>
                    </Col>
                    <Col span={2} style={{ textAlign: 'right' }}>
                      <Switch onChange={onChange} />
                    </Col>
                    <Col span={9} style={{ textAlign: 'right' }}>
                      <Button
                        variant="outline-primary"
                        className="rounded-pill px-4 py-2"
                      >
                        Update QuickScan
                      </Button>
                    </Col>
                    <Col span={2} style={{ textAlign: 'end' }} className="my-2">
                      <Tooltip
                        placement="bottom"
                        color="white"
                        overlayInnerStyle={tooltip_style}
                        title="For the safest search we suggest that you start by selecting ALL the fields below to YES- this will ensure that you have the smallest chance of merging records that should not be merged."
                      >
                        <QuestionCircleOutlined
                          style={{
                            backgroundColor: '#359dd9',
                            borderRadius: '50%',
                            border: 'none',
                            color: 'white',
                            fontSize: '20px'
                          }}
                        />
                      </Tooltip>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <Text className="text-label" strong>
                        Quickscan mode is enabled
                      </Text>
                      &nbsp;&nbsp;
                      <Badge
                        style={{ backgroundColor: 'green' }}
                        count="&nbsp;"
                        size="small"
                      ></Badge>
                    </Col>
                  </Row>
                </Tab>
                <Tab
                  eventKey="setting"
                  title="QuickScan Settings"
                  className="border-0 "
                >
                  <Row className="mt-5">
                    <Col span={15}>
                      <Text className="text-label" strong>
                        Number of points to award per QuickScan
                      </Text>
                    </Col>
                    <Col span={9} style={{ textAlign: 'end' }} className="my-1">
                      <Tooltip
                        placement="bottom"
                        color="white"
                        overlayInnerStyle={tooltip_style}
                        title="For the safest search we suggest that you start by selecting ALL the fields below to YES- this will ensure that you have the smallest chance of merging records that should not be merged."
                      >
                        <QuestionCircleOutlined
                          style={{
                            backgroundColor: '#359dd9',
                            borderRadius: '50%',
                            border: 'none',
                            color: 'white',
                            fontSize: '20px'
                          }}
                        />
                      </Tooltip>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={20}>
                      <Input style={inputBorderRadius} />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col span={20}>
                      <Button
                        variant="outline-primary"
                        className="rounded-pill px-4 py-2"
                        onClick={() => setting_click()}
                      >
                        Advanced QuickScan points options{' '}
                        <DownOutlined
                          style={{ fontSize: '14px', marginLeft: '10px' }}
                        />
                      </Button>
                    </Col>
                    <Col span={4} style={{ textAlign: 'end' }} className="my-1">
                      <Tooltip
                        placement="bottom"
                        color="white"
                        overlayInnerStyle={tooltip_style}
                        title="For the safest search we suggest that you start by selecting ALL the fields below to YES- this will ensure that you have the smallest chance of merging records that should not be merged."
                      >
                        <QuestionCircleOutlined
                          style={{
                            backgroundColor: '#359dd9',
                            borderRadius: '50%',
                            border: 'none',
                            color: 'white',
                            fontSize: '20px'
                          }}
                        />
                      </Tooltip>
                    </Col>
                  </Row>
                  {setting_show == true && (
                    <>
                      <Row className="mt-4">
                        <Col span={22}>
                          <Paragraph
                            // style={{ textAlign: 'justify' }}
                            className="text-label"
                          >
                            Enter a single amount in points to have a single
                            button <br /> presented to the operator (ie<b>7</b>
                            ). <br />
                          </Paragraph>
                          <Paragraph className="mt-4">
                            Separate with commas if more than one amount/button
                            is
                            <br /> required(ie <b> 3,5,10,20 </b>). Use colons
                            to label buttons(ie <br />
                            <b> Eggs:3, Bacon:5, Toast:10, Ketchup:20</b>).
                          </Paragraph>
                          <Paragraph className="mt-4">
                            For free-form points entry enter the word{' '}
                            <b> free.</b>
                          </Paragraph>
                          <Paragraph className="mt-4">
                            For a calculator enter the word <b> calc </b>.
                          </Paragraph>
                          <Paragraph className="mt-4">
                            Add <b> min:amount </b> to the <b> calc </b> command
                            to set a minimum
                            <br />
                            before points will be awarded using the calculators
                            above (ie
                            <br /> <b> calc min:10 </b>).
                          </Paragraph>
                          <Paragraph className="mt-4">
                            For auto points allocation enter{' '}
                            <b> auto: points </b> where points <br /> is the
                            number of points(ie<b> auto:7</b>).
                          </Paragraph>
                        </Col>
                      </Row>
                    </>
                  )}
                  <Row className="mt-4">
                    <Col span={22}>
                      <Paragraph className="text-label">
                        For more advanced functionality and flexibility you can
                        also add <a href="#">non-transaction promotions </a>{' '}
                        with an auto-allocate-on-event set as QuickScan.
                      </Paragraph>
                    </Col>
                    <Col span={2} style={{ textAlign: 'end' }}>
                      <Tooltip
                        placement="bottom"
                        color="white"
                        overlayInnerStyle={tooltip_style}
                        title="For the safest search we suggest that you start by selecting ALL the fields below to YES- this will ensure that you have the smallest chance of merging records that should not be merged."
                      >
                        <QuestionCircleOutlined
                          style={{
                            backgroundColor: '#359dd9',
                            borderRadius: '50%',
                            border: 'none',
                            color: 'white',
                            fontSize: '20px'
                          }}
                        />
                      </Tooltip>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={18}>
                      <Text className="text-label" strong>
                        No. of QuickScans per mem/day :
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'right' }} span={2}>
                      <InputNumber
                        style={{ width: '100%', borderRadius: '10px' }}
                        size="small"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        For multi-branch: apply QuickScan points globally?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        Allow operator to list member vouchers?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        Allow operator to assist selecting vouchers?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        Allow operator to change member number/code?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        Allow operator to assist member with password reset?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        Hide QuickScan link in public Micro-site menu?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        Require a PIN for each operator?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        Open QuickScan lookups in a new tab?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={17}>
                      <Text className="text-label" strong>
                        Show QuickScan in Horizontal Mode?
                      </Text>
                    </Col>
                    <Col style={{ textAlign: 'end' }} span={3}>
                      <Switch onChange={onChange} />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col>
                      <Button
                        variant="outline-primary"
                        className="rounded-pill px-4 py-2"
                      >
                        Update settings
                      </Button>
                    </Col>
                  </Row>
                </Tab>
                <Tab
                  eventKey="barcode"
                  title="View a member's QR/barcode"
                  className="border-0"
                >
                  <Row className="mt-5">
                    <Col>
                      <Text className="text-label" strong>
                        Select Number
                      </Text>
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col span={16}>
                      <Input style={inputBorderRadius} className="my-1" />
                    </Col>
                    <Col span={8} style={{ textAlign: 'end' }}>
                      <Upload
                        colorBorder="blue"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        onChange={handleChange}
                      >
                        <Button
                          variant="outline-primary"
                          className="rounded-pill px-4 py-2"
                        >
                          View QR/barcode
                        </Button>
                      </Upload>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col>
                      <Title level={4}>Marry Smith</Title>
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col>
                      <Title level={5}>M00001</Title>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col>
                      <Text className="text-label" strong>
                        QuickScan URL
                      </Text>
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col span={16}>
                      <Input
                        style={inputBorderRadius}
                        placeholder="https://nocompany.loyal2.com/?Scan&code=M00001"
                        className="my-1"
                      />
                    </Col>
                    <Col span={8} style={{ textAlign: 'end' }}>
                      <Upload
                        colorBorder="blue"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        onChange={handleChange}
                      >
                        <Button
                          variant="outline-primary"
                          className="rounded-pill px-4 py-2"
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use&nbsp;
                          URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Button>
                      </Upload>
                    </Col>
                  </Row>
                  <Row className=" mt-5">
                    <Col span={9} style={{ textAlign: 'center' }}>
                      <Text className="text-label" strong>
                        QuickScan URL QR code
                      </Text>
                    </Col>
                  </Row>
                  <Row className=" mt-4">
                    <Col span={9} style={{ textAlign: 'center' }}>
                      <Image width={200} height={200} src="/img/QR_1.svg" />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={9} style={{ textAlign: 'center' }}>
                      <Text style={{ color: '#359DD9' }} strong>
                        Print QR code
                      </Text>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col span={9} style={{ textAlign: 'center' }}>
                      <Text style={{ color: '#359DD9' }} strong>
                        Print member card
                      </Text>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col>
                      <Title level={4}>
                        Scan member code without the QuickScan URL
                      </Title>
                    </Col>
                  </Row>
                  <Row className=" mt-5">
                    <Col span={9} style={{ textAlign: 'center' }}>
                      <Text className="text-label" strong>
                        QR code
                      </Text>
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                      <Text className="text-label" strong>
                        2D barcode
                      </Text>
                    </Col>
                  </Row>
                  <Row className=" mt-4">
                    <Col span={9} style={{ textAlign: 'center' }}>
                      <Image width={200} height={200} src="/img/QR_2.svg" />
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                      <Image width={200} height={200} src="/img/QR_3.svg" />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col span={9} style={{ textAlign: 'center' }}>
                      <Text style={{ color: '#359DD9' }} strong>
                        Print QR code
                      </Text>
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                      <Text style={{ color: '#359DD9' }} strong>
                        Print QR code
                      </Text>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col span={9} style={{ textAlign: 'center' }}>
                      <Text style={{ color: '#359DD9' }} strong>
                        Print member card
                      </Text>
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                      <Text style={{ color: '#359DD9' }} strong>
                        Print member card
                      </Text>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
export default QuickScanSettingPage;
