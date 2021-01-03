import { atom, selector } from "recoil";
import ExerciseSettingsAtom from "./ExerciseSettingsAtom";
import generateExpressions from "../helpers/generateExpressions";

const ExerciseAtom = atom({
  key: "exerciseAtom",
  default: selector({
    key: "exerciseAtom/default",
    get: ({ get }) => ({
      expressions: generateExpressions(get(ExerciseSettingsAtom)),
      currentExpressionIndex: 0,
      difficultyBonus: 0,
    }),
  }),
});

export default ExerciseAtom;
