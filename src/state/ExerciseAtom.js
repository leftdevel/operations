import { atom, selector } from "recoil";
import ExerciseSettingsAtom from "./ExerciseSettingsAtom";
import generateExercise from "../models/Exercise";

const ExerciseAtom = atom({
  key: "exerciseAtom",
  default: selector({
    key: "exerciseAtom/default",
    get: ({ get }) => generateExercise(get(ExerciseSettingsAtom)),
  }),
});

export default ExerciseAtom;
