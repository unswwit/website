import moment from "moment";

export const formatPublicationsDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatPodcastDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};

export const getMostRecentPodcast = (podcasts) => {
  if (podcasts.length === 0) {
    return null;
  }

  return podcasts.sort((a, b) => {
    return new Date(b.fields.date) - new Date(a.fields.date);
  })[0];
};
