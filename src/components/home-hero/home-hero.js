import React from "react";
import "./home-hero.scss";

import Button from "../button/button";
import SectionGrid from "../../layout/section-grid/section-grid";

function HomeHero(props) {
  return (
    <section className="home-hero">
      <SectionGrid>
        <div className="home-hero-inner">
          <span className="home-hero-subheading">I'm Kyle</span>
          <h1 className="home-hero-heading">
            A creative developer based in Australia. I build robust and
            animation rich web experiences.
          </h1>
          <ul className="home-hero-list">
            <li className="home-hero-item">
              <Button text="Download Resume" />
            </li>
            <li className="home-hero-item">
              <a href="/" className="home-hero-link">
                LinkedIn
              </a>
            </li>
            <li className="home-hero-item">
              <a href="/" className="home-hero-link">
                Github
              </a>
            </li>
          </ul>
        </div>
      </SectionGrid>
    </section>
  );
}

export default HomeHero;
