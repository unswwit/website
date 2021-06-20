import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { makeStyles } from "@material-ui/core/styles";
=======
import ".././marketingArchive.module.css";
>>>>>>> master
import styles from "./content.module.css";
import "../.././style.css";
import PageHeader from "../.././header";
import Chip from "@material-ui/core/Chip";
import Initiative from "./Initiative";
import CircularProgress from "@material-ui/core/CircularProgress";
import ScrollUpBtn from "../.././components/ScrollUpBtn";
import Tabletop from "tabletop";
<<<<<<< HEAD
import Timeline from "../.././components/Timeline"
import Tooltip from "@material-ui/core/Tooltip";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

const BootstrapTooltip = (props) => {
  const classes = useStylesBootstrap();
  return <Tooltip arrow classes={classes} {...props} />;
};
=======
import Pagination from "../../components/Pagination";
>>>>>>> master

const MarketingContent = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  // const [indexOfLastPost, setIndexOfLastPost] = useState(currentPage * postsPerPage);
  // const [indexOfFirstPost, setIndexOfFirstPost] = useState(indexOfLastPost - postsPerPage);

  const categories = {
    All: "All",
    Mascot: "mascot",
    Memes: "memes",
    "Monday Motivation": "monday",
    "WIT Crush Wednesday": "wcw",
    "Special Occasions": "special",
  };

  const categoryDescriptions = {
    All: "Click here to see all the marketing posts that we have posted!",
    Mascot:
      "Trying to procrastinate, or failing to stop yourself from doing so? Look no more because our cute mascot Willow is here to support you during your studies!",
    Memes:
      "Searching for something to giggle about? Click here for some relatable content!",
    "Monday Motivation":
      "Click here for some study motivation to help boost that WAM!",
    "WIT Crush Wednesday":
      "Each Wednesday, we share a post about some inspiring women in tech. Click here to read their empowering stories!",
    "Special Occasions":
      "Celebrate special occasions with our friendly mascot, Willow!",
  };

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        setLoading(false);
        const archive = googleData["marketing-archives"]["elements"].reverse();
        setContent(archive.slice(2));
      },
      simpleSheet: false,
    });
  }, [selectedCategory]);

  // setIndexOfLastPost(currentPage * postsPerPage);
  // setIndexOfFirstPost(indexOfLastPost - postsPerPage);
  //indexOfLastPost = currentPage * postsPerPage;
  const indexOfLastPost = Math.min(
    8,
    content.filter(
      (picture) =>
        selectedCategory === "All" ||
        picture.category.split(",").includes(selectedCategory)
    )
  );
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  setContent(content.slice(indexOfFirstPost, indexOfLastPost));

  // change page number & scroll to top when onClick called for pagination
  const paginate = (pageNumber) => {
    const coverPhoto = document.getElementsByClassName("coverPhoto")[0]
      .clientHeight;
    window.scrollTo({ top: coverPhoto - 15, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Cover Photo */}
      <PageHeader
        imgUrl="/headers/marketing-header.png"
        title="Marketing Archives"
      />
      {/*End of Header*/}

      <div id={styles.parent}>
        {/*List of initiatives*/}
        <div className={styles.initiatives}>
          {/* Start of categories */}
          <div className={styles.contentCategories}>
            {Object.keys(categoryDescriptions)
              .sort()
              .map((category) => {
                const chipColour =
                  selectedCategory === categories[category]
                    ? "#e85f5c"
                    : "#7F7F7F";
                return (
                  <BootstrapTooltip
                    key={category}
                    title={
                      <>
                        <div className={styles.tooltipTitle}>{category}</div>
                        <p className={styles.tooltipDescription}>
                          {categoryDescriptions[category]}
                        </p>
                      </>
                    }
                  >
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
                      setCurrentPage(1);
                      //setIndexOfLastPost(Math.min(8, content
                      //  .filter((picture) => selectedCategory === "All" || picture.category.split(",").includes(selectedCategory))));
                      //setIndexOfFirstPost(indexOfLastPost-postsPerPage);
                      setContent(
                        content.slice(indexOfFirstPost, indexOfLastPost)
                      );
                    }}
                  />
                </BootstrapTooltip>
                );
              })}
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
                      imgUrl={`/initiatives/2020/${content.img}`}
                      alt={content.label}
                      date={content.date}
                    />
                  );
                })}
            </ol>
          )}
        </div>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={content.length}
          paginate={paginate}
          page="marketing-archive"
          currentPage={currentPage}
        />
        <ScrollUpBtn />
        {/*End of Initiatives*/}
      </div>
    </>
  );
};
export default MarketingContent;
