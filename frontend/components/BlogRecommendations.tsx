import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Chip } from '@material-ui/core';
import styles from '../styles/Events.module.css';
import Image from 'next/image';
import Link from 'next/link';
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
  description: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#313638',
    fontFamily: 'Montserrat, sans-serif',
    '@media (prefers-color-scheme:dark)': {
      color: 'white',
    },
    margin: '5px 5px',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '24px',
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
  previewCategories: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexFlow: 'row-wrap',
    width: '100%',
    marginBottom: '10px',
  },
  chip: {
    color: 'white',
    marginRight: '5px',
    fontFamily: 'Montserrat',
    backgroundColor: '#6d6e6d',
  },
});

export default function BlogRecommendations({ recommendation }) {
  const classes = useStyles();

  return (
    <Link href={`/media/blog/${recommendation.fields.index}`}>
      <Card className={[classes.root, styles.previewContainer].join(' ')}>
        <div className={styles.darkOverlay} />
        <Image
          src={'https://' + recommendation.fields.cover.fields.file.url}
          alt={recommendation.title}
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
            {formatMarketingArchivesDate(recommendation.fields.date)}
          </Typography>
          <Typography className={classes.title}>
            {recommendation.fields.title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {recommendation.fields.subheading}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
