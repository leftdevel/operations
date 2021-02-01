import Expression from "../models/Expression";
import { shuffleArray } from "../utils";
import ExerciseOrder from "../constants/ExerciseOrder";

/**
 * Generates unique math expressions that represents a full exercise for a given base number.
 * @param {number} baseNumber the number to practice.
 * @param {ExerciseSettings} settings
 */
function generateExerciseExpressions({ baseNumber, operation, totalChoices, order }) {
  const expressions = [];

  for (let i = 1; i <= 10; i += 1) {
    const expression = new Expression({
      factor1: baseNumber,
      factor2: i,
      operation,
      totalChoices,
    });
    // generate internal choices.
    expression.generateChoices();
    expressions.push(expression);
  }

  switch (order) {
    case ExerciseOrder.DESC:
      return expressions.reverse();
    case ExerciseOrder.RAND:
      return shuffleArray(expressions);
    case ExerciseOrder.ASC:
      // do nothing, expression are already ASC.
      return expressions;
    default:
      throw new Error(`Unexpected order ${order}`);
  }
}

export default generateExerciseExpressions;
