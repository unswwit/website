import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./Podcast.module.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 560,
    display: "inline-block",
    margin: 20,
    borderRadius: 0,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    ["@media (max-width:700px)"]: {
      // eslint-disable-line no-useless-computed-key
      maxWidth: "100%",
      height: 600,
    },
    ["@media (max-width:600px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: 680,
    },
    ["@media (max-width:500px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: 620,
    },
    ["@media (max-width:450px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: 600,
    },
    ["@media (max-width:400px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: 560,
    },
  },
  media: {
    height: 300,
    width: 300,
    overflow: "hidden",
    ["@media (max-width:700px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
      height: "initial",
    },
  },
  date: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    color: "#feb14b",
  },
  description: {
    textAlign: "justify",
    fontSize: 12,
    fontFamily: "Montserrat, sans-serif",
  },
  title: {
    fontFamily: "Playfair Display, serif",
    fontSize: "20px",
    fontWeight: "500",
    textAlign: "center",
    margin: "5px 0px",
  },
  click: {
    height: 560,
  },
  content: {
    height: "260px",
    ["@media (max-width:700px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: 300,
    },
  },
});

export default function EpisodeTemplate({
  cover,
  title,
  date,
  description,
  episodeNo,
}) {
  const classes = useStyles();

  return (
    <Card className={[classes.root, styles.card].join(" ")}>
      <CardActionArea
        className={[classes.click, styles.previewContainer].join(" ")}
      >
        <Link to={`/podcast/${episodeNo}`} style={{ textDecoration: "none" }}>
          <div className={classes.media}>
            <img
              alt="podcast episode cover"
              src={cover}
              className={styles.episodeCover}
            />
          </div>

          <CardContent className={classes.content}>
            <Typography
              className={classes.date}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {date}
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
        </Link>
      </CardActionArea>
    </Card>
  );
}
