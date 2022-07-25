import React from "react";
const navArray = [
  {
    displayedPage: "AboutMe",
    href: "#about-me",
    linkText: "About Me",
  },
  {
    displayedPage: "Portfolio",
    href: "#about-me",
    linkText: "Portfolio",
  },
  {
    displayedPage: "Resume",
    href: "#Resume",
    linkText: "Resume",
  },
  {
    displayedPage: "ContactMe",
    href: "#contact-me",
    linkText: "Contact Me",
  },
];

export default function Navigation({ displayedPage, pageSwapHandler }) {
  return (
    <nav id="navbar">
      <ul className="nav nav-tabs">
        {navArray.map((navItem) => (
          <li className="nav-item">
            <a
              onClick={() => pageSwapHandler(navItem.displayedPage)}
              href={navItem.href}
              className={
                displayedPage === navItem.displayedPage
                  ? "nav-link active"
                  : "nav-link text-light"
              }
            >
              {navItem.linkText}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
