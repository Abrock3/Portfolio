import React from "react";

export default function Project({ project, index }) {
  return (
    <div
      className={index === 0 ? "work-card big-card" : "work-card small-card"}
    >
      <div className="w-100 h-100">
        <a
          className="deployed-link"
          rel="noreferrer"
          target="_blank"
          href={project.deployedURL}
        >
          <h3>{project.name}</h3>
          <img src={project.image} alt={project.altAttribute} />
        </a>
        <a
          className="repo-link"
          rel="noreferrer"
          target="_blank"
          href={project.repoURL}
        >
          <h4>Repo Link</h4>
        </a>
      </div>
    </div>
  );
}
