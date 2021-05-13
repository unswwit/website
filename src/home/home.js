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
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [mobileView, setMobileView] = React.useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const last3articles = articles.reverse().slice(0, 3);
// why does last3articles change depending on this
// console.log("NOT REVERSED:");
// console.log(last3articles);
// console.log("REVERSED:");

//start webpage at the top
  useEffect(() => {
    window.scrollTo(0,0);
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
        <div data-aos="fade" className={styles.headline}>
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
              <CountUp end={2824} duration={4} />
              <p>Facebook Followers</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of Statistics */}

      {/* Start of Upcoming Events / Latest blog / Latest podcast */}
      
      <div data-aos={mobileView ? "fade":"fade-left"} data-aos-delay="150" className={styles.carousel}>
        <Slideshow />
      </div>
  
      
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
              <div className={styles.homeArticles} key={index}> 
                <PubArticle                 
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
    </div>
  );
};

export default Home;
