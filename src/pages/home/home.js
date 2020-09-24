import React from "react";
import "./home.scss";

import HomeHero from "../../components/home-hero/home-hero";
import HomeProjects from "../../components/home-projects/home-projects";

function Home(props) {
  return (
    <div className="home">
      <HomeHero />
      <HomeProjects />
    </div>
  );
}

export default Home;
