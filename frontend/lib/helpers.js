import moment from "moment";

export const formatPublicationsDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatPodcastDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};

export const formatBlogRecDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
}