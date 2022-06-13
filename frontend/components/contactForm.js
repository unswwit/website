import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/contactUs.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function ContactForm() {
  const [email, setEmail] = React.useState("");

  // configure recaptcha
  // const recaptchaRef = useRef(null)

  // const validateCaptcha = async () => {
  //   const captchaToken = await recaptchaRef.current.getValue();
  //   recaptchaRef.current.reset();

  //   // pass token to backend & verify
  //   try {
  //     const result = await axios.post(
  //       process.env.REACT_APP_VERIFY_URL, {captchaToken}
  //     );

  //     return result.status === 200 ? true : false;

  //   } catch (error) {
  //     console.error("Error: recaptcha token verification failed.")
  //     return false;
  //   }
  // };
 
  // form submission
  const sendEmail = async (e) => {
    e.preventDefault();

    // validating that the email is in the correct form
    const validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validate.test(email)) {
      // validate recaptcha
      const captchaResult = await validateCaptcha();
      // if (captchaResult === true) {

      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE,
          e.target,
          process.env.REACT_APP_EMAILJS_ID
        )
        .then(
          (result) => {
            alert(
              "Your inquiry was sent successfully. You can expect to hear a response from us within a week."
            );
          },
          (error) => {
            alert("Your inquiry failed to send. Please try again");
          }
        );
      setEmail("");
      e.target.reset();
        }
        else {
          alert("ReCaptcha validation failed.");
        }

    // } else {
    //   alert("Please input a valid email");
    // }

  };

  return (
    <form
      method="post"
      encType="text/plain"
      className={styles.formStyle}
      onSubmit={sendEmail}
    >
      <input
        className={styles.formInput}
        type="text"
        name="name"
        placeholder="Full Name*"
        required
      />
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
      <textarea
        className={styles.formInput}
        name="message"
        placeholder="Message*"
        rows="5"
        required
      />
      <br />
      <br />
        {/* <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        /> */}
      <br />
      <br />
      <input type="submit" className={styles.submitButton} value="Submit" />
    </form>
  );
}

export default ContactForm;