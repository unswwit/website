import React from "react";
import emailjs from "emailjs-com";
import styles from "./contactUs.module.css";
import { ReCaptcha } from 'react-recaptcha-google';

// Test Keys for recaptcha, generate actual keys when implementing (IMPORTANT : store secret key in .env file)
// Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
// Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe


function ContactForm() {
  const [ email, setEmail ] = React.useState("");

  var isValidUser = false;
  var generatedRecaptchaToken;

  const verifyCallback = (recaptchaToken) => {
    console.log(recaptchaToken, "= recaptcha token")
    generatedRecaptchaToken = recaptchaToken;
    // send recaptchaToken to backend server and perform verification
    // on server, receive result boolean back from server
    // https://developers.google.com/recaptcha/docs/verify

    // NOTE : Consider sending email from server
    //isValidUser = result;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    // validating that the email is in the correct form
    const validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validate.test(email)) {
      if (generatedRecaptchaToken == null) {
        alert("Your inquiry failed to send. Please complete the captcha and try again");
      } else {
        if (isValidUser) {
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
          setEmail("");
          e.target.reset();  
          } else {
            alert("Recaptcha failed. Please complete the captcha and try again");
          }
        }    
    } else {
      alert("Please input a valid email");
    }
  };

  return (
    <form method="post" encType="text/plain" className={styles.formStyle} onSubmit={sendEmail}>
      <input className={styles.formInput} type="text" name="name" placeholder="Full Name*" required />
      <br />
      <br />
      <input
        className={styles.formInput}
        type="text"
        name="email"
        placeholder="Email Address*"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <textarea className={styles.formInput} name="message" placeholder="Message*" rows="5" required />
      <br />
      <br />
      <ReCaptcha
            size="normal"
            data-theme="light"            
            render="explicit"
            // Replace test sitekey with actual sitekey
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            verifyCallback={verifyCallback}
        />
      <br />
      <br />
      <input type="submit" className={styles.submitButton} value="Submit" />
    </form>
  );
}

export default ContactForm;
