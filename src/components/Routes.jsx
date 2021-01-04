import React from "react";
import { Switch, Route } from "react-router";
import Exercise from "./Exercise";
import ScoreBoard from "./ScoreBoard";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Exercise />
      </Route>
      <Route exact path="/scores">
        <ScoreBoard />
      </Route>
    </Switch>
  );
}

export default Routes;
