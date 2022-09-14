import moment from "moment";

export const formatPodcastDate = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};
