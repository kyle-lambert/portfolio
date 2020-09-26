import React from "react";
import "./hyperlink.scss";

function Hyperlink({ href, children }) {
  return (
    <a href={href} className="hyperlink">
      {children}
    </a>
  );
}

export default Hyperlink;
