export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID as string, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  label: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, label}: GTagEvent) => {
  window.gtag('event', action, {
    event_label: label,
  });
};
