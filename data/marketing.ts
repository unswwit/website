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
  Mascot: 'Mascot',
  Memes: 'Memes',
  'Monday Motivation': 'Monday',
  'WIT Crush Wednesday': 'WCW',
  'Special Occasions': 'Special',
  Blogs: 'Blogs',
};

const marks = [
  {
    value: 100,
    scaledValue: 2025,
    label: '2025',
  },
  {
    value: 80,
    scaledValue: 2024,
    label: '2024',
  },
  {
    value: 60,
    scaledValue: 2023,
    label: '2023',
  },
  {
    value: 40,
    scaledValue: 2022,
    label: '2022',
  },
  {
    value: 20,
    scaledValue: 2021,
    label: '2021',
  },
  {
    value: 0,
    scaledValue: 2020,
    label: '2020',
  },
];

const valueToYear = {
  0: '2020',
  20: '2021',
  40: '2022',
  60: '2023',
  80: '2024',
  100: '2025',
};

export { useStyles, categories, marks, valueToYear };
