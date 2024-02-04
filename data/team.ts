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
    value: 98,
    scaledValue: 2024,
    label: '2024',
  },
  {
    value: 84,
    scaledValue: 2023,
    label: '2023',
  },
  {
    value: 70,
    scaledValue: 2022,
    label: '2022',
  },
  {
    value: 56,
    scaledValue: 2021,
    label: '2021',
  },
  {
    value: 42,
    scaledValue: 2020,
    label: '2020',
  },
  {
    value: 28,
    scaledValue: 2019,
    label: '2019',
  },
  {
    value: 14,
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
  14: 2018,
  28: 2019,
  42: 2020,
  56: 2021,
  70: 2022,
  84: 2023,
  98: 2024,
};

export { execToClassName, marks, valueToYear };
