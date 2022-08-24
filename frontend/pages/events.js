import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/events.module.css";
import PageHeader from "../components/Header";
import Chip from "@material-ui/core/Chip";
import Timeline from "../components/Timeline";
import CircularProgress from "@material-ui/core/CircularProgress";
import ScrollUpBtn from "../components/ScrollUpBtn";
import LoadingScreen from "../components/LoadingScreen";
import axios from "axios";
import humps from "humps";
import UpcomingEvent from "../components/UpcomingEvent";
import PaginationComp from "../components/Pagination";
import { isMobile } from "react-device-detect";
import { useStyles, categories, marks, valueToYear } from "../data/eventData";
import useContentfulUpcomingEvents from "./api/contentful-upcomingEvents";
const { getUpcomingEvents } = useContentfulUpcomingEvents();

const Events = () => {
  const classes = useStyles();

  const [year, setYear] = useState(valueToYear[100]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState({
    term1: [],
    term2: [],
    term3: [],
  });
  const [sourceLoading, setSourceLoading] = useState(true);
  const [loadingPast, setLoadingPast] = useState(true);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);

  // set how many posts to view per page
  const postsPerPage = 3;

  // current page number
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedPosts, setSelectedPosts] = useState([]);

  // the posts displayed on the current page for upcoming events
  const [currentPosts, setCurrentPosts] = useState([]);

  // currently selected category -> default to "All"
  const [selectedCategory, setSelectedCategory] = useState("All");

  // check if category filters result in no results
  const [emptyCategory, setEmptyCategory] = useState(false);

  // all past events of the given year
  const [pastContent, setPastContent] = useState({
    term1: [],
    term2: [],
    term3: [],
  });

  // all past events after being filtered for category
  const [pastSelectedPosts, setPastSelectedPosts] = useState({
    term1: [],
    term2: [],
    term3: [],
  });

  // set the year for the events timeline
  const handleYear = (newYear) => {
    setYear(newYear);
    // when year is change, category automatically changes to 'All'
    setSelectedCategory("All");
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentPosts(
      selectedPosts.slice(
        (pageNumber - 1) * postsPerPage,
        pageNumber * postsPerPage
      )
    );
  };

  // start webpage at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get past events
  // input: past events data from google sheets
  // output: array of dictionaries containing past events data
  useEffect(() => {
    // show loading signs for past events
    setLoadingPast(true);
    const fetchPastEvents = async () => {
      const res = await axios.get(
        "https://wit-database.herokuapp.com/past-events"
      );
      const allEvents = humps
        .camelizeKeys(res.data)
        .filter((event) => event.year === Number(year));
      setTerms(allEvents.reverse());
    };
    fetchPastEvents().catch((error) =>
      // error handling
      console.error(error)
    );
  }, [year]);

  // Takes in events from a given year and separates them by term
  const setTerms = (events) => {
    const tempPastEvents = {
      term1: events.filter((event) => event.term === 1),
      term2: events.filter((event) => event.term === 2),
      term3: events.filter((event) => event.term === 3),
    };
    setPastEvents(tempPastEvents);
    setPastSelectedPosts(tempPastEvents);
    setPastContent(tempPastEvents);
    setLoadingPast(false);
  };

  // events archive message
  useEffect(() => {
    const isEmpty = Object.values(pastEvents).every(
      (term) => term.length === 0
    );

    if (isEmpty && loadingPast === false) {
      setEmptyCategory(true);
      console.error = () => {};
    } else {
      setEmptyCategory(false);
    }
  }, [pastEvents, loadingPast]);

  // filter past events of a year by selected category
  const filterContent = (selectedCategory) => {
    const filteredContent = {
      term1: filterTerm("term1", selectedCategory),
      term2: filterTerm("term2", selectedCategory),
      term3: filterTerm("term3", selectedCategory),
    };
    setPastSelectedPosts(filteredContent);
    setPastEvents(filteredContent);
  };

  // filter the past events of the given term by the selected category
  const filterTerm = (term, selectedCategory) => {
    const filteredTerm = pastContent[term].filter(
      (picture) =>
        selectedCategory === "All" ||
        (picture.category != null &&
          picture.category.split(",").includes(selectedCategory))
    );

    return filteredTerm;
  };

  // get upcoming events
  // input: upcoming events data from google sheets
  // output: array of dictionaries containing upcoming events data
  const fetchUpcomingEvents = async () => {
    const res = await getUpcomingEvents();
    const tempEvents = humps.camelizeKeys(res);
    setUpcomingEvents(tempEvents);
    setCurrentPosts(tempEvents.slice(0, postsPerPage));
    setSelectedPosts(tempEvents);
    setLoadingUpcoming(false);
    setSourceLoading(false);
  };

  // load upcoming events
  useEffect(() => {
    setLoadingUpcoming(true);
    fetchUpcomingEvents().catch((error) =>
      // error handling
      console.error(error)
    );
  }, []);

  // get events for a specific term
  const getTermEvents = (events) => {
    return events.map((event, index) => {
      console.log(event, index);
      let eventLabel = event.img.split(".")[0].split("-");
      eventLabel.shift();
      let event_id = `${event.eventNumber}`;
      return (
        <div className={styles.pastEvent} key={index}>
          <Link href={`/event-recaps/${year}/${event_id}`}>
            <div className={styles.eventImgBox}>
              <Image
                className={styles.eventImages}
                src={`/event-covers/${year}/${event.img}`}
                alt={eventLabel.join(" ")}
                width="1200px"
                height="628px"
              />
              <div className={styles.darkOverlay} />
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            imageLoading={setHeaderLoading}
            imgUrl="/headers/events-header.jfif"
            title="Events"
          />

          {/* UPCOMING EVENTS */}
          <div className={styles.eventsBody}>
            <h2>UPCOMING EVENTS</h2>
            <div className={styles.eventsLoadingContainer}>
              {loadingUpcoming && (
                <CircularProgress
                  variant="indeterminate"
                  size={50}
                  thickness={5}
                  id={styles.eventsLoading}
                />
              )}
            </div>
            {!loadingUpcoming &&
              (!upcomingEvents.length ? (
                <p className={styles.lookout}>
                  Keep a lookout here for our upcoming events!
                </p>
              ) : (
                <div className={styles.upcomingEventsContainer}>
                  {!isMobile &&
                    currentPosts.map((upcomingEvent, index) => {
                      return (
                        <div className={styles.upcomingEventsBox}>
                          <UpcomingEvent
                            upcomingEvent={upcomingEvent}
                            index={index}
                          />
                        </div>
                      );
                    })}

                  {isMobile &&
                    upcomingEvents.map((upcomingEvent, index) => {
                      return (
                        <UpcomingEvent
                          upcomingEvent={upcomingEvent}
                          index={index}
                        />
                      );
                    })}
                </div>
              ))}
            {!isMobile && (
              <PaginationComp
                totalPages={Math.ceil(selectedPosts.length / postsPerPage)}
                paginate={paginate}
                page={currentPage}
                size="large"
              />
            )}
            {/* PAST EVENTS */}
            <h2>PAST EVENTS</h2>
            <div className={styles.eventCategories}>
              <div className={styles.contentCategories}>
                {Object.keys(categories)
                  .sort()
                  .map((category) => {
                    const chipColour =
                      selectedCategory === categories[category]
                        ? "#e85f5c"
                        : "#7F7F7F";
                    return (
                      <Chip
                        key={category}
                        size="medium"
                        label={category}
                        className={classes.chip}
                        style={{
                          backgroundColor: chipColour,
                        }}
                        onClick={() => {
                          setSelectedCategory(categories[category]);
                          filterContent(categories[category]);
                        }}
                      />
                    );
                  })}
              </div>

              <Timeline
                margin={"3%"}
                page={"events"}
                step={50}
                valueToYear={valueToYear}
                marks={marks}
                updateYear={handleYear}
              />

              <div>
                {emptyCategory === true && (
                  <p id={styles.emptyMessage}>
                    Keep a lookout for more events!
                  </p>
                )}
              </div>
            </div>
            <div className={styles.eventsLoadingContainer}>
              {loadingPast && (
                <CircularProgress
                  variant="indeterminate"
                  size={50}
                  thickness={5}
                  id={styles.eventsLoading}
                />
              )}
            </div>
            <div className={styles.pastEventsContainer}>
              {!loadingPast &&
                Object.keys(pastSelectedPosts)
                  .reverse()
                  .map((key) => {
                    const numEvents = React.Children.count(
                      getTermEvents(pastSelectedPosts[key])
                    );
                    if (numEvents > 0) {
                      return (
                        <div key={key}>
                          <h3 className={styles.termColour}>
                            TERM {key.replace("term", "")}
                          </h3>
                          <div className={styles.gridContainer}>
                            {getTermEvents(pastSelectedPosts[key])}
                          </div>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
            </div>
            <ScrollUpBtn />
          </div>
        </>
      )}
    </div>
  );
};

export default Events;
