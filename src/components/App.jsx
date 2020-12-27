import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChipGroup from "./ChipGroup";

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <ChipGroup options={["2", "x", "3"]} />
          <hr />
          <ChipGroup options={["6", "7", "8"]} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
