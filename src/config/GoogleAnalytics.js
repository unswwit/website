import ReactGA from "react-ga";

const GoogleAnalytics = () => {
  const trackingId = process.env.REACT_APP_MEASUREMENT_ID; // your google analytics id
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export default GoogleAnalytics;