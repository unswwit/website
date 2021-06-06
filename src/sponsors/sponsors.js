import React, { useEffect } from "react";
import styles from "./sponsors.module.css";
import PageHeader from ".././header";

const Sponsors = () => {
  const majorSponsors = {
    Accenture: ["https://www.accenture.com/au-en", "accenture.png"],
    Atlassian: ["https://www.accenture.com/au-en", "atlassian-major.png"],
    // Cba: [ "https://www.commbank.com.au/about-us/careers.html", "cba-major.png" ],
    Ey: ["https://www.ey.com/en_au", "EY.gif"],
    Fdm: ["https://www.fdmgroup.com/en-au/au-home/", "fdm-group.png"],
    Google: ["https://careers.google.com/", "google-major.png"],
    JaneStreet: ["https://www.janestreet.com/", "jane-street.png"],
    McGrathNicol: ["https://www.mcgrathnicol.com/", "mcgrathcicol-major.png"],
    Nine: ["https://www.nineforbrands.com.au/", "nine-major.png"],
    Optiver: ["https://www.optiver.com/", "optiver.png"],
    Pwc: ["https://www.pwc.com.au/", "pwc-logo-png-transparent.png"],
    Quantium: ["https://quantium.com/", "quantium-major.png"],
    Resmed: ["https://www.resmed.com.au/", "ResMed.jpg"],
    Telstra: ["https://www.telstra.com.au/", "telstra-large.png"],
  };

  const affiliations = {
    Arc: ["https://www.arc.unsw.edu.au/", "arc.png"],
    "Business School": ["https://www.unsw.edu.au/business/", "business_school.png"],
    "School of CSE": ["https://www.unsw.edu.au/engineering/computer-science-and-engineering", "cse.png"],
    "Women and Girls in Engineering": ["https://www.unsw.edu.au/engineering/student-life/women-engineering", "women_girls_eng.png"],
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/sponsors-header-2.jpg" title="Sponsors" />

      <div id={styles.sponsorsBody}>
        <p className={styles.subheader}>
          Thank you to our sponsors for generously supporting our cause and
          collaborating with us to provide our students invaluable
          opportunities.
        </p>

        {/* Principal Sponsors Area */}
        <h2 className={styles.subsponsor}>Principal Sponsors</h2>
        <div id={styles.majorContainer}>
          <a
            href="https://www.eucalyptus.vc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.principal}
              src={process.env.PUBLIC_URL + "/sponsors/2021/euc-logo.png"}
              alt="Eucalyptus"
            />
          </a>
        </div>

        {/* Major Sponsors Area */}
        <h2 className={styles.subsponsor}>Major Sponsors</h2>

        <div id={styles.majorContainer}>
          {Object.keys(majorSponsors)
            .sort()
            .map((key, index) => (
              <a
                key={index}
                href={majorSponsors[key][0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.major}
                  src={`${process.env.PUBLIC_URL}/sponsors/2021/${majorSponsors[key][1]}`}
                  alt={key}
                />
              </a>
            ))}
        </div>

        {/* Affiliations Area */}
        <h2 className={styles.subsponsor}>Affiliations</h2>

        <div id={styles.majorContainer}>
          {Object.keys(affiliations)
            .sort()
            .map((key, index) => (
              <a
                key={index}
                href={affiliations[key][0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.affiliations}
                  src={`${process.env.PUBLIC_URL}/affiliations/${affiliations[key][1]}`}
                  alt={key}
                />
              </a>
            ))}
        </div>

        <p className={styles.subheader}>
          Interested in partnering with us? Contact us at{" "}
          <a className={styles.subheader} href="mailto:externals@unswwit.com">
            externals@unswwit.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sponsors;
