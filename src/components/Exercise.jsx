import React from "react";
import { useRecoilState } from "recoil";
import Expression from "./Expression";
import ExerciseProgressAtom from "../state/ExerciseProgressAtom";
import ExerciseProgress from "../models/ExerciseProgress";

function Exercise() {
  const [exerciseProgress, setExerciseProgress] = useRecoilState(ExerciseProgressAtom);
  const currentExpression = exerciseProgress.getCurrentExpression();

  const onClick = (id) => {
    console.log(id);

    setTimeout(() => {
      const newExerciseProgress = new ExerciseProgress(exerciseProgress.toJS());
      newExerciseProgress.nextExpression();
      setExerciseProgress(newExerciseProgress);
    }, 2000);
  };

  return <Expression expression={currentExpression} onChoiceClick={onClick} />;
}

export default Exercise;
