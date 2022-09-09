import { Col, Container, Row } from "react-bootstrap";
import MarksTable from "./MarksTable";

const UserView = () => {
  return (
    <>
      <Container className="border border-dark ">
        <header>
          <Row className="border  ">
            <h5 className="text-danger fs-4">
              First Terminal Examination 2018-19
            </h5>
          </Row>
          <Row className="border ">
            <h5 className="text-primary fs-5">Academic Performance</h5>
          </Row>
          <Row>
            <Col className=" border" sm={12} md={6}>
              <h5 className="text-primary fw-bold ">
                Part-I:- Scholastic Areas
              </h5>
              <Row className="">
                <Col className=" fw-bold p-0 border" lg={1}>
                  SrNO
                </Col>
                <Col className="border fw-bold p-0 border"> Subjects</Col>
                <Col className=" fw-bold p-0 border">
                  <MarksTable />
                </Col>
              </Row>
            </Col>
            <Col>
              <h5 className="text-primary fw-bold">
                Part-II:- Scholastic Areas
              </h5>
            </Col>
          </Row>
        </header>
      </Container>
    </>
  );
};

export default UserView;
