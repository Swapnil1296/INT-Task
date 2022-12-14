import React from "react";
import { Col, Row } from "react-bootstrap";

const TotalMarks = () => {
  const marks = [30, 40, 55, 66, 77];
  return (
    <>
      <Row>
        {marks &&
          marks.map((e, i) => (
            <Col className=" text-center border" key={i}>
              {e}
            </Col>
          ))}
      </Row>
    </>
  );
};

export default TotalMarks;
