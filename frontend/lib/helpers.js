import moment from "moment";

export const formatPublicationsDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatPodcastDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};

export const getMostRecentPodcast = (podcasts) => {
  // return the most recent podcast (sorted by date)
  return podcasts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  })[0];
};
