import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
const UiCards = () => {
  return (
    <>
      <Container  className="border primary mt-4">
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
                <Row>
                  <Col className=" text-center border">20</Col>
                  <Col className=" text-center border">100</Col>
                  <Col className=" text-center border">70</Col>
                  <Col className=" text-center border">80</Col>
                  <Col className=" text-center border">90</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className=" text-center border">
            <h5 style={{ color: "blue" }} class>Part-II :-Co-Scholastic Areas</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiCards;
