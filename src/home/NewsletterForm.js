import React from "react";
// import TextField from "@material-ui/core/Textfield";
import styles from "./Newsletter.module.css";
import Mailchimp from "react-mailchimp-form";

const NewsletterForm = () => {
  return (
    <div className={styles.paper}>
      <img
        src={`${process.env.PUBLIC_URL}./newsletter.png`}
        className={styles.newsletterImg}
        alt="newsletter"
      />
      <h1 className={styles.formTitle}>Newsletter</h1>
      <p className={styles.formDescription}>Stay up to date WIT us on the latest events and news</p>
      <Mailchimp
        action={process.env.REACT_APP_MAILCHIMP_URL}
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email*",
            type: "email",
            required: true
          },
          {
            name: "FNAME",
            placeholder: "First name*",
            type: "text",
            required: true
          },
          {
            name: "LNAME",
            placeholder: "Last name*",
            type: "text",
            required: true
          },
          {
            name: "MMERGE3",
            placeholder: "Degree",
            type: "text",
            required: false
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an email.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe"
          }
        }
        className="newsletter"
      />
    </div>
  );
};

export default NewsletterForm;
