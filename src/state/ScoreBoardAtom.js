import { atom } from "recoil";

const ScoreBoardAtom = atom({
  key: "scoreBoardAtom",
  default: {
    results: [],
  },
});

export default ScoreBoardAtom;
