// @ts-nocheck comment
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from '../styles/JoinUs.module.css';

const useStyles = makeStyles({
  colorPrimary: {
    color: 'black',
  },
  '@media (prefers-color-scheme:dark)': {
    root: {
      backgroundColor: '#3B3B41',
    },
    colorPrimary: {
      color: 'white',
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
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={'span'}>
            <div className={styles.accordionHeading}>
              <strong>When are subcommittee applications open?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Subcommittee applications usually open around O-Week and close
            within the first month of Term One. You can find more details on
            subcommittee applications on our social media pages.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={'span'}>
            <div className={styles.accordionHeading}>
              <strong>
                What&apos;s the difference between being a WIT member and being
                part of the subcommittee team?
              </strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            As a subcommittee member, you’ll get to experience the
            behind-the-scenes of everything our society does! This can vary from
            organising our events, developing code for our website or producing
            content. As a WIT member, you’ll get to see the results of all the
            amazing things that come out from our subcommittee team!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={'span'}>
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
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={'span'}>
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
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={'span'}>
            <div className={styles.accordionHeading}>
              <strong>
                Do I need any prior experience in the portfolio that I applied?
              </strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            No. Although some technical experience for Marketing, Media and IT
            may be beneficial, it is certainly not required.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={'span'}>
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
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
        >
          <Typography id={styles.accordionHeading} component={'span'}>
            <div className={styles.accordionHeading}>
              <strong>What is the time commitment like?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Like most societies, the time commitment expected for a subcommittee
            member will be approximately 2-5 hours per week.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
          classes={{ root: styles.accordiontest }}
        >
          <Typography id={styles.accordionHeading} component={'span'}>
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
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
          classes={{ root: styles.accordiontest }}
        >
          <Typography id={styles.accordionHeading} component={'span'}>
            <div className={styles.accordionHeading}>
              <strong>What events does WIT run?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            WIT runs a wide variety of events, ranging from professional
            development in collaboration with our industry sponsors, to social
            and philanthropic events.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
          classes={{ root: styles.accordiontest }}
        >
          <Typography id={styles.accordionHeading} component={'span'}>
            <div className={styles.accordionHeading}>
              <strong>Where can I information about your events?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            You can find information about our events on our website on the
            Events page or on our social media, such as Facebook and Instagram.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
          classes={{ root: styles.accordiontest }}
        >
          <Typography id={styles.accordionHeading} component={'span'}>
            <div className={styles.accordionHeading}>
              <strong>Wbat are your flagship events?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Our flagship events include the Empowerment Mentoring Program,
            Hackathon, Case Competition and Annual Networking Night. You can
            find more information on our website! Check out our “Events” tab.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={{ root: accordionclasses.root }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              classes={{
                colorPrimary: accordionclasses.colorPrimary,
              }}
              color="primary"
            />
          }
          aria-controls="panel4bh-content"
          classes={{ root: styles.accordiontest }}
        >
          <Typography id={styles.accordionHeading} component={'span'}>
            <div className={styles.accordionHeading}>
              <strong>Who can attend your events?</strong>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDetails}>
            Anyone can attend! We’d love to see you there!
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
