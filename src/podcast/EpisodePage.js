import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    textTransform: "uppercase",
    color: "#e85f5c",		
  },
}));

const EpisodePage = ({ title, date, overview, transcript, link }) => {
  const classes = useStyles();
	
  return (
    <>
      <h2>{title}</h2>
      <p>{date}</p>
      <iframe title={title} src={link} width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

      <h2>Overview</h2>
      <p>{overview}</p>

      <h2>Transcript</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>View Transcript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {transcript}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default EpisodePage;