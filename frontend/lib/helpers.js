import moment from "moment";

export const formatPublicationsDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatPodcastDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};

export const getRecentPublications = (publications) => {
  if (!publications) return [];

  // return the 3 most recent publications (sorted by date)
  const sortedPublications = publications.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return sortedPublications.slice(0, 3);
};