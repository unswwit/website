import ReactGA from "react-ga";

export const initGA = () => {
  const trackingId = process.env.NEXT_PUBLIC_MEASUREMENT_ID; // your google analytics id
  ReactGA.initialize(trackingId);
};
export const logPageView = () => {
  //ReactGA.pageview(window.location.href.split("#")[1]);
  ReactGA.pageview(window.location.pathname);
};
