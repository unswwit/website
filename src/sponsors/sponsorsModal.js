import React from "react";
import styles from "./sponsors.module.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Sponsors from "./sponsors";

const sponsorsModal = ({ handleClose }) => {

  return (
    <div className={styles.paper}>
      <IconButton aria-label="close newsletter subscribe form" onClick={handleClose} className={styles.closeBtn}>
        <CloseIcon className={styles.closeSymbol}/>
      </IconButton>     
      <br />
      <br />
      <h1 className={styles.sponsorType}>MAJOR SPONSOR</h1>
      <p className={styles.sponsorDescription}>Stay up to date WIT us on the latest events and news</p>
      
    </div>
  );
};

export default sponsorsModal;
