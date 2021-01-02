import { atom } from "recoil";
import ExerciseSettings from "../models/ExerciseSettings";
import Operation from "../constants/Operation";

const ExerciseSettingsAtom = atom({
  key: "exerciseSettingsAtom",
  default: new ExerciseSettings({ baseNumber: 2, operation: Operation.MULTIPLICATION }),
});

export default ExerciseSettingsAtom;
