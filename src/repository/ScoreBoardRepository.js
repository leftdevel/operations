import Operation from "../constants/Operation";

const defaultScoreBoard = {
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
};

const ScoreBoardRepository = {
  addScore(score) {
    const scoreBoard = this.getScoreBoard();

    return Promise.resolve();
  },
  getScoreBoard(/* @todo filter by operation */) {
    return Promise.resolve(window.localStorage.getItem("scoreBoard") || defaultScoreBoard);
  },
};

export default ScoreBoardRepository;
