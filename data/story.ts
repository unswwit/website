// position of the marks on the timeline (i.e. 250 indicates that it's on the right end)
const marks = [
  { value: 249.9, scaledValue: 2024, label: '2024' },
  { value: 218.6625, scaledValue: 2023, label: '2023' },
  { value: 187.425, scaledValue: 2022, label: '2022' },
  { value: 156.1875, scaledValue: 2021, label: '2021' },
  { value: 124.95, scaledValue: 2020, label: '2020' },
  { value: 93.7125, scaledValue: 2019, label: '2019' },
  { value: 62.475, scaledValue: 2018, label: '2018' },
  { value: 31.2375, scaledValue: 2017, label: '2017' },
  { value: 0, scaledValue: 2016, label: '2016' },
];

const valueToYear = {
  0: '2016',
  31.2375: '2017',
  62.475: '2018',
  93.7125: '2019',
  124.95: '2020',
  156.1875: '2021',
  187.425: '2022',
  218.6625: '2023',
  249.9: '2024',
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
  2022: '/our-story/timelinePhotos/2022.jpg',
  2023: '/our-story/timelinePhotos/2023.jpg',
  2024: '/our-story/timelinePhotos/2024.jpg',
};

export { marks, valueToYear, pageToValue, timelinePhoto };
