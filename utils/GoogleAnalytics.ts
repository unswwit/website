import ReactGA from 'react-ga';

export const initGA = () => {
  const trackingId: any = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
  ReactGA.initialize(trackingId);
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname);
};
