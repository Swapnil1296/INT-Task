import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SectionOne = () => {
  return (
    <>
    <Col className='border p-2'lg md xl={1}  xs={2}>Sr.No</Col>
    <Col className='border  fw-bold text-primary p-3' lg md xl={4}  xs={3}>SUBJECTS</Col>
    <Col lg md xl={7}  xs={7}>
    <Row className='border text-center'>
     <Col className='border pl-sm-0' lg md xl={2} xs={2} >FA</Col> 
     <Col className='border pl-sm-0' lg md xl={2} xs={2} >Oral</Col> 
     <Col className='border pl-sm-0' lg md xl={2} xs={2} >BA</Col> 
     <Col className='border pl-sm-0' lg md xl={2} xs={2} >Oral</Col> 
     <Col className=' border pl-sm-0'  lg md xl={4} xs={4} >OverAll</Col> 
     
    </Row>
    <Row className='border text-center'>
    <Col className='border 'xs={2} lg md xl={2}>10</Col> 
     <Col className='border 'xs={2} lg md xl={2}>20</Col> 
     <Col className='border ' xs={2} lg md xl={2}>30</Col> 
     <Col className='border ' xs={2} lg md xl={2}>40</Col> 
     <Col className='border '  xs={4} lg md xl={4}>50</Col> 
    </Row>
    </Col>
   
    </>
  )
}

export default SectionOne