// @ts-nocheck comment
import React, { useEffect, useRef } from 'react';
import styles from '../styles/CareersHub.module.css';
import ScrollUpBtn from '../components/ScrollUpBtn';
import CareersNav from '../components/CareersNav';
import CareersHero from '../components/CareersHero';
import PathwayCard from '../components/PathwayCard';
import { loadSponsors } from '../lib/api';
import Head from 'next/head';
import Link from 'next/link';
import { revalidate } from '../lib/helpers/constants';
import Image from 'next/image';
import { PATHWAYS } from '../lib/careersHubData';
import { getSponsorPage } from '../lib/helpers/sponsorPages';

// ─── Component ───────────────────────────────────────────────────────────────
// Careers Hub landing page —> Hero, Pathways and a
// scrolling sponsor logo strip only.
const CareersHub = ({ sponsors }: any) => {
  const bodyRef = useRef<HTMLDivElement>(null);

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
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ── Sponsors: use 2026 data, fall back to any year
  const sponsors2026 = sponsors.filter((s: any) => s.fields.year === 2026);
  const sponsorPool = sponsors2026.length ? sponsors2026 : sponsors;
  const marqueeSponsors = [...sponsorPool, ...sponsorPool];

  return (
    <div className={styles.pageRoot}>
      <Head>
        <title>Careers Hub | UNSW WIT</title>
      </Head>

      <CareersNav active="home" />
      <CareersHero />

      <div ref={bodyRef}>
        {/* ── Intro ──────────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <p className={styles.introLede}>
              Choosing your unique path in today&apos;s rapidly evolving tech sector is
              intimidating. It&apos;s easy to get lost in the information bombarding you from
              social media, parents and peers.
            </p>
            <div className={styles.introTilesTwo}>
              <div className={styles.introTile}>
                <span className={styles.introTileIcon}>✦</span>
                <h3>Career Spotlights</h3>
                <p>
                  Delve into the potential applications for your degree in various fields. With
                  the changes to STEM fields in the last decade due to the development of new
                  tech, the roles and responsibilities of certain careers have changed
                  completely. This section will provide aspirants with the current outlook of
                  their chosen field of study.
                </p>
                <Link href="/careers-hub/career-spotlights" className={styles.introTileLink}>
                  Explore career spotlights →
                </Link>
              </div>
              <div className={styles.introTile}>
                <span className={styles.introTileIcon}>◆</span>
                <h3>Clueless about what you want to do?</h3>
                <p>
                  Have a read of Industry Spotlights, where up and coming industries in tech are
                  highlighted. This section gives an overview into the industry and its future
                  growth prediction. For those who are still not sure, potential careers and the
                  skills required to thrive in the field are also specified.
                </p>
                <Link href="/careers-hub/industry-spotlights" className={styles.introTileLink}>
                  Explore industry spotlights →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Reassurance ────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.reassure}>
              <div className={styles.reassureInner}>
                <span className={styles.sectionLabel}>To all students</span>
                <p className={styles.emph}>
                  It&apos;s completely normal to feel anxious and unsure about your path in
                  tech, as is the same in any career. Remember that your path is unique to
                  yourself so make sure that you never, regardless of what happens, lose the
                  passion and curiosity that led you to tech in the first place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pathways ──────────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.sectionAlt}`} id="pathways">
          <div className={styles.wrap}>
            <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
              <span className={styles.sectionLabel}>Where to start</span>
              <h2 className={styles.sectionHeading}>Your path to a career in tech</h2>
            </div>
            <div className={styles.grid4}>
              {PATHWAYS.map((p, i) => (
                <PathwayCard key={p.title} pathway={p} stagger={i * 0.08} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Sponsors (auto-scrolling strip — full breakdown lives on its own page) ── */}
        {sponsorPool.length > 0 && (
          <section className={styles.section} id="sponsors">
            <div className={styles.wrap}>
              <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
                <span className={styles.sectionLabel}>2026 Partners</span>
                <h2 className={styles.sectionHeading}>Our sponsors</h2>
                <p className={styles.sectionSub}>
                  We&apos;re grateful to our sponsors whose support makes WIT possible.
                </p>
              </div>

              <div className={styles.sponsorMarquee}>
                <div className={styles.sponsorMarqueeTrack}>
                  {marqueeSponsors.map((sponsor: any, i: number) => {
                    const logoUrl = 'https:' + sponsor.fields.lightModeLogo.fields.file.url;
                    const displayName = sponsor.fields.name.replace(/\s*\(\d{4}\)$/, '');
                    const dedicatedPage = getSponsorPage(displayName);
                    const href = dedicatedPage || sponsor.fields.website || '/careers-hub/sponsors';
                    const isExternal = !dedicatedPage && !!sponsor.fields.website;
                    return (
                      <Link
                        key={i}
                        href={href}
                        className={styles.sponsorMarqueeItem}
                        title={displayName}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <Image src={logoUrl} alt={displayName} width={130} height={60} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className={styles.sponsorMarqueeCta}>
                <Link
                  href="/careers-hub/sponsors"
                  className={`${styles.btn} ${styles.btnDark}`}
                >
                  View all sponsors →
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>

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

export default CareersHub;
