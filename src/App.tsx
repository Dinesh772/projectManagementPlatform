import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.css";
import SignInRoute from "./authentication/components/SignInRoute";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/">
          <SignInRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
