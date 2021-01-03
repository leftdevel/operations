import Expression from "./Expression";
import { shuffleArray } from "../utils";
import ExerciseOrder from "../constants/ExerciseOrder";

class Exercise {
  expressions = [];

  /**
   * Generates unique math expressions that represents a full exercise for a given base number.
   * @param {number} baseNumber the number to practice.
   * @param {ExerciseSettings} settings
   */
  constructor({ baseNumber, operation, totalChoices, order }) {
    for (let i = 2; i <= 9; i += 1) {
      const expression = new Expression({
        factor1: baseNumber,
        factor2: i,
        operation,
        totalChoices,
      });
      this.expressions.push(expression);
    }

    switch (order) {
      case ExerciseOrder.DESC:
        this.expressions = this.expressions.reverse();
        break;
      case ExerciseOrder.RAND:
        this.expressions = shuffleArray(this.expressions);
        break;
      case ExerciseOrder.ASC:
        // do nothing
        break;
      default:
        throw new Error(`Unexpected order ${order}`);
    }
  }
}

export default Exercise;
