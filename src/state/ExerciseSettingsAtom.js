import { atom, selector } from "recoil";
import ExerciseSettings from "../models/ExerciseSettings";

const ExerciseSettingsAtom = atom({
  key: "exerciseSettingsAtom",
  default: selector({
    get: () => {
      const settings = new ExerciseSettings();
      return settings.toJS();
    },
  }),
});

export default ExerciseSettingsAtom;
