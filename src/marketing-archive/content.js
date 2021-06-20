import React, { useEffect, useState } from "react";
import styles from "./content.module.css";
import PageHeader from "../header";
import Chip from "@material-ui/core/Chip";
import Initiative from "./Initiative";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabletop from "tabletop";
import Timeline from "../components/Timeline";
import PaginationComp from "../components/Pagination";

const MarketingContent = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("2021");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // set how many posts to view per page
  const postsPerPage = 8;
  // all the posts of the selected filter category
  const [selectedPosts, setSelectedPosts] = useState([]);
  // the posts displayed on the current page
  const [currentPosts, setCurrentPosts] = useState([]);
  // current page number
  const [currentPage, setCurrentPage] = useState(1);

  const categories = {
    All: "All",
    Mascot: "mascot",
    Memes: "memes",
    "Monday Motivation": "monday",
    "WIT Crush Wednesday": "wcw",
    "Special Occasions": "special",
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
    setCurrentPage(1);
  };

  // scroll to top on load
  useEffect(() => window.scrollTo(0, 0), []);

  // load archives
  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        setLoading(false);

        const tempContent = googleData["marketing-archives"]["elements"]
          .reverse()
          .filter((item) => item.year === year);
        setContent(tempContent);
        setCurrentPosts(tempContent.slice(0, postsPerPage));
        setSelectedPosts(tempContent);
      },
      simpleSheet: false,
    });
  }, [year]);

  // filter content by selected category
  const filterContent = (selectedCategory) => {
    const filteredContent = content.filter(
      (picture) =>
        selectedCategory === "All" ||
        picture.category.split(",").includes(selectedCategory)
    );
    setSelectedPosts(filteredContent);
    setCurrentPosts(filteredContent.slice(0, postsPerPage));
    setCurrentPage(1);
  };

  // called when pagination item clicked to slice the correct amount of posts for viewing
  const paginate = (pageNumber) => {
    setCurrentPosts(
      selectedPosts.slice(
        (pageNumber - 1) * postsPerPage,
        pageNumber * postsPerPage
      )
    );
    setCurrentPage(pageNumber);
  };

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
                      setSelectedCategory(categories[category]);
                      filterContent(categories[category]);
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
              step={100}
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
              {currentPosts.map((content, index) => {
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
        <PaginationComp
          totalPages={Math.ceil(selectedPosts.length / postsPerPage)}
          paginate={paginate}
          page={currentPage}
        />
        {/*End of Initiatives*/}
      </div>
    </>
  );
};
export default MarketingContent;
