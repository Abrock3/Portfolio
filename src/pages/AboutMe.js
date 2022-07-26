import React from "react";
import photoOfMe from "../images/photo-me.jpg";

export default function AboutMe() {
  return (
    <section className="flex-container" id="aboutMe">
      <header className="content-header">
        <h2>About Me</h2>
      </header>
      <article className="content-section">
        <img src={photoOfMe} alt="Me in my kitchen" id="img-self" />
        <p>
          Hey, I'm Adam Brock. Located in northern GA, I'm an avid gamer, a
          nature lover, and a father in an amazing family. Since 2014, I worked
          in the Market Research department of Universal Orlando Resort, and
          worked my way up into a management role there. Now, in 2022 it's time
          for a sharp turn into the world of web development. I'm currently
          enrolled at Georgia Tech, taking a full stack web developer boot camp
          with the intent to seek a web developer role after the course is
          complete. I'm eager to learn more about the industry, and excited for
          an opportunity to contribute to a fun team working towards a focused
          goal.
        </p>
      </article>
    </section>
  );
}
