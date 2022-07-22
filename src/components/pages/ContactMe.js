import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const contactArray = [
  {
    type: "Email",
    reference: "mailto:a.paulbrock@gmail.com",
    icon: faEnvelope,
  },
  {
    type: "Phone",
    reference: "tel:+17274009280",
    icon: faPhone,
  },
  {
    type: "GitHub",
    reference: "https://github.com/Abrock3",
    icon: faGithub,
  },
  {
    type: "LinkedIn",
    reference: "https://www.linkedin.com/in/adam-p-brock/",
    icon: faLinkedin,
  },
  {
    type: "Twitter",
    reference: "https://twitter.com/chockabrock",
    icon: faTwitter,
  },
];
<li key="github" className="col-11">
  <a target="_blank" rel="noreferrer" href="https://github.com/Abrock3">
    <FontAwesomeIcon icon={faGithub} className="fa-8x" />
  </a>
</li>;
export default function ContactMe() {
  return (
    <section className="flex-container" id="contact-me">
      <header className="content-header">
        <h2>Contact Me</h2>
      </header>
      <address className="content-section ">
        <ul className="d-flex justify-content-center flex-wrap">
          {contactArray.map((contact, index) => (
            <li
              key={contact.type}
              className={
                contactArray.length % 2 === 1 &&
                (contactArray.length - 1) / 2 === index
                  ? "d-flex justify-content-center col-11"
                  : "d-flex justify-content-center col-5"
              }
            >
              <a href={contact.reference}>
                <FontAwesomeIcon className="fa-7x" icon={contact.icon} />
              </a>
            </li>
          ))}
        </ul>
      </address>
    </section>
  );
}
