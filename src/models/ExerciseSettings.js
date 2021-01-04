import ExerciseOrder from "../constants/ExerciseOrder";
import ExerciseTimeout from "../constants/ExerciseTimeout";
import Operation from "../constants/Operation";

class ExerciseSettings {
  baseNumber = null;

  operation = null;

  order = null;

  totalChoices = 0;

  timeout = 0;

  constructor({
    baseNumber = 2,
    operation = Operation.MULTIPLICATION,
    order = ExerciseOrder.ASC,
    totalChoices = 2,
    timeout = ExerciseTimeout.MEDIUM,
  }) {
    this.baseNumber = baseNumber;
    this.operation = operation;
    this.order = order;
    this.totalChoices = totalChoices;
    this.timeout = timeout;
  }

  toJS() {
    return {
      baseNumber: this.baseNumber,
      operation: this.operation,
      order: this.order,
      totalChoices: this.totalChoices,
      timeout: this.timeout,
    };
  }
}

export default ExerciseSettings;
