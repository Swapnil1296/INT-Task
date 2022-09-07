import React from 'react'
import {Button, Card, Col, Container, Row, Stack, Table} from 'react-bootstrap'
const UiCards = () => {
  return (
    <>
<Container className='container fluid'>
<Row className='m-2 '>
    <Col className=' text-center border' ><h4>First Examination 29</h4></Col>
</Row>
<Row className='m-2'>
    <Col className=' text-center border'><h5>First Examination 29</h5></Col>
</Row>
<Row className='m-2'>
    <Col className=' text-center border'><h5>First Examination 29</h5></Col>
</Row>

    <Row className='m-2 border'>
        <Col  className=' text-center border'  xs lg="7">
            <Row className='border'>

            <h5 style={{color:"blue"}}>Part-I</h5>
            </Row>
           <Row>
           <Col  className=' text-center border fw-bold'>SrNo</Col>
           <Col  className=' text-center border fw-bold text-primary'>Subjects</Col>
           <Col  className=' text-center border'>
            <Row>
                <Col>MAA</Col>
                <Col>MAA</Col>
                <Col>MAA</Col>
                <Col>MAA</Col>
                <Col>MAA</Col>

            </Row>
           </Col>
           <Col  className=' text-center border'>Name</Col>
           </Row>
   
        </Col>
        <Col className=' text-center border'><h5 style={{color:"blue"}}>Part-II</h5></Col>
      </Row>

   
</Container>
    </>
    
  )
}

export default UiCards