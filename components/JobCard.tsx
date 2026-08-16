import React from 'react';
import styles from '../styles/CareersHub.module.css';
import { JobEntry } from '../lib/careersHubData';

const TYPE_LABELS: Record<JobEntry['type'], string> = {
  internship: 'Internship',
  grad: 'Grad Program',
  fulltime: 'Full-Time',
};

const JobCard = ({ job, stagger = 0 }: { job: JobEntry; stagger?: number }) => (
  <div
    data-reveal
    className={`${styles.jobCard} ${styles.reveal}`}
    style={{ '--stagger': `${stagger}s` } as React.CSSProperties}
  >
    <div className={styles.jobCardTop}>
      <span className={`${styles.jobType} ${styles[job.type]}`}>{TYPE_LABELS[job.type]}</span>
      <span className={styles.jobDeadline}>
        Closes <strong>{job.deadline}</strong>
      </span>
    </div>
    <h3 className={styles.jobTitle}>{job.title}</h3>
    <p className={styles.jobCompany}>{job.company}</p>
    <p className={styles.jobMeta}>
      <span>📍 {job.location}</span>
    </p>
    <p className={styles.jobDesc}>{job.description}</p>
    <a className={styles.jobApply} href={job.applyUrl} target="_blank" rel="noopener noreferrer">
      Apply now →
    </a>
  </div>
);

export default JobCard;