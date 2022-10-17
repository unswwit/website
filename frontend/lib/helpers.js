import moment from "moment";

export const formatDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};
export const formatPublicationsDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatPodcastDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};

export const formatMarketingArchivesDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};
