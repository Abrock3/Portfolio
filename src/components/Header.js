import React from "react";
import Navigation from "./Navigation.js";
export default function Header() {
  return (
    <div>
      <header id="header-main">
        <h1 class="d-flex align-items-center">Adam Brock</h1>
      </header>
      <Navigation />
      <figure id="hero">
        <section>
          <h2>Full Stack Web Developer</h2>
        </section>
      </figure>
    </div>
  );
}
