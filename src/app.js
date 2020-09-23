import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/contact" component={Home} />
      </Switch>
    </>
  );
}

export default App;
