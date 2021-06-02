import React from "react";
import styles from "./our-story-timeline.module.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root:{
    width: "80%",
    margin: "0 auto"
  },
  timelineDot: {
    backgroundColor: "#FEB14B",
  },
  paper: {
    padding: "10px 10px",
    backgroundColor: "#E85F5C",
  },
  year: {
    flex: 1,
  },
  verticallyCenterContent: {
    margin: "auto 0"
  },
  history: {
    flex: 6
  }
}));

export default function OppositeContentTimeline() {
  const classes = useStyles();
  return (
    <>
      <Timeline className={classes.root} align="alternate">
        <TimelineItem>
          <TimelineOppositeContent className={classes.year}>
            <Paper
              elevation={2}
              className={classes.paper}
            >
              <p className={styles.yearContent}>2016</p>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator className={styles.timelineSeparator}>
            <TimelineConnector />
            <TimelineDot className={classes.timelineDot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.history}>
            <p className={styles.timelineContent}>
              <ul>
                <li>
                  WIT was founded becoming the 1st UNSW society catering
                  specifically to female students in technology.
                </li>
                <li>
                  WIT launched digitally on Facebook, garnering 100+ likes.
                </li>
              </ul>
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.history}>
            <p className={styles.timelineContent}>
              <ul>
                <li>
                  WIT’s first stall was held at UNSW's Orientation Week, where
                  we signed up over 100 students. From there, we doubled our
                  membership base to 200+ students in 2017.
                </li>
                <li>We partnered up with four sponsors in its first year.</li>
              </ul>
            </p>
          </TimelineOppositeContent>
          <TimelineSeparator className={styles.timelineSeparator}>
            <TimelineConnector />
            <TimelineDot className={classes.timelineDot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.year}>
            <Paper
              elevation={2}
              className={classes.paper}
            >
              <p className={styles.yearContent}>2017</p>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.year}>
            <Paper
              elevation={2}
              className={classes.paper}
            >
              <p className={styles.yearContent}>2018</p>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator className={styles.timelineSeparator}>
            <TimelineConnector />
            <TimelineDot className={classes.timelineDot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.history}>
            <p className={styles.timelineContent}>
              <ul>
                <li>
                  Numerous, successful events were held including our
                  Empowerment Program, annual Hackathon (which hosted 100+
                  participants) and first high school outreach event and site
                  visits at AWS.
                </li>
                <li>Our student base grew to 900+ members.</li>
                <li>Our sponsorship base more than doubled to 10 sponsors.</li>
              </ul>
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.history}>
            <p className={styles.timelineContent}>
              <ul>
                <li>Our student base grew to 1400+ members.</li>
                <li>
                  Fostering WIT’s culture with a strong sense of community and
                  openness was refocused on within the internal team.
                </li>
              </ul>
            </p>
          </TimelineOppositeContent>
          <TimelineSeparator className={styles.timelineSeparator}>
            <TimelineConnector />
            <TimelineDot className={classes.timelineDot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.year}>
            <Paper
              elevation={2}
              className={classes.paper}
            >
              <p className={styles.yearContent}>2019</p>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.year}>
            <Paper
              elevation={2}
              className={classes.paper}
            >
              <p className={styles.yearContent}>2020</p>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator className={styles.timelineSeparator}>
            <TimelineConnector />
            <TimelineDot className={classes.timelineDot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.history}> 
            <p className={styles.timelineContent}>
              <ul>
                <li>
                  Hosted 47 events, reaching 79.4k people and achieving a 50%
                  increase in event attendance since 2019.
                </li>
                <li>
                  Our education portfolio was born releasing three flagship
                  publications, our podcast, Talk WIT Us, and blog.
                </li>
                <li>
                  WIT was named ‘ARC Club of the Year 2020’, an accolade awarded
                  to the society which makes the highest contribution to student
                  life by supporting, developing and representing students.
                </li>
                <li>
                  Our student base grew to 2200+ students by the end of 2020.
                </li>
              </ul>
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
