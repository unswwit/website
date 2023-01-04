// @ts-nocheck comment
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const InitiativesSlideshow = (props) => {
  const nextEvent = props.nextEvent;
  const latestEvent = props.latestEvent;
  const latestBlog = props.latestBlog;
  const latestPodcast = props.latestPodcast;

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
        <Slide className={styles.slideComponent}>
          <div className={styles.slideComponent}>
            <div className={styles.eventsDescription}>
              <div className={styles.titleMobile}>
                <h1>EVENTS</h1>
              </div>
              <div className={styles.left}>
                <p id="about">
                  At WIT, our focus is on providing events that foster
                  development catering to first to final years. Whether
                  it&apos;s personal, academic, professional or social, we want
                  our students to be the best version of themselves. As part of
                  our aim, we also connect current and future students with
                  alumni and industry sponsors to serve as role models to
                  inspire.
                </p>
                <p>
                  <button>
                    <Link href="/events" className={styles.link}>
                      see more events
                    </Link>
                  </button>
                </p>
              </div>
              {nextEvent ? (
                <div>
                  <div className={styles.right}>
                    <h1>EVENTS</h1>
                    <Link href={nextEvent.fields.facebookLink}>
                      <div className={styles.eventImg}>
                        <Image
                          src={`https:${nextEvent.fields.img.fields.file.url}`}
                          alt={nextEvent.fields.title}
                          height="320px"
                          width="500px"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <div className={styles.right}>
                    <h1>EVENTS</h1>

                    <Link
                      href={`/event-recaps/${latestEvent.fields.year}/${latestEvent.fields.eventNumber}`}
                    >
                      <Image
                        src={`https:${latestEvent.fields.img.fields.file.url}`}
                        alt={latestEvent.title}
                        height="924px"
                        width="1640px"
                      />
                    </Link>
                  </div>
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
              <div className={styles.right}>
                <h1>BLOGS</h1>
                <Link href={`/media/blog/${latestBlog.fields.blog_no}`}>
                  <div className={styles.eventImg}>
                    <Image
                      src={`https:${latestBlog.fields.img.fields.file.url}`}
                      alt={`${latestBlog.fields.heading}`}
                      height="300px"
                      width="450px"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slideComponent}>
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
              <div className={styles.right}>
                <h1>PODCASTS</h1>
                <Link href={`/media/podcast/${latestPodcast.fields.episodeNo}`}>
                  <div className={styles.eventImg}>
                    <Image
                      src={`https:${latestPodcast.fields.img.fields.file.url}`}
                      height="250px"
                      width="250px"
                      alt={`${latestPodcast.title}`}
                    />
                  </div>
                </Link>
              </div>
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
