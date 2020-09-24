import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import MenuToggle from "./components/menu-toggle/menu-toggle";
import Navigation from "./components/navigation/navigation";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App(props) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      setOpen(false);
    });
  }, []);

  return (
    <>
      <Navigation open={open} />
      <MenuToggle open={open} toggle={handleToggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
