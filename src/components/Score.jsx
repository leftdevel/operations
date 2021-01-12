import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ScoreModel from "../models/Score";

/**
 * @param {Object} obj
 * @param {ScoreModel} obj.score
 */
function Score({ score }) {
  return (
    <div className="score">
      <div className="awardWrapper">
        <div
          className={cx("award", {
            prizeGold: score.isPrizeGold(),
            prizeSilver: score.isPrizeSilver(),
            prizeBronze: score.isPrizeBronze(),
            prizeNone: score.isPrizeNone(),
          })}
        >
          {score.level || 0}
        </div>
      </div>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.instanceOf(ScoreModel).isRequired,
};

export default Score;
