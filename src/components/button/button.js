import React from "react";
import "./button.scss";

function Button({ text }) {
  return (
    <button type="button" className={"button"}>
      {text}
    </button>
  );
}

export default Button;
