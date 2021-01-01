import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chip from "./Chip";
import ExerciseModel from "../models/Exercise";

function Exercise({ exercise }) {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="6">
        <div className="chipGroup">
          <Chip>{exercise.factor1}</Chip>
          <Chip>{exercise.operationSymbol}</Chip>
          <Chip>{exercise.factor2}</Chip>
        </div>
        <hr />
        <div className="chipGroup">
          {exercise.choices.map((choice, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Chip onClick={() => console.log(choice)} key={i}>
              {choice}
            </Chip>
          ))}
        </div>
      </Col>
    </Row>
  );
}

Exercise.propTypes = {
  exercise: PropTypes.instanceOf(ExerciseModel).isRequired,
};

export default Exercise;
