import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import styles from "./Timeline.module.css";

const TimelineSlider = withStyles({
  root: {
    color: "#E85F5C",
    height: 6,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    backgroundColor: "#E85F5C",
    height: 8,
    borderRadius: 4,
  },
  mark: {
    backgroundColor: "#E85F5C",
    height: 15,
    width: 1.5,
    marginTop: -3,
    fontSize: 20,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

const Timeline = ({ updateYear, marks, valueToYear, page, step, margin }) => {
  return (
    <div
      id={
        page === "teams"
          ? styles.teams
          : page === "events"
          ? styles.events
          : styles.marketingArchive
      }
      style={{ marginTop: margin }}
    >
      <TimelineSlider
        step={step}
        marks={marks}
        valueLabelDisplay="off"
        aria-label="timeline"
        defaultValue={100}
        onChange={(_, value) => updateYear(valueToYear[value])}
      />
    </div>
  );
};

export default Timeline;
