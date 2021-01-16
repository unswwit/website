import ReactGA from "react-ga";

// Replace with your Google Analytics tracking ID
const trackingId = process.env.REACT_APP_MEASUREMENT_ID; 
ReactGA.initialize(trackingId);
ReactGA.set({
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})