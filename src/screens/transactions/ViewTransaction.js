import React from 'react';
import { Typography,Row, Col, Button } from 'antd';
import { Table } from 'react-bootstrap'

const { Title } = Typography;
function ViewTransaction(){
    
    
     
    
    return(
        <>
            
            <Row>
                <Col>
                    <Title level={3}>Viewing transaction</Title>
                </Col>
                <Col offset={12}>
                    <Button style={{marginRight:"20px"}} >Edit</Button>
                    <Button >Delete</Button>
                </Col>
            </Row>
            <br/><br/>
            <Table responsive>
                
                <tbody>
                    <tr>
                        <td>Member</td>
                        <td>M00001 Max Max</td>
                    </tr>
                    <tr>
                        <td>Total Value</td>
                        <td>100.00</td>
                    </tr>
                    <tr>
                        <td>Transaction Date</td>
                        <td>08-02-2023</td>
                    </tr>
                    <tr>
                        <td>Code</td>
                        <td>T00001</td>
                    </tr>
                    <tr>
                        <td>Points</td>
                        <td>100</td>
                    </tr>
                    
                </tbody>
            </Table>
        </>
    )
}
export default ViewTransaction;