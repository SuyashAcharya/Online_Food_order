import React from "react";
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className="contact-body">
        <div className="wrapper">
      <h2>CONTACT US</h2>
      <form action="" method="POST">
        <div className="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            name="Name"
            id="name"
            placeholder="First and Last"
            required
            minlength="3"
            maxlength="25"
          />
        </div>
        <div className="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="email@domain.tld"
            required
          />
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea
            name="Message"
            id="message"
            rows="5"
            placeholder="Type your message here...."
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="submit">
            <i className="far fa-paper-plane"></i>Send
          </button>
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default Contact;
