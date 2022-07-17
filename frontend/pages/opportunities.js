import React, { useEffect, useState } from "react";
import PageHeader from "../components/header";
import styles from "../styles/opportunities.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import LoadingScreen from "../components/LoadingScreen";
import axios from "axios";
import humps from "humps";
import Link from "next/link";
import Image from "next/image";

const Opportunities = () => {
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = useState([]);
  const [sourceLoading, setSourceLoading] = React.useState(true);
  const [headerLoading, setHeaderLoading] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchOpportunities = async () => {
    const res = await axios.get(
      "https://wit-database.herokuapp.com/opportunities"
    );
    setLoading(false);
    setOpportunities(humps.camelizeKeys(res.data));
    setSourceLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchOpportunities().catch((error) =>
      // error handling
      console.error(error)
    );
  }, []);

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/opportunities-header.jfif"
            title="Opportunities"
            imageLoading={setHeaderLoading}
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
                        <div className={styles.darkOverlay} />
                        <div className={styles.imageContainer}>
                          {individualOpportunity.img ? (
                            <Image
                              className={styles.oppImg}
                              src={`/sponsors/2022/${individualOpportunity.img}`}
                              alt={individualOpportunity.companyName}
                              width={45}
                              height={40}
                            />
                          ) : (
                            <Image
                              className={styles.oppImg}
                              src={`/opportunities/${individualOpportunity.notSponsorImg}`}
                              alt={individualOpportunity.companyName}
                              width={45}
                              height={40}
                            />
                          )}
                        </div>

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
                          {individualOpportunity.closeDate ? (
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
