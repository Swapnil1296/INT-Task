import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Scale from './Scale';

const SectionThree = () => {
  return (
    <>
      <Row className="text-center fw-bold  mx-2 my-1">
        <p>Part-III : Attendence</p>
      </Row>
      <Row className="text-center fw-bold border border-dark  mx-2">
        <Col
          className="border border-dark"
          lg={2}
          md={2}
          xl={2}
          xxl={2}
          xs={3}
          sm={3}
        ></Col>
        <Col
          className="border border-dark"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={3}
          sm={3}
        >
          No. of Working Days
        </Col>
        <Col
          className="border border-dark"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={3}
          sm={3}
        >
          No. of Days Present
        </Col>
        <Col
          className="border border-dark p-0 m-0"
          lg={2}
          md={2}
          xl={2}
          xxl={2}
          xs={3}
          sm={3}
        >
          Percentage
        </Col>
      </Row>
      <Row className="text-center fw-bold border border-dark  mx-2">
        <Col
          className="border border-dark"
          lg={2}
          md={2}
          xl={2}
          xxl={2}
          xs={3}
          sm={3}
        >
          TERM-1
        </Col>
        <Col
          className="border border-dark"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={3}
          sm={3}
        >
          83
        </Col>
        <Col
          className="border border-dark"
          lg={4}
          md={4}
          xl={4}
          xxl={4}
          xs={3}
          sm={3}
        >
          83
        </Col>
        <Col
          className="border border-dark"
          lg={2}
          md={2}
          xl={2}
          xxl={2}
          xs={3}
          sm={3}
        >
          100
        </Col>
      </Row>
      <Row className=" fw-bold  mx-2">
        <Col lg={2} md={2} xl={2} xxl={2} xs={3} sm={3}>
          C.G.P. : 9.6
        </Col>
        <Col lg={4} md={4} xl={4} xxl={4} xs={3} sm={3}></Col>
        <Col lg={4} md={4} xl={4} xxl={4} xs={3} sm={3}></Col>
        <Col className="text-end" lg={2} md={2} xl={2} xxl={2} xs={3} sm={3}>
          Grade: A 1
        </Col>
      </Row>
      <Row className="   mx-2 ">
        <Col>
          Teacher's Remark - <span className="fw-bold">Excellent</span>
        </Col>
      </Row>
      <Row className=" fw-bold  mx-2 my-4">
        <Col lg={4} md={4} xl={4} xxl={4} xs={4} sm={4}>
         Student's Signature
        </Col>
        {/* <Col lg={4} md={4} xl={4} xxl={4} xs={4} sm={4}></Col> */}
        <Col className='text-center' lg={4} md={4} xl={4} xxl={4} xs={4} sm={4}>Parent's Signature</Col>
        <Col className="text-end" lg={4} md={4} xl={4} xxl={4} xs={4} sm={4}>
         Principle Signature
        </Col>
          </Row>
          <Scale/>
    </>
  );
};

export default SectionThree;
