import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const navArray = [
  {
    href: "/about-me",
    linkText: "About Me",
  },
  {
    href: "/work",
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
  return (
    <nav id="navbar">
      <ul className="nav nav-tabs">
        {navArray.map((navItem) => (
          <li className="nav-item" key={navItem.href}>
            <Link
              to={navItem.href}
              className={
                window.location.pathname === navItem.href
                  ? "nav-link active"
                  : "nav-link text-light"
              }
            >
              {navItem.linkText}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
