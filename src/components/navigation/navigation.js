import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./navigation.scss";

import PageTag from "../page-tag/page-tag";
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
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];

function Navigation({ open }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={transition}
            className="navigation">
            <PageTag text="Navigation" dark />
            <SectionGrid>
              <ul className="navigation-list">
                {routes.map((r) => (
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    key={uuidv4()}
                    className="navigation-item">
                    <Link to={r.path} className="navigation-link">
                      <span className="navigation-number">{`0${r.id}`}</span>
                      <h1 className="navigation-name">{r.name}</h1>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </SectionGrid>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
