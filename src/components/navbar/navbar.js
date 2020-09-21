import React, { useState, useEffect } from "react";
import "./navbar.css";

import Hamburger from "../hamburger/hamburger";

import { ReactComponent as Logo } from "../../assets/logo.svg";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleToggle() {
    disableMenu();
    setOpen((prev) => !prev);
  }

  function disableMenu() {
    setDisabled((prev) => !prev);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  }

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <button
        disabled={disabled}
        onClick={handleToggle}
        className="navbar-toggle">
        {open ? "Close" : "Menu"}
      </button>
      <Hamburger open={open} />
    </header>
  );
}

export default Navbar;
