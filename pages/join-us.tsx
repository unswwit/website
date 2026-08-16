// @ts-nocheck comment
import { useEffect, useState } from 'react';
import PageHeader from '../components/Header';
import styles from '../styles/JoinUs.module.css';
import NewsletterSection from '../components/NewsletterSection';
import LoadingScreen from '../components/LoadingScreen';
import SimpleAccordion from '../components/JoinUsAccordion';
import PortfolioGrid from '../components/JoinUsGrid';
import Head from 'next/head';

const JoinUs = () => {
  const [hideSpinner] = useState(false);
  const [openNewsletter, setOpenNewsletter] = useState(false);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);

  // close newsletter
  const callbackModal = () => {
    setOpenNewsletter(false);
  };

  // start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setSourceLoading(false);
    }, 10000);
  }, []);

  return (
    <div>
      <Head>
        <title>Join Us | UNSW WIT</title>
      </Head>
      {sourceLoading && !hideSpinner && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <PageHeader
            imgUrl="/headers/join-header-2.jpg"
            title="Join Us"
            imageLoading={setHeaderLoading}
          />

          {/* Start of how to join section */}
          <h2 className={styles.section}>How to join</h2>
          <div className={styles.descriptionHowto}>
            <strong>Join us via Rubric</strong>
            <p>
              Sign up on{' '}
              <a
                href="https://campus.hellorubric.com/?s=4749"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Rubric
              </a>
              .
            </p>
            <strong>Become a part of our internal team</strong>
            <p>
              Our subcommittee recruitment drive opens at the beginning of
              UNSW’s first academic term, in February each year, via our&nbsp;
              <a
                href="https://www.facebook.com/events/1243781480447084/1243781487113750/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook group
              </a>
              . To get involved, search for our subcommittee Facebook event and
              fill in the application form attached to the event.
            </p>
          </div>
          {/* End of how to join section */}

          {/* Start of what to join section */}
          <h2 className={styles.section}>Our portfolios</h2>
          <div className={styles.descriptionHowto}>
            <p>
              WIT has several specialised portfolios that you can join as a
              subcommittee member. Click on one of the portfolios to learn more about it.
            </p>
          </div>
          {/* End of what to join section */}

          {/* Start of portfolios grid */}
          <PortfolioGrid />
          {/* End of portfolios grid */}

          {/* Start FAQ section */}
          <h2 className={styles.section}>FAQ</h2>
          <SimpleAccordion />
          {/* End of FAQ section */}

          {/* Start of newsletter */}
          <NewsletterSection
            setOpen={setOpenNewsletter}
            open={openNewsletter}
            callbackModal={callbackModal}
            fade={false}
          />
          {/* End of Newsletter */}
        </>
      )}
    </div>
  );
};

export default JoinUs;
