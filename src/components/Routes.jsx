import React from "react";
import { Switch, Route } from "react-router";
import Exercise from "./Exercise";

function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Exercise />
      </Route>
    </Switch>
  );
}

export default Routes;
