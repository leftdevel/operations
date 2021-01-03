import { atom } from "recoil";
import ExerciseOrder from "../constants/ExerciseOrder";
import ExerciseTimeout from "../constants/ExerciseTimeout";
import Operation from "../constants/Operation";

const ExerciseSettingsAtom = atom({
  key: "exerciseSettingsAtom",
  default: {
    baseNumber: 2,
    operation: Operation.MULTIPLICATION,
    order: ExerciseOrder.ASC,
    totalChoices: 2,
    timeout: ExerciseTimeout.MEDIUM,
  },
});

export default ExerciseSettingsAtom;
