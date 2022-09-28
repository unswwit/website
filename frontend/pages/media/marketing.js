import { useEffect, useState } from "react";
import styles from "../../styles/Marketing.module.css";
import PageHeader from "../../components/Header";
import Chip from "@material-ui/core/Chip";
import Initiative from "../../components/Initiative";
import CircularProgress from "@material-ui/core/CircularProgress";
import Timeline from "../../components/Timeline";
import PaginationComp from "../../components/Pagination";
import LoadingScreen from "../../components/LoadingScreen";
import { loadMarketingArchives } from "../../lib/api";
import { isMobile } from "react-device-detect";
import {
  useStyles,
  categories,
  marks,
  valueToYear,
} from "../../data/MarketingData";
import { formatMarketingArchivesDate } from "../../lib/helpers";

const MarketingContent = ({ archives }) => {
  const classes = useStyles();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("2022");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [emptyCategory, setEmptyCategory] = useState(false);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);

  // set how many posts to view per page
  const postsPerPage = 8;
  // all the posts of the selected filter category
  const [selectedPosts, setSelectedPosts] = useState([]);
  // the posts displayed on the current page
  const [currentPosts, setCurrentPosts] = useState([]);
  // current page number
  const [currentPage, setCurrentPage] = useState(1);

  // set the year for the events timeline
  const handleYear = (newYear) => {
    setYear(newYear);
    setCurrentPage("All");
  };

  // scroll to top on load
  useEffect(() => window.scrollTo(0, 0), []);

  const fetchMarketingArchive = (archives) => {
    setContent(archives);
    archives = archives.filter((item) => {
      return item.fields.year === year;
    });
    setCurrentPosts(archives.slice(0, postsPerPage));
    setSelectedPosts(archives);
    setLoading(false);
    setSourceLoading(false);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // get marketing archives
  // input: marketing archives data from google sheets
  // output: array of dictionaries containing marketing archives data
  useEffect(() => {
    setLoading(true);
    sleep(300).then(() => {
      fetchMarketingArchive(archives);
    });
  }, [year]);

  // marketing archive message
  useEffect(() => {
    if (currentPosts.length === 0 && loading === false) {
      setEmptyCategory(true);
      console.error = () => {};
    } else {
      setEmptyCategory(false);
    }
  }, [currentPosts, loading]);

  // filter content by selected category
  const filterContent = (selectedCategory) => {
    const filteredContent = content.filter(
      (picture) =>
        selectedCategory === "All" ||
        picture.fields.category.includes(selectedCategory)
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
    <div>
      {console.log(loading)}
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/marketing-header.jpg"
            title="Marketing"
            imageLoading={setHeaderLoading}
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

              <div>
                {/* Timeline */}
                <Timeline
                  margin={"2%"}
                  page={"marketing"}
                  step={50}
                  valueToYear={valueToYear}
                  marks={marks}
                  updateYear={handleYear}
                />
              </div>

              <div>
                {emptyCategory === true && (
                  <p id={styles.emptyMessage}>
                    Keep a lookout for more marketing posts!
                  </p>
                )}
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
              {!isMobile && !loading && (
                <div id={styles.orderedlist}>
                  <div className={styles.grid} id={styles.content}>
                    {currentPosts.map((content, index) => {
                      return (
                        <Initiative
                          key={index}
                          fb={content.fields.link}
                          imgUrl={`https:${content.fields.img.fields.file.url}`}
                          alt={content.fields.label}
                          date={formatMarketingArchivesDate(
                            content.fields.date
                          )}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
              {isMobile && !loading && (
                <div id={styles.orderedlist}>
                  <div className={styles.grid} id={styles.content}>
                    {selectedPosts.map((content, index) => {
                      return (
                        <Initiative
                          key={index}
                          fb={content.fields.link}
                          imgUrl={`https:${content.fields.img.fields.file.url}`}
                          alt={content.fields.label}
                          date={content.fields.date}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            {!isMobile && (
              <PaginationComp
                totalPages={Math.ceil(selectedPosts.length / postsPerPage)}
                paginate={paginate}
                page={currentPage}
                size="large"
              />
            )}
            {/*End of Initiatives*/}
          </div>
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const archives = await loadMarketingArchives();
  return {
    props: { archives },
  };
}
export default MarketingContent;
