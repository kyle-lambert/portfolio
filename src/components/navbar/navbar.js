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

function Navbar({ handleOpen }) {
  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          className="navbar-desktop">
          {routes.map((r) => (
            <li key={r.id} className="navbar-item">
              <Link className="navbar-link" to={r.path}>
                {r.name}
              </Link>
            </li>
          ))}
        </motion.ul>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          className="navbar-mobile">
          <li className="navbar-item">
            <button type="button" onClick={handleOpen} className="navbar-btn">
              Menu
            </button>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
}

export default Navbar;
