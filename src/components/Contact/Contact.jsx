import React, { useState } from "react";

import firebase from "firebase";
import { db } from "../../firebase";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && subject && message) {
      db.collection("form").add({
        name: name,
        email: email,
        subject: subject,
        message: message,
        timestamp: new Date(),
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSubmit(false);
    }
  };

  return (
    <div className="test contact-wrapper">
      <h2 className="contact-header">Contact Me</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-div">
          <label>Enter you Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="form-div">
          <label>Enter you Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-div">
          <label>Enter you Subject</label>
          <input
            type="text"
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
        </div>

        <div className="form-div">
          <label>Enter you Message</label>
          <textarea
            rows="10"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>

        <button className="form-btn" type="submit">
          {submit ? "Submit" : "Submitted"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
