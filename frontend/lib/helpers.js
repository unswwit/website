import moment from "moment";

export const formatPublicationsDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};
