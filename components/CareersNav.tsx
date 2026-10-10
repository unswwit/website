import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CareersHub.module.css';

type NavPage = 'home' | 'spotlights' | 'industries' | 'toolkit' | 'jobsboard' | 'sponsors';

interface CareersNavProps {
  active: NavPage;
}

const NAV_LINKS: { page: NavPage; href: string; label: string }[] = [
  { page: 'home', href: '/careers-hub', label: 'Home' },
  { page: 'spotlights', href: '/careers-hub/career-spotlights', label: 'Career Spotlights' },
  { page: 'industries', href: '/careers-hub/industry-spotlights', label: 'Industry Spotlights' },
  { page: 'toolkit', href: '/careers-hub/job-searching', label: 'Job Searching' },
  { page: 'jobsboard', href: '/careers-hub/jobs-board', label: 'Jobs Board' },
  { page: 'sponsors', href: '/careers-hub/sponsors', label: 'Sponsors' },
];

// Top nav bar shared by every Careers Hub page. `active` controls which link
// is highlighted — pass the page key rather than relying on scroll position,
// since each section now lives on its own route. On mobile the links collapse
// behind a hamburger button and open as a dropdown below the bar.
const CareersNav = ({ active }: CareersNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

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
        <button
          type="button"
          className={`${styles.siteNavToggle} ${menuOpen ? styles.siteNavToggleOpen : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="careers-nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          id="careers-nav-links"
          className={`${styles.siteNavLinks} ${menuOpen ? styles.siteNavLinksOpen : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.page}
              href={link.href}
              className={link.page === active ? styles.active : ''}
              onClick={() => setMenuOpen(false)}
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
