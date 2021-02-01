import ExerciseOrder from "../constants/ExerciseOrder";
import ExerciseTimeout from "../constants/ExerciseTimeout";
import Operation from "../constants/Operation";

class ExerciseSettings {
  baseNumber = null;

  level = null;

  operation = null;

  order = null;

  totalChoices = 0;

  timeout = 0;

  constructor({
    // null can be passed. It means the exercise is custom.
    level = null,
    baseNumber = 2,
    operation = Operation.MULTIPLICATION,
    order = ExerciseOrder.ASC,
    totalChoices = 2,
    timeout = ExerciseTimeout.MEDIUM,
  }) {
    this.baseNumber = baseNumber;
    this.level = level;
    this.operation = operation;
    this.order = order;
    this.totalChoices = totalChoices;
    this.timeout = timeout;
  }

  toJS() {
    return {
      baseNumber: this.baseNumber,
      level: this.level,
      operation: this.operation,
      order: this.order,
      totalChoices: this.totalChoices,
      timeout: this.timeout,
    };
  }
}

export default ExerciseSettings;

export function createFromLevel(baseNumber, operation, { level, totalChoices, order, timeout }) {
  return new ExerciseSettings({ baseNumber, operation, level, totalChoices, order, timeout });
}
