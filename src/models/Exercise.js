import generateExerciseExpressions from "../helpers/generateExerciseExpressions";

class Exercise {
  level = 0;

  expressions = [];

  currentExpressionIndex = 0;

  order = null;

  timeout = null;

  totalChoices = 0;

  /**
   * @param {require("./ExerciseSettings").default}
   */
  constructor({ baseNumber, level, operation, order, totalChoices, timeout }) {
    this.expressions = generateExerciseExpressions({ baseNumber, operation, totalChoices, order });
    this.currentExpressionIndex = 0;
    // scoped settings for the exercise, in case we ever allow changing global settings before finishing an exercise,
    // or in case we ever allow storing an exercise so it can be played later.
    this.level = level;
    this.order = order;
    this.timeout = timeout;
    this.totalChoices = totalChoices;
  }

  toJS() {
    return {
      expressions: this.expressions,
      currentExpressionIndex: this.currentExpressionIndex,
      difficultyBonus: this.difficultyBonus,
      order: this.order,
      timeout: this.timeout,
      totalChoices: this.totalChoices,
    };
  }
}

export default Exercise;
