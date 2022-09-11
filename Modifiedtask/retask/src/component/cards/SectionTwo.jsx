import React from 'react'
import { Col, Row } from 'react-bootstrap';

const SectionTwo = ({ gradeData }) => {
  console.log(gradeData)
  return (
    <>
      {gradeData &&
        gradeData.map((item, i) => (
          <Row key={i} lg={5} md={5} xl={5} xxl={5} xs={5} sm={5} >
            <Col
              className="border border-dark  fw-bold p-1"
              style={{fontSize:"16px"}}
              lg={7}
              md={7}
              xl={7}
              xxl={7}
              xs={7}
              sm={7}
            > {item.topic}</Col>
            <Col
              className="border border-dark text-center fw-bold"
              lg={5}
              md={5}
              xl={5}
              xxl={5}
              xs={5}
              sm={5}
            >
            {item.grade}
            </Col>
          </Row>
        ))}
    </>
  );
}

export default SectionTwo
