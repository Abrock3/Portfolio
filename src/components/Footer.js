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

export default function Footer() {
  return (
    <footer className="text-center text-white p-0 pt-2 mt-auto footer">
      <div className="container-fluid p-4 pb-0">
        <section className="mb-4">
          {contactArray.map((contact, index) => (
            <a
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-floating m-1 contact-link"
              href={contact.reference}
              role="button"
            >
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          ))}
        </section>
      </div>
      <div className="text-center p-3 copyright">
        © 2022 Copyright: Adam Brock
      </div>
    </footer>
  );
}
