import React from "react";
import { Row, Table } from "react-bootstrap";

const MarksTable = () => {
  // const titleData=[20,10,20,10];
  
  return (
    <>
      <Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>FA</th>
              <th>Oral</th>
              <th>BA</th>
              <th>Oral</th>
              <th>Over All</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>20</th>
              <th>10</th>
              <th>20</th>
              <th>10</th>
              <th>60</th>
            </tr>
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default MarksTable;
