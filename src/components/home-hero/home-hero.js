import React from "react";
import "./home-hero.scss";

import Hyperlink from "../hyperlink/hyperlink";
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
              <Hyperlink href="#">Github Profile</Hyperlink>
            </li>
            <li className="home-hero-item">
              <Hyperlink href="#">LinkedIn Profile</Hyperlink>
            </li>
          </ul>
        </div>
      </SectionGrid>
    </section>
  );
}

export default HomeHero;
