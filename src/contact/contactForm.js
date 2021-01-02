import React from "react";
import emailjs from "emailjs-com";
import "./contactUs.css";

export default function contactForm() {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_ID).then(
      (result) => {
        console.log(result.text);
        alert("Your inquiry was sent successfully. You can expect a response within a week.")
      },
      (error) => {
        console.log(error.text);
        alert("Your inquiry failed to send. Please try again");
      }
    );
    e.target.reset();
  }

  return (
    <form method="post" encType="text/plain" className="formStyle" onSubmit={sendEmail}>
      <input
        className="formInput"
        type="text"
        name="name"
        placeholder="Full Name*"
        required
      />
      <br />
      <br />
      <input
        className="formInput"
        type="text"
        name="email"
        placeholder="Email Address*"
        required
      />
      <br />
      <br />
      <textarea
        className="formInput"
        name="message"
        placeholder="Message*"
        rows="5"
        required
      />
      <br />
      <br />
      <input
        type="submit"
        className="submitButton"
        value="Submit"       
      />    
    </form>
  );
}
