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
    value: 116.2,
    scaledValue: 2024,
    label: '2024',
  },
  {
    value: 99.6,
    scaledValue: 2023,
    label: '2023',
  },
  {
    value: 83,
    scaledValue: 2022,
    label: '2022',
  },
  {
    value: 66.4,
    scaledValue: 2021,
    label: '2021',
  },
  {
    value: 49.8,
    scaledValue: 2020,
    label: '2020',
  },
  {
    value: 33.2,
    scaledValue: 2019,
    label: '2019',
  },
  {
    value: 16.6,
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
  16.6: 2018,
  33.2: 2019,
  49.8: 2020,
  66.4: 2021,
  83: 2022,
  99.6: 2023,
  116.2: 2024,
};

export { execToClassName, marks, valueToYear };
