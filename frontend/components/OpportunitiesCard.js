import React, { Component } from "react";
import styles from "../styles/opportunities.module.css";
import Link from "next/link";

export default function OpportunitiesCard({ individualOpportunity, index }) {
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

  const imgUrl = "https:" + img.fields.file.url;

  // change date

  return (
    <Link href={link}>
      <a className={styles.oppGridItems} key={index}>
        <div className={styles.darkOverlay} />
        <div className={styles.imageContainer}>
          {/* Todo: change to Image tag - attempted but causes css issues */}
          <img className={styles.oppImg} src={imgUrl} alt={companyName} />
        </div>

        {/* The image name could be found in the "public/sponsors/2021" folder or add it to "public/opportunities" folder */}
        <div className={styles.oppDesc}>
          <p className={styles.oppTypeAndLocation}>{type}</p>
          {/* The type should be in the format of the following example: Graduate Role */}
          <p className={styles.jobPosition}>{position}</p>
          {/* The position should be in the format of the following example: Front End Developer */}
          <p className={styles.oppTypeAndLocation}>{location}</p>
          {closeDate ? (
            <p className={styles.oppSummary}>
              Applications close: {closeDate}
              {/* The close date should be in the format of the following example: 01/01/2021 */}
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
