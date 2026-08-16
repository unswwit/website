import React from 'react';
import styles from '../styles/CareersHub.module.css';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageBanner = ({ eyebrow, title, description }: PageBannerProps) => (
  <header className={styles.pageBanner}>
    <div className={styles.wrap}>
      <span className={styles.pageBannerEyebrow}>{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </header>
);

export default PageBanner;
