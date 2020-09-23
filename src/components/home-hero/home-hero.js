import React from "react";
import "./home-hero.scss";

import Button from "../button/button";

function HomeHero(props) {
  return (
    <section className="home-hero">
      <div className="div home-hero-container">
        <div className="home-hero-inner">
          <h1 className="home-hero-heading">
            <span className="outline">Hello, I'm </span>Kyle Lambert
            <span className="outline">, a </span>creative developer
            <span className="outline"> based in </span>Australia
            <span className="outline">. I build </span>robust
            <span className="outline"> and </span>animation rich websites
            <span className="outline">.</span>
          </h1>
          <ul className="home-hero-list">
            <li className="home-hero-item">
              <Button text="Download Resume." outline />
            </li>
            <li className="home-hero-item">
              <a href="/" className="home-hero-link">
                LinkedIn.
              </a>
            </li>
            <li className="home-hero-item">
              <a href="/" className="home-hero-link">
                Github.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
