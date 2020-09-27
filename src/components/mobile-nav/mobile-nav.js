import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./mobile-nav.scss";

import SectionGrid from "../../layout/section-grid/section-grid";

const transition = {
  ease: "easeOut",
  duration: 0.6,
};

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

function MobileNav({ open, handleClose }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={transition}
            className="mobile-nav">
            <button
              type="button"
              onClick={handleClose}
              className="mobile-nav-close">
              Close
            </button>
            <ul className="mobile-nav-list">
              {routes.map((r) => (
                <li key={uuidv4()} className="mobile-nav-item">
                  <Link to={r.path} className="mobile-nav-link">
                    <h1 className="mobile-nav-name">{r.name}</h1>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
