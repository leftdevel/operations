class ExerciseProgress {
  /**
   * @property {number} currentExpressionIndex;
   */
  currentExpressionIndex = 0;

  exercise = null;

  constructor({ exercise, currentExpressionIndex = 0 }) {
    this.exercise = exercise;
    this.currentExpressionIndex = currentExpressionIndex;
  }

  getCurrentExpression() {
    return this.exercise.expressions[this.currentExpressionIndex];
  }

  nextExpression() {
    if (this.isLastExpression()) {
      throw new Error("No more expressions left");
    }

    this.currentExpressionIndex += 1;

    return this.getCurrentExpression();
  }

  isLastExpression() {
    return this.currentExpressionIndex === this.exercise.expressions.length - 1;
  }

  setCurrentExpressionIndex(index) {
    if (index < 0) {
      throw new Error(`Invalid index ${index}`);
    }

    if (index > this.expressions.length - 1) {
      throw new Error(`Index out of bounds ${index}`);
    }

    this.currentExpressionIndex = index;
  }

  toJS() {
    return {
      currentExpressionIndex: this.currentExpressionIndex,
      isLastExpression: this.isLastExpression(),
    };
  }
}

export default ExerciseProgress;
