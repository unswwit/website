import React from 'react';
import styles from '../styles/Opportunities.module.css';
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

  // contentfulDate = YYYY-MM-DD
  // formattedDate = DD/MM/YYYY
  const closeDateFormatted = closeDate.split('-').reverse().join('/');

  return (
    <Link href={link}>
      <a className={styles.oppGridItems} key={index}>
        <div className={styles.darkOverlay} />
        <div className={styles.imageContainer}>
          {/* Todo: change to Image tag - attempted but causes css issues */}
          <img className={styles.oppImg} src={imgUrl} alt={companyName} />
        </div>

        <div className={styles.oppDesc}>
          <p className={styles.oppTypeAndLocation}>{type}</p>
          <p className={styles.jobPosition}>{position}</p>
          <p className={styles.oppTypeAndLocation}>{location}</p>
          {closeDate ? (
            <p className={styles.oppSummary}>
              Applications close: {closeDateFormatted}
            </p>
          ) : (
            <p className={styles.oppSummary}></p>
          )}
          <p className={styles.oppSummary}>{summary}</p>
        </div>
      </a>
    </Link>
  );
}
