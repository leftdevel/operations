import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chip from "./Chip";
import ExpressionModel from "../models/Expression";

function Expression({ expression, onChoiceClick }) {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="6">
        <div className="chipGroup">
          <Chip>{expression.factor1}</Chip>
          <Chip>{expression.operationSymbol()}</Chip>
          <Chip>{expression.factor2}</Chip>
        </div>
        <hr />
        <div className="chipGroup">
          {expression.choices.map((choice) => (
            <Chip onClick={() => onChoiceClick(choice.id)} key={choice.id}>
              {choice.value}
            </Chip>
          ))}
        </div>
      </Col>
    </Row>
  );
}

Expression.propTypes = {
  expression: PropTypes.instanceOf(ExpressionModel).isRequired,
  onChoiceClick: PropTypes.func.isRequired,
};

export default Expression;
