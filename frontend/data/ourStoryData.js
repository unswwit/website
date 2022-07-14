// position of the marks on the timeline (i.e. 250 indicates that it's on the right end)
const marks = [
  {
    value: 100,
    scaledValue: 2021,
    label: "2021",
  },
  {
    value: 80,
    scaledValue: 2020,
    label: "2020",
  },
  {
    value: 60,
    scaledValue: 2019,
    label: "2019",
  },
  {
    value: 40,
    scaledValue: 2018,
    label: "2018",
  },
  {
    value: 20,
    scaledValue: 2017,
    label: "2017",
  },
  {
    value: 0,
    scaledValue: 2016,
    label: "2016",
  },
];

const valueToYear = {
  0: "2016",
  20: "2017",
  40: "2018",
  60: "2019",
  80: "2020",
  100: "2021",
};

let pageToValue = (page) => {
  return page === "teams" || page === "events" || page === "marketing"
    ? 100
    : 250;
};

const timelinePhoto = {
  2016: "/our-story/timelinePhotos/2016.jpg",
  2017: "/our-story/timelinePhotos/2017.jpg",
  2018: "/our-story/timelinePhotos/2018.jpg",
  2019: "/our-story/timelinePhotos/2019.jpg",
  2020: "/our-story/timelinePhotos/2020.jpg",
  2021: "/our-story/timelinePhotos/2021.jpg",
};

export { marks, valueToYear, pageToValue, timelinePhoto };
