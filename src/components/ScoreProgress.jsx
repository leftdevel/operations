import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ScoreModel from "../models/Score";
import Score from "./Score";

const MAX_DISPLAY_SCORES = 3;

function ScoreProgress({ baseNumber, scores, displayScoresCount }) {
  if (displayScoresCount > MAX_DISPLAY_SCORES) {
    throw new Error(`Max display scores set to ${MAX_DISPLAY_SCORES}. Got ${displayScoresCount}`);
  }

  const filteredScores = useMemo(() => {
    return scores
      .sort((a, b) => {
        return a.date - b.date;
      })
      .slice(displayScoresCount);
  }, [scores, displayScoresCount]);

  useEffect(() => {
    // validate that scores are all of the same operations / category. E.g, multiplication scores cannot be mixed with
    // division ones. The upper components should take care of doing the right filtering.
    const operations = [];

    scores.forEach((score) => {
      if (operations.indexOf(score.operation) === -1) {
        operations.push(score.operation);
      }
    });

    if (operations.length > 1) {
      throw new Error(`Scores must be of the same operation. Got '${operations.join(", ")}'`);
    }
  }, [scores]);

  return (
    <Card className="scoreProgress">
      <Card.Body>
        <Card.Title>{baseNumber}</Card.Title>
        <div className="scoreList">
          {filteredScores.map((score) => (
            <Score key={score.id} score={score} />
          ))}
        </div>
        <Button variant="primary">Practicar</Button>
      </Card.Body>
    </Card>
  );
}

ScoreProgress.propTypes = {
  baseNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  scores: PropTypes.arrayOf(PropTypes.instanceOf(ScoreModel)).isRequired,
  displayScoresCount: PropTypes.number,
};

ScoreProgress.defaultProps = {
  displayScoresCount: 3,
};

export default ScoreProgress;
