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
    value: 100,
    scaledValue: 2026,
    label: '2026',
  },
  {
    value: 88.89,
    scaledValue: 2025,
    label: '2025',
  },
  {
    value: 77.78,
    scaledValue: 2024,
    label: '2024',
  },
  {
    value: 66.67,
    scaledValue: 2023,
    label: '2023',
  },
  {
    value: 55.56,
    scaledValue: 2022,
    label: '2022',
  },
  {
    value: 44.44,
    scaledValue: 2021,
    label: '2021',
  },
  {
    value: 33.33,
    scaledValue: 2020,
    label: '2020',
  },
  {
    value: 22.22,
    scaledValue: 2019,
    label: '2019',
  },
  {
    value: 11.11,
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
  11.11: 2018,
  22.22: 2019,
  33.33: 2020,
  44.44: 2021,
  55.56: 2022,
  66.67: 2023,
  77.78: 2024,
  88.89: 2025,
  100: 2026,
};

export { execToClassName, marks, valueToYear };
