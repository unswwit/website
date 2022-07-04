import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import humps from "humps";

const InitiativesSlideshow = () => {
  const [firstUpcomingEvent, setFirstUpcomingEvent] = useState([]);
  const [latestEvent, setLatestEvent] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);
  const [latestPodcast, setLatestPodcast] = useState([]);
  const firstEvent = firstUpcomingEvent.slice(0, 1);
  const lastEvent = latestEvent.slice(0, 1);
  const lastBlog = latestBlog.slice(0, 1);
  const lastPodcast = latestPodcast.slice(0, 1);

  useEffect(() => {
    const urls = [
      "https://wit-database.herokuapp.com/upcoming-events",
      "https://wit-database.herokuapp.com/past-events",
      "https://wit-database.herokuapp.com/blog/previews",
      "https://wit-database.herokuapp.com/podcast-episodes",
    ];
    urls.forEach((url) => loadGoogleSheets(url));
  }, []);

  // load data from google sheets
  const loadGoogleSheets = (url) => {
    const fetchSlideshowData = async (url) => {
      const res = await axios.get(url);
      switch (url) {
        case "https://wit-database.herokuapp.com/upcoming-events":
          setFirstUpcomingEvent(humps.camelizeKeys(res.data));
          break;
        case "https://wit-database.herokuapp.com/past-events":
          setLatestEvent(humps.camelizeKeys(res.data).reverse());
          break;
        case "https://wit-database.herokuapp.com/blog/previews":
          setLatestBlog(humps.camelizeKeys(res.data).reverse());
          break;
        case "https://wit-database.herokuapp.com/podcast-episodes":
          setLatestPodcast(humps.camelizeKeys(res.data).reverse());
          break;
        default:
          break;
      }
    };

    fetchSlideshowData(url);
  };

  return (
    <CarouselProvider
      className={styles.slideComponent}
      naturalSlideWidth={1340}
      naturalSlideHeight={400}
      totalSlides={3}
    >
      <Slider
        className={styles.slideComponent}
        classNameTray={styles.slideComponent}
        classNameTrayWrap={styles.slideComponent}
      >
        <Slide index={0} innerClassName={styles}>
          <div className={styles.slideComponent}>
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
                    <Link href="/events" className={styles.link}>
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
                        <Image
                          src={`/event-covers/2022/${firstUpcomingEvent.img}`}
                          alt={firstUpcomingEvent.title}
                          height="320px"
                          width="500px"
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
                        <Image
                          src={`/event-covers/2022/${latestEvent.img}`}
                          alt={latestEvent.title}
                          height="924px"
                          width="1640px"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Slide>
        <Slide className={styles.slideComponent}>
          <div className={styles.slideComponent}>
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
                    <Link href="media/blog" className={styles.link}>
                      see more blog posts
                    </Link>
                  </button>
                </p>
              </div>
              {lastBlog.map((latestBlog, index) => (
                <div className={styles.right} key={index}>
                  <h1>BLOGS</h1>
                  {/* <a
                    href="https://unswwit.com/#/media/blog/9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/blog-covers/09-procrastinating.png"
                      }
                      alt="What are you REALLY Procrastinating?"
                    />
                  </a> */}

                  <a
                    href={`https://unswwit.com/#/media/blog/${latestBlog.blogNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/blog-covers/${latestBlog.img}`}
                      alt={`${latestBlog.heading}`}
                      height="300px"
                      width="450px"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Slide>
        <Slide className={styles.slideComponent} index={2}>
          <div className={styles.slideComponent}>
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
                    <Link href="media/podcast" className={styles.link}>
                      see more episodes
                    </Link>
                  </button>
                </p>
              </div>
              {lastPodcast.map((latestPodcast, index) => (
                <div className={styles.right} key={index}>
                  <h1>PODCASTS</h1>
                  <a
                    href={`https://unswwit.com/#/media/podcast/${latestPodcast.episodeNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/podcast-covers/${latestPodcast.img}`}
                      height="250px"
                      width="250px"
                      alt={`${latestPodcast.title}`}
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

export default InitiativesSlideshow;
