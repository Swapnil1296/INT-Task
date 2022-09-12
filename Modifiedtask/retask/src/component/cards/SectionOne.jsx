import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SectionOne = ({data}) => {
  // const res = data.map((e) => {
  //   return e.FA
  // })
  // console.log(res)
  return (
    <>
      {data &&
        data.map((item, i) => (
          <Row key={i}>
            <Col
              className="border border-dark border-bottom-1 border-start-0 border-end-1 border-top-0 text-center "
              lg={2}
              md={2}
              xl={2}
              xxl={2}
              xs={1}
              sm={1}
            >
              <p className="p-0 m-0">{(item.id>9 ? item.id : "0"+item.id)}</p>
            </Col>
            <Col
              className="border border-dark border-bottom-1 border-start-0 border-end-1 border-top-0"
              lg={4}
              md={4}
              xl={4}
              xxl={4}
              xs={4}
              sm={4}
            >
              <p className="p-0 m-0 fw-bold ">{item.subject}</p>
            </Col>
            <Col>
              <Row>
                <Col
                  className="border border-dark border-bottom-1 border-start-0 border-end-1 border-top-0 text-center p-0 m-0"
                  lg={2}
                  md={2}
                  xl={2}
                  xxl={2}
                  xs={2}
                  sm={2}
                >
                  <p className="p-0 m-0 ">{item.FA}</p>
                </Col>
                <Col
                  className="border border-dark border-bottom-1 border-start-0 border-end-1 border-top-0 text-center p-0"
                  lg={2}
                  md={2}
                  xl={2}
                  xxl={2}
                  xs={3}
                  sm={3}
                >
                  <p className="p-0 m-0 ">{item.oral_1}</p>
                </Col>
                <Col
                  className="border border-dark border-bottom-1 border-start-0 border-end-1 border-top-0 text-center p-0"
                  lg={2}
                  md={2}
                  xl={2}
                  xxl={2}
                  xs={2}
                  sm={2}
                >
                  <p className="p-0 m-0  ">{item.BA}</p>
                </Col>
                <Col
                  className="border border-dark border-bottom-1 border-start-0 border-end-1 border-top-0 text-center p-0"
                  lg={2}
                  md={2}
                  xl={2}
                  xxl={2}
                  xs={3}
                  sm={3}
                >
                  <p className="p-0 m-0 ">{item.oral_2}</p>
                </Col>
                <Col
                  className="border border-dark border-bottom-1 border-start-0 border-end-1 border-top-0 text-center p-0"
                  lg={4}
                  md={4}
                  xl={4}
                  xxl={4}
                  xs={2}
                  sm={2}
                >
                  <p className="p-0 m-0 ">
                    {item.FA + item.BA + item.oral_1 + item.oral_2}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
    </>
  );
}

export default SectionOne