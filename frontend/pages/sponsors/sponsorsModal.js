import React from "react";
import styles from "../../styles/sponsors.module.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Image from "next/image";

const SponsorsModal = ({ handleClose, sponsorName, sponsors }) => {
  return (
    <div className={styles.paper}>
      <IconButton
        aria-label="close sponsors modal"
        onClick={handleClose}
        className={styles.closeBtn}
      >
        <CloseIcon className={styles.closeSymbol} />
      </IconButton>
      <br />
      <br />
      <div className={styles.textBlock}>
        <Image
          className={styles.sponsorImage}
          src={(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)?`${process.env.PUBLIC_URL}/sponsors/2022/dark-mode/${sponsors[sponsorName][2]}`:`${process.env.PUBLIC_URL}/sponsors/2022/${sponsors[sponsorName][2]}`}
          alt={sponsorName}
        />
        <h1 className={styles.sponsorType}>
          {sponsors[sponsorName][3]} SPONSOR
        </h1>
        <div className={styles.inLine}>
          <p className={styles.sponsorWebsite}>Website: </p>
          <a
            className={styles.sponsorLink}
            href={sponsors[sponsorName][1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sponsors[sponsorName][1]}
          </a>
        </div>
        <p className={styles.sponsorDescription}>{sponsors[sponsorName][4]} </p>
      </div>
    </div>
  );
};

export default SponsorsModal;
