// @ts-nocheck comment
import { useEffect, useState } from 'react';
import PageHeader from '../components/Header';
import styles from '../styles/JoinUs.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import NewsletterSection from '../components/NewsletterSection';
import { BootstrapTooltip } from '../components/BootstrapTooltip';
import LoadingScreen from '../components/LoadingScreen';
import { socials } from '../data/join';
import SimpleAccordion from '../components/JoinUsAccordion';
import PortfolioGrid from '../components/JoinUsGrid';
import Image from 'next/image';
import Head from 'next/head';

const JoinUs = () => {
  const [hideSpinner, setHideSpinner] = useState(false);
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
          {/* Start of connect with us */}
          <h2 className={styles.header}>Connect with us</h2>
          <div className={styles.joinUsBody}>
            <div className={styles.joinUsRight}>
              <div className={styles.joinButtons}>
                {Object.keys(socials).map((social, index) => {
                  return (
                    <BootstrapTooltip
                      key={social}
                      title={
                        <>
                          <div className="tooltipTitle">{social}</div>
                        </>
                      }
                    >
                      <a
                        className={styles.joinLink}
                        key={index}
                        href={socials[social][0]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={`/icons/${socials[social][1]}`}
                          alt={social}
                          height="250px"
                          width="250px"
                        />
                      </a>
                    </BootstrapTooltip>
                  );
                })}
              </div>
            </div>
            <div className={styles.googleMap}>
              {!hideSpinner ? (
                <CircularProgress
                  variant="indeterminate"
                  size={50}
                  thickness={5}
                  id={styles.joinLoading}
                />
              ) : null}
              <iframe
                onLoad={() => setHideSpinner(true)}
                title="google-maps"
                width="100%"
                height="390"
                frameBorder="0"
                className={styles.gmapColour}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=UNSW%20Sydney%20High%20St%20Kensington,%20NSW%202052%20Australia+(UNSW%20Sydney)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          </div>
          {/* End of connect with us section */}

          {/* Start of how to join section */}
          <h2 className={styles.section}>How to join</h2>
          <div className={styles.descriptionHowto}>
            <strong>Join us via SPArc</strong>
            <p>
              Fill out the following&nbsp;
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5hkfsp_b9_mVVShgDMMYRbzS0r8fhQ-tQBPn5v7S19qP_2g/viewform?usp=sf_link"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                form
              </a>{' '}
              and sign up on{' '}
              <a
                href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                SPArc
              </a>
              .
            </p>
            <strong>Become apart of our internal team</strong>
            <p>
              Our subcommittee recruitment drive opens at the beginning of
              UNSW’s first academic term, in February each year, via our&nbsp;
              <a
                href="https://www.facebook.com/unsw.wit/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook page
              </a>
              . To get involved, search for our subcommittee Facebook event and
              fill in the registration form attached to the event.
            </p>
          </div>
          {/* End of how to join section */}

          {/* Start of what to join section */}
          <h2 className={styles.section}>Our portfolios</h2>
          <div className={styles.descriptionHowto}>
            <p>
              WIT has several specialised portfolios that you can join as a
              subcommittee member. Click one of the portfolios to find out more
              about the portfolio.
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
