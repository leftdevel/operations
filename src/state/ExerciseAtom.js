import { atom, selector } from "recoil";
import ExerciseSettings from "../models/ExerciseSettings";
import Exercise from "../models/Exercise";

const ExerciseAtom = atom({
  key: "exerciseAtom",
  default: selector({
    key: "exerciseAtom/default",
    get: () => {
      // eventually set default timeout to SLOW
      const settings = new ExerciseSettings({ baseNumber: 2 });
      const exercise = new Exercise(settings.toJS());

      return exercise.toJS();
    },
  }),
});

export default ExerciseAtom;
