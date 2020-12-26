import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <div className="chipGroup">
            <div className="chip">2</div>
            <div className="chip">X</div>
            <div className="chip">3</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
