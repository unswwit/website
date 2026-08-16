import React from 'react';
import styles from '../styles/CareersHub.module.css';
import { PathwayEntry } from '../lib/careersHubData';

const PathwayCard = ({ pathway, stagger = 0 }: { pathway: PathwayEntry; stagger?: number }) => (
  <div data-reveal className={styles.reveal} style={{ '--stagger': `${stagger}s` } as React.CSSProperties}>
    <div className={styles.pathwayCard}>
      <span className={styles.pathwayIcon}>{pathway.icon}</span>
      <h3 className={styles.pathwayTitle}>{pathway.title}</h3>
      <p className={styles.pathwayBody}>{pathway.body}</p>
      <p className={styles.pathwayTip}>
        <span className={styles.tipLabel}>Tip —</span> {pathway.tip}
      </p>
    </div>
  </div>
);

export default PathwayCard;
