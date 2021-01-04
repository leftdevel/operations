import React from "react";
import { useRecoilValue } from "recoil";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScoreBoardAtom from "../state/ScoreBoardAtom";
import ScoreProgress from "./ScoreProgress";

function ScoreBoard() {
  const scoreBoard = useRecoilValue(ScoreBoardAtom);

  return (
    <Row className="scoreBoard justify-content-md-center">
      <Col xs lg="6">
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((baseNumber) => (
          <ScoreProgress key={baseNumber} baseNumber={baseNumber} scores={[]} />
        ))}
      </Col>
    </Row>
  );
}

export default ScoreBoard;
