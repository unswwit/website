import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";
import styles from "../styles/Events.module.css";
import AddToCalBtn from "./AddToCalBtn";
import RegBtn from "./RegButton";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    height: 520,
    display: "inline-block",
    margin: 10,
    borderRadius: 0,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    overflow: "visible",
    "@media (max-width:1200px)": {
      height: 480,
    },
    "@media (max-width:1000px)": {
      height: 550,
    },
    "@media (max-width:750px)": {
      height: 420,
    },
    "@media (max-width:680px)": {
      height: 520,
    },
    "@media (max-width:400px)": {
      height: 520,
    },
    "@media (prefers-color-scheme:dark)": {
      backgroundColor: "#3b3b41",
    },
  },
  media: {
    height: 170,
    justifyContent: "center",
    display: "flex",
    overflow: "hidden",
    verticalAlign: "top",
    backgroundColor: "black",
    position: "relative",
  },
  date: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    color: "#feb14b",
    fontWeight: 600,
  },
  location: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    color: "#feb14b",
    fontWeight: 600,
    marginBottom: "10px",
  },
  description: {
    textAlign: "justify",
    fontSize: 12,
    color: "#313638",
    fontFamily: "Montserrat, sans-serif",
    "@media (prefers-color-scheme:dark)": {
      color: "white",
    },
  },
  title: {
    fontFamily: "Playfair Display, serif",
    fontSize: "20px",
    fontWeight: 500,
    textAlign: "center",
    margin: "5px 0px",
    "@media (prefers-color-scheme:dark)": {
      color: "white",
    },
  },
  content: {
    height: "255px",
    "@media (max-width:1200px)": {
      height: 210,
    },
    "@media (max-width:1000px)": {
      height: 280,
    },
    "@media (max-width:750px)": {
      height: 180,
    },
    "@media (max-width:680px)": {
      height: 250,
    },
    "@media (max-width:400px)": {
      height: 255,
    },
  },
  buttons: {
    padding: "16px",
    position: "relative",
    zIndex: 1,
    justifyContent: "space-between",
    "@media (max-width:1200px)": {
      justifyContent: "space-around",
    },
    "@media (max-width:750px)": {
      justifyContent: "space-around",
    },
    "@media (max-width:450px)": {
      justifyContent: "space-between",
    },
  },
});

export default function UpcomingEvent({ upcomingEvent }) {
  const classes = useStyles();

  return (
    <Card className={[classes.root, styles.previewContainer].join(" ")}>
      <a
        className={styles.aStyle}
        href={upcomingEvent.facebookLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.darkOverlay} />
        <div className={classes.media}>
          <Image
            src={`/event-covers/2022/${upcomingEvent.img}`}
            alt={upcomingEvent.title}
            className={styles.upcomingEventCover}
            width="360px"
            height="300px"
          />
        </div>

        <CardContent className={classes.content}>
          <Typography
            className={classes.date}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {upcomingEvent.date}
          </Typography>
          <Typography className={classes.title}>
            {upcomingEvent.title}
          </Typography>
          <Typography
            className={classes.location}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {upcomingEvent.location}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {upcomingEvent.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.buttons}>
          <RegBtn link={upcomingEvent.registerLink} />
          <AddToCalBtn
            title={upcomingEvent.title}
            description={upcomingEvent.description}
            location={upcomingEvent.location}
            startDate={upcomingEvent.start}
            endDate={upcomingEvent.end}
            duration={upcomingEvent.duration}
          />
        </CardActions>
      </a>
    </Card>
  );
}
