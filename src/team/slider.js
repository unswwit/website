import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));
  
const marks = [
  {
    value: 2021,
    label: "2021",
  },
  {
    value: 2020,
    label: "2020",
  },
  {
    value: 2019,
    label: "2019",
  },
  {
    value: 2018,
    label: "2018",
  },
];

export default function DiscreteSlider() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
          Always visible
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={(value) => value}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}