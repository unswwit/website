import React, {useState} from "react";
import TextField from "@material-ui/core/Textfield";
import styles from "./home.module.css";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [degree, setDegree] = useState("");

  console.log(status);
  const submit = () =>
    email &&
		name &&
		lastName &&
		email.indexOf("@") > -1 &&
		onValidated({
		  EMAIL: email,
		  NAME: name,
		  LASTNAME: lastName,
		  DEGREE: degree
		});

  return (
    <div className={styles.paper}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && <div style={{ color: "red" }}>{message}</div>}
      {status === "success" && <div style={{ color: "green" }}>{message}</div>}
     
      <img
        src={`${process.env.PUBLIC_URL}./newsletter.png`}
        className={styles.newsletterImg}
        alt="newsletter"
      />
      <h1 className={styles.formTitle}>Newsletter</h1>
      <p className={styles.formDescription}>Stay up to date WIT us on the latest events and news</p>
      <TextField
        className={styles.newsletterInput}
        required
        fullWidth
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        label="email"
        error={!email.match(/.+@.+\..+/)}
      />
      <TextField
        className={styles.newsletterInput}
        required
        fullWidth
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="First Name"
      />
      <TextField
        className={styles.newsletterInput}
        required
        fullWidth
        id="last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        label="Last Name"
      />
      <TextField
        fullWidth
        className={styles.newsletterInput}
        id="last name"
        value={degree}
        onChange={(event) => setDegree(event.target.value)}
        label="Degree"
      />
      <button className={styles.newsletterBtn} onClick={submit}>
				Subscribe
      </button>
    </div>
  );
};

export default NewsletterForm;
