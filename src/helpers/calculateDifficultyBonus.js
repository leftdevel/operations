import ExerciseOrder from "../constants/ExerciseOrder";
import ExerciseTimeout from "../constants/ExerciseTimeout";

function calculateOrderBonus(order) {
  let total = 0;

  switch (order) {
    case ExerciseOrder.DESC:
      total += 1;
      break;
    case ExerciseOrder.RAND:
      total += 2;
      break;
    default:
      break;
  }

  return total;
}

function calculateTimeoutBonus(timeout) {
  let total = 0;

  switch (timeout) {
    case ExerciseTimeout.MEDIUM:
      total += 1;
      break;
    case ExerciseTimeout.FAST:
      total += 2;
      break;
    default:
      break;
  }

  return total;
}

function calculateTotalChoicesBonus(totalChoices) {
  let total = 0;

  switch (totalChoices) {
    case 2:
      total += 1;
      break;
    case 3:
      total += 2;
      break;
    default:
      break;
  }

  return total;
}

function calculateDifficultyBonus({ order, timeout, totalChoices }) {
  let total = 0;
  total += calculateOrderBonus(order);
  total += calculateTimeoutBonus(timeout);
  total += calculateTotalChoicesBonus(totalChoices);

  return total;
}

export default calculateDifficultyBonus;

export { calculateOrderBonus, calculateTimeoutBonus, calculateTotalChoicesBonus };
