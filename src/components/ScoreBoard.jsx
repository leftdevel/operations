import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScoreBoardAtom from "../state/ScoreBoardAtom";
import ExerciseAtom from "../state/ExerciseAtom";
import ExerciseSettings from "../models/ExerciseSettings";
import ScoreProgress from "./ScoreProgress";
import Exercise from "../models/Exercise";

function ScoreBoard() {
  const history = useHistory();
  // @todo scoreBoard should be filtered by operation
  const scoreBoard = useRecoilValue(ScoreBoardAtom);
  const setExercise = useSetRecoilState(ExerciseAtom);

  const onPracticeClick = (baseNumber) => {
    const settings = new ExerciseSettings({ baseNumber });
    const exercise = new Exercise(settings);
    setExercise(exercise.toJS());
    // For now, redirect to index. Eventually this should redirect to /levels/[2..10]
    history.push("/");
  };

  return (
    <Row className="scoreBoard justify-content-md-center">
      <Col xs lg="6">
        <div className="scoreProgressGroup">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((baseNumber) => (
            <ScoreProgress
              key={baseNumber}
              baseNumber={baseNumber}
              scores={scoreBoard[baseNumber].filter((el) => el.baseNumber === baseNumber)}
              onPracticeClick={() => onPracticeClick(baseNumber)}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default ScoreBoard;
