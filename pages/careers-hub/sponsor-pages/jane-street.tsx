import React from 'react';
import Head from 'next/head';
import styles from '../../../sponsor-styles/jane-street/jane-street.module.css';
import janeStreetLogo from '../../../sponsor-styles/jane-street/Jane_Street_Logo_RGB_BLACK.svg';
import CareersNav from '../../../components/CareersNav';
import ScrollUpBtn from '../../../components/ScrollUpBtn';

const LOCATIONS = [
  { icon: '🍎', label: 'New York' },
  { icon: '🏰', label: 'London' },
  { icon: '🌺', label: 'Hong Kong' },
  { icon: '🦁', label: 'Singapore' },
  { icon: '🌷', label: 'Amsterdam' },
];

const PROCESS_STEPS = [
  {
    icon: '🖱️',
    body: (
      <>
        All students should apply on <a href="#">our website</a>. Head <a href="#">here</a> to
        see a detailed description of what you can expect after applying.
      </>
    ),
  },
  {
    icon: '🔍',
    body: (
      <>
        After you submit your application to Jane Street for any role, it&apos;s reviewed by a
        recruiter. We respond to every application we receive, ideally within a week or so.
        Depending on your background we might also suggest you consider another position.
        We&apos;ll always be up front with you about what roles you&apos;re being considered
        for (or aren&apos;t), so please also let us know what you&apos;re interested in
        throughout the process.
      </>
    ),
  },
  {
    icon: '🤝',
    body: (
      <>
        If you are selected for an interview, the recruiter will communicate with you clearly
        what to expect. The structure for our interviews may vary by discipline and
        we&apos;ve prepared information for a range of roles. All students should apply on{' '}
        <a href="#">our website</a> and head <a href="#">here</a> to see a detailed description
        of what you can expect after applying.
      </>
    ),
  },
];

const ROLES = [
  'Quantitative Trader',
  'Quantitative Researcher',
  'Software Engineer',
  'IT Operations Engineer',
  'Machine Learning Researcher',
  'Strategy and Product',
  'and more!',
];

const JaneStreetSponsorPage = () => (
  <div className={styles.page}>
    <Head>
      <title>Jane Street | Sponsors | Careers Hub | UNSW WIT</title>
    </Head>

    <CareersNav active="sponsors" />

    {/* ── Hero ───────────────────────────────────────────── */}
    <div className={styles.hero}>
      <div className={styles.logoRow}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={janeStreetLogo.src} alt="Jane Street logo" className={styles.logoMark} />
      </div>
    </div>

    <div className={styles.wrap}>
      {/* ── About us ───────────────────────────────────────── */}
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>About us</h2>
        <p>
          Jane Street is a quantitative trading firm with offices worldwide. We hire smart,
          humble people who love to solve problems, build systems, and test theories.
          You&apos;ll learn something new every day in our office—whether it&apos;s connecting
          with a colleague to share perspectives, or participating in a talk, class, or game
          night. Our success is driven by our people and we never stop improving.
        </p>
      </div>

      {/* ── Culture at Jane Street ─────────────────────────── */}
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>Culture at Jane Street</h2>
        <p>
          Our bright, beautiful offices in the heart of New York, London, Hong Kong,
          Amsterdam, and Singapore are open and buzzing with conversation. We come from many
          backgrounds and encourage travel between our larger and smaller offices to share
          perspectives. Some of our best ideas come from bumping into a visiting colleague at
          the office coffee bar. People grow into long careers at Jane Street because there
          are always new and interesting problems to solve, systems to build, and theories to
          test. More than twenty years after our founding, it still feels like we&apos;re just
          getting started.
        </p>
      </div>

      {/* ── Qualifications + Locations ─────────────────────── */}
      <div className={styles.grid2}>
        <div className={styles.qualifications}>
          <h2>Recommended Qualifications</h2>
          <p>
            We don&apos;t expect you to have a background in finance or any other specific
            field — we&apos;re looking for smart people who enjoy solving interesting
            problems. We&apos;re more interested in how you think and learn than what you
            currently know.
          </p>
        </div>

        <div className={styles.locations}>
          <h2>Our Locations</h2>
          <div className={styles.locationsGrid}>
            {LOCATIONS.map((loc) => (
              <div key={loc.label} className={styles.locationItem}>
                <span className={styles.locationBadge}>{loc.icon}</span>
                <span className={styles.locationLabel}>{loc.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Internship and Graduate Opportunities ──────────── */}
      <div className={styles.opportunities}>
        <h2>Internship and Graduate Opportunities</h2>
        <p>
          We offer <strong>internship opportunities</strong> for roles such as Quantitative
          Trader, Software Engineer, Strategy and Product, IT Operations Engineer, and Linux
          Engineer. Applications are open now and are reviewed on a rolling basis. All of our
          roles are based in-person in our Hong Kong office and run from December
          2024-February 2025.
        </p>
        <p>
          We offer <strong>graduate opportunities</strong> for roles such as Quantitative
          Trader, Quantitative Researcher and Software Engineer. All of our roles are based
          in-person in our Hong Kong office. Applications are open now and will be open
          year-round or until the positions have been filled.
        </p>
        <p>
          We offer opportunities for students in their 1st or 2nd year in our Hong Kong office
          and also opportunities for international students for many of our roles. Head to{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            our website
          </a>{' '}
          to learn more.
        </p>
      </div>

      {/* ── Application Process ─────────────────────────────── */}
      <h2 className={styles.processHeading}>Application Process</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineIconCol}>
          {PROCESS_STEPS.map((step, i) => (
            <span key={i} className={styles.timelineIcon}>
              {step.icon}
            </span>
          ))}
        </div>
        <div className={styles.timelineTextCol}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className={styles.timelineBox}>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles Available + Application Tips ─────────────── */}
      <div className={styles.rolesTips}>
        <div className={styles.rolesBox}>
          <h2>Roles Available</h2>
          <ul>
            {ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>

        <div className={styles.tipsBox}>
          <h2>Application Tips</h2>
          <p>
            To prepare for an interview with us, head to our website and check out the
            interview prep materials. There are a few mock interview videos for a couple of
            our roles that you can watch. For more information, head to our{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              FAQs
            </a>{' '}
            about interviewing at Jane Street!
          </p>
        </div>
      </div>
    </div>

    <ScrollUpBtn />
  </div>
);

export default JaneStreetSponsorPage;
