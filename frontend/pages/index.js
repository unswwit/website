import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import styles from "../styles/Home.module.css";
import PubArticle from "../components/publications-article";
//import InitiativesSlideshow from "../components/InitiativesSlideshow.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import Aos from "aos";
import { isMobile } from "react-device-detect";
import "aos/dist/aos.css";
import LoadingScreen from "../components/LoadingScreen";
import NewsletterSection from "../components/NewsletterSection";
import axios from "axios";
import humps from "humps";
import QuoteSlideshow from "../components/QuotesSlideshow";
import executives from "../data/ExecQuotes";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const last3articles = articles.slice(0, 3);

  //start webpage at the top
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      duration: 1300,
      once: true,
      anchorPlacement: "top-bottom",
      easing: "ease-in-out",
      offset: 20,
    });
  }, []);

  // get publications
  // input: publications data from google sheets
  // output: array of dictionaries containing publications data
  const fetchPublications = async () => {
    const res = await axios.get(
      "https://wit-database.herokuapp.com/publications"
    );
    setArticles(humps.camelizeKeys(res.data).reverse());
    setLoading(false);
    setSourceLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchPublications().catch((error) =>
      // error handling
      console.error(error)
    );
  }, []);

  const callbackModal = () => {
    setOpen(false);
  };

  return (
    <div>
      {sourceLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {/* Start of Header */}
          <div className={styles.contain}>
            <div data-aos="fade" className={styles.headline}>
              <h1>UNSW</h1>
              <h1>Women In</h1>
              <h1>Technology</h1>
              <p> Empowering and inspiring the architects of change</p>
              <button>
                <Link href="/join-us">JOIN US</Link>
              </button>
            </div>
          </div>
          {/* End of Header */}

          {/* Start of Description */}
          <div
            data-aos={isMobile ? "fade" : "fade-right"}
            className={styles.description}
          >
            <div className={styles.descriptionLeft}>
              <h1>COLLABORATE. INSPIRE. CHANGE.</h1>
            </div>
            <div className={styles.descriptionRight}>
              <p>
                Formed in late 2016, we have grown to be a platform that
                empowers, unites and up-skills female and male students alike
                that are passionate about our mission. Women in Technology (WIT)
                aims to cultivate future leaders that are prepared to challenge
                the prejudices and bring change into the industry while building
                a strong community where they can find lasting friendships and
                support.
              </p>
            </div>
          </div>
          {/* End of Description */}
          {/* Quotes */}
          <div
            data-aos={isMobile ? "fade" : "fade-left"}
            className={styles.quotes}
          >
            <h1>HEAR FROM US</h1>
            <div className={[styles.carousel, styles.quoteCarousel].join(" ")}>
              <QuoteSlideshow
                height={450}
                data={executives}
                homeLeftArrow={styles.homeLeftArrow}
                homeRightArrow={styles.homeRightArrow}
              />
            </div>
          </div>

          {/* Start of Statistics */}
          <div className={styles.stats}>
            <Image
              src="/stats-background-1.png"
              className={styles.statsBackground}
              alt="banner"
              width="2000px"
              height="450px"
            />
            <div>
              <div data-aos="fade" className={styles.number}>
                <div>
                  <CountUp end={55} duration={5} />
                  <p>Team Members</p>
                </div>
                <div>
                  <CountUp end={28} duration={5} />
                  <p>Sponsors</p>
                </div>
                <div>
                  <CountUp end={3021} duration={4} />
                  <p>Facebook Followers</p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Statistics */}

          {/* Start of Upcoming Events / Latest blog / Latest podcast
          <div
            data-aos={isMobile ? "fade" : "fade-right"}
            data-aos-delay="150"
            className={styles.carousel}
          >
            <InitiativesSlideshow />
          </div> */}

          {/* Start of Publications */}
          <div
            data-aos={isMobile ? "fade" : "fade-left"}
            data-aos-delay="150"
            className={styles.publications}
          >
            <h1>PUBLICATIONS</h1>

            {/*Recent 3 Articles*/}
            <div className={styles.articlesDiv}>
              <div className={styles.articles}>
                {loading && (
                  <CircularProgress
                    variant="indeterminate"
                    size={50}
                    thickness={5}
                    id={styles.publicationsLoading}
                  />
                )}
                {!loading &&
                  last3articles.map((article, index) => (
                    <div className={styles.homeArticles} key={index}>
                      <PubArticle
                        imgUrl={`/publications/${article.year}/${article.img}`}
                        heading={article.heading}
                        date={article.date}
                        url={article.url}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <button className={styles.pubBtn}>
              <Link href="/media/publications">see more publications</Link>
            </button>
          </div>
          {/* End of Publications */}

          <div
            data-aos={isMobile ? "fade" : "fade-right"}
            data-aos-delay="150"
            className={styles.sponsors}
          >
            <h1>SPONSORS AND AFFILIATIONS</h1>
            <div id={styles.sponsorsContainer}>
              <div className={styles.lightmodeBanner}>
                <Image
                  src="/sponsors-collage-light-mode.png"
                  alt="light mode banner"
                  margin-top="50px"
                  width="900px"
                  height="650px"
                />
              </div>
              <div className={styles.darkmodeBanner}>
                <Image
                  display="none"
                  src="/sponsors-collage-dark-mode.png"
                  alt="dark mode banner"
                  margin-top="50px"
                  width="900px"
                  height="650px"
                />
              </div>
            </div>
          </div>

          {/* Start of newsletter */}
          <NewsletterSection
            setOpen={setOpen}
            open={open}
            callbackModal={callbackModal}
            fade={true}
          />
          {/* End of Newsletter */}
        </div>
      )}
    </div>
  );
};

export default Home;
