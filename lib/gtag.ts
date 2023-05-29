export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  label: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ label}: GTagEvent) => {
  window.gtag('event', {
    event_label: label,
  });
};
