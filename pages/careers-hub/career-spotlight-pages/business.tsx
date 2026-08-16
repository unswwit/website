import React from 'react';
import Head from 'next/head';
import styles from '../../../spotlight-styles/business.module.css';
import CareersNav from '../../../components/CareersNav';
import ScrollUpBtn from '../../../components/ScrollUpBtn';

const BusinessSpotlightPage = () => (
  <div className={styles.page}>
    <Head>
      <title>Business | Career Spotlights | Careers Hub | UNSW WIT</title>
    </Head>

    <CareersNav active="spotlights" />

    <div className={styles.wrap}>
      {/* ── Hero ───────────────────────────────────────────── */}
      <div className={styles.heroRow}>
        <div className={styles.heroTitle}>
          <p className={styles.heroKicker}>Career Spotlight:</p>
          <h1 className={styles.heroHeading}>Business</h1>
        </div>
        <div className={styles.speechWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/careers-hub/business_calloutbox.svg" alt="" aria-hidden="true" className={styles.speechImg} />
          <p className={styles.bubbleText}>
            A business is defined as a set of repeated and continuous activities carried out
            for the purpose of making a profit. In 2026, profit is increasingly tied to solving
            complex problems — from reducing carbon footprints to launching digital products
            that change how we live.
          </p>
        </div>
      </div>

      {/* ── The Business Industry in 2026 ───────────────────── */}
      <div className={styles.industryIntro}>
        <div className={styles.finText}>
          <p>
            In 2026, the business industry remains the most diverse and adaptable sector for
            career starters. Far from being just about &quot;wearing a suit and crunching
            numbers,&quot; modern business is a hybrid field combining data science, human
            psychology, and strategic creativity. A business is defined as a set of repeated
            and continuous activities carried out for the purpose of making a profit. However,
            in today&apos;s market, profit is increasingly tied to solving complex problems
            whether that means reducing carbon footprints, streamlining supply chains with AI,
            or launching digital products that change how we live.
          </p>
        </div>

        <div>
          <h3 className={styles.respHeading}>The Big Picture in 2026</h3>
        </div>

        <div className={styles.roleBoxes}>
          <div className={styles.roleBox}>
            <p className={styles.roleBoxTitle}>AI-Augmented Roles:</p>
            <p className={styles.roleBoxText}>
              Every business role now requires &quot;prompt literacy.&quot; Analysts and
              managers use AI to model scenarios, draft reports, and optimise schedules, but
              human judgment remains the final checkpoint.
            </p>
          </div>
          <div className={styles.roleBox}>
            <p className={styles.roleBoxTitle}>Agile Everywhere:</p>
            <p className={styles.roleBoxText}>
              The project management mindset has leaked out of IT and into HR, marketing, and
              finance.
            </p>
          </div>
          <div className={styles.roleBox}>
            <p className={styles.roleBoxTitle}>Consulting as a Mindset:</p>
            <p className={styles.roleBoxText}>
              Employers don&apos;t just want problem-solvers; they want employees who can
              advise internally—acting as consultants to their own teams.
            </p>
          </div>
        </div>
      </div>

      {/* ── Financial Analyst ─────────────────────────────── */}
      <h2 className={`${styles.sectionHeading} ${styles.headingRed}`}>Financial Analyst</h2>
      <div className={styles.finRow}>
        <div className={styles.finText}>
          <p>
            You cannot make a business decision without data. The Financial Analyst is the
            person who translates raw numbers into narratives. A financial analyst analyses
            quantitative data—historical reports, accounting data, stock prices, market
            research—to make investment recommendations, assess company performance, and
            advise on strategies. You will find them in banking, insurance, real estate, and
            tech. Three example roles within this track:
          </p>
        </div>
        <div className={styles.illustrationBox}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/careers-hub/financial_analyst.svg" alt="" aria-hidden="true" className={styles.illustrationImg} />
        </div>
      </div>

      <div className={styles.rolesRow}>
        <div className={styles.roleBoxes}>
          <div className={styles.roleBox}>
            <p className={styles.roleBoxTitle}>Investment Analyst:</p>
            <p className={styles.roleBoxText}>
              Examining potential stock/bond opportunities and making buy/sell recommendations.
            </p>
          </div>
          <div className={styles.roleBox}>
            <p className={styles.roleBoxTitle}>Corporate Finance Analyst:</p>
            <p className={styles.roleBoxText}>
              Looking internally to guide budget decisions, M&amp;A targets, or capital raises.
            </p>
          </div>
          <div className={styles.roleBox}>
            <p className={styles.roleBoxTitle}>Financial Planning Analyst (FP&amp;A):</p>
            <p className={styles.roleBoxText}>
              Iterating and implementing financial plans and budgets to predict future
              performance.
            </p>
          </div>
        </div>
        <div className={styles.pinkCallout}>
          <p>
            Financial risk analysts focus on identifying, analysing, and managing financial
            risks within an organisation. They develop and propose strategies to mitigate risk
            related to investment decisions or market fluctuations, as well as ensuring the
            business&apos;s continued profitability - they play an important role in the
            overall health of a business.
          </p>
        </div>
      </div>

      {/* ── Project Manager ──────────────────────────────── */}
      <div className={styles.pmRow}>
        <div className={styles.illustrationBox}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/careers-hub/project_manager.svg" alt="" aria-hidden="true" className={styles.illustrationImg} />
        </div>
        <div className={styles.pmTextCol}>
          <h2 className={`${styles.sectionHeading} ${styles.headingGreen}`}>
            Project Manager
          </h2>
          <div className={styles.pmTextBlobWrap}>
            <div className={styles.pmTextBlob}>
              <p className={styles.pmTextBold}>
                Project management in business entails organising, planning, and carrying out
                actions to accomplish a certain objective within a predetermined budget and
                timetable, guaranteeing the delivery of a distinctive good, service, or outcome.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Key Responsibilities of a Project Manager ───────── */}
      <div className={styles.responsibilitiesRow}>
        <div>
          <h3 className={styles.respHeading}>Key Responsibilities of a Project Manager</h3>
          <p className={styles.respIntro}>
            Lets say a project manager gets assigned with the task to implement a software
            tool. The steps taken by the manager to complete the project include:
          </p>
        </div>
        <ul className={styles.checklist}>
          <li className={styles.checklistItem}>
            <span className={styles.checkbox} aria-hidden="true" />
            Gathering the team and identifying the scope of the project.
          </li>
          <li className={styles.checklistItem}>
            <span className={styles.checkbox} aria-hidden="true" />
            Assigning tasks to each member, which can include developers, engineers, technical
            writers, and quality assurance specialists.
          </li>
          <li className={styles.checklistItem}>
            <span className={styles.checkbox} aria-hidden="true" />
            Creating schedules and deadlines, using tools like Jira, Asana, or Notion.
          </li>
          <li className={styles.checklistItem}>
            <span className={styles.checkbox} aria-hidden="true" />
            Overseeing closure; ensuring the project lands on time, under budget, and that
            lessons are logged for the next project.
          </li>
        </ul>
      </div>

      {/* ── Consultancy ──────────────────────────────────── */}
      <div className={styles.consultRow}>
        <div className={styles.illustrationBox}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/careers-hub/consultancy.svg" alt="" aria-hidden="true" className={styles.illustrationImg} />
        </div>
        <div className={styles.consultTextCol}>
          <h2 className={styles.consultHeadingLabel}>Consultancy</h2>
          <div className={styles.consultPillWrap}>
            <div className={styles.consultPill}>
              <p>
                Consulting involves providing expert guidance and advice to businesses to help
                them solve problems, develop strategies, and achieve value proposition goals.
                Consultants are hired when a company has a problem it cannot solve internally.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.consultBoxesRow}>
        <div className={styles.consultBox}>
          <div className={styles.consultBoxHead}>
            <p className={styles.consultBoxTitle}>
              <span aria-hidden="true">🔍</span> A. Management Consulting
            </p>
            <span className={styles.consultBoxClose} aria-hidden="true">×</span>
          </div>
          <p className={styles.consultBoxText}>
            Management consultants work with C-suite executives (CEOs, CFOs) to diagnose
            business-wide problems. They improve performance, efficiency, and profitability. If
            a retail chain is losing market share, management consultants look at the whole
            picture: pricing, staffing, brand perception, and logistics.
          </p>
        </div>
        <div className={styles.consultBox}>
          <div className={styles.consultBoxHead}>
            <p className={styles.consultBoxTitle}>
              <span aria-hidden="true">🔍</span> B. Specialised Consulting
            </p>
            <span className={styles.consultBoxClose} aria-hidden="true">×</span>
          </div>
          <p className={styles.consultBoxText}>
            These professionals address specific areas like finance, technology, or operations.
            Because they have in-depth knowledge, they offer tailored advice that generalists
            can&apos;t. For example, they do financial, technical, HR and Legal/Marketing
            Consulting.
          </p>
        </div>
      </div>

      {/* ── Consider a Career in Business if you Enjoy ──────── */}
      <div className={styles.considerHeadRow}>
        <h2 className={styles.considerHeading}>Consider a Career in Business if you Enjoy</h2>
      </div>
      <div className={styles.considerCard}>
        <div className={styles.considerItem}>
          <p className={styles.considerItemTitle}>Teamwork:</p>
          <p className={styles.considerItemText}>
            Working alongside a diverse group of people to develop strategies and solutions.
          </p>
        </div>
        <div className={styles.considerItem}>
          <p className={styles.considerItemTitle}>Communication and People Skills:</p>
          <p className={styles.considerItemText}>
            Business and entrepreneurship give you opportunities to build strong communication
            skills through activities like presenting, pitching ideas, negotiating deals, and
            networking with professionals.
          </p>
        </div>
        <div className={styles.considerItem}>
          <p className={styles.considerItemTitle}>Problem Solving and Strategy:</p>
          <p className={styles.considerItemText}>
            If you are a problem solver who excels at analysing data and identifying trends,
            you will thrive in areas like strategy consultancy and trading - where critical
            thinking and data-driven decisions drive business growth and success.
          </p>
        </div>
      </div>
    </div>

    <ScrollUpBtn />
  </div>
);

export default BusinessSpotlightPage;
