import moment from 'moment';

export const formatDate = (date: string) => {
  return moment(date).format('MMMM DD, YYYY');
};

export const formatPublicationsDate = (date: string) => {
  return moment(date).format('DD/MM/YYYY');
};

export const formatPodcastDate = (date: string) => {
  return moment(date).format('MMMM DD, YYYY');
};

export const formatMarketingArchivesDate = (date: string) => {
  return moment(date).format('DD/MM/YYYY');
};
