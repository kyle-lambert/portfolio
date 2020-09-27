import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./app.scss";

import debounce from "./utils/debounce";

import MobileNav from "./components/mobile-nav/mobile-nav";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App(props) {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const debounceSetOpen = debounce(setOpen, 200);

  const handleResize = (e) => {
    if (e.target.innerWidth > 768) {
      debounceSetOpen(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    history.listen(() => {
      setOpen(false);
    });
  }, [history]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="app">
      <MobileNav open={open} handleClose={handleClose} />
      <Navbar handleOpen={handleOpen} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id">
          <div>project id</div>
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
