import ExerciseOrder from "../constants/ExerciseOrder";
import ExerciseTimeout from "../constants/ExerciseTimeout";

class ExerciseSettings {
  baseNumber = null;

  totalChoices = null;

  operation = null;

  order = null;

  timeout = 0;

  constructor({
    baseNumber,
    operation,
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
}

export default ExerciseSettings;
