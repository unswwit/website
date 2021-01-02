import React from "react";
import emailjs from "emailjs-com";
import "./contactUs.css";

function ContactForm() {
  const [ email, setEmail ] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // validating that the email is in the correct form
    if (email.match(/.+@.+\..+/)) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE,
          e.target,
          process.env.REACT_APP_EMAILJS_ID
        )
        .then(
          (result) => {
            alert("Your inquiry was sent successfully. You can expect to hear a response from us within a week.");
          },
          (error) => {
            alert("Your inquiry failed to send. Please try again");
          }
        );
      e.target.reset();
    } else {
      alert("Please input a valid email");
    }
  };

  return (
    <form method="post" encType="text/plain" className="formStyle" onSubmit={sendEmail}>
      <input className="formInput" type="text" name="name" placeholder="Full Name*" required />
      <br />
      <br />
      <input
        className="formInput"
        type="text"
        name="email"
        placeholder="Email Address*"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <textarea className="formInput" name="message" placeholder="Message*" rows="5" required />
      <br />
      <br />
      <input type="submit" className="submitButton" value="Submit" />
    </form>
  );
}

export default ContactForm;
