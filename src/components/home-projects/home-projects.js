import React from "react";
import "./home-projects.scss";

import PageTag from "../page-tag/page-tag";
import SectionGrid from "../../layout/section-grid/section-grid";

function HomeProjects(props) {
  return (
    <section className="home-projects">
      <PageTag text="Featured Projects" />
      <SectionGrid>
        <div className="home-projects-inner"></div>
      </SectionGrid>
    </section>
  );
}

export default HomeProjects;
