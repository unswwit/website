import React, { useEffect, useState } from 'react';
import styles from '../styles/SponsorCollage.module.css';
import Image from 'next/image';

const SponsorCollage = ({ tempSponsors }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');

    setIsDarkMode(matchDark.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    matchDark.addEventListener('change', handleChange);

    return () => {
      matchDark.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className={styles.sponsors}>
      <div className={styles.collageContainer}>
        {Object.keys(tempSponsors).map((sponsorType, index) => (
          <div key={index} className={styles.rowContainer}>
            {tempSponsors[sponsorType].map((sponsor: any, index: any) => (
              <div key={`${index}-${isDarkMode ? 'dark' : 'light'}`} className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src={
                    'https:' +
                    (isDarkMode
                      ? sponsor.fields.darkModeLogo.fields.file.url
                      : sponsor.fields.lightModeLogo.fields.file.url)
                  }
                  alt={'sponsor logo'}
                  width="100"
                  height="100"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorCollage;
