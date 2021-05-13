import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Slideshow = () => (
  <CarouselProvider
    className={styles.slide_component}
    naturalSlideWidth={1340}
    naturalSlideHeight={400}
    totalSlides={3}
  >
    <Slider className={styles.slide_component} classNameTray={styles.slide_component} classNameTrayWrap={styles.slide_component}>
      <Slide index={0} innerClassName={styles}>
        <div className={styles.slide_component}>
          <div className={styles.eventsDescription}>
            <div className={styles.titleMobile}>
              <h1>EVENTS</h1>
            </div>
            <div className={styles.left}>
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
            <div className={styles.right}>
              <h1>EVENTS</h1>
              <a 
                href="https://fb.me/e/1N800n55X" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/event-covers/2021/13-Intro-to-VMWare.jpg`}
                  alt="WIT x VMWare: Intro to VMWare"
                />
              </a>
            </div>    
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
                WIT posts blogs twice a week featuring advice from industry connections, the laslide_component trends 
                in technology and study tips. We aim to inspire students to learn more about the world around 
                them, outside of university. These blogs include a weekly #WITCrushWednesday feature, where we 
                highlight some of the laslide_component and greaslide_component pioneering women, who are making an impact in STEM. 
              </p>
              <p>
                <button>
                  <Link to="resources/blog" style={{ textDecoration: "none"}}>
                      see more blog posts
                  </Link>
                </button>
              </p>
            </div>
            <div className={styles.right}>
              <h1>BLOGS</h1>
              <a 
                href="https://unswwit.com/#/resources/blog/54" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/blog-covers/54-lina-kim.png`}
                  alt="Blog 54"
                />
              </a>
            </div>
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
                  Each month, WIT chats with special guests from a broad range of backgrounds to discuss technology, 
                  university and career pathways. We aim to break down the gender imbalances in the technology industry 
                  through the stories shared by students and industry partners alike.
              </p>
              <p>
                <button>
                  <Link to="resources/podcast" style={{ textDecoration: "none"}}>
                      see more episodes
                  </Link>
                </button>
              </p>
            </div>
              
            <div className={styles.right}>
              <h1>PODCASTS</h1>
              <a 
                href="https://unswwit.com/#/resources/podcast/6" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/podcast-covers/episode-6-cover.png`}
                  alt="Podcast Episode 6"
                />
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </Slider>
    <ButtonBack className={styles.buttonBack}></ButtonBack>
    <ButtonNext className={styles.buttonNext}></ButtonNext>
  </CarouselProvider>
);

export default Slideshow;