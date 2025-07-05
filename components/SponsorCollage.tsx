import React from 'react';
import styles from '../styles/SponsorCollage.module.css';
import Image from 'next/image';
import useDarkMode from './useDarkMode';

const SponsorCollage = ({ tempSponsors }: any) => {
  const isDark = useDarkMode();

  return (
    <div className={styles.sponsors}>
      <div className={styles.collageContainer}>
        {Object.keys(tempSponsors).map((sponsorType, index) => (
          <div key={index} className={styles.rowContainer}>
            {tempSponsors[sponsorType].map((sponsor: any, index: any) => {
              const logoUrl = isDark
                ? 'https:' + sponsor.fields.darkModeLogo.fields.file.url
                : 'https:' + sponsor.fields.lightModeLogo.fields.file.url;

              return (
                <div key={index} className={styles.logoContainer}>
                  <Image
                    className={styles.logo}
                    src={logoUrl}
                    alt={'sponsor logo'}
                    width="100"
                    height="100"
                    key={logoUrl} 
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorCollage;
