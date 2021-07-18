import React, { useEffect, useState } from "react";
import PageHeader from "../components/header";
import styles from "./opportunities.module.css";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";
import LoadingScreen from "../components/LoadingScreen";

const Opportunities = () => {
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = useState(true);
  const [sourceLoading, setSourceLoading] = React.useState(true);

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
        setSourceLoading(false);
      },
      simpleSheet: false,
    });
  }, []);

  return (
    <div>
      {sourceLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/opportunities-header.jfif"
            title="Opportunities"
          />

          {/*start of opportunies*/}
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
              <div className={styles.oppLookout}>
                <p className={styles.lookoutSize}>
                  Keep a lookout here for upcoming opportunities!
                </p>
              </div>
            ) : (
              <div className={styles.oppBody}>
                <p className={styles.head}>
                  Here are all the links to all current career opportunities
                  available ranging from internships to graduate roles. Bookmark
                  this page and check back regularly to be the first to know
                  about job opportunities!
                </p>
                <p className={styles.head}>
                  If you would like to make a listing, please contact us
                  at&nbsp;
                  <a
                    href="mailto:externals@unswwit.com"
                    className={styles.link}
                  >
                    externals@unswwit.com
                  </a>
                  .
                </p>
                <div className={styles.oppGridContainer}>
                  {opportunities.map((individualOpportunity, index) => {
                    return (
                      <a
                        href={individualOpportunity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.oppGridItems}
                        key={index}
                      >
                        <div>
                          {individualOpportunity.img.length ? (
                            <img
                              className={styles.oppImg}
                              src={
                                process.env.PUBLIC_URL +
                                `/sponsors/2021/${individualOpportunity.img}`
                              }
                              alt={individualOpportunity.companyName}
                            />
                          ) : (
                            <img
                              className={styles.oppImg}
                              src={
                                process.env.PUBLIC_URL +
                                `/opportunities/${individualOpportunity.notSponsorImg}`
                              }
                              alt={individualOpportunity.companyName}
                            />
                          )}

                          {/* The image name could be found in the "public/sponsors/2021" folder or add it to "public/opportunities" folder */}
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
                            {individualOpportunity.closeDate.length ? (
                              <p className={styles.oppSummary}>
                                Applications close:{" "}
                                {individualOpportunity.closeDate}
                                {/* The close date should be in the format of the following example: 01/01/2021 */}
                              </p>
                            ) : (
                              <p className={styles.oppSummary}></p>
                            )}
                            <p className={styles.oppSummary}>
                              {individualOpportunity.summary}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default Opportunities;
