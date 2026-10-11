import '@testing-library/jest-dom';
import moment from 'moment';
import { getJobType, getOpenJobs, isJobOpen } from '../lib/helpers/jobs';

const entry = (id: string, fields: Record<string, any>) => ({
  sys: { id },
  fields: { position: 'Role', companyName: 'Company', link: 'https://example.com', ...fields },
});

describe('Jobs board', () => {
  describe('getJobType', () => {
    it('buckets internships', () => {
      expect(getJobType('Internship Opportunity ', 'Software Engineering Intern')).toBe('internship');
    });
    it('buckets grad programs', () => {
      expect(getJobType('Graduate Program', '2027 Macquarie Graduate Program')).toBe('grad');
    });
    it('checks the position when the type is vague', () => {
      expect(getJobType('Job Opportunity: Fixed Income Team', 'Graduate Role ')).toBe('grad');
    });
    it('falls back to other', () => {
      expect(getJobType('Membership Opportunity', '.au Member')).toBe('other');
    });
  });

  describe('isJobOpen', () => {
    const now = moment('2026-10-10T12:00:00');
    it('keeps rolling jobs open', () => {
      expect(isJobOpen(undefined, now)).toBe(true);
    });
    it('keeps jobs open until the end of the close date', () => {
      expect(isJobOpen('2026-10-10', now)).toBe(true);
    });
    it('closes jobs after the close date', () => {
      expect(isJobOpen('2026-10-09', now)).toBe(false);
    });
  });

  describe('getOpenJobs', () => {
    it('drops closed and malformed entries and sorts rolling jobs last', () => {
      const future = moment().add(7, 'days').format('YYYY-MM-DD');
      const jobs = getOpenJobs([
        entry('rolling', {}),
        entry('closed', { closeDate: '2020-01-01' }),
        entry('soon', { closeDate: future }),
        entry('broken', { link: undefined }),
      ]);
      expect(jobs.map((job) => job.id)).toEqual(['soon', 'rolling']);
      expect(jobs[1].deadline).toBe('Rolling');
    });
  });
});
