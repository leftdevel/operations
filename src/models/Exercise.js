import generateExerciseExpressions from "../helpers/generateExerciseExpressions";

class Exercise {
  baseNumber = null;

  operation = null;

  level = null;

  /**
   * @property {import("./Expression").default} expressions
   */
  expressions = [];

  currentExpressionIndex = 0;

  order = null;

  timeout = null;

  totalChoices = 0;

  constructor({ baseNumber, operation, level, totalChoices, order, timeout }) {
    this.expressions = generateExerciseExpressions({ baseNumber, operation, totalChoices, order });
    this.baseNumber = baseNumber;
    this.operation = operation;
    this.level = level;
    this.currentExpressionIndex = 0;
    this.order = order;
    this.timeout = timeout;
    this.totalChoices = totalChoices;
  }

  toJS() {
    return {
      baseNumber: this.baseNumber,
      operation: this.operation,
      level: this.level,
      expressions: this.expressions.map((e) => e.toJS()),
      currentExpressionIndex: this.currentExpressionIndex,
      order: this.order,
      timeout: this.timeout,
      totalChoices: this.totalChoices,
    };
  }
}

export default Exercise;
