import React from "react";
import { Link } from "react-router-dom";
import photoOfMe from "../images/photo-me.jpg";

export default function AboutMe({ displayedPage, pageSwapHandler }) {
  return (
    <section className="flex-container" id="aboutMe">
      <header className="content-header">
        <h2>About Me</h2>
      </header>

      <article className="content-section col">
        <img
          src={photoOfMe}
          alt="Me in my kitchen"
          id="img-self"
          className="float-end ms-3 rounded"
        />
        <p>
          Hey, I'm Adam Brock. Located in northern GA, I've just completed
          Georgia Tech's full stack web development professional education
          course, focusing on MERN stack web development. I've had a blast
          learning it and I'm incredibly excited to use my newly gained skills
          to contribute to a fun team working towards a focused goal. Want to
          ask me a question or chat? Visit my{" "}
          <Link to="/contact-me">contact me</Link> page. I'm looking forward to
          it!
        </p>
      </article>
    </section>
  );
}
