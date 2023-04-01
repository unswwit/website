import React, { useEffect, useState } from 'react';
import PageHeader from '../components/Header';
import OpportunitiesCard from '../components/OpportunitiesCard';
import styles from '../styles/Opportunities.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingScreen from '../components/LoadingScreen';
import { loadOpportunities } from '../lib/api';
import Head from 'next/head';

const Opportunities = ({ opportunities }: any) => {
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = React.useState(true);
  const [headerLoading, setHeaderLoading] = React.useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const fetchOpportunities = async () => {
    setLoading(false);
    setSourceLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchOpportunities().catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Head>
        <title>Opportunities | UNSW WIT</title>
      </Head>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/opportunities-header.jfif"
            title="Jobs Board"
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
                    href="mailto:sponsorships@unswwit.com"
                    className={styles.link}
                  >
                    sponsorships@unswwit.com
                  </a>
                  .
                </p>
                <div className={styles.oppGridContainer}>
                  {opportunities.map(
                    (individualOpportunity: any, index: number) => {
                      return (
                        <OpportunitiesCard
                          key={index}
                          individualOpportunity={individualOpportunity}
                          index={index}
                        />
                      );
                    }
                  )}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Opportunities;

export async function getStaticProps() {
  const opportunities = await loadOpportunities();
  return {
    props: { opportunities },
    revalidate: 60
  };
}
