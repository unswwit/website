import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../../styles/CareersHub.module.css';
import ScrollUpBtn from '../../components/ScrollUpBtn';
import CareersNav from '../../components/CareersNav';
import PageBanner from '../../components/PageBanner';
import SpotlightCard from '../../components/SpotlightCard';
import { CAREER_SPOTLIGHTS } from '../../lib/careersHubData';

const CareerSpotlightsPage = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let paused = false;
    let rafId: number;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });

    const speed = 0.5; 
    let position = track.scrollLeft;
    const step = () => {
      if (!paused) {
        const half = track.scrollWidth / 2;
        position += speed;
        if (position >= half) {
          position -= half;
        }
        track.scrollLeft = position;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('touchstart', pause);
    };
  }, []);

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

  const entries = Object.entries(CAREER_SPOTLIGHTS);
  const loopEntries = [...entries, ...entries];

  return (
    <div className={styles.pageRoot}>
      <Head>
        <title>Career Spotlights | Careers Hub | UNSW WIT</title>
      </Head>

      <CareersNav active="spotlights" />
      <PageBanner
        eyebrow="Career Spotlights"
        title="What your degree can actually become"
        description="Roles, responsibilities and the skills that matter right now"
      />

      {/* ── Finding Your Path intro ─────────────────────────── */}
      <section className={styles.pathIntroSection}>
        <div className={styles.wrap}>
          <div className={styles.pathIntroCard}>
            <h2 className={styles.pathIntroHeading}>Finding Your Path</h2>
            <p className={styles.pathIntroLede}>
              Over the years, the revolution of emerging technologies and Big Data has
              significantly evolved the technological landscape. Subsequently, new job
              opportunities have emerged for anyone with a keen interest in pursuing a career
              within technology. There are a myriad of multidisciplinary roles available for
              everyone to apply, regardless of your prior education backgrounds.
            </p>

            <div className={styles.pathIntroFeature}>
              <div className={styles.pathIntroBlob}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/willow_cheerleader.svg"
                  alt="Willow the WIT mascot cheering"
                  className={styles.pathIntroBlobIcon}
                />
              </div>
              <div className={styles.pathIntroFeatureText}>
                <p>
                  Career spotlights aim to build your understanding of how your STEM learning
                  is applied across various fields such as <strong>business</strong>,{' '}
                  <strong>data</strong> and <strong>product management</strong>. This will
                  highlight practical skills and growth opportunities that may be found in the
                  sectors. These spotlights will bridge the gap between academics and
                  real-world application to allow students to see career trajectories.
                </p>
                <p>
                  Today&apos;s tech ecosystem harbours many industries, each collated of
                  Computer Sciences, Software Engineering, Information Systems and other
                  disciplines to tackle unique challenges.
                </p>
              </div>
            </div>

            <div className={styles.pathIntroCallout}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/exclamation_mark.png"
                alt=""
                aria-hidden="true"
                className={styles.pathIntroCalloutIcon}
              />
              <p>
                There is no need to feel pressure or be intimidated about wanting to work in a
                technology enterprise, as the tech industry is open and inclusive to people
                from all academic backgrounds.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div ref={bodyRef}>
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.spotCarousel}>
              <div className={styles.spotCarouselTrack} ref={trackRef}>
                {loopEntries.map(([key, entry], i) => (
                  <SpotlightCard
                    key={`${key}-${i}`}
                    icon={entry.icon || '✦'}
                    image={`/willow_${key}.svg`}
                    title={entry.title}
                    href={`/careers-hub/career-spotlight-pages/${key}`}
                    stagger={(i % entries.length) * 0.06}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <ScrollUpBtn />
    </div>
  );
};

export default CareerSpotlightsPage;
