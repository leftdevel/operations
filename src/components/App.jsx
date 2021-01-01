import React from "react";
import { RecoilRoot } from "recoil";
import Container from "react-bootstrap/Container";
import ExerciseComponent from "./Exercise";
import ExerciseModel from "../models/Exercise";
import Operation from "../constants/Operation";

const exercise = new ExerciseModel({ factor1: 2, factor2: 3, operation: Operation.MULTIPLICATION, totalChoices: 3 });

function App() {
  return (
    <RecoilRoot>
      <Container>
        <ExerciseComponent exercise={exercise} />
      </Container>
    </RecoilRoot>
  );
}

export default App;
