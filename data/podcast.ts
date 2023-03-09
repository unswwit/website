import { makeStyles } from '@material-ui/core/styles';

const platforms = ['anchor', 'radioRepublic', 'google', 'spotify', 'breaker'];

const logos = {
  anchor: 'podcast-anchor.png',
  radioRepublic: 'podcast-radio-republic.png',
  google: 'podcast-google-podcasts.png',
  spotify: 'podcast-spotify.png',
  breaker: 'podcast-breaker.png',
};

const links = {
  anchor: ['podcast-anchor.png', 'https://anchor.fm/unswwit'],
  radioRepublic: [
    'podcast-radio-republic.png',
    'https://radiopublic.com/talk-wit-us-Ww3A3m',
  ],
  google: [
    'podcast-google-podcasts.png',
    'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zNTQxM2JkMC9wb2RjYXN0L3Jzcw==',
  ],
  spotify: [
    'podcast-spotify.png',
    'https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P',
  ],
  pocketCasts: ['podcast-pocket-casts.png', 'https://pca.st/kzc50ug6'],
  breaker: ['podcast-breaker.png', 'https://www.breaker.audio/talk-wit-us'],
};

const useStyles = makeStyles({
  chip: {
    textTransform: 'uppercase',
    color: 'white',
    margin: '5px',
  },
});

const categories = {
  All: 'All',
  'WIT Talks': 'WIT Talks',
  'Industry Insights': 'Industry Insights',
};

export { platforms, logos, links, useStyles, categories };
