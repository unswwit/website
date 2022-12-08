import {
  careerDescription,
  competitionDescription,
  externalsDescription,
  hrDescription,
  itDescription,
  marketingDescription,
  mediaDescription,
  publicationsDescription,
} from '../data/JoinData';
import styles from '../styles/JoinUs.module.css';
import React, { useState } from 'react';

const PortfolioGrid = () => {
  const [portfolios, setPortfolios] = useState({
    clickedCareers: true,
    clickedCompetitions: true,
    clickedExt: true,
    clickedHr: true,
    clickedIt: true,
    clickedMar: true,
    clickedMedia: true,
    clickedPubs: true,
  });

  return (
    <div className={styles.whatTo}>
      <div
        className={styles.portfolioBox}
        id={styles.careers}
        onClick={() =>
          setPortfolios({
            ...portfolios,
            clickedCareers: !portfolios.clickedCareers,
          })
        }
      >
        {portfolios.clickedCareers ? (
          'Careers'
        ) : (
          <p className={styles.desc}>{careerDescription()}</p>
        )}
      </div>
      <div
        className={styles.portfolioBox}
        id={styles.competitions}
        onClick={() =>
          setPortfolios({
            ...portfolios,
            clickedCompetitions: !portfolios.clickedCompetitions,
          })
        }
      >
        {portfolios.clickedCompetitions ? (
          'Competitions'
        ) : (
          <p className={styles.desc}>{competitionDescription()}</p>
        )}
      </div>
      <div
        className={styles.portfolioBox}
        id={styles.externals}
        onClick={() =>
          setPortfolios({
            ...portfolios,
            clickedExt: !portfolios.clickedExt,
          })
        }
      >
        {portfolios.clickedExt ? (
          'Externals'
        ) : (
          <p className={styles.desc}>{externalsDescription()}</p>
        )}
      </div>
      <div
        className={styles.portfolioBox}
        id={styles.hr}
        onClick={() =>
          setPortfolios({
            ...portfolios,
            clickedHr: !portfolios.clickedHr,
          })
        }
      >
        {portfolios.clickedHr ? (
          'HR'
        ) : (
          <p className={styles.desc}>{hrDescription()}</p>
        )}
      </div>
      <div
        className={styles.portfolioBox}
        id={styles.it}
        onClick={() =>
          setPortfolios({
            ...portfolios,
            clickedIt: !portfolios.clickedIt,
          })
        }
      >
        {portfolios.clickedIt ? (
          'IT'
        ) : (
          <p className={styles.desc}>{itDescription()}</p>
        )}
      </div>
      <div
        className={styles.portfolioBox}
        id={styles.marketing}
        onClick={() =>
          setPortfolios({
            ...portfolios,
            clickedMar: !portfolios.clickedMar,
          })
        }
      >
        {portfolios.clickedMar ? (
          'Marketing'
        ) : (
          <p className={styles.desc}>{marketingDescription()}</p>
        )}
      </div>
      <div
        className={styles.portfolioBox}
        id={styles.media}
        onClick={() =>
          setPortfolios({
            ...portfolios,
            clickedMedia: !portfolios.clickedMedia,
          })
        }
      >
        {portfolios.clickedMedia ? (
          'Media'
        ) : (
          <p className={styles.desc}>{mediaDescription()}</p>
        )}
      </div>
      <div
        className={styles.portfolioBox}
        id={styles.publications}
        onClick={() =>
          setPortfolios({
            ...portfolios,
            clickedPubs: !portfolios.clickedPubs,
          })
        }
      >
        {portfolios.clickedPubs ? (
          'Publications'
        ) : (
          <p className={styles.desc}>{publicationsDescription()}</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioGrid;
