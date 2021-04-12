import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import styles from "./home.module.css";
import NewsletterForm from "./NewsletterForm";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import LoadingScreen from "../LoadingScreen";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [sourceLoading, setSourceLoading] = React.useState(true);
  const [coverPhoto, setCoverPhoto] = React.useState(null);
  const [mobileView, setMobileView] = React.useState(false);

  // start webpage at the top
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth <= "1150") {
      setMobileView(true);
    }
    Aos.init({ 
      duration: 1300, 
      once: true, 
      anchorPlacement: "top-bottom", 
      easing: "ease-in-out", 
      offset: 20 
    });
  }, []);

  // control when to stop loading
  useEffect(() => {
    const img = new Image();
    img.src = "/headers/header-1.png";
    img.onload = () => {     
      setCoverPhoto(img.src);
      setTimeout(() => {
        setSourceLoading(false);
      }, 1000);
    }
  }, [])  

  // close the newsletter modal
  const callbackModal = () => {
    setOpen(false);
  };
  
  return (
    <div>
      {sourceLoading ? (
        <LoadingScreen />
      )
        :
        (<>
          {/* Start of Header */}
          <div style={{backgroundImage: `url(${coverPhoto})`}} className={styles.contain}>
            <div data-aos="fade" className={styles.headline}>
              <h1>UNSW</h1>
              <h1>Women In</h1>
              <h1>Technology</h1>
              <p> Empowering and inspiring the architects of change</p>
            </div>
          </div>
          {/* End of Header */}

          {/* Start of Description */}
          <div data-aos={mobileView ? "fade": "fade-right"} className={styles.description}>
            <div className={styles.descriptionLeft}>
              <h1>COLLABORATE. INSPIRE. CHANGE.</h1>         
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
              <div data-aos="fade" className={styles.number}>
                <div>
                  <CountUp end={47} duration={5} />  
                  <p>Team Members</p>
                </div>
                <div>
                  <CountUp end={20} duration={5} />
                  <p>Sponsors</p>
                </div>
                <div>
                  <CountUp end={2817} duration={4} />
                  <p>Facebook Followers</p>
                </div>
              </div>      
            </div>
          </div>
          {/* End of Statistics */}

          {/* Start of Upcoming Events */}
          <div data-aos={mobileView ? "fade":"fade-left"} data-aos-delay="150" className={styles.events}>
            <div className={styles.eventsDescription}>
              <p id={styles.about}>
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
              <h1>EVENTS</h1>
            </div>
            <div className={styles.event1}>
              <a 
                href="https://www.facebook.com/events/509569410169834/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/event-covers/2021/12-hoodie.png`}
                  alt="WIT 2021 Hoodie Design Competition"
                />
              </a>
            </div>
          </div>
          {/* End of upcoming events area */}
      
          {/* Start of newsletter */}
          <div className={styles.stats}>
            <img
              src={`${process.env.PUBLIC_URL}./newsletter-background.png`}
              className={styles.statsBackground}
              alt="banner"
            />
            <button data-aos="fade" className={styles.subscribeBtn} onClick={() => setOpen(true)}>
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

          <div data-aos={mobileView ? "fade": "fade-up"} className={styles.sponsors}>
            <h1>OUR SPONSORS</h1>
            <img
              src={`${process.env.PUBLIC_URL}./sponsors-home-2021-temp.png`}
              alt="banner"
            />
          </div>
        </>)}
    </div>
  );
};

export default Home;
