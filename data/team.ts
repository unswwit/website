const execToClassName = {
  2021: 'exec2021Img',
  2020: {
    'Elicia Au Duong': 'eliImg',
    'Gabrielle Younes': 'gabImg',
    'Vivian Wong': 'vivwImg',
    'Alison Chin': 'alisonImg',
    'Felicia Ee': 'felImg',
  },
};

const marks = [
  {
    value: 99.4,
    scaledValue: 2024,
    label: '2024',
  },
  {
    value: 85.2,
    scaledValue: 2023,
    label: '2023',
  },
  {
    value: 71,
    scaledValue: 2022,
    label: '2022',
  },
  {
    value: 56.8,
    scaledValue: 2021,
    label: '2021',
  },
  {
    value: 42.6,
    scaledValue: 2020,
    label: '2020',
  },
  {
    value: 28.4,
    scaledValue: 2019,
    label: '2019',
  },
  {
    value: 14.2,
    scaledValue: 2018,
    label: '2018',
  },
  {
    value: 0,
    scaledValue: 2017,
    label: '2017',
  },
];

const valueToYear = {
  0: 2017,
  14.2: 2018,
  28.4: 2019,
  42.6: 2020,
  56.8: 2021,
  71: 2022,
  85.2: 2023,
  99.4: 2024,
};

export { execToClassName, marks, valueToYear };
