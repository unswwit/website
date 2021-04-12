import React, { useEffect, useState } from "react";
import styles from "./content.module.css";
import PageHeader from "../header";
import Chip from "@material-ui/core/Chip";
import Initiative from "./Initiative";
import CircularProgress from "@material-ui/core/CircularProgress";
import ScrollUpBtn from "../components/ScrollUpBtn"
import Tabletop from "tabletop";
import Timeline from "../components/Timeline"

const MarketingContent = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("2021");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = {
    All: "All",
    Mascot: "mascot",
    Memes: "memes",
    "Monday Motivation": "monday",
    "WIT Crush Wednesday": "wcw",
  };

  // position of the marks on the timeline (i.e. 100 indicates that it's on the right end)
  const marks = [
    {
      value: 100,
      scaledValue: 2021,
      label: "2021",
    },
    {
      value: 0,
      scaledValue: 2020,
      label: "2020",
    },
  ];

  const valueToYear = {
    0: "2020",
    100: "2021",
  };

  // set the year for the events timeline
  const handleYear = (newYear) => {
    setYear(newYear);
  };

  // scroll to top on load
  useEffect(() => window.scrollTo(0,0), [])

  // load archives
  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        setLoading(false);
        setContent(
          googleData["marketing-archives"]["elements"]
            .reverse()
            .filter((item) => item.year === year)
        );
      },
      simpleSheet: false,
    });
  }, [selectedCategory, year]);

  return (
    <>
      {/* Cover Photo */}
      <PageHeader
        imgUrl="/headers/marketing-header.jpg"
        title="Marketing Archive"
      />
      {/*End of Header*/}

      <div id={styles.parent}>
        {/*List of initiatives*/}
        <div className={styles.initiatives}>
          {/* Start of categories */}
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
                    style={{
                      textTransform: "uppercase",
                      backgroundColor: chipColour,
                      color: "white",
                      margin: "5px",
                    }}
                    onClick={() => {
                      setLoading(true);
                      setSelectedCategory(categories[category]);
                    }}
                  />
                );
              })}
          </div>

          <div>
            {/* Timeline */}
            <Timeline
              margin={"2%"}
              page={"marketing"}
              step={25}
              valueToYear={valueToYear}
              marks={marks}
              updateYear={handleYear}
            />
          </div>

          <div id={styles.contentLoadingContainer}>
            {loading && (
              <CircularProgress
                variant="indeterminate"
                size={50}
                thickness={5}
                id={styles.contentLoading}
              />
            )}
          </div>

          {/*Image collage*/}
          {!loading && (
            <ol className={styles.grid} id={styles.content}>
              {content
                .filter(
                  (picture) =>
                    selectedCategory === "All" ||
                    picture.category.split(",").includes(selectedCategory)
                )
                .map((content, index) => {
                  return (
                    <Initiative
                      key={index}
                      fb={content.link}
                      imgUrl={`/initiatives/${year}/${content.img}`}
                      alt={content.label}
                      date={content.date}
                    />
                  );
                })}
            </ol>
          )}
        </div>
        <ScrollUpBtn/>
        {/*End of Initiatives*/}
      </div>
    </>
  );
};
export default MarketingContent;
