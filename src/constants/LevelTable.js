import ExerciseOrder from "./ExerciseOrder";
import ExerciseTimeout from "./ExerciseTimeout";

const LevelTable = [
  { level: 1, choices: 1, order: ExerciseOrder.ASC, timeout: ExerciseTimeout.SLOW },
  { level: 2, choices: 2, order: ExerciseOrder.ASC, timeout: ExerciseTimeout.SLOW },
  { level: 3, choices: 2, order: ExerciseOrder.DESC, timeout: ExerciseTimeout.SLOW },
  { level: 4, choices: 2, order: ExerciseOrder.RAND, timeout: ExerciseTimeout.SLOW },
  { level: 5, choices: 3, order: ExerciseOrder.ASC, timeout: ExerciseTimeout.MEDIUM },
  { level: 6, choices: 3, order: ExerciseOrder.DESC, timeout: ExerciseTimeout.MEDIUM },
  { level: 7, choices: 3, order: ExerciseOrder.RAND, timeout: ExerciseTimeout.MEDIUM },
  { level: 8, choices: 3, order: ExerciseOrder.ASC, timeout: ExerciseTimeout.FAST },
  { level: 9, choices: 3, order: ExerciseOrder.DESC, timeout: ExerciseTimeout.FAST },
  { level: 10, choices: 3, order: ExerciseOrder.RAND, timeout: ExerciseTimeout.FAST },
];

export default LevelTable;
