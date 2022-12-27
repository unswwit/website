import {
  loadBlogPreviews,
  loadBlogRecommendations,
  loadBlogAuthors,
} from '../../lib/api';
import BlogRecommendations from '../../components/BlogRecommendations';
import styles from '../../styles/Blog.module.css';
import React, { useState, useEffect, useCallback } from 'react';
import BlogPreview from '../../components/BlogPreview';
import PageHeader from '../../components/Header';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import ScrollUpBtn from '../../components/ScrollUpBtn';
import PaginationComp from '../../components/Pagination';
import LoadingScreen from '../../components/LoadingScreen';
import { BootstrapTooltip } from '../../components/BootstrapTooltip';
import { isMobile } from 'react-device-detect';
import { useStyles, categoryDescriptions } from '../../data/blog';

const Blog = ({ recommendations, blogPreviews, blogAuthors }) => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);
  // all blog posts
  const [blogs, setBlogs] = useState([]);
  // set how many posts to view per page
  const postsPerPage = 10;
  // current page number
  const [currentPage, setCurrentPage] = useState(1);
  // all the posts of the selected filter category
  const [selectedPosts, setSelectedPosts] = useState([]);
  // the posts displayed on the current page
  const [currentPosts, setCurrentPosts] = useState([]);
  // search term (user input) for blog search bar
  const [searchTerm, setSearchTerm] = useState('');
  // if there are search results
  const [emptyCategory, setEmptyCategory] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // filter blogs by a selected category
  const filterBlogs = (category, searchTerm) => {
    const filteredBlogs = blogs.filter(
      (blog) =>
        category === 'All' ||
        blog.fields.category.includes(category) ||
        (blog.fields.category.includes('WCW') &&
          category === 'WIT Crush Wednesday')
    );
    searchBlogs(filteredBlogs, searchTerm);
  };

  // search blogs by heading, subheading or author
  const searchBlogs = (filteredBlogs, searchTerm) => {
    const searchResults = filteredBlogs.filter((blog) => {
      const authors = Object.keys(blog.authors)
        .join(' ')
        .split(/[-]/)
        .join(' ');
      console.log(authors);
      if (
        searchTerm === '' ||
        blog.fields.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.fields.subheading
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        authors.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    setSelectedPosts(searchResults);
    setCurrentPosts(searchResults.slice(0, postsPerPage));
    setCurrentPage(1);
  };

  // TODO: Remove below code if not needed
  // get blog authors
  // input: blog authors data from contentful
  // output: blog authors array of dictionaries
  // const loadAuthors = () => {
  //   return new Promise((resolve, reject) => {
  //     const fetchBlogAuthors = async () => {
  //       setLoading(false);
  //     };
  //     fetchBlogAuthors().catch((error) =>
  //       // error handling
  //       console.error(error)
  //     );
  //   });
  // };

  // TODO: Remove console.log and redundancy + make img part work
  // renaming authors to be the image location of the author image and name
  const renameAuthors = (blogOriginal, authorList, blogPreviews) => {
    blogOriginal.forEach((blogPreview, index) => {
      const tempAuthor = {};

      blogPreview.fields.authors.forEach((authorKey) => {
        const result = authorList.filter(
          (authorItem) => authorItem.fields.author === authorKey
        )[0];
        tempAuthor[authorKey] = [
          result.fields.img.fields.file.url,
          result.fields.name,
        ];
      });
      blogPreviews[index].authors = tempAuthor;
    });
  };

  const blogSet = (tempBlogs) => {
    setBlogs(tempBlogs);
    setCurrentPosts(tempBlogs.slice(0, postsPerPage));
    setSelectedPosts(tempBlogs);
  };

  // TODO: Remove console.log and redundancy
  // get blog previews
  // input: previews data from contentful
  // output: blog previews array of dictionaries
  const loadBlogs = useCallback(
    (authorList) => {
      console.log('hello 2');
      setLoading(false);
      const blogOriginal = blogPreviews;
      renameAuthors(blogOriginal, authorList, blogPreviews);
      blogSet(blogPreviews);
    },
    [blogPreviews]
  );

  // TODO: Remove console.log and redundancy
  useEffect(() => {
    console.log('hello 3');
    loadBlogs(blogAuthors);
    // loadAuthors().then((response) => loadBlogs(response));
  }, [loadBlogs]);

  // no search results message
  useEffect(() => {
    if (currentPosts.length === 0) {
      setEmptyCategory(true);
    } else {
      setEmptyCategory(false);
    }
  }, [currentPosts]);

  // Select blog posts for viewing on the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentPosts(
      selectedPosts.slice(
        (pageNumber - 1) * postsPerPage,
        pageNumber * postsPerPage
      )
    );
  };

  return (
    <div>
      {loading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            imageLoading={setHeaderLoading}
            imgUrl="/headers/blog-header.jpg"
            title="Blog Posts"
          />
          <div className={styles.blogGallery}>
            <div id={styles.blogLoadingContainer}>
              {loading && (
                <CircularProgress
                  variant="indeterminate"
                  size={50}
                  thickness={5}
                  id={styles.blogsLoading}
                />
              )}
            </div>
            {/* Start of blog recommendation */}
            {!loading && (
              <>
                <h2 className={styles.blogRecommendationsTitle}>
                  WIT-Commendations
                </h2>
                <div className={styles.blog}>
                  <div className={styles.blogRecommendations}>
                    {recommendations.map((recommendation) => (
                      <BlogRecommendations
                        key={recommendation.sys.id}
                        recommendation={recommendation}
                      />
                    ))}
                  </div>
                </div>
                {/* End of blog recommendations */}
                {/* Start of other blogs */}
                <h2>MORE FROM WIT</h2>
                {/* Start of blog categories */}
                <div className={styles.blogCategories}>
                  {Object.keys(categoryDescriptions)
                    .sort()
                    .map((category) => {
                      const chipColour =
                        selectedCategory === category
                          ? '#e85f5c'
                          : window.matchMedia &&
                            window.matchMedia('(prefers-color-scheme: dark)')
                              .matches
                          ? '#676767'
                          : '#7F7F7F';
                      return (
                        <BootstrapTooltip
                          key={category}
                          title={
                            <>
                              <div className={styles.tooltipTitle}>
                                {category}
                              </div>
                              <p className={styles.tooltipDescription}>
                                {categoryDescriptions[category]}
                              </p>
                            </>
                          }
                        >
                          <Chip
                            size="medium"
                            label={category}
                            className={classes.chip}
                            style={{
                              backgroundColor: chipColour,
                            }}
                            onClick={() => {
                              setSelectedCategory(category);
                              filterBlogs(category, searchTerm);
                            }}
                          />
                        </BootstrapTooltip>
                      );
                    })}
                </div>
                {/* End of blog categories */}
                {/* Start of search bar */}
                <div className={styles.searchBar}>
                  <input
                    className={styles.inputSearchBar}
                    type="text"
                    placeholder="Search blog posts"
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                      filterBlogs(selectedCategory, event.target.value);
                    }}
                  />
                </div>
                <div>
                  {emptyCategory === true && (
                    <p id={styles.emptyMessage}>No results were found.</p>
                  )}
                </div>
                {/* End of search bar */}
                {/* Start of blog posts */}
                <div className={styles.blogPosts}>
                  {!loading &&
                    !isMobile &&
                    currentPosts.map((individualBlogPreview, index) => {
                      return (
                        <BlogPreview
                          key={index}
                          individualBlogPreview={individualBlogPreview}
                        />
                      );
                    })}
                  {/* {!loading &&
                    isMobile &&
                    selectedPosts.map((individualBlogPreview, index) => {
                      return (
                        <BlogPreview
                          key={index}
                          individualBlogPreview={individualBlogPreview}
                        />
                      );
                    })} */}
                </div>
                {!loading && !isMobile && (
                  <PaginationComp
                    totalPages={Math.ceil(selectedPosts.length / postsPerPage)}
                    paginate={paginate}
                    page={currentPage}
                    size="large"
                  />
                )}
                <ScrollUpBtn />
                {/*End of blog posts*/}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const recommendations = await loadBlogRecommendations();
  const blogPreviews = await loadBlogPreviews();
  const blogAuthors = await loadBlogAuthors();
  return {
    props: { recommendations, blogPreviews, blogAuthors },
  };
}
