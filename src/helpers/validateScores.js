function validateScores(baseNumber, scores) {
  // validate that scores are all of the same operations / category and same baseNumber. E.g, multiplication scores
  // cannot be mixed with division ones. The upper components should take care of doing the right filtering.
  const operations = [];

  scores.forEach((score) => {
    if (operations.indexOf(score.operation) === -1) {
      operations.push(score.operation);
    }

    if (score.baseNumber !== baseNumber) {
      throw new Error(`Scores must be of the same base number. Got '${score.baseNumber}'`);
    }
  });

  if (operations.length > 1) {
    throw new Error(`Scores must be of the same operation. Got '${operations.join(", ")}'`);
  }
}

export default validateScores;
