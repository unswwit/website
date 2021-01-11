import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./Podcast.module.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 560,
    display: "inline-block",
    margin: 20,
  },
  media: {
    height: 300,
    width: 300,
    overflow: "hidden",
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
    margin: "5px 0px"
  },
  click: {
    height: 560,
  },
  content: {
    height: "260px",
  }
});

export default function EpisodeTemplate({ cover, title, date, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={[classes.click, styles.previewContainer].join(" ")}>
        <div className={classes.media}>
          <img alt="podcast episode cover" src={cover} className={styles.episodeCover} />
        </div>         
      
        <CardContent className={classes.content}>
          <Typography className={classes.date} variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}