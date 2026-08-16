import React from 'react';
import Link from 'next/link';
import styles from '../styles/CareersHub.module.css';

const CareersHero = () => (
  <header className={styles.hero} id="top">
    <div className={styles.wrap}>
      <h1>
        Find your <em>unique path</em>
        <br />
        into tech.
      </h1>
      <p className={styles.heroLede}>
        A one-stop guide to careers, industries, and job-search know-how, built so you can stop
        drowning in advice from every direction and start figuring out what actually fits you.
      </p>
      <div className={styles.heroCta}>
        <Link href="/careers-hub/career-spotlights" className={`${styles.btn} ${styles.btnPrimary}`}>
          Explore career spotlights →
        </Link>
        <Link href="/careers-hub/jobs-board" className={`${styles.btn} ${styles.btnGhost}`}>
          Browse the jobs board
        </Link>
      </div>
    </div>
  </header>
);

export default CareersHero;
