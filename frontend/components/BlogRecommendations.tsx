import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import styles from '../styles/Events.module.css';
import Image from 'next/image';
import { formatMarketingArchivesDate } from '../lib/helpers/date';

const useStyles = makeStyles({
  root: {
    maxWidth: '95%',
    display: 'inline-block',
    margin: 10,
    borderRadius: 0,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    overflow: 'visible',

    '@media (prefers-color-scheme:dark)': {
      backgroundColor: '#3b3b41',
    },
  },
  media: {
    height: 180,
    justifyContent: 'center',
    display: 'flex',
    overflow: 'hidden',
    verticalAlign: 'top',
    backgroundColor: 'black',
    position: 'relative',
  },
  date: {
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    color: '#feb14b',
    fontWeight: 600,
    margin: '5px 5px',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '20px',
    fontWeight: 550,
    textAlign: 'center',
    margin: '5px 5px',
    '@media (prefers-color-scheme:dark)': {
      color: 'white',
    },
  },
  author: {
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    color: '#feb14b',
    fontWeight: 400,
    margin: '5px 5px',
  },
  content: {
    margin: '10px 10px',
  },
  buttons: {
    padding: '16px',
    position: 'relative',
    zIndex: 1,
    justifyContent: 'space-between',
    '@media (max-width:1200px)': {
      justifyContent: 'space-around',
    },
    '@media (max-width:750px)': {
      justifyContent: 'space-around',
    },
    '@media (max-width:450px)': {
      justifyContent: 'space-between',
    },
  },
});

export default function BlogRecommendations({ recommendation }: any) {
  const classes = useStyles();
  const {link, cover, date, title, author } = recommendation.fields;
  const imgUrl = 'https:' + cover.fields.file.url;

  return (
    <a href={'https:' + link}>
      <Card className={[classes.root, styles.previewContainer].join(' ')}>
        <div className={styles.darkOverlay} />
        <Image
          src={imgUrl}
          alt={title}
          className={styles.upcomingEventCover}
          width="1800px"
          height="1200px"
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.date}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {formatMarketingArchivesDate(date)}
          </Typography>
          <Typography className={classes.title}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}
