import React from 'react';
import Head from 'next/head';
import styles from '../../../sponsor-styles/domain/domain.module.css';
import domainLogoWhite from '../../../sponsor-styles/logos/[DIAMOND] Domain Group/Domain_Logo_RGB_WHITE.svg';
import domainEmployeePhoto from '../../../sponsor-styles/domain/domain-employee-photo.svg';
import domainGroupPhoto from '../../../sponsor-styles/domain/domain-employee-group-photo.svg';
import CareersNav from '../../../components/CareersNav';
import ScrollUpBtn from '../../../components/ScrollUpBtn';

const SKILLS = [
  { icon: '🧗', label: 'Ability to drive and adapt to change' },
  { icon: '💡', label: 'Passion for innovation and creativity' },
  { icon: '🧩', label: 'Teamwork and collaboration' },
  { icon: '🔎', label: 'Open minded to possibilities and learning' },
  { icon: '🏅', label: 'A focus on high quality outcomes' },
];

const ROLES = [
  { icon: '💻', label: 'Software Engineer' },
  { icon: '⚙️', label: 'Product Manager' },
  { icon: '🔧', label: 'Technical Consultant' },
  { icon: '📱', label: 'User Interface Designer (UI)' },
  { icon: '🕸️', label: 'Data Analyst/Scientist' },
  { icon: '🎯', label: 'Product Specialist' },
  { icon: '📝', label: 'User Experience Designer (UX)' },
];

