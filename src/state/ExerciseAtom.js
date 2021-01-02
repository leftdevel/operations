import { atom, selector } from "recoil";
import ExerciseSettingsAtom from "./ExerciseSettingsAtom";
import Exercise from "../models/Exercise";

const ExerciseAtom = atom({
  key: "exerciseAtom",
  default: selector({
    key: "exerciseAtom/default",
    get: ({ get }) => new Exercise(get(ExerciseSettingsAtom)),
  }),
});

export default ExerciseAtom;
