import React from "react";
import "./page-tag.scss";

function PageTag({ text }) {
  return (
    <div className="page-tag">
      <span className="page-tag-span">{text}</span>
    </div>
  );
}

export default PageTag;
