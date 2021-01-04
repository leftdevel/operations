import generateExerciseExpressions from "../helpers/generateExerciseExpressions";
import calculateDifficultyBonus from "../helpers/calculateDifficultyBonus";

class Exercise {
  expressions = [];

  currentExpressionIndex = 0;

  difficultyBonus = 0;

  order = null;

  timeout = null;

  totalChoices = 0;

  constructor(settings) {
    this.expressions = generateExerciseExpressions(settings);
    this.currentExpressionIndex = 0;
    this.difficultyBonus = calculateDifficultyBonus(settings);
    // scoped settings for the exercise, in case we ever allow changing global settings before finishing an exercise,
    // or in case we ever allow storing an exercise so it can be played later.
    this.order = settings.order;
    this.timeout = settings.timeout;
    this.totalChoices = settings.totalChoices;
  }

  toJS() {
    return {
      expressions: this.expressions,
      currentExpressionIndex: this.currentExpressionIndex,
      difficultyBonus: this.difficultyBonus,
      order: this.order,
      timeout: this.timeout,
      totalChoices: this.totalChoices,
    };
  }
}

export default Exercise;
