import { atom, selector } from "recoil";
import LevelTable from "../constants/LevelTable";
import Operation from "../constants/Operation";
import Exercise from "../models/Exercise";

const ExerciseAtom = atom({
  key: "exerciseAtom",
  default: selector({
    key: "exerciseAtom/default",
    get: () => {
      const level2 = LevelTable[1];
      // eventually set default timeout to SLOW
      const exercise = new Exercise({ ...level2, baseNumber: 2, operation: Operation.MULTIPLICATION });

      return exercise.toJS();
    },
  }),
});

export default ExerciseAtom;
