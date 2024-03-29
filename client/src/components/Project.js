import React from "react";
import ReactTooltip from "react-tooltip";

export default function Project({ project, index }) {
  return (
    <div
      className={index === 0 ? "work-card big-card" : "work-card small-card"}
    >
      <div className="w-100 h-100">
        <div className="w-100 h-100 hover-container">
          <a
            className="deployed-link rounded w-100 h-100 portfolio-image"
            rel="noreferrer"
            target="_blank"
            href={project.deployedURL}
            style={{
              background: `transparent url(${project.image}) no-repeat center center scroll`,
              backgroundSize: "cover",
            }}
          ></a>
          <h3 className="deployed-link-header">{project.name}</h3>
        </div>
        <a
          className="repo-link"
          rel="noreferrer"
          target="_blank"
          href={`${project.repoURL}/`}
        >
          <h4>Repo Link</h4>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href={project.deployedURL}
          className="ms-2 mb-2 d-flex flex-row justify-content-start align-items-center position-absolute bottom-0 start-0 h-25 tech-div"
        >
          {project.technologies.map((tech) => (
            <>
              <img
                src={tech.image}
                alt={tech.name}
                className="mh-100 me-1"
                data-tip={tech.name}
                style={{aspectRatio:"1/1"}}
              />
              <ReactTooltip place="top" type="dark" effect="float" />
            </>
          ))}
        </a>
      </div>
    </div>
  );
}
