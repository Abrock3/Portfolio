import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/contactForm";

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
];

export default function ContactMe() {
  return (
    <section className="flex-container " id="contacts">
      <header className="content-header">
        <h2>Contact Me</h2>
      </header>
      <address className="content-section d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <ContactForm className="w-50" />
        <div className="d-inline-block w-100 h-100">
          <ul className="d-flex justify-content-around flex-column align-items-center w-100 h-100">
            {contactArray.map((contact) => (
              <li
                key={contact.type}
                className="d-flex justify-content-center align-items-center flex-column col-5"
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={contact.reference}
                  className="contact-anchor d-flex flex-column align-items-center"
                >
                  <FontAwesomeIcon className="fa-5x" icon={contact.icon} />
                  <h3 className="contact-label">{contact.type}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </address>
    </section>
  );
}
