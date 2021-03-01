import Operation from "../constants/Operation";

const defaultScoreBoard = {
  operations: {
    [Operation.MULTIPLICATION]: {
      numbers: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
      },
    },
  },
};

const ScoreBoardRepository = {
  /**
   * @param {import("../models/Score").default} score
   */
  async addScore(score) {
    const scoreBoard = await this.getScoreBoard();
    const baseNumberScores = scoreBoard.operations[score.operation].numbers[score.baseNumber];
    baseNumberScores.push(score);
    scoreBoard.operations[score.operation].numbers[score.baseNumber] = baseNumberScores.splice(0, 10);
    window.localStorage.setItem("scoreBoard", scoreBoard);

    return Promise.resolve(scoreBoard);
  },
  getScoreBoard(/* @todo filter by operation */) {
    return Promise.resolve(window.localStorage.getItem("scoreBoard") || defaultScoreBoard);
  },
};

export default ScoreBoardRepository;
