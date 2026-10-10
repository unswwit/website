import moment from 'moment';
import { JobEntry } from '../careersHubData';

// A job with no close date is treated as "Rolling" and never expires.
// Otherwise it stays listed until the end of its closing day.
export const isJobOpen = (closeDate?: string, now = moment()) =>
  !closeDate || moment(closeDate).endOf('day').isSameOrAfter(now);

// The Contentful `type` field is free text (e.g. "Internship Opportunity",
// "Graduate Program", "Membership Opportunity"), so bucket each listing into
// a filter category by keyword. Position is checked too since some entries
// only say "Graduate Role" there.
export const getJobType = (type = '', position = ''): JobEntry['type'] => {
  const text = `${type} ${position}`.toLowerCase();
  if (text.includes('intern')) return 'internship';
  if (text.includes('grad')) return 'grad';
  if (/\b(job|role|full[- ]?time|position)\b/.test(text)) return 'fulltime';
  return 'other';
};

// Maps a raw Contentful `opportunities` entry onto the JobEntry shape JobCard
// expects. Returns null for entries missing the fields needed to render.
export const toJobEntry = (entry: any): JobEntry | null => {
  const f = entry?.fields || {};
  if (!f.position || !f.companyName || !f.link) return null;

  return {
    id: entry.sys?.id || `${f.companyName}-${f.position}`,
    title: f.position.trim(),
    company: f.companyName.trim(),
    type: getJobType(f.type, f.position),
    location: f.location?.trim() || 'Location TBC',
    deadline: f.closeDate ? moment(f.closeDate).format('D MMM YYYY') : 'Rolling',
    description: f.summary?.trim() || '',
    applyUrl: f.link,
  };
};

const closeDateValue = (entry: any) => {
  const closeDate = entry?.fields?.closeDate;
  return closeDate ? moment(closeDate).valueOf() : Infinity;
};

// Drops closed roles and anything malformed, then sorts soonest-closing
// first with rolling roles at the end.
export const getOpenJobs = (entries: any[] = []): JobEntry[] =>
  entries
    .filter((entry) => isJobOpen(entry?.fields?.closeDate))
    .sort((a, b) => closeDateValue(a) - closeDateValue(b))
    .map(toJobEntry)
    .filter((job): job is JobEntry => job !== null);
