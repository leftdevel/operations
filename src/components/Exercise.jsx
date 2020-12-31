import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChipGroup from "./ChipGroup";

function Exercise({ exercise }) {
  <Row className="justify-content-md-center">
    <Col xs lg="6">
      <ChipGroup options={[exercise.factor1, exercise.expression, exercise.factor2]} />
      <hr />
      <ChipGroup options={["6", "7", "8"]} />
    </Col>
  </Row>;
}
