import React from "react";
import { Link } from "react-router-dom";
import "./innerlink.scss";

function Innerlink({ to, children }) {
  return (
    <Link to={to} className="innerlink">
      {children}
    </Link>
  );
}

export default Innerlink;
