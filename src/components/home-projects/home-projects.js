import React from "react";
import "./home-projects.scss";

import PageTag from "../page-tag/page-tag";
import SectionGrid from "../../layout/section-grid/section-grid";
import ProjectPreview from "../project-preview/project-preview";

import projects from "../../data/projects";

function HomeProjects(props) {
  return (
    <section className="home-projects">
      <PageTag text="Featured Projects" />
      <SectionGrid>
        <div className="home-projects-inner">
          {projects.map((p) => (
            <ProjectPreview key={p.id} project={p} />
          ))}
        </div>
      </SectionGrid>
    </section>
  );
}

export default HomeProjects;
