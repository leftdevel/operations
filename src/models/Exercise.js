import Expression from "./Expression";

/**
 * Generates and returns an object that represents a full exercise for a given base number.
 * @param {number} baseNumber the number to practice.
 * @param {ExerciseSettings} settings
 */
function generateExercise(baseNumber, settings) {
  const expressions = [];

  for (let i = 2; i <= 9; i += 1) {
    const expression = new Expression({
      factor1: baseNumber,
      factor2: i,
      operation: settings.operation,
      totalChoices: settings.totalChoices,
    });
    expressions.push(expression);
  }
}

export default generateExercise;
