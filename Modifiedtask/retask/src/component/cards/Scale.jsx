import React from 'react';
import {Col, Row} from 'react-bootstrap'
import data from '../data/data.json';

const Scale = () => {
  const showData= data["part-3"]
console.log(showData)
  return (
    <>
      <Row>
        <Col className="text-center fw-bold "><span className='fw-bold fs-4'>G</span>RADING <span className='fw-bold fs-4'>S</span>CALE</Col>
      </Row>

      <Row className="mt-3"> 
        <Col></Col>
        <Col lg={6} md={6} sm={8} xs={12}>
       q
          <Row className="border border-bottom-0 border-dark fw-bold ">
            <Col lg={4} md={4} sm={4} xs={4} className>
              <span className="fonts"> MARKS RANGE</span>
             
            </Col>
            <Col
              lg={4}
              md={4}
              sm={4}
              xs={4}
              className="border-start border-end border-dark"
            >
              <span className="fonts">GRADES</span>
              
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <span className="fonts">  REMARKS</span>
            
            </Col>
          </Row>

          {showData  && showData.map((el,i) => (
            <Row className="border border-bottom-0 border-dark " key={i}>
              <Col
                lg={4}
                md={4}
                sm={4}
                xs={4}
                className="border-bottom-0 border-dark "
              >
                <span className="fonts"> {el.rank}</span>
               
              </Col>
              <Col
                lg={4}
                md={4}
                sm={4}
                xs={4}
                className="border-start border-end border-bottom-0 border-dark "
              >
                <span className="fonts">{el.grades}</span>
                
              </Col>
              <Col
                lg={4}
                md={4}
                sm={4}
                xs={4}
                className="border-bottom-0 border-dark "
              >
                     <span className="fonts">{el.remark}</span>
                
              
              </Col>
            </Row>
          ))}
        </Col>
        <Col></Col>
      </Row>
      <Row className='border border-dark'>
        <Col className="text-center  fst-italic">Our Parents are seen God ont the Earth</Col>
      </Row>
    </>
  );
};

export default Scale;
