import ExerciseOrder from "./ExerciseOrder";
import ExerciseTimeout from "./ExerciseTimeout";

const LevelTable = [
  { level: 1, totalChoices: 1, order: ExerciseOrder.ASC, timeout: ExerciseTimeout.SLOW },
  { level: 2, totalChoices: 2, order: ExerciseOrder.ASC, timeout: ExerciseTimeout.SLOW },
  { level: 3, totalChoices: 2, order: ExerciseOrder.DESC, timeout: ExerciseTimeout.SLOW },
  { level: 4, totalChoices: 2, order: ExerciseOrder.RAND, timeout: ExerciseTimeout.SLOW },
  { level: 5, totalChoices: 3, order: ExerciseOrder.ASC, timeout: ExerciseTimeout.MEDIUM },
  { level: 6, totalChoices: 3, order: ExerciseOrder.DESC, timeout: ExerciseTimeout.MEDIUM },
  { level: 7, totalChoices: 3, order: ExerciseOrder.RAND, timeout: ExerciseTimeout.MEDIUM },
  { level: 8, totalChoices: 3, order: ExerciseOrder.ASC, timeout: ExerciseTimeout.FAST },
  { level: 9, totalChoices: 3, order: ExerciseOrder.DESC, timeout: ExerciseTimeout.FAST },
  { level: 10, totalChoices: 3, order: ExerciseOrder.RAND, timeout: ExerciseTimeout.FAST },
];

export default LevelTable;
