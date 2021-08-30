import React from "react";
import Covid from "./components/layout";
import Cards from "./components/cards";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const App = (props) => {
  return (
    <Switch>
      <Route path="/covid" component={Covid}></Route>
      <Route path="/stats" component={Cards}></Route>
    </Switch>
  );
};

export default App;
