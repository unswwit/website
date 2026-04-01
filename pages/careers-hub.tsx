// @ts-nocheck comment
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/CareersHub.module.css';
import PageHeader from '../components/Header';
import LoadingScreen from '../components/LoadingScreen';
import ScrollUpBtn from '../components/ScrollUpBtn';
import { loadCareerResources, loadSponsors } from '../lib/api';
import Head from 'next/head';
import { revalidate } from '../lib/helpers/constants';
import Image from 'next/image';
import useDarkMode from '../components/useDarkMode';

// ─── Static career pathway content ──────────────────────────────────────────
const PATHWAYS = [
  {
    icon: '✦',
    title: 'Resume & Cover Letter',
    body: 'Tailor your resume for every role. Quantify your impact, highlight relevant projects, and keep it concise.',
    tip: 'Use the STAR method for experience bullet points.',
  },
  {
    icon: '◈',
    title: 'Network & Connect',
    body: 'LinkedIn is your best friend. Attend WIT events, reach out to alumni, and build genuine connections early.',
    tip: 'Personalise every connection request — generic ones get ignored.',
  },
  {
    icon: '◇',
    title: 'Ace the Interview',
    body: 'Research the company deeply, prepare 4–5 STAR stories, and practise out loud — not just in your head.',
    tip: 'Ask your interviewer a thoughtful question at the end.',
  },
  {
    icon: '◉',
    title: 'Find Opportunities',
    body: 'Check GradConnection, LinkedIn, and our sponsor portals. Set up job alerts and apply early — roles close fast.',
    tip: 'Internship applications open as early as March for summer roles.',
  },
];

// ─── Sponsor tier config ─────────────────────────────────────────────────────
const TIER_ORDER = ['diamond', 'gold', 'silver', 'bronze', 'affiliations', 'partnerships'];
const TIER_LABELS: Record<string, string> = {
  diamond: 'Diamond',
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  affiliations: 'Affiliations',
  partnerships: 'Partnerships',
};
// Tiers that get a full description card; others get logo-wall treatment
const FEATURED_TIERS = new Set(['diamond', 'gold']);

