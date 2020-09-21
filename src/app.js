import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Project from "./pages/project/project";
import Contact from "./pages/contact/contact";
import Error from "./pages/error/error";

function App(props) {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Error} />
      </Switch>
    </>
  );
}

export default App;
