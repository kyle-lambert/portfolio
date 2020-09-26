import React from "react";
import { motion } from "framer-motion";
import "./page-tag.scss";

function PageTag({ text }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      className="page-tag">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1.2, ease: "easeOut" }}
        className="page-tag-span">
        {text}
      </motion.span>
    </motion.div>
  );
}

export default PageTag;
