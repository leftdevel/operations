import ExerciseOrder from "../constants/ExerciseOrder";
import ExerciseTimeout from "../constants/ExerciseTimeout";

class ExerciseSettings {
  totalChoices = null;

  operation = null;

  order = null;

  timeout = 0;

  constructor({ operation, order = ExerciseOrder.ASC, totalChoices = 2, timeout = ExerciseTimeout.SLOW }) {
    this.operation = operation;
    this.order = order;
    this.totalChoices = totalChoices;
    this.timeout = timeout;
  }
}

export default ExerciseSettings;
