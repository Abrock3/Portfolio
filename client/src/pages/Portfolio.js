import React from "react";
import Project from "../components/Project";
import taleSpinnerImage from "../images/screenshot-talespinner.webp";
import techForumImage from "../images/screenshot-tech-forum.webp";
import toyZoidImage from "../images/screenshot-toyzoid.webp";
import employeeCMSImage from "../images/screenshot-employee-management-system.webp";
import ecommerceBackendImage from "../images/screenshot-ecommerce-backend.webp";
import nodeJs from "../images/techIcons/nodeJsThumb.svg";
import expressJs from "../images/techIcons/expressJsThumb.svg";
import sequelize from "../images/techIcons/sequelizeThumb.svg";
import socketIo from "../images/techIcons/socketIoThumb.svg";
import bCrypt from "../images/techIcons/bCryptThumb.png";
import handlebars from "../images/techIcons/handlebarsThumb.svg";
import bootstrap from "../images/techIcons/bootstrapThumb.svg";
import mySql from "../images/techIcons/mySqlThumb.svg";
import react from "../images/techIcons/reactThumb.svg";
import apollo from "../images/techIcons/apolloThumb.svg";
import mongoose from "../images/techIcons/mongooseThumb.png";
import jwt from "../images/techIcons/jwtThumb.svg";

const projectArray = [
  {
    name: "ToyZoid",
    image: toyZoidImage,
    deployedURL: "https://toyzoid.herokuapp.com/",
    repoURL: "https://github.com/ProfJ13/Toy-Exchange",
    altAttribute: "My toy exchange project",
    description:
      "A site that allows parents to swap their kids' old toys for new ones.",
    technologies: [
      { name: "NodeJS", image: nodeJs },
      { name: "ReactJS", image: react },
      { name: "Apollo GraphQL", image: apollo },
      { name: "Mongoose", image: mongoose },
      { name: "JSON Web Token", image: jwt },
      { name: "ExpressJS", image: expressJs },
      { name: "Bootstrap/React-Bootstrap", image: bootstrap },
    ],
  },
  {
    name: "TaleSpinner",
    image: taleSpinnerImage,
    deployedURL: "https://talespinner.herokuapp.com/",
    repoURL: "https://github.com/Abrock3/TaleSpinner",
    altAttribute: "My TaleSpinner project",
    description:
      "A storytelling game you can play with your friends! Join a lobby and choose prompts; then make a collaborative story.",
    technologies: [
      { name: "NodeJS", image: nodeJs },
      { name: "ExpressJS", image: expressJs },
      { name: "Socket.IO", image: socketIo },
      { name: "bCrypt", image: bCrypt },
      { name: "Sequelize", image: sequelize },
      { name: "Handlebars", image: handlebars },
      { name: "Bootstrap", image: bootstrap },
    ],
  },
  {
    name: "Tech Forum",
    image: techForumImage,
    deployedURL: "https://random-techposting.herokuapp.com/",
    repoURL: "https://github.com/Abrock3/Tech-Blog",
    altAttribute: "My tech forum project",
    description:
      "My take on a tech blog/forum site. A user can log in, view or create posts, and comment on others' posts.",
    technologies: [
      { name: "NodeJS", image: nodeJs },
      { name: "ExpressJS", image: expressJs },
      { name: "Sequelize", image: sequelize },
      { name: "bCrypt", image: bCrypt },
      { name: "Handlebars", image: handlebars },
      { name: "Bootstrap", image: bootstrap },
    ],
  },
  {
    name: "Employee CMS",
    image: employeeCMSImage,
    deployedURL:
      "https://drive.google.com/file/d/1YI0yIb6SdugDDjXA-Fa04TQ0tBgN3B57/view",
    repoURL: "https://github.com/Abrock3/Employee-Management-System",
    altAttribute: "My employee CMS project",
    description:
      "A CLI content management system for a fake company's employee data.",
    technologies: [
      { name: "NodeJS", image: nodeJs },
      { name: "MySQL", image: mySql },
    ],
  },
  {
    name: "E-commerce Backend",
    image: ecommerceBackendImage,
    deployedURL:
      "https://drive.google.com/file/d/1oHjsnQHeyuFXJRO7uTiQ2P4hmkfulO6L/view?usp=sharing",
    repoURL: "https://github.com/Abrock3/E-Commerce-Backend",
    altAttribute: "My e-commerce backend project",
    description:
      "A mock e-commerce back end, using sequelize to set up a database and express to query its information.",
    technologies: [
      { name: "NodeJS", image: nodeJs },
      { name: "Sequelize", image: sequelize },
      { name: "ExpressJS", image: expressJs },
    ],
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
          <Project project={project} index={index} key={project.name} />
        ))}
      </section>
    </section>
  );
}
