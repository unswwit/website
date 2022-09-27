import moment from "moment";

export const formatPublicationsDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatPodcastDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};

export const getMostRecentEvent = (events) => {
  if (!events || events.length === 0) {
    return null;
  }
  
  // return the most recent upcoming event
  return events.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  })[0];
};