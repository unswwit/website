import React from "react";
// import TextField from "@material-ui/core/Textfield";
import styles from "./Newsletter.module.css";
//import Mailchimp from "react-mailchimp-form";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const NewsletterForm = ({ handleClose }) => {
  const [ email, setEmail ] = React.useState("");
  const [ error, setError ] = React.useState(false);
  const validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (validate.test(e.target.value)) {
      setError(false);
    } else {
      setError(true);      
    }
  };
  /*
  const [ email, setEmail ] = React.useState("");
  const [ FName, setFName ] = React.useState("");
  const [ LName, setLName ] = React.useState("");
  const [ degree, setDegree ] = React.useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validate.test(email)) {
      const path = process.env.PUBLIC_URL;
      const url = path.replace("/post?", "/post-json?");
      sendData(url, e);
    } else {
      alert("Please input a valid email");
    }
  };

  const sendData = (url, e) => {
    const formData = {
      EMAIL: email,
      FNAME: FName,
      LNAME: LName,
      MMERGE3: degree
    };
    jsonp(`${url}&${queryString.stringify(formData)}`, { param: "c" }, (err, data) => {
      console.log("err:", err);
      console.log("data:", data);
      if (data.msg.includes("already subscribed")) {
        alert("Too many subscribe attempts for this email address");
      } else if (err || data.result !== "success") {
        alert("An unexpected internal error has occurred. Please make sure you are not already subscribed to our newsletter.");
      } else {
        alert("Thank you for subscribing!");   
        e.target.reset();        
      };
    });
  };*/

  return (
    <div className={styles.paper}>
      <IconButton aria-label="close newsletter subscribe form" className={styles.closeBtn}>
        <CloseIcon onClick={handleClose} className={styles.closeSymbol}/>
      </IconButton>      
      <img
        src={`${process.env.PUBLIC_URL}./newsletter.png`}
        className={styles.newsletterImg}
        alt="newsletter"
      />
      <h1 className={styles.formTitle}>Newsletter</h1>
      <p className={styles.formDescription}>Stay up to date WIT us on the latest events and news</p>
      <form className="newsletter" action={process.env.REACT_APP_MAILCHIMP_URL} target="_blank" method="POST" novalidate>
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
        <p>{error ? "Please input a valid email" : ""}</p>
        <button disabled={error}>Subscribe</button>
      </form>

      {/*
      <Mailchimp
        action={process.env.REACT_APP_MAILCHIMP_URL}
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email*",
            type: "email",
            required: true,
            value:""
          },
          {
            name: "FNAME",
            placeholder: "First name*",
            type: "text",
            value:""
          },
          {
            name: "LNAME",
            placeholder: "Last name*",
            type: "text",
            value:""
          },
          {
            name: "MMERGE3",
            placeholder: "Degree",
            type: "text",
            value:""
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred. Please check that you have filled all required inputs and make sure you are not already subscribed to our newsletter.",
            empty: "You must write an email.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe"
          }
        }
        className="newsletter"
      />*/}
    </div>
  );
};

export default NewsletterForm;