const DomainSponsorPage = () => (
  <div className={styles.page}>
    <Head>
      <title>Domain Group | Sponsors | Careers Hub | UNSW WIT</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head>

    <CareersNav active="sponsors" />

    {/* ── Hero ───────────────────────────────────────────── */}
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <div className={styles.logoRow}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={domainLogoWhite.src} alt="Domain Group logo" className={styles.logo} />
          <span className={styles.logoGroupText}>Group</span>
        </div>
        <p className={styles.tagline}>
          See the possibilities.
          <br />
          Turn them into realities.
        </p>
      </div>
      <div className={styles.heroPhoto}>
        <div className={styles.heroPhotoStripes} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={domainEmployeePhoto.src} alt="Domain Group employee" />
      </div>
    </div>

    {/* ── Main grid ──────────────────────────────────────── */}
    <div className={styles.mainGrid}>
      {/* About Us */}
      <div className={styles.about}>
        <h2 className={styles.aboutHeading}>About Us</h2>
        <div className={styles.aboutText}>
          <p>
            Domain Group is a leading Australian property marketplace made up of a portfolio
            of brands. We are <strong>united in our purpose to inspire confidence</strong> in
            life&apos;s property decisions. We are motivated by innovation and leverage our
            unique data, products, and technology to deliver solutions and experiences for our
            customers.
          </p>
          <p>
            At Domain <strong>our people are encouraged to see the possibilities</strong> and
            turn them into a reality. With us, you&apos;ll make your mark, make a difference
            and be part of an <strong>inclusive team of unique individuals</strong> that are
            inspired by the opportunities that sit before them. We love helping people find
            their dream job, grow in their roles and contribute to the business - growing
            personally and professionally.
          </p>
          <p>
            Domain Group is a collective of diverse people who believe the property industry
            is ripe for disruption. We&apos;re{' '}
            <strong>inspired to create experiences that inspire confidence</strong> for our
            customers, and we like to have fun along the way too. Our values unite and guide us
            in how our people show up to work, and how they treat each other and approach their
            work. At Domain Group, you&apos;ll have the chance to roll up your sleeves as part
            of a business that&apos;s just the right size for you to make a real impact.
            Innovation is important to us and we believe that big ideas can come from anywhere
            and anyone across our business.
          </p>
          <p>
            Our culture is diverse and supportive and there are lots of{' '}
            <strong>opportunities to leap, learn and grow</strong>. We inspire and encourage
            our people to get involved in causes that matter to them, with several employee
            committees across the business where our people can channel their passions around
            topics such as diversity and inclusion and the environment. We{' '}
            <strong>offer our people flexibility and a range of work perks</strong>, as well as
            recognising and rewarding the efforts of our team.
          </p>
        </div>
      </div>

      {/* Valued Employee Skills */}
      <div className={styles.skills}>
        <h2 className={styles.skillsHeading}>Valued Employee Skills</h2>
        <div className={styles.skillsList}>
          {SKILLS.map((skill) => (
            <div key={skill.label} className={styles.skillItem}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillLabel}>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Opportunities + Qualifications ─────────────────── */}
    <div className={styles.grid2}>
      <div className={styles.opportunities2}>
        <h2 className={styles.sectionHeading}>Internship and Graduate Opportunities</h2>
        <p>
          Domain Group supports people at all stages of their career, especially those early
          in their careers with many opportunities to amplify and accelerate their
          professional and personal development. We encourage applicants from diverse
          backgrounds, and encourage applications even if you don&apos;t meet all the
          requirements of the role (as you still may be the perfect candidate for the role or
          future opportunities). Domain Group inspires you to see the possibilities of your
          career - with many opportunities to grow your knowledge and experience with diverse
          teams across the business working on interesting and challenging solutions for our
          customers.
        </p>

        <h2 className={`${styles.sectionHeading} ${styles.rolesHeading}`}>
          Available roles at Domain Group
        </h2>
        <div className={styles.rolesGrid}>
          {ROLES.map((role) => (
            <div key={role.label} className={styles.roleItem}>
              <span className={styles.roleIcon}>{role.icon}</span>
              <span className={styles.roleLabel}>{role.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.qualifications}>
        <h2 className={styles.sectionHeading}>Qualifications</h2>
        <p>
          Students applying for roles at Domain Group will need to demonstrate knowledge,
          experience and exposure across multiple programming languages and experience with
          cloud tooling. It&apos;s a bonus if you have a Technology based degree and any
          interest in consumer facing high scale traffic applications and experience dealing
          with complex problems at scale. We&apos;re drawn to passionate, motivated people
          with a high learning agility and ability to adapt, learn and grow. We value
          diversity of culture and thought, and look for people who will positively
          contribute and add to our culture rather than just fitting in.
        </p>
      </div>
    </div>

    {/* ── Application Process + photo ────────────────────── */}
    <div className={styles.grid2}>
      <div className={styles.processBox}>
        <h2 className={styles.sectionHeading}>Application Process</h2>
        <div className={styles.processSection}>
          <h3 className={styles.processSubheading}>How to apply</h3>
          <p>Candidates can submit their application via a job ad on our website or LinkedIn page.</p>
        </div>
        <div className={styles.processSection}>
          <h3 className={styles.processSubheading}>Interviews</h3>
          <p>
            Our Talent Acquisition team shortlists candidates with diversity in mind and from
            there our interview process begins. This involves 2-3 interview stages to get to
            know candidates on a personal level, understand their experience and motivations,
            and a technical assessment.
          </p>
        </div>
      </div>

      <div className={styles.photoBoxWrap}>
        <div className={styles.photoBoxPeak} />
        <div className={styles.photoBox}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={domainGroupPhoto.src}
            alt="Domain Group colleagues"
            className={styles.photoBoxImg}
          />
        </div>
      </div>
    </div>

    {/* ── Application Tips ────────────────────────────────── */}
    <div className={styles.tipsBanner}>
      <h2>Application Tips</h2>
      <p>
        We encourage applicants to be genuine and authentic. Talk to your knowledge, skills,
        passions and motivations as well as who you are as a person. We encourage you to
        showcase your strengths as well as being transparent about your areas for growth and
        where you would like to gain more experience. For Technical roles we would expect to
        see examples of your work, such as a portfolio or sample projects demonstrating the
        problems you&apos;ve solved with your technical experience. We also encourage you to
        check out our products and come prepared to share your opinions on how to improve
        them, with our customers in mind. Come prepared and researched, knowing about us and
        we commit to getting to know you too.
      </p>
    </div>

    <ScrollUpBtn />
  </div>
);

export default DomainSponsorPage;
