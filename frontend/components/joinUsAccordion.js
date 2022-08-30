import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import styles from "../styles/JoinUs.module.css";

const useStyles = makeStyles({
  colorPrimary: {
    color: "black",
  },
  "@media (prefers-color-scheme:dark)": {
    root: {
      backgroundColor: "#3B3B41",
    },
    colorPrimary: {
      color: "white",
    },
  },
});

export default function SimpleAccordion() {
  const accordionclasses = useStyles();
  return (
    <div className={styles.accordion}>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{ colorPrimary: accordionclasses.colorPrimary }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={"span"}>
            <div className={styles.accordionHeading}>
              <strong>
                Can non-female students apply for a subcommittee position?
              </strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Yes, WIT encourages all students who are interested to apply for not
            just our subcommittee positions but also participate in any of our
            events.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{ colorPrimary: accordionclasses.colorPrimary }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={"span"}>
            <div className={styles.accordionHeading}>
              <strong>Do I need a tech background to join?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Not at all! We consider applicants from all degrees, as long as you
            have a passion for technology.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{ colorPrimary: accordionclasses.colorPrimary }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={"span"}>
            <div className={styles.accordionHeading}>
              <strong>
                Do I need any prior experience in the portfolio that I applied?
              </strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            No. Although some technical experience for IT and Marketing may be
            beneficial, it is certainly not required.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{ colorPrimary: accordionclasses.colorPrimary }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={"span"}>
            <div className={styles.accordionHeading}>
              <strong>How can I make my application stand out?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Be enthusiastic! Show us that you are excited to become a part of
            WIT and tell us how you can contribute unique value to the society.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{ colorPrimary: accordionclasses.colorPrimary }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={"span"}>
            <div className={styles.accordionHeading}>
              <strong>What is the time commitment like?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Like most societies, the time commitment expected for a subcommittee
            member will be approximately 2-4 hours per week.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{ colorPrimary: accordionclasses.colorPrimary }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
          classes={{ root: styles.accordiontest }}
        >
          <Typography id={styles.accordionHeading} component={"span"}>
            <div className={styles.accordionHeading}>
              <strong>
                I’m not in 1st year, can I still join as a subcommittee member?
              </strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Yes, we will consider all applicants regardless of year and stage in
            degrees.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
