import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./home-hero.scss";

import Button from "../button/button";
import PageTag from "../page-tag/page-tag";
import SectionGrid from "../../layout/section-grid/section-grid";

function HomeHero(props) {
  return (
    <section className="home-hero">
      <PageTag text="Kyle Lambert." light />
      <SectionGrid>
        <div className="home-hero-inner">
          <h1 className="home-hero-heading">
            {allWords.map((w) => (
              <span
                key={uuidv4()}
                className={solidWords.has(w.trim()) ? "solid" : "outline"}>
                {w}
              </span>
            ))}
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
      </SectionGrid>
    </section>
  );
}

export default HomeHero;

const allWords = [
  "Hello, I'm ",
  "Kyle Lambert, ",
  "a ",
  "creative developer ",
  "based in ",
  "Australia. ",
  "I build ",
  "robust ",
  "and ",
  "animation rich websites.",
];

const solidWords = new Set([
  "Kyle Lambert,",
  "creative developer",
  "Australia.",
  "robust",
  "animation rich websites.",
]);
