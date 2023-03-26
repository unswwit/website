import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import styles from '../styles/Podcast.module.css';
import { formatPodcastDate } from '../lib/helpers/date';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    alignSelf: 'center',
    justifySelf: 'center',
    maxWidth: 300,
    height: 560,
    display: 'inline-block',
    margin: 20,
    borderRadius: 0,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    '@media (max-width:700px)': {
      maxWidth: '100%',
      height: 600,
    },
    '@media (max-width:600px)': {
      height: 680,
    },
    '@media (max-width:500px)': {
      height: 620,
    },
    '@media (max-width:450px)': {
      height: 600,
    },
    '@media (max-width:400px)': {
      height: 560,
    },
    '@media (max-width:390px)': {
      height: 600,
    },
  },
  media: {
    height: 300,
    justifyContent: 'center',
    display: 'flex',
    overflow: 'hidden',
    verticalAlign: 'top',
    position: 'relative',
    '@media (max-width:700px)': {
      objectFit: 'contain',
      height: '60vw',
    },
    '@media (max-width:600px)': {
      objectFit: 'contain',
      height: '88vw',
    },
  },
  date: {
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    color: '#feb14b',
    fontWeight: 600,
  },
  description: {
    textAlign: 'justify',
    fontSize: 12,
    fontFamily: 'Montserrat, sans-serif',
    color: '#313638',
    '@media (prefers-color-scheme:dark)': {
      color: '#fff',
    },
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '20px',
    fontWeight: 500,
    textAlign: 'center',
    margin: '5px 0px',
    '@media (prefers-color-scheme:dark)': {
      color: '#fff',
    },
  },
  click: {
    height: 560,
    '@media (max-width:390px)': {
      height: 1000,
    },
  },
  content: {
    height: '260px',
    '@media (max-width:700px)': {
      height: 800,
    },
    '@media (prefers-color-scheme:dark)': {
      background: '#3B3B41',
    },
  },
});

export default function EpisodeTemplate({ episode }: any) {
  const classes = useStyles();
  const { img, date, title, description, spotify } = episode.fields;
  const imgUrl = 'https:' + img.fields.file.url;
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={[classes.click, styles.previewContainer].join(' ')}
      >
        <Link href={spotify} legacyBehavior>
          <div>
            <div className={classes.media}>
              <Image
                alt="podcast episode cover"
                src={imgUrl}
                className={styles.episodeCover}
                fill
                priority
              />
            </div>
            <CardContent className={classes.content}>
              <Typography
                className={classes.date}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {formatPodcastDate(date)}
              </Typography>
              <Typography className={classes.title} gutterBottom>
                {title}
              </Typography>
              <Typography
                className={classes.description}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {description}
              </Typography>
            </CardContent>
          </div>
        </Link>
      </CardActionArea>
    </Card>
  );
}
