import generateExerciseExpressions from "../helpers/generateExerciseExpressions";
import calculateDifficultyBonus from "../helpers/calculateDifficultyBonus";

class Exercise {
  level = null;

  expressions = [];

  currentExpressionIndex = 0;

  difficultyBonus = 0;

  order = null;

  timeout = null;

  totalChoices = 0;

  constructor({ baseNumber, operation, level, totalChoices, order, timeout  }) {
    this.expressions = generateExerciseExpressions({ baseNumber, operation, totalChoices, order });
    this.baseNumber = baseNumber;
    this.level = level;
    this.currentExpressionIndex = 0;
    this.order = order;
    this.timeout = timeout;
    this.totalChoices = totalChoices;
  }

  toJS() {
    return {
      expressions: this.expressions,
      currentExpressionIndex: this.currentExpressionIndex,
      order: this.order,
      timeout: this.timeout,
      totalChoices: this.totalChoices,
    };
  }
}

export default Exercise;
