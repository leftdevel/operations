import { atom, selector } from "recoil";
import ExerciseSettingsAtom from "./ExerciseSettingsAtom";
import generateExerciseExpressions from "../helpers/generateExerciseExpressions";

const ExerciseAtom = atom({
  key: "exerciseAtom",
  default: selector({
    key: "exerciseAtom/default",
    get: ({ get }) => ({
      expressions: generateExerciseExpressions(get(ExerciseSettingsAtom)),
      currentExpressionIndex: 0,
      difficultyBonus: 0,
    }),
  }),
});

export default ExerciseAtom;
