import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Tabletop from "tabletop";

const Slideshow = () => {
  const [firstUpcomingEvent, setFirstUpcomingEvent] = useState([]);
  const [latestEvent, setLatestEvent] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);
  const [latestPodcast, setLatestPodcast] = useState([]);
  const firstEvent = firstUpcomingEvent.slice(0, 1);
  const lastEvent = latestEvent.slice(0, 1);
  const lastBlog = latestBlog.slice(0, 1);
  const lastPodcast = latestPodcast.slice(0, 1);
  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        setFirstUpcomingEvent(googleData["upcoming-events"]["elements"]);
        setLatestEvent(googleData["past-events"]["elements"].reverse());
        setLatestBlog(googleData["blog-previews"]["elements"].reverse());
        setLatestPodcast(googleData["podcast-episodes"]["elements"].reverse());
      },
      simpleSheet: false,
    });
  }, []);
  return (
    <CarouselProvider
      className={styles.slide_component}
      naturalSlideWidth={1340}
      naturalSlideHeight={400}
      totalSlides={3}
    >
      <Slider
        className={styles.slide_component}
        classNameTray={styles.slide_component}
        classNameTrayWrap={styles.slide_component}
      >
        <Slide index={0} innerClassName={styles}>
          <div className={styles.slide_component}>
            <div className={styles.eventsDescription}>
              <div className={styles.titleMobile}>
                <h1>EVENTS</h1>
              </div>
              <div className={styles.left}>
                <p id="about">
                  At WIT, our focus is on providing events that foster
                  development catering to first to final years. Whether it's
                  personal, academic, professional or social, we want our
                  students to be the best version of themselves. As part of our
                  aim, we also connect current and future students with alumni
                  and industry sponsors to serve as role models to inspire.
                </p>
                <p>
                  <button>
                    <Link to="/events" style={{ textDecoration: "none" }}>
                      see more events
                    </Link>
                  </button>
                </p>
              </div>
              {firstUpcomingEvent.length ? (
                <div>
                  {firstEvent.map((firstUpcomingEvent, index) => (
                    <div className={styles.right} key={index}>
                      <h1>EVENTS</h1>

                      <a
                        href={firstUpcomingEvent.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/event-covers/2021/${firstUpcomingEvent.img}`
                          }
                          alt={firstUpcomingEvent.title}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {lastEvent.map((latestEvent, index) => (
                    <div className={styles.right} key={index}>
                      <h1>EVENTS</h1>

                      <a
                        href={latestEvent.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/event-covers/2021/${latestEvent.img}`
                          }
                          alt={latestEvent.title}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide_component}>
          <div className={styles.slide_component}>
            <div className={styles.eventsDescription}>
              <div className={styles.titleMobile}>
                <h1>BLOGS</h1>
              </div>
              <div className={styles.left}>
                <p id="about">
                  WIT posts blogs twice a week featuring advice from industry
                  connections, the latest trends in technology and study tips.
                  We aim to inspire students to learn more about the world
                  around them, outside of university. These blogs include a
                  weekly #WITCrushWednesday feature, where we highlight some of
                  the latest and greatest pioneering women, who are making an
                  impact in STEM.
                </p>
                <p>
                  <button>
                    <Link
                      to="resources/blog"
                      style={{ textDecoration: "none" }}
                    >
                      see more blog posts
                    </Link>
                  </button>
                </p>
              </div>
              {lastBlog.map((latestBlog, index) => (
                <div className={styles.right} key={index}>
                  <h1>BLOGS</h1>
                  <a
                    href={`https://unswwit.com/#/resources/blog/${latestBlog.blogNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/blog-covers/${latestBlog.img}`
                      }
                      alt={`Blog ${latestBlog.blogNo}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide_component} index={2}>
          <div className={styles.slide_component}>
            <div className={styles.eventsDescription}>
              <div className={styles.titleMobile}>
                <h1>PODCASTS</h1>
              </div>
              <div className={styles.left}>
                <p id="about">
                  Each month, WIT chats with special guests from a broad range
                  of backgrounds to discuss technology, university and career
                  pathways. We aim to break down the gender imbalances in the
                  technology industry through the stories shared by students and
                  industry partners alike.
                </p>
                <p>
                  <button>
                    <Link
                      to="resources/podcast"
                      style={{ textDecoration: "none" }}
                    >
                      see more episodes
                    </Link>
                  </button>
                </p>
              </div>
              {lastPodcast.map((latestPodcast, index) => (
                <div className={styles.right} key={index}>
                  <h1>PODCASTS</h1>
                  <a
                    href={`https://unswwit.com/#/resources/podcast/${latestPodcast.episodeNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/podcast-covers/${latestPodcast.img}`
                      }
                      alt={`Podcast Episode ${latestPodcast.episodeNo}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      </Slider>
      <ButtonBack className={styles.buttonBack}></ButtonBack>
      <ButtonNext className={styles.buttonNext}></ButtonNext>
    </CarouselProvider>
  );
};

export default Slideshow;
