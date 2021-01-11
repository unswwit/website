import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import styles from "./home.module.css";
import NewsletterForm from "./NewsletterForm";
import { Modal, Backdrop, Fade } from "@material-ui/core";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const callbackModal = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Start of Header */}
      <div className={styles.contain}>
        <div className={styles.headline}>
          <h1>UNSW</h1>
          <h1>Women In</h1>
          <h1>Technology</h1>
          <p> Empowering and inspiring the architects of change</p>
        </div>
      </div>
      {/* End of Header */}

      {/* Start of Description */}
      <div className={styles.description}>
        <div className={styles.descriptionLeft}>
          <h1>UNITE. EMPOWER. UPSKILL.</h1>
        </div>
        <div className={styles.descriptionRight}>
          <p>
            Formed in late 2016, we have grown to be a platform that empowers,
            unites and up-skills female and male students alike that are
            passionate about our mission. Women in Technology (WIT) aims to
            cultivate future leaders that are prepared to challenge the
            prejudices and bring change into the industry while building a
            strong community where they can find lasting friendships and
            support.
          </p>
        </div>
      </div>
      {/* End of Description */}

      {/* Start of Statistics */}
      <div className={styles.stats}>
        <img
          src={`${process.env.PUBLIC_URL}./stats-background-1.png`}
          className={styles.statsBackground}
          alt="banner"
        />
        <div>
          <div className={styles.number}>
            <div>
              <span>
                <CountUp end={30} duration={5} />
              </span>
              <p>Team Members</p>
            </div>
            <div>
              <span>
                <CountUp end={15} duration={5} />
              </span>
              <p>Sponsors</p>
            </div>
            <div>
              <span>
                <CountUp end={2343} duration={4} />
              </span>
              <p>Facebook Followers</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of Statistics */}

      {/* Start of Upcoming Events */}
      <div className={styles.events}>
        <div className={styles.eventsDescription}>
          <p id="about">
            At WIT, our focus is on providing events that foster development
            catering to first to final years. Whether it's personal, academic,
            professional or social, we want our students to be the best
            version of themselves. As part of our aim, we also connect current
            and future students with alumni and industry sponsors to serve as
            role models to inspire.
          </p>
          <p>
            <Link to="/events" style={{ textDecoration: "none" }}>
              See More Events
            </Link>
          </p>
        </div>
        <div className={styles.eventsTitle}>
          <h1> EVENTS </h1>
        </div>
        {/* 
        <div className={styles.event2}>
          <a href="https://www.facebook.com/events/208115483507235/">
            <img src={process.env.PUBLIC_URL + '/tech-trivia-tournament.png'} alt="banner"/>
          </a> 
        </div>
        */}
        <div className={styles.event1}>
          <a href="https://www.facebook.com/events/420097319005284/">
            <img
              src={`${process.env.PUBLIC_URL}./event-covers/personal-branding.jpg`}
              alt="Personal Branding Workshop"
            />
          </a>
        </div>
      </div>
      {/* End of upcoming events area */}
      
      {/* Start of newsletter */}
      <div className={styles.stats}>
        <img
          src={`${process.env.PUBLIC_URL}./stats-background-1.png`}
          className={styles.statsBackground}
          alt="banner"
        />
        <button className={styles.subscribeBtn} onClick={() => setOpen(true)}>
          Subscribe to our newsletter
        </button>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={styles.signUpForm}
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <>
            <Fade in={open}> 
              <NewsletterForm handleClose={callbackModal} />
            </Fade> 
          </>       
        </Modal>
      </div>
      {/* End of Newsletter */}

      <div className={styles.sponsors}>
        <h1>OUR SPONSORS</h1>
        <img
          src={`${process.env.PUBLIC_URL}./sponsors-home.png`}
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Home;
