import Image from "next/image";
import styles from "../styles/SponsorCollage.module.css";
import { sponsors, affiliations, partnerships } from "../data/sponsor.js";

const SponsorCollage = () => {
  const diamondSponsors = Object.keys(sponsors)
    .sort()
    .filter((key) => sponsors[key][3] === "DIAMOND");
  const goldSponsors = Object.keys(sponsors)
    .sort()
    .filter((key) => sponsors[key][3] === "GOLD");
  const silverSponsors = Object.keys(sponsors)
    .sort()
    .filter((key) => sponsors[key][3] === "SILVER");
  const bronzeSponsors = Object.keys(sponsors)
    .sort()
    .filter((key) => sponsors[key][3] === "BRONZE");

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
        {sponsorsList.map((tier) => (
          <div className={styles.rowContainer}>
            {tier.map((key) => (
              <div className={styles.logoContainer}>
                <Image
                  className={styles.logo}
                  src={
                    window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? `/sponsors/2022/dark-mode/${sponsors[key][2]}`
                      : `/sponsors/2022/${sponsors[key][2]}`
                  }
                  height={"100%"}
                  width={"100%"}
                />
              </div>
            ))}
          </div>
        ))}
        <div className={styles.rowContainer}>
          {affiliationsSorted.map((key) => (
            <div className={styles.logoContainer}>
              <Image
                className={styles.logo}
                src={
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? `/affiliations/dark-mode/${affiliations[key][1]}`
                    : `/affiliations/${affiliations[key][1]}`
                }
                height={"100%"}
                width={"100%"}
              />
            </div>
          ))}
        </div>
        <div className={styles.rowContainer}>
          {partnershipsSorted.map((key) => (
            <div className={styles.logoContainer}>
              <Image
                className={styles.logo}
                src={
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? `/partnerships/dark-mode/${partnerships[key][1]}`
                    : `/partnerships/${partnerships[key][1]}`
                }
                height={"100%"}
                width={"100%"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorCollage;