// ─── Component ───────────────────────────────────────────────────────────────
const CareersHub = ({ careerResources, sponsors }: any) => {
  const [headerLoading, setHeaderLoading] = useState(true);
  const [sourceLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const isDark = useDarkMode();
  const bodyRef = useRef<HTMLDivElement>(null);

  // Scroll-reveal animation
  useEffect(() => {
    if (!bodyRef.current) return;
    const els = bodyRef.current.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.visible);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sourceLoading, headerLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ── Sponsors: use 2026 data, fall back to any year
  const sponsors2026 = sponsors.filter((s: any) => s.fields.year === 2026);
  const sponsorPool = sponsors2026.length ? sponsors2026 : sponsors;
  const sponsorsByTier = TIER_ORDER.reduce((acc: Record<string, any[]>, tier) => {
    const group = sponsorPool.filter((s: any) => s.fields.type === tier);
    if (group.length) acc[tier] = group;
    return acc;
  }, {});

  // ── Resources
  const categories = [
    'All',
    ...(Array.from(new Set(careerResources.map((r: any) => r.fields.category).filter(Boolean))) as string[]),
  ];
  const filteredResources =
    activeCategory === 'All'
      ? careerResources
      : careerResources.filter((r: any) => r.fields.category === activeCategory);

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

          <div ref={bodyRef}>
            {/* ── Intro band ─────────────────────────────────────────── */}
            <section className={styles.introBand}>
              <div className={styles.introInner}>
                <p
                  data-reveal
                  className={`${styles.reveal} ${styles.introText}`}
                >
                  Your one-stop destination for internships, graduate roles, and
                  everything in between. We&apos;ve gathered the resources,
                  connections, and guidance to help you launch your career in tech.
                </p>
              </div>
            </section>

            {/* ── Career Pathways ────────────────────────────────────── */}
            <section className={styles.section}>
              <div className={styles.inner}>
                <div data-reveal className={styles.reveal}>
                  <span className={styles.sectionLabel}>WHERE TO START</span>
                  <h2 className={styles.sectionHeading}>Your path to a career in tech</h2>
                </div>
                <div className={styles.pathwayGrid}>
                  {PATHWAYS.map((p, i) => (
                    <div
                      key={i}
                      data-reveal
                      className={styles.reveal}
                      style={{ '--stagger': `${i * 0.1}s` } as React.CSSProperties}
                    >
                      <div className={styles.pathwayCard}>
                        <span className={styles.pathwayIcon}>{p.icon}</span>
                        <h3 className={styles.pathwayTitle}>{p.title}</h3>
                        <p className={styles.pathwayBody}>{p.body}</p>
                        <p className={styles.pathwayTip}>
                          <span className={styles.tipLabel}>Tip —</span> {p.tip}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Resources ──────────────────────────────────────────── */}
            <section className={`${styles.section} ${styles.sectionAlt}`}>
              <div className={styles.inner}>
                <div data-reveal className={styles.reveal}>
                  <span className={styles.sectionLabel}>GUIDES & MATERIALS</span>
                  <h2 className={styles.sectionHeading}>Career resources</h2>
                </div>

                {categories.length > 2 && (
                  <div
                    data-reveal
                    className={`${styles.reveal} ${styles.categoryFilter}`}
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryBtnActive : ''}`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {filteredResources.length ? (
                  <div className={styles.resourceGrid}>
                    {filteredResources.map((resource: any, index: number) => {
                      const { title, category, description, link } = resource.fields;
                      return (
                        <a
                          key={index}
                          href={link || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-reveal
                          className={`${styles.reveal} ${styles.resourceCard}`}
                          style={{ '--stagger': `${(index % 3) * 0.08}s` } as React.CSSProperties}
                        >
                          {category && <span className={styles.resourceTag}>{category}</span>}
                          <h3 className={styles.resourceTitle}>{title}</h3>
                          {description && <p className={styles.resourceDesc}>{description}</p>}
                          <span className={styles.resourceCta}>View resource →</span>
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <p className={styles.emptyMessage}>Check back soon for career resources and guides!</p>
                )}
              </div>
            </section>

            {/* ── Sponsors ───────────────────────────────────────────── */}
            {Object.keys(sponsorsByTier).length > 0 && (
              <section className={styles.section}>
                <div className={styles.inner}>
                  <div data-reveal className={styles.reveal}>
                    <span className={styles.sectionLabel}>2026 PARTNERS</span>
                    <h2 className={styles.sectionHeading}>Our sponsors</h2>
                    <p className={styles.sectionSub}>
                      We&apos;re grateful to our sponsors whose support makes WIT possible. Explore
                      their opportunities and find your next role.
                    </p>
                  </div>

                  {TIER_ORDER.filter((tier) => sponsorsByTier[tier]).map((tier) => {
                    const group: any[] = sponsorsByTier[tier];
                    const isFeatured = FEATURED_TIERS.has(tier);

                    return (
                      <div key={tier} className={styles.tierBlock}>
                        <div data-reveal className={`${styles.reveal} ${styles.tierLabelWrap}`}>
                          <span className={styles.tierDivider} />
                          <span className={styles.tierLabel}>{TIER_LABELS[tier]}</span>
                          <span className={styles.tierDivider} />
                        </div>

                        {isFeatured ? (
                          /* Full cards for diamond + gold */
                          <div className={`${styles.featuredSponsorGrid} ${tier === 'gold' ? styles.featuredSponsorGridFour : ''}`}>
                            {group.map((sponsor: any, i: number) => {
                              const logoUrl = isDark
                                ? 'https:' + sponsor.fields.darkModeLogo.fields.file.url
                                : 'https:' + sponsor.fields.lightModeLogo.fields.file.url;
                              const descText =
                                sponsor.fields.description?.content?.[0]?.content?.[0]?.value || '';
                              const displayName = sponsor.fields.name.replace(/\s*\(\d{4}\)$/, '');
                              return (
                                <div
                                  key={i}
                                  data-reveal
                                  className={`${styles.reveal} ${styles.featuredSponsorCard}`}
                                  style={{ '--stagger': `${i * 0.1}s` } as React.CSSProperties}
                                >
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
                                  <a
                                    href={sponsor.fields.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.sponsorBtn}
                                  >
                                    Find out more
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          /* Logo wall for silver, bronze, affiliations, partnerships */
                          <div
                            data-reveal
                            className={`${styles.reveal} ${styles.logoWall}`}
                          >
                            {group.map((sponsor: any, i: number) => {
                              const logoUrl = isDark
                                ? 'https:' + sponsor.fields.darkModeLogo.fields.file.url
                                : 'https:' + sponsor.fields.lightModeLogo.fields.file.url;
                              const displayName = sponsor.fields.name.replace(/\s*\(\d{4}\)$/, '');
                              return (
                                <a
                                  key={i}
                                  href={sponsor.fields.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.logoWallItem}
                                  title={displayName}
                                >
                                  <Image
                                    src={logoUrl}
                                    alt={displayName}
                                    width={120}
                                    height={55}
                                    style={{ objectFit: 'contain' }}
                                    className={styles.logoWallImg}
                                  />
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
          </div>

          <ScrollUpBtn />
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const careerResources = await loadCareerResources();
  const sponsors = await loadSponsors();
  return {
    props: {
      careerResources,
      sponsors: sponsors || [],
    },
    revalidate: revalidate,
  };
}

export default CareersHub;
