import React from "react";

import taleSpinnerImage from "../../images/screenshot-talespinner.jpg";
import techForumImage from "../../images/screenshot-tech-forum.jpg";
import movieFinderImage from "../../images/screenshot-movie-finder.jpg";
import employeeCMSImage from "../../images/screenshot-employee-management-system.jpg";
import ecommerceBackendImage from "../../images/screenshot-ecommerce-backend.jpg";

const projectArray = [
  {
    name: "TaleSpinner",
    image: taleSpinnerImage,
    deployedURL: "https://talespinner.herokuapp.com/",
    repoURL: "https://github.com/Abrock3/TaleSpinner",
    altAttribute: "My TaleSpinner project",
  },
  {
    name: "Tech Forum",
    image: techForumImage,
    deployedURL: "https://random-techposting.herokuapp.com/",
    repoURL: "https://github.com/Abrock3/Talespinner",
    altAttribute: "My tech forum project",
  },
  {
    name: "Movie Finder",
    image: movieFinderImage,
    deployedURL: "https://abrock3.github.io/Movie-Finder/",
    repoURL: "https://github.com/Abrock3/Movie-Finder",
    altAttribute: "My movie finder project",
  },
  {
    name: "Employee CMS",
    image: employeeCMSImage,
    deployedURL:
      "https://drive.google.com/file/d/1YI0yIb6SdugDDjXA-Fa04TQ0tBgN3B57/view",
    repoURL: "https://github.com/Abrock3/Employee-Management-System",
    altAttribute: "My employee CMS project",
  },
  {
    name: "E-commerce Backend",
    image: ecommerceBackendImage,
    deployedURL:
      "https://drive.google.com/file/d/1oHjsnQHeyuFXJRO7uTiQ2P4hmkfulO6L/view?usp=sharing",
    repoURL: "https://github.com/Abrock3/E-Commerce-Backend",
    altAttribute: "My e-commerce backend project",
  },
];

export default function Portfolio() {
  return (
    <section className="flex-container" id="work">
      <header className="content-header">
        <h2>Portfolio</h2>
      </header>
      <section className="content-section" id="work-card-container">
        {projectArray.map((project, index) => (
          <div
            className={
              index === 0 ? "work-card big-card" : "work-card small-card"
            }
          >
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
        ))}
      </section>
    </section>
  );
}
