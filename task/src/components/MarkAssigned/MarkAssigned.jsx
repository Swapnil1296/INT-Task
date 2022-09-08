import React from "react";
import { Col, Row } from "react-bootstrap";

import data from "../data/students.json";

const MarkAssigned = () => {
  const showData = data["part-1"];

  return (
    <>
      {showData &&
        showData.map((e, i) => (
          <Row  key={i}>
            <Col className=" text-center border" xs lg="1">
              {e.id}
            </Col>
            <Col
              className=" text-center border fst-normal  text-primary "
              xs
              lg="2"
            >
              {e.subject}
            </Col>
            <Col className=" text-center border " xs lg="9">
              {/*  out of marks */}
              <Row>
                <Col className=" text-center border">
                  {e.FA}
                </Col>
                <Col className=" text-center border">
                  {e["oral-1"]}
                </Col>
                <Col className=" text-center border ">
                  {e.BA}
                </Col>
                <Col className=" text-center border ">
                  {e["Oral-2"]}
                </Col>
                 
                <Col className=" text-center border ">
                  {e.BA + e.FA + e["Oral-2"] + e["oral-1"]}
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
    </>
  );
};

export default MarkAssigned;
