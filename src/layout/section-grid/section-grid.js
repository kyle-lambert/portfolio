import React from "react";
import "./section-grid.scss";

function SectionGrid(props) {
  return <div className="section-grid">{props.children}</div>;
}

export default SectionGrid;
