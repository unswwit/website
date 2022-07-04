import React from "react";
import styles from "../styles/Newsletter.module.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const NewsletterForm = ({ handleClose }) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const validate =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (validate.test(e.target.value)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.paper}>
      <IconButton
        aria-label="close newsletter subscribe form"
        onClick={handleClose}
        className={styles.closeBtn}
      >
        <CloseIcon className={styles.closeSymbol} />
      </IconButton>
      <br />
      <br />
      <h1 className={styles.formTitle}>Newsletter</h1>
      <p className={styles.formDescription}>
        Stay up to date WIT us on the latest events and news
      </p>
      <form
        className="newsletter"
        action={process.env.REACT_APP_MAILCHIMP_URL}
        target="_blank"
        method="POST"
        noValidate
      >
        <input
          aria-label="Email"
          aria-required="true"
          type="text"
          name="EMAIL"
          placeholder="Email Address*"
          required
          value={email}
          onChange={(e) => checkEmail(e)}
        />
        <input
          aria-label="First Name"
          aria-required="true"
          type="text"
          name="FNAME"
          placeholder="First Name*"
          required
        />
        <input
          aria-label="Last Name"
          aria-required="true"
          type="text"
          name="LNAME"
          placeholder="Last Name*"
          required
        />
        <input
          aria-label="Degree"
          aria-required="false"
          type="text"
          name="MMERGE3"
          placeholder="Degree"
        />
        <p className={styles.subscribeError}>
          {error ? "Please input a valid email" : ""}
        </p>
        <button disabled={error}>Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterForm;
