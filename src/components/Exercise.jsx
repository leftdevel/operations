import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChipGroup from "./ChipGroup";
import ExerciseModel from "../models/Exercise";

function Exercise({ exercise }) {
  <Row className="justify-content-md-center">
    <Col xs lg="6">
      <ChipGroup
        options={[exercise.factor1, exercise.operator, exercise.factor2]}
      />
      <hr />
      <ChipGroup options={exercise.choices} />
    </Col>
  </Row>;
}

Exercise.propTypes = {
  exercise: PropTypes.instanceOf(ExerciseModel),
};

export default Exercise;
