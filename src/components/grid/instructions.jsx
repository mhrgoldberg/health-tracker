import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Instructions() {
  return (
    <Container className="instructions">
      <Row>
          This app is a simple way of tracking the state of your body throughout the day. The app will alert you each hour to fill out a new scan.
      </Row>
      <br/>
      <Row>
        1. To get started press TAB to start writing.
      </Row>
      <Row>
        2. Use the ARROW keys to adjust the sliders.
      </Row>
      <Row>
        3. Press ENTER to log scan
      </Row>
    </Container>
  );
}
