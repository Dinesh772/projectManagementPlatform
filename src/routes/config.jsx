import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "../components/Counter";
import Home from "../components/Home";

export const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </Router>
);
