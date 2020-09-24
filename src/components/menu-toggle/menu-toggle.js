import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./menu-toggle.scss";

function MenuToggle({ open, toggle }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      className="menu-toggle">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 1.2, ease: "easeOut" }}
        type="button"
        onClick={toggle}
        className="menu-toggle-btn">
        {open ? "Close" : "Menu"}
      </motion.button>
    </motion.div>
  );
}

export default MenuToggle;
