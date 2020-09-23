import React from "react";
import "./menu-toggle.scss";

function MenuToggle({ toggle }) {
  return (
    <div className="menu-toggle">
      <button type="button" className="menu-toggle-btn">
        Menu.
      </button>
    </div>
  );
}

export default MenuToggle;
