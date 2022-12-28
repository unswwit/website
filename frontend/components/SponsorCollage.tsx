import Image from 'next/image';
import styles from '../styles/SponsorCollage.module.css';
import { sponsors, affiliations, partnerships } from '../data/sponsor';

const SponsorCollage = () => {
  const data: {} = sponsors;
  const affiliationsData: {} = affiliations;
  const partnershipsData: {} = partnerships;
  const diamondSponsors = Object.keys(sponsors)
    .sort()
    .filter((key) => data[key as keyof {}][3] === 'DIAMOND');
  const goldSponsors = Object.keys(sponsors)
    .sort()
    .filter((key) => data[key as keyof {}][3] === 'GOLD');
  const silverSponsors = Object.keys(sponsors)
    .sort()
    .filter((key) => data[key as keyof {}][3] === 'SILVER');
  const bronzeSponsors = Object.keys(sponsors)
    .sort()
    .filter((key) => data[key as keyof {}][3] === 'BRONZE');

  const sponsorsList = [
    diamondSponsors,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
  ];
  const affiliationsSorted = Object.keys(affiliations).sort();
  const partnershipsSorted = Object.keys(partnerships).sort();

  return (
    <div className={styles.sponsors}>
      <div className={styles.collageContainer}>
        {sponsorsList.map((tier, index) => (
          <div key={index} className={styles.rowContainer}>
            {tier.map((key) => (
              <div key={key} className={styles.logoContainer}>
                <Image
                  className={styles.logo}
                  src={
                    window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
                      ? `/sponsors/2022/dark-mode/${data[key as keyof {}][2]}`
                      : `/sponsors/2022/${data[key as keyof {}][2]}`
                  }
                  alt={'sponsor logo'}
                  height={'100%'}
                  width={'100%'}
                />
              </div>
            ))}
          </div>
        ))}
        <div className={styles.rowContainer}>
          {affiliationsSorted.map((key) => (
            <div key={key} className={styles.logoContainer}>
              <Image
                className={styles.logo}
                src={
                  window.matchMedia &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? `/affiliations/dark-mode/${
                        affiliationsData[key as keyof {}][1]
                      }`
                    : `/affiliations/${affiliationsData[key as keyof {}][1]}`
                }
                alt={'affiliation logo'}
                height={'100%'}
                width={'100%'}
              />
            </div>
          ))}
        </div>
        <div className={styles.rowContainer}>
          {partnershipsSorted.map((key) => (
            <div key={key} className={styles.logoContainer}>
              <Image
                className={styles.logo}
                src={
                  window.matchMedia &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? `/partnerships/dark-mode/${
                        partnershipsData[key as keyof {}][1]
                      }`
                    : `/partnerships/${partnershipsData[key as keyof {}][1]}`
                }
                alt={'partnership logo'}
                height={'100%'}
                width={'100%'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorCollage;
