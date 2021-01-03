import React from "react";
import { useRecoilState } from "recoil";
import Expression from "./Expression";
import ExerciseAtom from "../state/ExerciseAtom";

function Exercise() {
  const [exercise, setExercise] = useRecoilState(ExerciseAtom);
  console.log(exercise);
  const currentExpression = exercise.expressions[exercise.currentExpressionIndex];

  const onClick = (id) => {
    console.log(id);

    setTimeout(() => {
      const nextIndex = exercise.currentExpressionIndex + 1;
      if (nextIndex < exercise.expressions.length) {
        setExercise({ ...exercise, currentExpressionIndex: nextIndex });
      } else {
        console.log("end of exercises");
      }
    }, 2000);
  };

  return <Expression expression={currentExpression} onChoiceClick={onClick} />;
}

export default Exercise;
