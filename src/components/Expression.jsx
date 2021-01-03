import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cx from "classnames";
import Chip from "./Chip";

function Expression({ expression, choicesDisabled, onChoiceClick }) {
  return (
    <Row className="expression justify-content-md-center">
      <Col xs lg="6">
        <div className="chipGroup">
          <Chip>{expression.factor1}</Chip>
          <Chip>{expression.operationSymbol}</Chip>
          <Chip>{expression.factor2}</Chip>
        </div>
        <hr />
        <div className="chipGroup">
          {expression.choices.map((choice) => (
            <Chip
              key={choice.id}
              onClick={choicesDisabled ? undefined : () => onChoiceClick(choice.id)}
              className={cx({
                choice: true,
                // highlight the correct answer when an answer is chosen. The background color will determine if
                // it was correctly chosen or not.
                error:
                  expression.hasResponded &&
                  !expression.hasRespondedCorrectly &&
                  choice.value === expression.userAnswer,
                success: expression.hasResponded && choice.value === expression.answer,
              })}
            >
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
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    userAnswer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  }).isRequired,
  choicesDisabled: PropTypes.bool,
  onChoiceClick: PropTypes.func.isRequired,
};

Expression.defaultProps = {
  choicesDisabled: false,
};

export default Expression;
