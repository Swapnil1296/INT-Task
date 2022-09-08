import React from "react";
import { Col, Row } from "react-bootstrap";
import TotalMarks from "../TotalMarks/TotalMarks";
import data from "../data/students.json";

const MarkAssigned = () => {
  const showData = data["part-1"];
  
  return (
    <>
    {showData && showData.map((e,i)=>(
      
      <Row className="mt-1" key={i}>
               <Col className=" text-center border fw-normal p-1" xs lg="1">
          0{e.id}
        </Col>
        <Col
          className=" text-center border fw-normal text-primary p-1"
          xs
          lg="2"
        >
        {e.subject}
        </Col>
        <Col className=" text-center border " xs lg="9">
          {/*  out of marks */}
          <Row>
            <Col className=" text-center border fw-normal text-primary p-1">
              {e.FA}
            </Col>
            <Col className=" text-center border fw-normal text-primary p-1">
              {e["oral-1"]}
            </Col>
            <Col className=" text-center border fw-normal text-primary p-1">
            {e.BA}
            </Col>
            <Col className=" text-center border fw-normal text-primary p-1">
            {e["Oral-2"]}
            </Col>
            <Col className=" text-center border fw-normal text-primary p-1">
              
              {  e.BA + e.FA + e["Oral-2"] + e["oral-1"]}
            </Col>
          </Row>
        </Col>
      </Row>
    ))}
    </>
  );
};

export default MarkAssigned;
