<<<<<<< HEAD
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

=======
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const navArray = [
  {
    href: "/about-me",
    linkText: "About Me",
  },
  {
    href: "/portfolio",
    linkText: "Portfolio",
  },
  {
    href: "/resume",
    linkText: "Resume",
  },
  {
    href: "/contact-me",
    linkText: "Contact Me",
  },
];
export default function Navigation() {
  let history = useNavigate();
  // forces a rerender of this component when the URL changes so it can adjust its style
  useEffect(() => {}, [history]);
>>>>>>> parent of c4a50d2 (Fixed a bug with refreshing the portfolio page)
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
