import {
  careerDescription,
  competitionDescription,
  sponsDescription,
  hrDescription,
  itDescription,
  marketingDescription,
  mediaDescription,
  publicationsDescription,
  socialsDescription,
  eduDescription
} from '../data/join';
import styles from '../styles/JoinUs.module.css';
import React, { useState } from 'react';

// CHANGED: Easier to keep track of portfolios in array of dictionaries which can map to appropriate portfolio
const portfolios = [
  { key: 'careers', label: 'Careers', desc: careerDescription, styleId: styles.careers },
  { key: 'competitions', label: 'Competitions', desc: competitionDescription, styleId: styles.competitions },
  { key: 'hr', label: 'HR', desc: hrDescription, styleId: styles.hr },
  { key: 'it', label: 'IT', desc: itDescription, styleId: styles.it },
  { key: 'marketing', label: 'Marketing', desc: marketingDescription, styleId: styles.marketing },
  { key: 'media', label: 'Media', desc: mediaDescription, styleId: styles.media },
  { key: 'publications', label: 'Publications', desc: publicationsDescription, styleId: styles.publications },
  { key: 'socials', label: 'Socials', desc: socialsDescription, styleId: styles.socials },
  { key: 'spons', label: 'Sponsorships', desc: sponsDescription, styleId: styles.spons },
  { key: 'education', label: 'Education', desc: eduDescription, styleId: styles.education },
];

const PortfolioGrid = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={styles.whatTo}>
      {portfolios.map((portfolio) => (
        <div
          className={styles.portfolioBox}
          id={portfolio.styleId}
          key={portfolio.key}
          onMouseEnter={() => setHovered(portfolio.key)}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className={`${styles.descWrapper} ${
              hovered === portfolio.key ? styles.descVisible : ''
            }`}
          >
            <div className={styles.descText}>
              <p className={styles.desc}>{portfolio.desc()}</p>
            </div>
          </div>
          {hovered !== portfolio.key && portfolio.label}
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
