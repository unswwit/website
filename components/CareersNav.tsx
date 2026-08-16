import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CareersHub.module.css';

type NavPage = 'home' | 'spotlights' | 'industries' | 'toolkit' | 'jobsboard' | 'sponsors';

interface CareersNavProps {
  active: NavPage;
}

const NAV_LINKS: { page: NavPage; href: string; label: string }[] = [
  { page: 'spotlights', href: '/careers-hub/career-spotlights', label: 'Career Spotlights' },
  { page: 'industries', href: '/careers-hub/industry-spotlights', label: 'Industry Spotlights' },
  { page: 'toolkit', href: '/careers-hub/job-searching', label: 'Job Searching' },
  { page: 'jobsboard', href: '/careers-hub/jobs-board', label: 'Jobs Board' },
  { page: 'sponsors', href: '/careers-hub/sponsors', label: 'Sponsors' },
];

// Top nav bar shared by every Careers Hub page. `active` controls which link
// is highlighted — pass the page key rather than relying on scroll position,
// since each section now lives on its own route.
const CareersNav = ({ active }: CareersNavProps) => {
  return (
    <nav className={styles.siteNav}>
      <div className={styles.siteNavInner}>
        <div className={styles.siteNavBrandGroup}>
          <Link href="/" className={styles.siteNavLogoLink}>
            <Image src="/logo-black.png" alt="WIT logo — back to the main site" width={52} height={46} />
          </Link>
          <Link href="/careers-hub" className={styles.siteNavBrand}>
            <span className={styles.siteNavBrandText}>
              <span className={styles.l1}>UNSW WIT</span>
              <span className={styles.l2}>Careers Hub</span>
            </span>
          </Link>
        </div>
        <div className={styles.siteNavLinks}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.page}
              href={link.href}
              className={link.page === active ? styles.active : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CareersNav;
