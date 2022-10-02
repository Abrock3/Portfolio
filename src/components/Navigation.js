import React from "react";

export default function Navigation({ displayedPage, pageSwapHandler }) {
  const navArray = [
    {
      page: "AboutMe",
      href: "#about-me",
      linkText: "About Me",
    },
    {
      page: "Portfolio",
      href: "#portfolio",
      linkText: "Portfolio",
    },
    {
      page: "Resume",
      href: "#resume",
      linkText: "Resume",
    },
    {
      page: "ContactMe",
      href: "#contact-me",
      linkText: "Contact Me",
    },
  ];

  return (
    <nav id="navbar">
      <ul className="nav nav-tabs">
        {navArray.map((navItem) => (
          <li className="nav-item" key={navItem.page}>
            <a
              onClick={() => pageSwapHandler(navItem.page)}
              href={navItem.href}
              className={
                displayedPage === navItem.page
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
