import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "./graph";
import HealthForm from "./form";
import Instructions from "./instructions";

export default function Grid() {
  return (
    <Container>
      <Row>
        <Col className="form-container">
          <HealthForm />
        </Col>
        <Col className="graph-container">
          <Instructions />
        </Col>
      </Row>
      <Row>
        <Graph />
      </Row>
    </Container>
  );
}
