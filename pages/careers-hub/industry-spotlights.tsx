import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/CareersHub.module.css';
import ScrollUpBtn from '../../components/ScrollUpBtn';
import CareersNav from '../../components/CareersNav';
import PageBanner from '../../components/PageBanner';
import { INDUSTRY_ICONS, INDUSTRY_SPOTLIGHTS } from '../../lib/careersHubData';
import { getSpotlightTeaser } from '../../lib/helpers/spotlights';

// Industry Spotlights landing page — one editorial row per industry, each
// linking to its full write-up at /careers-hub/industry-spotlights/[key].
const IndustrySpotlightsPage = () => {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    const els = bodyRef.current.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const entries = Object.entries(INDUSTRY_SPOTLIGHTS);

  return (
    <div className={styles.pageRoot}>
      <Head>
        <title>Industry Spotlights | Careers Hub | UNSW WIT</title>
      </Head>

      <CareersNav active="industries" />
      <PageBanner
        eyebrow="Industry Spotlights"
        title="Where tech is heading next"
        description="Up and coming industries, how they're growing, and the roles and skills that will help you thrive in them."
      />

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Clueless about what you want to do?</span>
            <h2 className={styles.sectionHeading}>Explore the industries shaping tech</h2>
            <p className={styles.sectionSub}>
              Each spotlight gives an overview of the industry and its predicted growth, along
              with the careers available and the skills you&apos;ll need. If you&apos;re not
              sure where you fit yet, start with whatever sounds most interesting.
            </p>
          </div>

          <div className={styles.industryList} ref={bodyRef}>
            {entries.map(([key, entry], i) => (
              <Link
                key={key}
                href={`/careers-hub/industry-spotlights/${key}`}
                data-reveal
                className={`${styles.industryRow} ${styles.reveal} ${
                  i % 2 === 1 ? styles.industryRowReverse : ''
                }`}
              >
                <div className={styles.industryRowMeta}>
                  <span className={styles.industryRowIcon} aria-hidden="true">
                    {INDUSTRY_ICONS[key] || '✦'}
                  </span>
                  <h3 className={styles.industryRowTitle}>{entry.title}</h3>
                  {entry.stat && <span className={styles.spotStat}>{entry.stat}</span>}
                  <span className={styles.industryRowCta}>Read spotlight →</span>
                </div>
                <p className={styles.industryRowTeaser}>{getSpotlightTeaser(entry.body)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ScrollUpBtn />
    </div>
  );
};

export default IndustrySpotlightsPage;
