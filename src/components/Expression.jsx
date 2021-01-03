import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chip from "./Chip";

function Expression({ expression, onChoiceClick }) {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="6">
        <div className="chipGroup">
          <Chip>{expression.factor1}</Chip>
          <Chip>{expression.operationSymbol}</Chip>
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
  expression: PropTypes.shape({
    id: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
    operationSymbol: PropTypes.string.isRequired,
    factor1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    factor2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    hasResponded: PropTypes.bool.isRequired,
    hasRespondedCorrectly: PropTypes.bool,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  }).isRequired,
  onChoiceClick: PropTypes.func.isRequired,
};

export default Expression;
