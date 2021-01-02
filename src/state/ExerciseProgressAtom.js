import { atom, selector } from "recoil";
import ExerciseProgress from "../models/ExerciseProgress";
import ExerciseAtom from "./ExerciseAtom";

const ExerciseProgressAtom = atom({
  key: "exerciseProgressAtom",
  default: selector({
    get: ({ get }) => new ExerciseProgress({ exercise: get(ExerciseAtom) }),
  }),
});

export default ExerciseProgressAtom;
