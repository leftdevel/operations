import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Expression from "./Expression";
import { createFromJS } from "../models/Expression";
import ExerciseAtom from "../state/ExerciseAtom";
import { replaceItemAtIndex } from "../utils";

function Exercise() {
  const [choicesDisabled, setChoicesDisabled] = useState(false);
  const [exercise, setExercise] = useRecoilState(ExerciseAtom);
  // plain data object, not an instance of Expression.
  const currentExpression = exercise.expressions[exercise.currentExpressionIndex];

  const respond = (choiceId) => {
    setChoicesDisabled(true);
    const choice = currentExpression.choices.find((e) => e.id === choiceId);
    const updatedExpression = createFromJS(currentExpression);

    updatedExpression.respond(choice.value);
    const newExpressions = replaceItemAtIndex(
      exercise.expressions,
      exercise.currentExpressionIndex,
      updatedExpression.toJS()
    );

    setExercise({ ...exercise, expressions: newExpressions });

    setTimeout(() => {
      const nextIndex = exercise.currentExpressionIndex + 1;
      if (nextIndex < exercise.expressions.length) {
        setExercise({ ...exercise, currentExpressionIndex: nextIndex });
        setChoicesDisabled(false);
      } else {
        console.log("end of exercises");
      }
    }, 1000);
  };

  return <Expression expression={currentExpression} choicesDisabled={choicesDisabled} onChoiceClick={respond} />;
}

export default Exercise;
