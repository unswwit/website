import React from "react";
import styles from "./sponsors.module.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const SponsorsModal = ({ handleClose, sponsorName, sponsors }) => {
  const key = sponsorName;
  return (
    <div className={styles.paper}>
      <IconButton aria-label="close sponsors modal" onClick={handleClose} className={styles.closeBtn}>
        <CloseIcon className={styles.closeSymbol} />
      </IconButton>
      <br />
      <br />
      <div className={styles.textBlock}>
        <img
          className={styles.sponsorImage}
          src={`${process.env.PUBLIC_URL}/sponsors/2021/${sponsors[key][2]}`}
          alt={key}
        />
        <h1 className={styles.sponsorType}>{sponsors[key][3]} SPONSOR</h1>
        <div className={styles.inLine}>
          <p className={styles.sponsorWebsite}>Website: </p>
          <a className={styles.sponsorLink} href={sponsors[key][1]} target="_blank" rel="noopener noreferrer">
            {sponsors[key][1]}
          </a>
        </div>
        <p className={styles.sponsorDescription}>{sponsors[key][4]} </p>
      </div>
    </div>
  );
};

export default SponsorsModal;
