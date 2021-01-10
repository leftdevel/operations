import Operation from "../constants/Operation";

const ScoreBoardRepository = {
  get(/* @todo filter by operation */) {
    // roughly how the backend would format and return the results.
    return {
      1: [
        {
          id: 1,
          level: 1,
          baseNumber: 1,
          operation: Operation.MULTIPLICATION,
          totalExpressions: 10,
          totalAnsweredCorrectly: 10,
          date: Date.now(),
        },
        {
          id: 2,
          level: 3,
          baseNumber: 1,
          operation: Operation.MULTIPLICATION,
          totalExpressions: 10,
          totalAnsweredCorrectly: 10,
          date: Date.now() - 1000,
        },
        {
          id: 3,
          level: 2,
          baseNumber: 1,
          operation: Operation.MULTIPLICATION,
          totalExpressions: 10,
          totalAnsweredCorrectly: 10,
          date: Date.now() - 2000,
        },
      ],
      2: [
        {
          id: 4,
          level: 1,
          baseNumber: 2,
          operation: Operation.MULTIPLICATION,
          totalExpressions: 10,
          totalAnsweredCorrectly: 10,
        },
        {
          id: 5,
          level: 3,
          baseNumber: 2,
          operation: Operation.MULTIPLICATION,
          totalExpressions: 10,
          totalAnsweredCorrectly: 10,
          date: Date.now() - 1000,
        },
        {
          id: 6,
          level: 2,
          baseNumber: 2,
          operation: Operation.MULTIPLICATION,
          totalExpressions: 10,
          totalAnsweredCorrectly: 10,
          date: Date.now() - 2000,
        },
      ],
    };
  },
};

export default ScoreBoardRepository;
