import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./navbar.scss";

const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

function Navbar({ open, toggle }) {
  return (
    <motion.header
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      className="navbar">
      <nav className="navbar-nav">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.2, ease: "easeOut" }}
          className="navbar-desktop">
          <li className="navbar-item">
            <Link className="navbar-link" to="/">
              Home
            </Link>
          </li>
          <span className="navbar-spacer">/</span>
          <li className="navbar-item">
            <Link className="navbar-link" to="/projects">
              Projects
            </Link>
          </li>
          <span className="navbar-spacer">/</span>
          <li className="navbar-item">
            <Link className="navbar-link" to="/about">
              About
            </Link>
          </li>
          <span className="navbar-spacer">/</span>
          <li className="navbar-item">
            <Link className="navbar-link" to="/contact">
              Contact
            </Link>
          </li>
        </motion.ul>

        <ul className="navbar-mobile">
          <li className="navbar-item">
            <button type="button" onClick={toggle} className="navbar-btn">
              {open ? "Close" : "Menu"}
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;
