import { atom, selector } from "recoil";
import ExerciseSettingsAtom from "./ExerciseSettingsAtom";
import Exercise from "../models/Exercise";

const ExerciseAtom = atom({
  key: "exerciseAtom",
  default: selector({
    key: "exerciseAtom/default",
    get: ({ get }) => {
      const settings = get(ExerciseSettingsAtom);
      const exercise = new Exercise(settings);
      return exercise.toJS();
    },
  }),
});

export default ExerciseAtom;
