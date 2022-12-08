// position of the marks on the timeline (i.e. 250 indicates that it's on the right end)
const marks = [
  {
    value: 250,
    scaledValue: 2021,
    label: '2021',
  },
  {
    value: 200,
    scaledValue: 2020,
    label: '2020',
  },
  {
    value: 150,
    scaledValue: 2019,
    label: '2019',
  },
  {
    value: 100,
    scaledValue: 2018,
    label: '2018',
  },
  {
    value: 50,
    scaledValue: 2017,
    label: '2017',
  },
  {
    value: 0,
    scaledValue: 2016,
    label: '2016',
  },
];

const valueToYear = {
  0: '2016',
  50: '2017',
  100: '2018',
  150: '2019',
  200: '2020',
  250: '2021',
};

let pageToValue = (page: string) => {
  return page === 'teams' || page === 'events' || page === 'marketing'
    ? 100
    : 250;
};

const timelinePhoto = {
  2016: '/our-story/timelinePhotos/2016.jpg',
  2017: '/our-story/timelinePhotos/2017.jpg',
  2018: '/our-story/timelinePhotos/2018.jpg',
  2019: '/our-story/timelinePhotos/2019.jpg',
  2020: '/our-story/timelinePhotos/2020.jpg',
  2021: '/our-story/timelinePhotos/2021.jpg',
};

export { marks, valueToYear, pageToValue, timelinePhoto };
