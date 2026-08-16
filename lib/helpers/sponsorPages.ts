// Sponsors with their own page. Shared between the
// Sponsors listing page and the Careers Hub landing page's sponsor marquee
// so both link to the same place.
export const SPONSOR_PAGES: Record<string, string> = {
  pwc: '/careers-hub/sponsor-pages/pwc',
  pricewaterhousecoopers: '/careers-hub/sponsor-pages/pwc',
  westpac: '/careers-hub/sponsor-pages/w-group',
  domain: '/careers-hub/sponsor-pages/domain',
  'jane street': '/careers-hub/sponsor-pages/jane-street',
};

export function getSponsorPage(displayName: string): string | undefined {
  const normalized = displayName.toLowerCase().trim();
  const key = Object.keys(SPONSOR_PAGES).find((k) => normalized.includes(k));
  return key ? SPONSOR_PAGES[key] : undefined;
}
