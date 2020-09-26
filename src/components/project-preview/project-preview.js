import React from "react";
import "./project-preview.scss";

import Hyperlink from "../hyperlink/hyperlink";
import Innerlink from "../innerlink/innerlink";
import BackdropLink from "../backdrop-link/backdrop-link";

function ProjectPreview({ project }) {
  const generateTechStr = () => {
    if (!Array.isArray(project.technologies)) return "";
    return project.technologies.map((t) => t.name).join(" / ");
  };

  return (
    <div className="project-preview">
      <div className="project-preview-info">
        <h1 className="project-preview-heading">{project.name}</h1>
        <span className="project-preview-technologies">
          {generateTechStr()}
        </span>
        <p className="project-preview-summary">{project.summary}</p>
        <ul className="project-preview-list">
          <li className="project-preview-item">
            <Hyperlink href={project.website}>Live Website</Hyperlink>
          </li>
          <li className="project-preview-item">
            <Hyperlink href={project.github}>Github Repository</Hyperlink>
          </li>
        </ul>
      </div>
      <div className="project-preview-backdrop">
        <BackdropLink image={project.image} name={project.name} />
      </div>
    </div>
  );
}

export default ProjectPreview;
