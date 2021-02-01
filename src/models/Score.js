import { v4 as uuid } from "uuid";

/**
 * @class
 * Eventually these type of data should be stored in the DB.
 */
class Score {
  id = null;

  baseNumber = null;

  operation = null;

  level = null;

  totalExpressions = null;

  totalAnsweredCorrectly = null;

  date = null;

  constructor({ id, baseNumber, operation, level, totalExpressions, totalAnsweredCorrectly, date }) {
    this.id = id || uuid();
    this.baseNumber = baseNumber;
    this.operation = operation;
    this.level = level;
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

  toJS() {
    return {
      id: this.id,
      baseNumber: this.baseNumber,
      operation: this.operation,
      level: this.level,
      totalExpressions: this.totalExpressions,
      totalAnsweredCorrectly: this.totalAnsweredCorrectly,
      date: this.date,
    };
  }
}

export default Score;

/**
 * @param {import("./Exercise").default} exercise
 */
export function fromExercise(exercise) {
  return new Score({
    baseNumber: exercise.baseNumber,
    operation: exercise.operation,
    level: exercise.level,
    totalExpressions: exercise.expressions.length,
    totalAnsweredCorrectly: exercise.expressions.filter((e) => e.hasRespondedCorrectly).length,
  });
}
