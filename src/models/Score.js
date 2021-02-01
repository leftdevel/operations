import { v4 as uuid } from "uuid";

/**
 * @class
 * Eventually these type of data should be stored in the DB.
 */
class Score {
  id = null;

  level = null;

  baseNumber = null;

  operation = null;

  totalExpressions = null;

  totalAnsweredCorrectly = null;

  date = null;

  constructor({ id, level, baseNumber, operation, totalExpressions, totalAnsweredCorrectly, date }) {
    this.id = id || uuid();
    this.level = level;
    this.baseNumber = baseNumber;
    this.operation = operation;
    this.totalExpressions = totalExpressions;
    this.totalAnsweredCorrectly = totalAnsweredCorrectly;
    this.date = date || Date.now();
  }

  getSuccessRate() {
    if (!this.totalExpressions) {
      return 0;
    }

    return 100 * (this.totalAnsweredCorrectly / this.totalExpressions);
  }

  isPrizeGold() {
    return this.getSuccessRate() === 100;
  }

  isPrizeSilver() {
    return this.getSuccessRate() >= 80 && this.getSuccessRate() < 100;
  }

  isPrizeBronze() {
    return this.getSuccessRate() >= 60 && this.getSuccessRate() < 8;
  }

  isPrizeNone() {
    return this.getSuccessRate() < 60;
  }
}

export default Score;

/**
 * @param {import("./Exercise").default} exercise
 */
export function fromExercise(exercise) {
  return new Score({
    level: exercise.level,
  });
}
