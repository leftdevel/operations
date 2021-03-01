import { atom, selector } from "recoil";
import ScoreBoardRepository from "../repository/ScoreBoardRepository";
import Score from "../models/Score";

const ScoreBoardAtom = atom({
  key: "scoreBoardAtom",
  default: selector({
    key: "scoreBoardAtom/selector",
    get: async (/* @todo filter by operation */) => {
      const scoreBoard = ScoreBoardRepository.get();
      const result = {};

      for (let i = 1; i <= 10; i += 1) {
        result[i] = (scoreBoard[i] || []).map((el) => new Score(el));
      }

      return result;
    },
  }),
});

export default ScoreBoardAtom;
