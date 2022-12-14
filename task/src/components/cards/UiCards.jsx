import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MarkAssigned from "../MarkAssigned/MarkAssigned";
import TotalMarks from "../TotalMarks/TotalMarks";
import Section2 from "./Section2";
const UiCards = () => {
  return (
    <>
      <Container className="border primary mt-4">
        <Row className="mt-2 ">
          <Col className=" text-center border">
            <h4>First Examination 29</h4>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className=" text-center border">
            <h5>First Examination 29</h5>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className=" text-center border">
            <h5>First Examination 29</h5>
          </Col>
        </Row>

        <Row className="mt-2 border">
          <Col className=" text-center border" xs lg="7">
            <Row className="border">
              <h5 style={{ color: "blue" }}>Part-I -:Scholastic Areas</h5>
            </Row>
            <Row className="mt-1">
              <Col className=" text-center border fw-bold p-2" xs lg="1">
                SrNo
              </Col>
              <Col
                className=" text-center border fw-bold text-primary p-2"
                xs
                lg="2"
              >
                Subjects
              </Col>
              <Col className=" text-center border" xs lg="9">
                <Row>
                  <Col className=" text-center border fw-normal p-1">FA</Col>
                  <Col className=" text-center border fw-normal p-1">Oral</Col>
                  <Col className=" text-center border fw-normal p-1">BA</Col>
                  <Col className=" text-center border fw-normal p-1">Oral</Col>
                  <Col className=" text-center border fw-normal fs-6 p-1">
                    Total
                  </Col>
                </Row>
                {/*  out of marks */}
                <TotalMarks />
              </Col>
            </Row>
            <MarkAssigned />
          </Col>
          <Col className="  border-primary      ">
            <Row className="border text-center">
              <h5 style={{ color: "blue" }}>Part-II :-Co-Scholastic Areas</h5>
            </Row>
         <Section2/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiCards;
