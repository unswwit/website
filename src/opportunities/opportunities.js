import React, { useEffect, useState } from "react";
import PageHeader from ".././header";
import styles from "./opportunities.module.css";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Opportunities = () => {
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);

    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        setLoading(false);
        setOpportunities(googleData["opportunities"]["elements"]);
      },
      simpleSheet: false,
    });
  }, []);

  return (
    <div>
      {/* Cover Photo */}
      <PageHeader
        imgUrl="/headers/opportunities-header.jfif"
        title="Opportunities"
      />

      {/*start of active opportunies*/}
      <h2 className={styles.oppSubheading}>Active Opportunities</h2>
      <div id={styles.oppLoadingContainer}>
        {loading && (
          <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id={styles.oppLoading}
          />
        )}
      </div>
      {!loading &&
        (!opportunities.length ? (
          <div className={styles.oppBody}>
            <p className={styles.oppLookout}>
              Keep a lookout here for upcoming opportunities!
            </p>
          </div>
        ) : (
          <div className={styles.oppBody}>
            <p className={styles.head}>
              Here are all the links to all current career opportunities
              available ranging from internships to graduate roles. Bookmark
              this page and check back regularly to be the first to know about
              job opportunies!
            </p>
            <p className={styles.head}>
              If you would like to make a listing, please contact us at&nbsp;
              <a href="mailto:externals@unswwit.com" className={styles.link}>
                externals@unswwit.com
              </a>
              .
            </p>
            <div className={styles.oppGridContainer}>
              {opportunities.map((individualOpportunity, index) => {
                return (
                  <div key={index} className={styles.oppGridItems}>
                    <img
                      className={styles.oppImg}
                      src={
                        process.env.PUBLIC_URL +
                        `/sponsors/2021/${individualOpportunity.img}`
                      }
                      alt={individualOpportunity.companyName}
                    />
                    {/* The image name could be found in the "public/sponsors/2021" folder */}
                    <div className={styles.oppDesc}>
                      <p className={styles.oppTypeAndLocation}>
                        {individualOpportunity.type}
                      </p>
                      {/* The type should be in the format of the following example: Graduate Role */}
                      <p className={styles.jobPosition}>
                        {individualOpportunity.position}
                      </p>
                      {/* The position should be in the format of the following example: Front End Developer */}
                      <p className={styles.oppTypeAndLocation}>
                        {individualOpportunity.location}
                      </p>
                      <p className={styles.oppSummary}>
                        Applications close: {individualOpportunity.closeDate}
                      {/* The position should be in the format of the following example: 01/01/2021 */}
                      </p>
                      <p className={styles.oppSummary}>
                        {individualOpportunity.summary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
};
export default Opportunities;
