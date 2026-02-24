import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chip: {
    textTransform: 'uppercase',
    color: 'white',
    margin: '5px',
  },
});

const categories = {
  All: 'All',
  Competitions: 'Competitions',
  'Industry Talks': 'Industry Talks',
  Networking: 'Networking',
  Philanthropy: 'Philanthropy',
  Socials: 'Socials',
  Workshops: 'Workshops',
  Programs: 'Programs',
  Other: 'Other',
};

const marks = [
  {
    value: 100,
    scaledValue: 2026,
    label: '2026',
  },
  {
    value: 80,
    scaledValue: 2025,
    label: '2025',
  },
  {
    value: 60,
    scaledValue: 2024,
    label: '2024',
  },
  {
    value: 40,
    scaledValue: 2023,
    label: '2023',
  },
  {
    value: 20,
    scaledValue: 2022,
    label: '2022',
  },
  {
    value: 0,
    scaledValue: 2021,
    label: '2021',
  },
];

const valueToYear = {
  0: '2021',
  20: '2022',
  40: '2023',
  60: '2024',
  80: '2025',
  100: '2026',
};

export { useStyles, categories, marks, valueToYear };
