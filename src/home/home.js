import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import styles from "./home.module.css";
import NewsletterForm from "./NewsletterForm";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import PubArticle from "../publications/publications-article";
import Tabletop from "tabletop";
import Slideshow from "./Slideshow.js"
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const last3articles = articles.reverse().slice(0, 3);
  // why does last3articles change depending on this
  // console.log("NOT REVERSED:");
  // console.log(last3articles);
  // console.log("REVERSED:");
  console.log(articles.reverse().slice(0, 3));

  //start webpage at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        setArticles(googleData["publications"]["elements"]);  
        setLoading(false);
      },
      simpleSheet: false
    })
  }, []);

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
          <button>           
            <Link to="/join-us" style={{ textDecoration: "none"}}>
              JOIN US
            </Link>
          </button>
        </div>
      </div>
      {/* End of Header */}

      {/* Start of Description */}
      <div className={styles.description}>
        <div className={styles.descriptionLeft}>
          <h1>COLLABORATE. EMPOWER. UPSKILL.</h1>         
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
              <CountUp end={48} duration={5} />  
              <p>Team Members</p>
            </div>
            <div>
              <CountUp end={15} duration={5} />
              <p>Sponsors</p>
            </div>
            <div>
              <CountUp end={2767} duration={4} />
              <p>Facebook Followers</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of Statistics */}

      {/* Start of Upcoming Events / Latest blog / Latest podcast */}
      
      <div className={styles.carousel}>
        <Slideshow />
      </div>
  

      {/* <div className={styles.events}>
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
            <button>
              <Link to="/events" style={{ textDecoration: "none"}}>
                see more events
              </Link>
            </button>
          </p>
        </div>
        <div className={styles.eventsTitle}>
          <h1>EVENTS</h1>
        </div>
        <div className={styles.event1}>
          <a 
            href="https://www.facebook.com/events/727086634650316/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/event-covers/2021/08-CBA-resume.png`}
              alt="WIT x CBA: Resume Workshop"
            />
          </a>
        </div>
      </div> */}
      {/* End of upcoming events area */}
      
      {/* Start of Publications */}
      <div className={styles.publications}>
        <h1>PUBLICATIONS</h1>

        {/*Recent 3 Articles*/}
        <div className={styles.articlesDiv}>
          <div className={styles.articles}>
            {loading && <CircularProgress
              variant="indeterminate"
              size={50}
              thickness={5}
              id={styles.publicationsLoading}
            />}
            {!loading && last3articles.map((article, index) => 
              <div className={styles.homeArticles}> 
                <PubArticle
                  key={index}
                  imgUrl={`${process.env.PUBLIC_URL}/publications/${article.year}/${article.img}`}
                  heading={article.heading}
                  date={article.date}
                  url={article.url}
                />
              </div>
                 
            )}
          </div>
        </div>
          
        <div className={styles.eventsDescription}>
          <button>
            <Link to="/publications" style={{ textDecoration: "none"}}>
                see more publications
            </Link>
          </button>
        </div>
          
      </div>
      {/* End of Publications */}

      <div className={styles.sponsors}>
        <h1>OUR SPONSORS</h1>
        <img
          src={`${process.env.PUBLIC_URL}./sponsors-home-2021-temp.png`}
          alt="banner"
        />
      </div>

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

    </div>
  );
}

export default Home;
