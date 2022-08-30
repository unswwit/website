const execToClassName = {
  2021: "exec2021Img",
  2020: {
    "Elicia Au Duong": "eliImg",
    "Gabrielle Younes": "gabImg",
    "Vivian Wong": "vivwImg",
    "Alison Chin": "alisonImg",
    "Felicia Ee": "felImg",
  },
};

const marks = [
  {
    value: 100,
    scaledValue: 2022,
    label: "2022",
  },
  {
    value: 80,
    scaledValue: 2021,
    label: "2021",
  },
  {
    value: 60,
    scaledValue: 2020,
    label: "2020",
  },
  {
    value: 40,
    scaledValue: 2019,
    label: "2019",
  },
  {
    value: 20,
    scaledValue: 2018,
    label: "2018",
  },
  {
    value: 0,
    scaledValue: 2017,
    label: "2017",
  },
];

const valueToYear = {
  0: 2017,
  20: 2018,
  40: 2019,
  60: 2020,
  80: 2021,
  100: 2022,
};

export { execToClassName, marks, valueToYear };
