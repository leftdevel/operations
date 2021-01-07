import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import ScoreModel from "../models/Score";
import Score from "./Score";
import validateScores from "../helpers/validateScores";

const DISPLAY_SCORES = 3;

const filterScores = (scores) => {
  return scores
    .sort((a, b) => {
      return a.date - b.date;
    })
    .slice(DISPLAY_SCORES);
};

function ScoreProgress({ baseNumber, scores, onPracticeClick }) {
  // filter by date DESC, and grab the latest ones.
  const filteredScores = useMemo(() => filterScores(scores), [scores]);
  // validate that scores belong to the base number and that are of the same operation.
  useEffect(() => validateScores(baseNumber, scores), [baseNumber, scores]);

  return (
    <Card className="scoreProgress">
      <Card.Body>
        <Card.Title>
          <Icon icon={faAward} />
        </Card.Title>
        <div className="scoreList">
          {filteredScores.map((score) => (
            <Score key={score.id} score={score} />
          ))}
        </div>
        <div className="action">
          <h4>{baseNumber}</h4>
          <Button variant="primary" onClick={onPracticeClick}>
            Practicar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ScoreProgress.propTypes = {
  baseNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  scores: PropTypes.arrayOf(PropTypes.instanceOf(ScoreModel)).isRequired,
  onPracticeClick: PropTypes.func.isRequired,
};

export default ScoreProgress;
