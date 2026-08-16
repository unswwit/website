import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import styles from '../../../sponsor-styles/pwc.module.css';
import CareersNav from '../../../components/CareersNav';
import ScrollUpBtn from '../../../components/ScrollUpBtn';
import { loadSponsors } from '../../../lib/api';
import { revalidate } from '../../../lib/helpers/constants';

const SKILLS = [
  { icon: '★', label: 'Whole Leadership' },
  { icon: '◆', label: 'Business Acumen' },
  { icon: '⚙', label: 'Technical and Digital' },
  { icon: '🌐', label: 'Global and Inclusive' },
  { icon: '🤝', label: 'Relationships' },
];

const ROLES = [
  'Business Analyst',
  'Product Manager',
  'Technical Consultant',
  'Data Analyst',
  'User Experience (UX) Designer',
  'User Interface (UI) Designer',
  'Product Manager/ Specialist',
];

const PwcSponsorPage = ({ logoUrl }: { logoUrl: string | null }) => (
  <div className={styles.page}>
    <Head>
      <title>PwC | Sponsors | Careers Hub | UNSW WIT</title>
    </Head>

    <CareersNav active="sponsors" />

    <div className={styles.wrap}>
      {/* ── About ──────────────────────────────────────────── */}
      <div className={styles.about}>
        <div className={styles.logoMark}>
          {logoUrl && (
            <Image
              src={logoUrl}
              alt="PwC logo"
              width={260}
              height={110}
              className={styles.logoImg}
            />
          )}
        </div>
        <div>
          <h1 className={styles.aboutHeading}>About Us</h1>
          <p className={styles.aboutText}>
            At PwC Australia, we take a human-led, tech-powered approach, combining diverse
            perspectives, expertise and relationships with the right technology to solve
            problems and unlock opportunities. In Australia, our team is over 8,000 strong,
            with deep expertise in the industries critical to our nation including energy,
            utilities and resources, financial services, healthcare, education and consumer
            markets. We&apos;re bold about our commitment to diversity, inclusion, wellbeing
            and social impact. And we empower our people in upskilling, flexible working and
            pursuing their passions—our purpose is what drives our community of solvers.
          </p>
        </div>
      </div>

      {/* ── Recommended Qualifications ─────────────────────── */}
      <div className={styles.banner}>
        <h2 className={styles.bannerHeading}>Recommended Qualifications</h2>
        <p className={styles.bannerText}>
          Preferred degree types include Accounting, Finance, Commerce, Information Systems,
          Computer Science, IT, Engineering (both non-Software, Software Development), and
          Mathematics/Statistic
        </p>
      </div>

      {/* ── Main grid ──────────────────────────────────────── */}
      <div className={styles.mainGrid}>
        <div className={styles.leftCol}>
          {/* Valued Employee Skills */}
          <div className={`${styles.block} ${styles.skills}`}>
            <h2 className={styles.blockHeading}>Valued Employee Skills</h2>
            <div className={styles.skillsGrid}>
              {SKILLS.map((skill) => (
                <div key={skill.label} className={styles.skillItem}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span className={styles.skillLabel}>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className={`${styles.block} ${styles.process}`}>
            <h2 className={styles.blockHeading}>Application Process</h2>
            <p className={styles.processText}>
              Our typical application journey consists of the steps: online application,
              digital interview and behavioural assessment, assessment centre and final
              interview. For more details, visit:
            </p>
            <ul className={styles.processLinks}>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Graduate Application Journey
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Vacationer Application Journey
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Trainee Application Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Application Tips */}
          <div className={`${styles.block} ${styles.tips}`}>
            <h2 className={styles.blockHeading}>Application Tips</h2>
            <p className={styles.tipsText}>
              Check out our{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Youtube PwC Careers Australia Channel
              </a>{' '}
              with videos with tips at every stage.
            </p>
          </div>
        </div>

        <div className={styles.rightCol}>
          {/* Roles Available — two-tone chevron box */}
          <div className={styles.roles}>
            <div className={styles.rolesLeft}>
              <h2 className={styles.blockHeading}>Roles Available</h2>
              <p className={styles.rolesText}>
                As a grad you&apos;ll complete rotational programs; you may rotate across all
                of the following areas.
              </p>
            </div>
            <div className={styles.rolesRight}>
              <ul className={styles.rolesList}>
                {ROLES.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Internship and Graduate Opportunities */}
          <div className={`${styles.block} ${styles.opportunities}`}>
            <h2>Internship and Graduate Opportunities</h2>
            <p>
              Our applications are currently closed for 2024, but open again in{' '}
              <span className={styles.highlight}>2025 February</span>.
            </p>

            <h3>Our Graduate Program</h3>
            <p>
              In our Graduate program, you&apos;ll launch your career by solving important
              problems. The graduate program is full-time and students who are in their{' '}
              <span className={styles.highlight}>final year</span> or candidates who have{' '}
              <span className={styles.highlight}>graduated within the last 2 years</span> are
              eligible.
            </p>

            <h3>Vacation Program</h3>
            <p>
              With market-leading industry experience and world-class learning, a{' '}
              <span className={styles.highlight}>summer (4 to 8 weeks)</span> spent at PwC can
              set you up for an exciting future inside or outside our walls! If you&apos;re in
              your{' '}
              <span className={styles.highlight}>second last (penultimate) year</span> of your
              graduate or postgraduate studies, we have a range of roles for you to explore.
            </p>

            <h3>Trainee Program</h3>
            <p>
              As a Trainee, you&apos;ll embark on a{' '}
              <span className={styles.highlight}>two-year journey</span> of combined work and
              study with PwC. You&apos;ll join us four days a week (with full-time pay and 1
              day of paid study!) while you study part-time for two years. You&apos;ll then
              take a break from full-time work to complete your degree! As a trainee,
              you&apos;ll combine your university studies with work experience to build the
              perfect foundation for your career, all while receiving{' '}
              <span className={styles.highlight}>professional and financial support</span> in
              a full-time paid role.
            </p>

            <p>
              For more information, visit{' '}
              <a
                href="https://jobs-au.pwc.com/au/en/students"
                target="_blank"
                rel="noopener noreferrer"
              >
                jobs-au.pwc.com/au/en/students
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <ScrollUpBtn />
  </div>
);

// Pull PwC's logo from the same Contentful sponsor data used on the
// Sponsors listing page, rather than a hardcoded local asset.
export const getStaticProps: GetStaticProps = async () => {
  const sponsors = (await loadSponsors()) || [];
  const pwc = sponsors.find((s: any) => {
    const name = s.fields.name.toLowerCase();
    return name.includes('pwc') || name.includes('pricewaterhousecoopers');
  });
  const logoUrl = pwc?.fields?.lightModeLogo?.fields?.file?.url
    ? 'https:' + pwc.fields.lightModeLogo.fields.file.url
    : null;
  return { props: { logoUrl }, revalidate };
};

export default PwcSponsorPage;
