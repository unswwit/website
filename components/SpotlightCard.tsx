import React from 'react';
import Link from 'next/link';
import styles from '../styles/CareersHub.module.css';

interface SpotlightCardProps {
  icon: string;
  title: string;
  stat?: string;
  stagger?: number;
  href: string;
  image?: string;
}

// Clickable card used on both the Career Spotlights and Industry Spotlights
const SpotlightCard = ({ icon, title, stat, stagger = 0, href, image }: SpotlightCardProps) => (
  <Link
    href={href}
    data-reveal
    className={`${styles.spotCard} ${styles.reveal} ${image ? styles.spotCardWithImage : ''}`}
    style={{ '--stagger': `${stagger}s` } as React.CSSProperties}
  >
    {image ? (
      <>
        <h3 className={styles.spotTitle}>{title}</h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" aria-hidden="true" className={styles.spotImage} />
        {stat && <span className={styles.spotStat}>{stat}</span>}
        <span className={styles.spotCta}>Read spotlight →</span>
      </>
    ) : (
      <div className={styles.spotCardBody}>
        <span className={styles.spotIcon}>{icon}</span>
        <h3 className={styles.spotTitle}>{title}</h3>
        {stat && <span className={styles.spotStat}>{stat}</span>}
        <span className={styles.spotCta}>Read spotlight →</span>
      </div>
    )}
  </Link>
);

export default SpotlightCard;
