import { atom, selector } from "recoil";
import ScoreBoardRepository from "../repository/ScoreBoardRepository";

const ScoreBoardAtom = atom({
  key: "scoreBoardAtom",
  default: selector({
    key: "scoreBoardAtom/selector",
    get: () => {
      return ScoreBoardRepository.get();
    },
  })
});

export default ScoreBoardAtom;
