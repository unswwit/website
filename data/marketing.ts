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
    value: 99.9,
    scaledValue: 2023,
    label: '2023',
  },
  {
    value: 66.6,
    scaledValue: 2022,
    label: '2022',
  },
  {
    value: 33.3,
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
  33.3: '2021',
  66.6: '2022',
  99.9: '2023',
};

export { useStyles, categories, marks, valueToYear };
