import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  chip: {
    textTransform: 'uppercase',
    color: 'white',
    margin: '5px',
  },
})

const categories = {
  All: 'All',
  Mascot: 'Mascot',
  Memes: 'Memes',
  'Monday Motivation': 'Monday',
  'WIT Crush Wednesday': 'WCW',
  'Special Occasions': 'Special',
}

const marks = [
  {
    value: 100,
    scaledValue: 2022,
    label: '2022',
  },
  {
    value: 50,
    scaledValue: 2021,
    label: '2021',
  },
  {
    value: 0,
    scaledValue: 2020,
    label: '2020',
  },
]

const valueToYear = {
  0: '2020',
  50: '2021',
  100: '2022',
}

export { useStyles, categories, marks, valueToYear }
