import React from "react";
import { Col, Row } from "react-bootstrap";
import data from '../data/students.json'

const Section2 = () => {
    const showData = data["part-2"];
  return (
    <>
      
      <Row className="mt-1">
        <Col className=" border fw-normal p-1" xs lg='8'></Col>
        <Col className=" border fw-bold p-1" xs lg='4'>Grade</Col>
      </Row>
      {showData && showData.map((e,i)=>(
         <Row className="mt-1" key={i}>
         <Col className=" border fw-normal p-1 fs-5" xs lg='8'>{e.topic}</Col>
         <Col className=" border fw-bold p-1 text-center " xs lg='4'>{e.grade}</Col>
       </Row>
      ))}
    </>
  );
};

export default Section2;
