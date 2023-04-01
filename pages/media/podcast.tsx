// @ts-nocheck comment
import { useState, useEffect } from 'react';
import PageHeader from '../../components/Header';
import Chip from '@material-ui/core/Chip';
import styles from '../../styles/Podcast.module.css';
import EpisodeTemplate from '../../components/PodcastCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import ScrollUpBtn from '../../components/ScrollUpBtn';
import LoadingScreen from '../../components/LoadingScreen';
import { useStyles, links, categories } from '../../data/podcast';
import { loadPodcasts } from '../../lib/api';
import { formatPodcastDate } from '../../lib/helpers/date';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/legacy/image';
import { revalidate } from '../../lib/helpers/constants';
// TO UNCOMMENT WHEN REACH > 9 PODCASTS
// import PaginationComp from "../components/Pagination";

const Podcast = ({ episodes }: any) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  // all podcast episodes
  const [content, setContent] = useState([]);
  // currently selected category -> default to "All"
  const [selectedCategory, setSelectedCategory] = useState('All');
  // check if search + category filters result in no results
  const [emptyCategory, setEmptyCategory] = useState(false);
  // search term (user input) for podcast search bar
  const [searchTerm, setSearchTerm] = useState('');
  // all the posts of the selected filter category
  const [selectedPosts, setSelectedPosts] = useState([]);

  // FOR PAGINATION
  // the posts displayed on the current page
  // const [currentPosts, setCurrentPosts] = useState([]);
  // set how many posts to view per page
  // const postsPerPage = 9;

  // get podcasts from Contentful
  // input: podcast data from Contentful
  // output: array of dictionaries containing podcast data
  const fetchPodcastEpisodes = (episodes: any) => {
    setContent(episodes);
    setSelectedPosts(episodes);
    setLoading(false);
    setSourceLoading(false);
  };

  useEffect(() => {
    // start at the top of the page
    window.scrollTo(0, 0);

    // load podcast episode previews
    fetchPodcastEpisodes(episodes);
  }, [episodes]);

  useEffect(() => {
    // if no posts, setEmptyCategory to true
    if (selectedPosts.length === 0 && loading === false) {
      setEmptyCategory(true);
      console.error = () => {};
    } else {
      setEmptyCategory(false);
    }
  }, [selectedPosts, loading]);

  // filter content by selected category + searchTerm
  const filterContent = (selectedCategory: string, searchTerm: string) => {
    const filteredContent = content.filter(
      (picture) =>
        selectedCategory === 'All' ||
        picture.fields.category.includes(selectedCategory)
    );
    searchPodcasts(filteredContent, searchTerm);
  };

  // filter category content by search filter in heading, subheading or author
  const searchPodcasts = (filteredContent: any, searchTerm: string) => {
    const searchResults = filteredContent.filter((episode: any) => {
      const date = formatPodcastDate(episode.fields.date);
      if (
        searchTerm === '' ||
        date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.fields.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.fields.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    // only required for pagination
    // setCurrentPosts(searchResults);
    setSelectedPosts(searchResults);
  };

  // called when pagination item clicked to slice the correct amount of posts for viewing
  // const paginate = (pageNumber) => {
  //   setCurrentPosts(episodes.slice((pageNumber - 1) * postsPerPage, pageNumber * postsPerPage));
  // }

  return (
    <div>
      <Head>
        <title>Podcast | UNSW WIT</title>
      </Head>
      {sourceLoading && imageLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            imageLoading={setImageLoading}
            imgUrl="/headers/podcast-header.jpg"
            title="Podcast"
          />
          <div id={styles.podcastIntroduction}>
            <div className={styles.logoContainer}>
              <div className={styles.podcastLogo}>
                <Image
                  src="/podcast-logos/talk-WIT-us-logo.png"
                  alt="Talk WIT Us logo"
                  height="250"
                  width="250"
                  objectFit={'contain'}
                />
              </div>
            </div>
            <div id={styles.introDescription}>
              <h2 id={styles.heading}>Talk WIT Us</h2>
              <p>
                Join us each month as we talk all about tech, uni, and life,
                featuring our wonderful WIT team and some special guests!
              </p>

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
              <div id={styles.platformContainer}>
                {Object.keys(links).map((link, index) => {
                  return (
                    <Link href={links[link][1]} key={index} legacyBehavior>
                      <div className={styles.platformLogos}>
                        <a
                          className={styles.a}
                          key={index}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={`/podcast-logos/${links[link][0]}`}
                            alt={link}
                            width="25"
                            height="25"
                          />
                        </a>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.podcastCategories}>
            {/* Start of categories */}
            <div className={styles.contentCategories}>
              {Object.keys(categories)
                .sort()
                .map((category) => {
                  const chipColour =
                    selectedCategory === categories[category]
                      ? '#e85f5c'
                      : '#7F7F7F';
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
                        filterContent(categories[category], searchTerm);
                      }}
                    />
                  );
                })}
            </div>
          </div>
          {/* End of podcast categories */}
          {/* Start of search bar */}
          <div className={styles.searchBar}>
            <input
              className={styles.inputSearchBar}
              type="text"
              placeholder="Search podcasts"
              onChange={(event) => {
                setSearchTerm(event.target.value);
                filterContent(selectedCategory, event.target.value);
              }}
            />
          </div>
          {/* End of search bar */}
          <div>
            {emptyCategory === true && (
              <p id={styles.emptyMessage}>No results were found.</p>
            )}
          </div>
          <div id={styles.podcastLoadingContainer}>
            {loading && (
              <CircularProgress
                variant="indeterminate"
                size={50}
                thickness={5}
                id={styles.podcastLoading}
              />
            )}
          </div>

          <div id={styles.episodes}>
            {selectedPosts.map((episode, index) => {
              return <EpisodeTemplate key={index} episode={episode} />;
            })}
          </div>
          {/* TO UNCOMMENT WHEN REACH > 9 PODCASTS */}
          {/* <PaginationComp 
          totalPages={Math.ceil(currentPosts.length/postsPerPage)} 
          paginate={paginate}
        /> */}
          <ScrollUpBtn />
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const episodes = await loadPodcasts();
  return {
    props: { episodes },
    revalidate: revalidate
  };
}

export default Podcast;
