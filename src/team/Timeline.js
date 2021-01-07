import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import "./team.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    margin: "0 auto"
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const TeamSlider = withStyles({
  root: {
    color: "#E85F5C",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    backgroundColor: "#E85F5C",
    height: 8,
    borderRadius: 4
  },
  mark: {
    backgroundColor: "#E85F5C",
    height: 15,
    width: 1.5,
    marginTop: -3,
    fontSize: 20
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);


const Timeline = ({ updateYear }) => {
  const classes = useStyles();

  const marks = [
    {
      value: 100,
      scaledValue: 2021,
      label: "2021"
    },
    {
      value: 50,
      scaledValue: 2020,
      label: "2020"
    },
    {
      value: 0,
      scaledValue: 2019,
      label: "2019"
    }
  ];

  const valueToYear = {
    0: "2019",
    50: "2020",
    100: "2021"
  }

  return (
    <div className={classes.root}>
      <TeamSlider 
        id="timeline"
        style={{fontSize: "50px"}}
        step={50} 
        marks={marks}  
        valueLabelDisplay="off" 
        aria-label="timeline" 
        defaultValue={100} 
        onChange={(_, value) => updateYear(valueToYear[value])}  
      />
    </div>
  );
}

export default Timeline;
