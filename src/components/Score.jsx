import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ScoreModel from "../models/Score";

/**
 * @param {Object} obj
 * @param {ScoreModel} obj.score
 */
function Score({ score }) {
  const totalPoints = score.totalAnsweredCorrectly + score.difficultyBonus;

  return (
    <div
      className={cx("score", {
        prizeGold: score.isPrizeGold(),
        prizeSilver: score.isPrizeSilver(),
        prizeBronze: score.isPrizeBronze(),
        prizeNone: score.isPrizeNone(),
      })}
    >
      <div className="level">{`Nivel ${score.getLevelNumber()}`}</div>
      <div className="points">{totalPoints}</div>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.instanceOf(ScoreModel).isRequired,
};

export default Score;
