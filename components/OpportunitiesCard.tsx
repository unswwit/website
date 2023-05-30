import React from 'react';
import styles from '../styles/JobsBoard.module.css';
import Link from 'next/link';

export default function OpportunitiesCard({
  individualOpportunity,
  index,
}: any) {
  const {
    link,
    img,
    companyName,
    type,
    position,
    location,
    closeDate,
    summary,
  } = individualOpportunity.fields;

  const imgUrl = 'https:' + img.fields.file.url;

  return (
    <Link href={link} className={styles.oppGridItems} key={index}>
      <>
        <div className={styles.darkOverlay} />
        <div className={styles.imageContainer}>
          {/* TODO: change to Image tag - attempted but causes css issues */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.oppImg} src={imgUrl} alt={companyName} />
        </div>
        <div className={styles.oppDesc}>
          <p className={styles.oppTypeAndCompany}>{type}</p>
          <p className={styles.jobPosition}>{position}</p>
          <p className={styles.oppTypeAndCompany}>{companyName}</p>
          <p className={styles.oppSummary}>Location: {location}</p>
          {closeDate && (
            // contentfulDate = YYYY-MM-DD
            // formattedDate = DD/MM/YYYY
            <p className={styles.oppSummary}>
              Applications close: {closeDate.split('-').reverse().join('/')}
            </p>
          )}
          <p className={styles.oppSummary}>{summary}</p>
        </div>
      </>
    </Link>
  );
}
