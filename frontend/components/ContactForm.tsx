import React from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/ContactUs.module.css';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [email, setEmail] = React.useState('');

  const sendEmail = (e: any) => {
    e.preventDefault();

    // validating that the email is in the correct form
    const validate =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validate.test(email)) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE,
          e.target,
          process.env.NEXT_PUBLIC_EMAILJS_ID
        )
        .then(
          () => {
            alert(
              'Your inquiry was sent successfully. You can expect to hear a response from us within a week.'
            );
          },
          (error) => {
            alert('Your inquiry failed to send. Please try again');
          }
        );
      setEmail('');
      e.target.reset();
    } else {
      alert('Please input a valid email');
    }
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
        rows={5}
        required
      />
      <br />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={sendEmail}
      />
      {/* TODO: add functionality to reset recaptcha check after form submission */}
      <br />
      <input type="submit" className={styles.submitButton} value="Submit" />
    </form>
  );
};

export default ContactForm;
