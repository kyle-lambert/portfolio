import React, { useState } from "react";
import { motion } from "framer-motion";
import "./backdrop-link.scss";

function Backdrop({ image, name }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="backdrop-link">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        src={image}
        alt={name}
        onLoad={() => setLoading(false)}
        className="backdrop-link-img"
      />
    </div>
  );
}

export default Backdrop;
