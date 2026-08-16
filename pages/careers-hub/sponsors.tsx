// @ts-nocheck comment
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/CareersHub.module.css';
import ScrollUpBtn from '../../components/ScrollUpBtn';
import CareersNav from '../../components/CareersNav';
import PageBanner from '../../components/PageBanner';
import { loadSponsors } from '../../lib/api';
import { revalidate } from '../../lib/helpers/constants';

// Sponsors with their own dedicated write-up page 
const SPONSOR_PAGES: Record<string, string> = {
  pwc: '/careers-hub/sponsor-pages/pwc',
  pricewaterhousecoopers: '/careers-hub/sponsor-pages/pwc',
  westpac: '/careers-hub/sponsor-pages/w-group',
  domain: '/careers-hub/sponsor-pages/domain',
  'jane street': '/careers-hub/sponsor-pages/jane-street',
};

function getSponsorPage(displayName: string): string | undefined {
  const normalized = displayName.toLowerCase().trim();
  const key = Object.keys(SPONSOR_PAGES).find((k) => normalized.includes(k));
  return key ? SPONSOR_PAGES[key] : undefined;
}

const TIER_ORDER = ['diamond', 'gold', 'silver', 'bronze', 'affiliations', 'partnerships'];
const TIER_LABELS: Record<string, string> = {
  diamond: 'Diamond',
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  affiliations: 'Affiliations',
  partnerships: 'Partnerships',
};
const FEATURED_TIERS = new Set(['diamond', 'gold']);

const SponsorsPage = ({ sponsors }: any) => {
  const sponsors2026 = sponsors.filter((s: any) => s.fields.year === 2026);
  const sponsorPool = sponsors2026.length ? sponsors2026 : sponsors;
  const sponsorsByTier = TIER_ORDER.reduce((acc: Record<string, any[]>, tier) => {
    const group = sponsorPool.filter((s: any) => s.fields.type === tier);
    if (group.length) acc[tier] = group;
    return acc;
  }, {});

  return (
    <div className={styles.pageRoot}>
      <Head>
        <title>Sponsors | Careers Hub | UNSW WIT</title>
      </Head>

      <CareersNav active="sponsors" />
      <PageBanner
        eyebrow="Sponsors"
        title="The partners behind Careers Hub"
        description="We're grateful to our sponsors whose support makes WIT possible. Explore their opportunities and find your next role."
      />

      {Object.keys(sponsorsByTier).length > 0 && (
        <section className={styles.section}>
          <div className={styles.wrap}>
            {TIER_ORDER.filter((tier) => sponsorsByTier[tier]).map((tier) => {
              const group: any[] = sponsorsByTier[tier];
              const isFeatured = FEATURED_TIERS.has(tier);

              return (
                <div key={tier} className={styles.tierBlock}>
                  <div className={styles.tierLabelWrap}>
                    <span className={styles.tierDivider} />
                    <span className={styles.tierLabel}>{TIER_LABELS[tier]}</span>
                    <span className={styles.tierDivider} />
                  </div>

                  {isFeatured ? (
                    <div
                      className={`${styles.featuredSponsorGrid} ${
                        tier === 'gold' ? styles.featuredSponsorGridFour : ''
                      }`}
                    >
                      {group.map((sponsor: any, i: number) => {
                        const logoUrl = 'https:' + sponsor.fields.lightModeLogo.fields.file.url;
                        const descText =
                          sponsor.fields.description?.content?.[0]?.content?.[0]?.value || '';
                        const displayName = sponsor.fields.name.replace(/\s*\(\d{4}\)$/, '');
                        const internalHref = getSponsorPage(displayName);
                        const cardInner = (
                          <>
                            <div className={styles.featuredLogoWrap}>
                              <Image
                                src={logoUrl}
                                alt={displayName}
                                width={150}
                                height={70}
                                style={{ objectFit: 'contain' }}
                              />
                            </div>
                            <p className={styles.featuredSponsorName}>{displayName}</p>
                            {descText && <p className={styles.featuredSponsorDesc}>{descText}</p>}
                            <span className={styles.sponsorBtn}>Find out more</span>
                          </>
                        );
                        return internalHref ? (
                          <Link key={i} href={internalHref} className={styles.featuredSponsorCard}>
                            {cardInner}
                          </Link>
                        ) : (
                          <a
                            key={i}
                            href={sponsor.fields.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.featuredSponsorCard}
                          >
                            {cardInner}
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <div
                      className={`${styles.logoWall} ${
                        ['affiliations', 'silver', 'bronze'].includes(tier)
                          ? styles.logoWallCenter
                          : ''
                      }`}
                    >
                      {group.map((sponsor: any, i: number) => {
                        const logoUrl = 'https:' + sponsor.fields.lightModeLogo.fields.file.url;
                        const displayName = sponsor.fields.name.replace(/\s*\(\d{4}\)$/, '');
                        const internalHref = getSponsorPage(displayName);
                        const logoImg = (
                          <Image
                            src={logoUrl}
                            alt={displayName}
                            width={tier === 'affiliations' ? 165 : 140}
                            height={tier === 'affiliations' ? 74 : 65}
                            style={{ objectFit: 'contain' }}
                            className={styles.logoWallImg}
                          />
                        );
                        return internalHref ? (
                          <Link
                            key={i}
                            href={internalHref}
                            className={styles.logoWallItem}
                            title={displayName}
                          >
                            {logoImg}
                          </Link>
                        ) : (
                          <a
                            key={i}
                            href={sponsor.fields.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.logoWallItem}
                            title={displayName}
                          >
                            {logoImg}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      <ScrollUpBtn />
    </div>
  );
};

export async function getStaticProps() {
  const sponsors = await loadSponsors();
  return {
    props: {
      sponsors: sponsors || [],
    },
    revalidate: revalidate,
  };
}

export default SponsorsPage;
