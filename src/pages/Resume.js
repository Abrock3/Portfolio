import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faDisplay } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  return (
    <section className="flex-container">
      <header className="content-header">
        <h2>Resume</h2>
      </header>
      <section className="content-section">
        <div className="d-inline-block">
          <div className="d-flex justify-content-around w-100">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1XNvKHmqF7imc3Rp4S_Loua_8FVEXx5Ds/view?usp=sharing"
              className="d-flex flex-column align-items-center text-decoration-none resume-link mx-2"
            >
              <FontAwesomeIcon className="fa-7x" icon={faDisplay} />
              <h4 className="mt-2">View</h4>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/uc?export=download&id=1XNvKHmqF7imc3Rp4S_Loua_8FVEXx5Ds"
              className="d-flex flex-column align-items-center text-decoration-none resume-link mx-2"
              download
            >
              <FontAwesomeIcon className="fa-7x" icon={faDownload} />
              <h4 className="mt-2">Download</h4>
            </a>
            <br />
          </div>
          <h3>Front-end Proficiencies:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>Responsive Design</li>
          </ul>
          <br />
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>Node</li>
            <li>Express JS</li>
            <li>SQL/Sequelize</li>
            <li>MongoDB/Mongoose</li>
            <li>Socket.IO</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
