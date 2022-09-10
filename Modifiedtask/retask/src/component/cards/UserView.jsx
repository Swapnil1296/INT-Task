import {Col, Container, Row} from 'react-bootstrap';

import SectionOne from './SectionOne';
import studentData from '../data/data.json'

const UserView = () => {
  const data = studentData["part-1"]
  console.log(data)
  return (
    <>
      <Container className="border border-dark ">
        <Row className="border  ">
          <p className="text-danger  text-center fw-bold">
            First Terminal Examination 2018-19
          </p>
        </Row>
        <Row className="border-dark ">
          <p className="text-primary fw-bold text-center">
            Academic Performance
          </p>
        </Row>
        <Row>
          {/*Section one  */}
          <Col
            className="border border-dark"
            lg={7}
            md={7}
            xl={7}
            xxl={7}
            xs={12}
            sm={12}
          >
            <p className="text-primary text-center fw-bold">
              Part-I: Scholastic Areas
            </p>
            <Row>
              <Col
                className="border border-dark text-center p-0"
                lg={2}
                md={2}
                xl={2}
                xxl={2}
                xs={1}
                sm={1}
              >
                <p> Sr No</p>
              </Col>
              <Col
                className="border border-dark text-center fw-bold fs-5 "
                lg={4}
                md={4}
                xl={4}
                xxl={4}
                xs={4}
                sm={4}
              >
                <p>Subjects</p>
              </Col>
              <Col
                className="border border-dark text-center"
                lg={6}
                md={6}
                xl={6}
                xxl={6}
                xs={7}
                sm={7}
              >
                <Row>
                  <Col
                    className="border border-dark text-center p-0 m-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={2}
                    sm={2}
                  >
                    <p className="p-0 m-0"> FA</p>
                  </Col>
                  <Col
                    className="border border-dark text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={3}
                    sm={3}
                  >
                    <p className="p-0 m-0">Oral</p>
                  </Col>
                  <Col
                    className="border border-dark text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={2}
                    sm={2}
                  >
                    <p className="p-0 m-0"> BA</p>
                  </Col>
                  <Col
                    className="border border-dark text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={3}
                    sm={3}
                  >
                    <p className="p-0 m-0">Oral</p>
                  </Col>
                  <Col
                    className="border border-dark text-center p-0"
                    lg={4}
                    md={4}
                    xl={4}
                    xxl={4}
                    xs={2}
                    sm={2}
                  >
                    <p className="p-0 m-0"> Over All</p>
                  </Col>
                </Row>
                <Row>
                  <Col
                    className="border border-dark text-center p-0 m-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={2}
                    sm={2}
                  >
                    20
                  </Col>
                  <Col
                    className="border border-dark text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={3}
                    sm={3}
                  >
                    30
                  </Col>
                  <Col
                    className="border border-dark text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={2}
                    sm={2}
                  >
                    40
                  </Col>
                  <Col
                    className="border border-dark text-center p-0"
                    lg={2}
                    md={2}
                    xl={2}
                    xxl={2}
                    xs={3}
                    sm={3}
                  >
                    50
                  </Col>
                  <Col
                    className="border border-dark text-center p-0"
                    lg={4}
                    md={4}
                    xl={4}
                    xxl={4}
                    xs={2}
                    sm={2}
                  >
                    150
                  </Col>
                </Row>
              </Col>
            </Row>
            <SectionOne data={data} />
            {/* <Row>
              <Col className="border border-dark text-center">Grand Total</Col>
              <Col className="border border-dark text-center">Grand Total</Col>
            </Row>
            <Row>
              <Col className="border border-dark text-center">Grand Total</Col>
              <Col className="border border-dark text-center">Grand Total</Col>
            </Row>
            <Row>
              <Col className="border border-dark text-center">Grand Total</Col>
              <Col className="border border-dark text-center">Grand Total</Col>
            </Row> */}
          </Col>
          {/*section two */}
          <Col
            className="border border-dark "
            lg={5}
            md={5}
            xl={5}
            xxl={5}
            xs={12}
            sm={12}
          >
            <p className="text-primary text-center fw-bold  ">
              Part-II: Co-Scholastic Areas
            </p>
            <Row lg={5} md={5} xl={5} xxl={5} xs={5} sm={5}>
              <Col
                className="border border-dark text-center "
                lg={7}
                md={7}
                xl={7}
                xxl={7}
                xs={7}
                sm={7}
              >
                Name
              </Col>
              <Col
                className="border border-dark text-center"
                lg={5}
                md={5}
                xl={5}
                xxl={5}
                xs={5}
                sm={5}
              >
                Name
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserView;
