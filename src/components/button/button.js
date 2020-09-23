import React from "react";
import "./button.scss";

function Button({ text, outline }) {
  return (
    <button type="button" className={outline ? "button--outline" : "button"}>
      {text}
    </button>
  );
}

export default Button;
