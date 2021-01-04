import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Redirect } from "react-router";
import Expression from "./Expression";
import { createFromJS } from "../models/Expression";
import ExerciseAtom from "../state/ExerciseAtom";
import { replaceItemAtIndex } from "../utils";

const respond = (choiceId, { exercise, currentExpression, setChoicesDisabled, setExercise, setRedirectTo }) => {
  setChoicesDisabled(true);
  const choice = currentExpression.choices.find((e) => e.id === choiceId);
  /** @type {import("../models/Expression").default} updatedExpressionModel */
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
      setRedirectTo("/scores");
    }
  }, 500);
};

function Exercise() {
  const [choicesDisabled, setChoicesDisabled] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");
  const [exercise, setExercise] = useRecoilState(ExerciseAtom);
  // plain data object, not an instance of Expression.
  const currentExpression = exercise.expressions[exercise.currentExpressionIndex];

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <div className="exercise">
      <Expression
        expression={currentExpression}
        choicesDisabled={choicesDisabled}
        onChoiceClick={(choiceId) => {
          respond(choiceId, { exercise, currentExpression, setChoicesDisabled, setRedirectTo, setExercise });
        }}
      />
      {/* @todo Timer should go here */}
    </div>
  );
}

export default Exercise;
