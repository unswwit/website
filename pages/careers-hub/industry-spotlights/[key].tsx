import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import styles from '../../../styles/CareersHub.module.css';
import ScrollUpBtn from '../../../components/ScrollUpBtn';
import CareersNav from '../../../components/CareersNav';
import SpotlightBody from '../../../components/SpotlightBody';
import { INDUSTRY_ICONS, INDUSTRY_SPOTLIGHTS } from '../../../lib/careersHubData';

const KEYS = Object.keys(INDUSTRY_SPOTLIGHTS);
const BASE = '/careers-hub/industry-spotlights';

// Full write-up for a single industry, with previous/next links that wrap
// around so readers can browse every spotlight in order.
const IndustrySpotlightPage = ({ spotlightKey }: { spotlightKey: string }) => {
  const entry = INDUSTRY_SPOTLIGHTS[spotlightKey];
  const index = KEYS.indexOf(spotlightKey);
  const prevKey = KEYS[(index - 1 + KEYS.length) % KEYS.length];
  const nextKey = KEYS[(index + 1) % KEYS.length];

  return (
    <div className={styles.pageRoot}>
      <Head>
        <title>{`${entry.title} | Industry Spotlights | UNSW WIT`}</title>
      </Head>

      <CareersNav active="industries" />

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.spotlightPageInner}>
            <Link href={BASE} className={styles.spotlightBack}>
              ← All industry spotlights
            </Link>

            <SpotlightBody entry={entry} icon={INDUSTRY_ICONS[spotlightKey] || '✦'} />

            <nav className={styles.spotlightPager} aria-label="More industry spotlights">
              <Link href={`${BASE}/${prevKey}`} className={styles.spotlightPagerLink}>
                <span className={styles.spotlightPagerLabel}>← Previous</span>
                <span className={styles.spotlightPagerTitle}>
                  {INDUSTRY_SPOTLIGHTS[prevKey].title}
                </span>
              </Link>
              <Link
                href={`${BASE}/${nextKey}`}
                className={`${styles.spotlightPagerLink} ${styles.spotlightPagerNext}`}
              >
                <span className={styles.spotlightPagerLabel}>Next →</span>
                <span className={styles.spotlightPagerTitle}>
                  {INDUSTRY_SPOTLIGHTS[nextKey].title}
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </section>

      <ScrollUpBtn />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: KEYS.map((key) => ({ params: { key } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { spotlightKey: params?.key as string },
});

export default IndustrySpotlightPage;
