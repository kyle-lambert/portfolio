import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./hamburger.css";

const tl = gsap.timeline({ paused: true });

// function menuAnimation(parent, overlay, content) {

// }

function Hamburger({ open }) {
  const hamburger = useRef(null);
  const overlay = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    if (open) {
      // close menu
      hamburger.current.style.display = "block";
    } else {
      // open menu
      hamburger.current.style.display = "none";
    }
  });

  return (
    <div ref={hamburger} className="hamburger">
      <div ref={overlay} className="hamburger-overlay"></div>
      <div ref={content} className="hamburger-content">
        content
      </div>
    </div>
  );
}

export default Hamburger;
