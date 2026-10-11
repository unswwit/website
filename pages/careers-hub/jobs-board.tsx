import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/CareersHub.module.css';
import ScrollUpBtn from '../../components/ScrollUpBtn';
import CareersNav from '../../components/CareersNav';
import PageBanner from '../../components/PageBanner';
import JobCard from '../../components/JobCard';
import { loadJobs } from '../../lib/api';
import { revalidate } from '../../lib/helpers/constants';
import { getOpenJobs } from '../../lib/helpers/jobs';
import { JobEntry } from '../../lib/careersHubData';

type JobFilter = 'all' | JobEntry['type'];

const FILTERS: { key: JobFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'internship', label: 'Internships' },
  { key: 'grad', label: 'Grad Programs' },
  { key: 'fulltime', label: 'Full-Time' },
  { key: 'other', label: 'Other' },
];

// Jobs board — every open listing from the Contentful `opportunities` content
// type. New entries show up automatically via ISR (see `revalidate`), and
// listings drop off once their close date has passed.
const JobsBoardPage = ({ jobs }: { jobs: JobEntry[] }) => {
  const [filter, setFilter] = useState<JobFilter>('all');
  const [query, setQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  // Only offer filters that actually have listings behind them
  const filters = FILTERS.filter(
    ({ key }) => key === 'all' || jobs.some((job) => job.type === key)
  );
  const activeFilterLabel = FILTERS.find(({ key }) => key === filter)?.label;

  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const visibleJobs = jobs.filter((job) => {
    if (filter !== 'all' && job.type !== filter) return false;
    const haystack =
      `${job.title} ${job.company} ${job.location} ${job.description}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });

  const clearSearch = () => {
    setQuery('');
    setFilter('all');
  };

  // Close the filter menu on outside click or Escape
  useEffect(() => {
    if (!filtersOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!filterMenuRef.current?.contains(e.target as Node)) setFiltersOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFiltersOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [filtersOpen]);

  // Re-run when results change so newly rendered cards get revealed too
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
  }, [filter, query]);

  return (
    <div className={styles.pageRoot}>
      <Head>
        <title>Jobs Board | Careers Hub | UNSW WIT</title>
      </Head>

      <CareersNav active="jobsboard" />
      <PageBanner
        eyebrow="Jobs Board"
        title="Opportunities for WIT members"
        description="Internships, grad programs and roles shared with WIT by our sponsors and partners."
      />

      <section className={styles.section}>
        <div className={styles.wrap} ref={bodyRef}>
          {jobs.length > 0 ? (
            <>
              <div className={styles.jobsToolbar}>
                <div className={styles.jobsSearch}>
                  <span className={styles.jobsSearchIcon} aria-hidden="true">
                    ⌕
                  </span>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by role, company, location or keyword"
                    aria-label="Search jobs"
                    className={styles.jobsSearchInput}
                  />
                </div>

                {filters.length > 2 && (
                  <div className={styles.jobsFilterMenu} ref={filterMenuRef}>
                    <button
                      type="button"
                      className={`${styles.jobsFilterBtn} ${
                        filter !== 'all' ? styles.jobsFilterBtnActive : ''
                      }`}
                      aria-haspopup="true"
                      aria-expanded={filtersOpen}
                      onClick={() => setFiltersOpen((open) => !open)}
                    >
                      {filter === 'all' ? 'Filters' : activeFilterLabel} ▾
                    </button>
                    {filtersOpen && (
                      <div className={styles.jobsFilterPanel} role="menu">
                        <span className={styles.jobsFilterPanelLabel}>Job type</span>
                        {filters.map(({ key, label }) => (
                          <button
                            key={key}
                            type="button"
                            role="menuitemradio"
                            aria-checked={filter === key}
                            className={`${styles.jobsFilterOption} ${
                              filter === key ? styles.jobsFilterOptionActive : ''
                            }`}
                            onClick={() => {
                              setFilter(key);
                              setFiltersOpen(false);
                            }}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <p className={styles.jobsCount}>
                Showing {visibleJobs.length} of {jobs.length}{' '}
                {jobs.length === 1 ? 'listing' : 'listings'}
              </p>

              {visibleJobs.length > 0 ? (
                <div className={styles.jobsGrid}>
                  {visibleJobs.map((job, i) => (
                    <JobCard key={job.id} job={job} stagger={(i % 2) * 0.08} />
                  ))}
                </div>
              ) : (
                <div className={styles.jobsEmpty}>
                  <p>No listings match your search.</p>
                  <button type="button" className={styles.jobsClearBtn} onClick={clearSearch}>
                    Clear search &amp; filters
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className={styles.jobsEmpty}>
              There are no open listings right now — check back soon!
            </p>
          )}
        </div>
      </section>

      <ScrollUpBtn />
    </div>
  );
};

export async function getStaticProps() {
  const entries = await loadJobs();
  return {
    props: {
      jobs: getOpenJobs(entries),
    },
    revalidate: revalidate,
  };
}

export default JobsBoardPage;
