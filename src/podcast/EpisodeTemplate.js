import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 600
  },
  media: {
    height: 300,
  },
  date: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  }
});

export default function EpisodeTemplate({ cover, title, date, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cover}
          title="podcast episode cover"
        />
        <CardContent>
          <Typography className={classes.date} variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
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