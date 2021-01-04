import { v4 as uuid } from "uuid";

/**
 * @class
 * Eventually these type of data should be stored in the DB.
 */
class Score {
  id = null;

  baseNumber = null;

  operation = null;

  totalChoices = 0;

  totalExpressions = 0;

  totalAnsweredCorrectly = 0;

  difficultyBonus = 0;

  timeout = 0;

  order = null;

  date = null;

  constructor({
    id,
    baseNumber,
    operation,
    totalChoices,
    totalExpressions,
    totalAnsweredCorrectly,
    timeout,
    order,
    difficultyBonus,
    date,
  }) {
    this.id = id || uuid();
    this.baseNumber = baseNumber;
    this.operation = operation;
    this.totalChoices = totalChoices;
    this.totalExpressions = totalExpressions;
    this.totalAnsweredCorrectly = totalAnsweredCorrectly;
    this.timeout = timeout;
    this.order = order;
    this.difficultyBonus = difficultyBonus;
    this.date = date || Date.now();
  }

  getSuccessRate() {
    return 100 * (this.totalAnsweredCorrectly / (this.totalExpressions || 0));
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

  /**
   * Here it's obvious that the level number is the same as the totalChoices. Still
   * we want some sort of encapsulation in case this needs to change in the future.
   */
  getLevelNumber() {
    if (!(this.totalChoices >= 1 && this.totalChoices <= 3)) {
      throw new Error(`Unexpected totalChoices value. Got ${this.totalChoices}`);
    }

    return this.totalChoices;
  }
}

export default Score;

export function fromExercise(exercise) {
  return new Score({
    baseNumber: exercise.baseNumber,
    operation: exercise.operation,
    totalExpressions: exercise.expressions.length,
    totalChoices: exercise.totalChoices,
    totalAnsweredCorrectly: exercise.expressions.filter((e) => e.hasRespondedCorrectly).length,
    timeout: exercise.timeout,
    order: exercise.order,
    difficultyBonus: exercise.difficultyBonus,
  });
}
