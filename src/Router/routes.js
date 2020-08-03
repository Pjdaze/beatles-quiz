import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Views/Home";
import HardTest from "../containers/Views/HardTest";
import EasyTest from "../containers/Views/EasyTest";
const Routes = (props) => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/Home" exact component={Home} />

    <Route path="/EasyTest" exact component={EasyTest} />

    <Route path="/HardTest" exact component={HardTest} />
  </Switch>
);

export default Routes;
