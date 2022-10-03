import React, { useState } from "react";
// import emailjs from "emailjs-com";

export default function ContactForm() {
  // function sendEmail(e) {
  //   e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

  //   emailjs
  //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
  //     .then(
  //       (result) => {
  //         window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleTextChange = (event) => {
    const target = event.target;
    const textElementName = target.name;
    const textElementValue = target.value;

    if (textElementName === "email") {
      setEmail(textElementValue);
    } else if (textElementName === "name") {
      setName(textElementValue);
    } else {
      setMessage(textElementValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!/(.+)@(.+){2,}\.(.+){2,6}/.test(email)) {
      setErrMsg("Please type a valid email.");
      return;
    }
    if (!name) {
      setErrMsg("Please type your name.");
      return;
    }
    if (!message) {
      setErrMsg("Please type a message.");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
    setErrMsg("");
  };

  return (
    <div className="d-inline-block">
      <h5>Feel free to send me a message:</h5>
      <p>(Not functional, use the provided email or phone link for now)</p>
      <form className="form">
        <p>
          <input
            className="w-100"
            value={email}
            name="email"
            onChange={handleTextChange}
            type="email"
            placeholder="Your Email..."
          />
        </p>
        <p>
          <input
            className="w-100"
            value={name}
            name="name"
            onChange={handleTextChange}
            type="text"
            placeholder="Your Name..."
          />
        </p>
        <p>
          <textarea
            className="w-100"
            value={message}
            name="message"
            onChange={handleTextChange}
            type="text"
            placeholder="Type your message..."
            rows="8"
          />
        </p>
        <p>
          <button
            type="button"
            className="btn btn-success border-dark"
            onClick={handleFormSubmit}
          >
            Send
          </button>
        </p>
      </form>
      {errMsg && (
        <div>
          <p className="error-text">{errMsg}</p>
        </div>
      )}
    </div>
  );
}
