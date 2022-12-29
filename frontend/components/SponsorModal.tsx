import React from 'react';
import styles from '../styles/Sponsors.module.css';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';

const SponsorsModal = ({ handleClose, sponsor, sponsorType }: any) => {
  const content = sponsor.fields.description.content;

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
        {/* TODO: change img tag to next/image */}
        <img
          className={styles.sponsorImage}
          src={
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'https:' + sponsor.fields.darkModeLogo.fields.file.url
              : 'https:' + sponsor.fields.lightModeLogo.fields.file.url
          }
          alt={sponsor.fields.name}
        />
        <h1 className={styles.sponsorType}>{sponsorType.slice(0, -1)}</h1>
        <div className={styles.inLine}>
          <p className={styles.sponsorWebsite}>Website: </p>
          <Link
            target="blank"
            href={sponsor.fields.website}
            rel="noopener noreferrer"
          >
            <a className={styles.sponsorLink}>{sponsor.fields.website}</a>
          </Link>
        </div>
        {Object.keys(content).map((contentNo, index) => (
          <p key={index} className={styles.sponsorDescription}>
            {content[contentNo].content[0].value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SponsorsModal;
