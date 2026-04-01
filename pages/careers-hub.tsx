// @ts-nocheck comment
import React, { useEffect, useState } from 'react';
import styles from '../styles/CareersHub.module.css';
import PageHeader from '../components/Header';
import LoadingScreen from '../components/LoadingScreen';
import ScrollUpBtn from '../components/ScrollUpBtn';
import UpcomingEvent from '../components/UpcomingEvent';
import { loadCareerResources, loadSponsors, loadUpcomingEvents } from '../lib/api';
import Head from 'next/head';
import { revalidate } from '../lib/helpers/constants';
import Image from 'next/image';
import useDarkMode from '../components/useDarkMode';

const PLATINUM_SPONSOR_ORDER = ['Jane Street (2026)', 'Atlassian (2026)', 'Audinate (2026)', 'Macquarie Group (2026)', 'PricewaterhouseCoopers (2026)'];

const CareersHub = ({ careerResources, sponsors, upcomingEvents }: any) => {
  const [headerLoading, setHeaderLoading] = useState(true);
  const [sourceLoading] = useState(false);
  const isDark = useDarkMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platinumSponsors = PLATINUM_SPONSOR_ORDER
    .map((name) => sponsors.find((s: any) => s.fields.name === name))
    .filter(Boolean);

  const displayedEvents = upcomingEvents.slice(0, 3);

  return (
    <div>
      <Head>
        <title>Careers Hub | UNSW WIT</title>
      </Head>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <PageHeader
            imgUrl="/headers/2026-IT-subbies.jpeg"
            title="Careers Hub"
            imageLoading={setHeaderLoading}
          />
          <div className={styles.body}>
            <p className={styles.intro}>
              Your one-stop destination for career resources, job opportunities, and professional
              development. Explore internships, graduate roles, and curated resources to help you
              kickstart your career in tech.
            </p>

            {/* Resources */}
            <h2 className={styles.sectionTitle}>RESOURCES</h2>
            <p className={styles.sectionSubtitle}>
              Check out our career guides and resources from past years.
            </p>
            <div className={styles.resourceList}>
              {careerResources.length ? (
                careerResources.map((resource: any, index: number) => {
                  const { title, category, description, link } = resource.fields;
                  return (
                    <a
                      key={index}
                      href={link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.resourceRow}
                    >
                      {category && <span className={styles.resourceTag}>{category}</span>}
                      <span className={styles.resourceRowTitle}>{title}</span>
                      {description && (
                        <span className={styles.resourceRowDesc}>{description}</span>
                      )}
                      <span className={styles.resourceArrow}>→</span>
                    </a>
                  );
                })
              ) : (
                <p className={styles.emptyMessage}>
                  Check back soon for career resources and guides!
                </p>
              )}
            </div>

            {/* Platinum Sponsors */}
            <h2 className={styles.sectionTitle}> SPONSORS</h2>
            <div className={styles.sponsorGrid}>
              {platinumSponsors.map((sponsor: any, index: number) => {
                const logoUrl = isDark
                  ? 'https:' + sponsor.fields.darkModeLogo.fields.file.url
                  : 'https:' + sponsor.fields.lightModeLogo.fields.file.url;
                const descText =
                  sponsor.fields.description?.content?.[0]?.content?.[0]?.value || '';
                return (
                  <div key={index} className={styles.sponsorCard}>
                    <div className={styles.sponsorLogoWrap}>
                      <Image
                        src={logoUrl}
                        alt={sponsor.fields.name}
                        width={120}
                        height={60}
                        className={styles.sponsorLogo}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    {descText && <p className={styles.sponsorDesc}>{descText}</p>}
                    <a
                      href={sponsor.fields.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.sponsorLink}
                    >
                      Visit website →
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Upcoming Events */}
            <h2 className={styles.sectionTitle}>UPCOMING EVENTS</h2>
            <p className={styles.sectionSubtitle}>Check out what&apos;s coming up!</p>
            {!displayedEvents.length ? (
              <p className={styles.emptyMessage}>Keep a lookout here for upcoming events!</p>
            ) : (
              <div className={styles.eventsRow}>
                {displayedEvents.map((event: any, index: number) => (
                  <UpcomingEvent key={index} upcomingEvent={event} />
                ))}
              </div>
            )}

            <ScrollUpBtn />
          </div>
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const careerResources = await loadCareerResources();
  const sponsors = await loadSponsors();
  const upcomingEvents = await loadUpcomingEvents();
  return {
    props: {
      careerResources,
      sponsors: sponsors || [],
      upcomingEvents: upcomingEvents || [],
    },
    revalidate: revalidate,
  };
}

export default CareersHub;
