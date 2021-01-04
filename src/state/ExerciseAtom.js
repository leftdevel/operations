import { atom, selector } from "recoil";
import ExerciseSettingsAtom from "./ExerciseSettingsAtom";
import generateExerciseExpressions from "../helpers/generateExerciseExpressions";
import calculateDifficultyBonus from "../helpers/calculateDifficultyBonus";

const ExerciseAtom = atom({
  key: "exerciseAtom",
  default: selector({
    key: "exerciseAtom/default",
    get: ({ get }) => {
      const settings = get(ExerciseSettingsAtom);

      return {
        expressions: generateExerciseExpressions(settings),
        currentExpressionIndex: 0,
        difficultyBonus: calculateDifficultyBonus(settings),
        // scoped settings for the exercise, in case we ever allow changing global settings before finishing an exercise,
        // or in case we ever allow storing an exercise so it can be played later.
        order: settings.order,
        timeout: settings.timeout,
        totalChoices: settings.totalChoices,
      };
    },
  }),
});

export default ExerciseAtom;
