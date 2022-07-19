import React from "react";

export default function Header({ displayedPage, pageSwapHandler }) {
  return (
    <header id="header-main">
      <h1>Adam Brock</h1>
      <figure id="hero">
        <section>
          <h2>Full Stack Web Developer</h2>
        </section>
      </figure>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              onClick={() => pageSwapHandler("Home")}
              href="#home"
              className={
                displayedPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => pageSwapHandler("AboutMe")}
              href="#about-me"
              className={
                displayedPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => pageSwapHandler("Portfolio")}
              href="#portfolio"
              className={
                displayedPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>{" "}
          <li className="nav-item">
            <a
              onClick={() => pageSwapHandler("Resume")}
              href="#resume"
              className={
                displayedPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => pageSwapHandler("ContactMe")}
              href="#contact-me"
              className={
                displayedPage === "ContactMe" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
