import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../style.css";
import styles from "./blog.module.css";
import BlogPreview from "./blog-preview";
import PageHeader from ".././header";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";
import ScrollUpBtn from "../components/ScrollUpBtn";
import PaginationComp from "../components/Pagination";

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

const Blog = () => {
  const categoryDescriptions = {
    All: "Click here to see all the blog posts that we have posted!",
    "WIT Crush Wednesday":
      "Each Wednesday, we post a blog sharing the interview, journey, and experience of inspiring women in tech. Click here to read their empowering stories!",
    Lifestyle:
      "Wondering how you can improve your lifestyle? Read some eye-opening content here!",
    Upskill:
      "Having the skill-set to perform your best is essential. Learn about ways that you can upskill yourself in these blogs!",
    "Topical Technology":
      "In a fast-paced world, technology is making a growing impact in current events. Click here to read about tech in the news.",
    "Perception and Innovation":
      "Our understanding of technology is readily evolving along with innovation that is arising in tech. Read more about new start-ups, understanding tech disciplines, and upcoming innovation in these blogs.",
    Careers:
      "Wondering what you can do to excel in your professional life? Read here for tips on acing interviews, performing your best, and making the most of career opportunities!",
  };
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  // filter blogs by a selected category
  const filterBlogs = (category) => {
    const filteredBlogs = blogs.filter((blog) => (category === "All" || (blog.category.split(",")).includes(category) 
    || ((blog.category.split(",")).includes("WCW") && category === "WIT Crush Wednesday")));
    setSelectedPosts(filteredBlogs);
    setCurrentPosts(filteredBlogs.slice(0, postsPerPage));
    setCurrentPage(1);
  }

  useEffect(() => {    
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        setLoading(false);

        const blogOriginal = googleData["blog-previews"]["elements"];
        let blogPreviews = googleData["blog-previews"]["elements"];
        const authorList = googleData["blog-authors"]["elements"];
        blogOriginal.forEach((blogPreview, index) => {
          const tempAuthor = {};
          blogPreview.authors.split(",").forEach((authorKey) => {
            const result = authorList.filter(
              (authorItem) => authorItem.authors === authorKey
            )[0];
            tempAuthor[authorKey] = [
              `/potraits/blog-authors/${result.img}`,
              result.name,
            ];
          });
          blogPreviews[index].authors = tempAuthor;
        });

        const tempBlogs = googleData["blog-previews"]["elements"].reverse();
        setBlogs(tempBlogs);
        setCurrentPosts(tempBlogs.slice(0, postsPerPage));
        setSelectedPosts(tempBlogs);
      },
      simpleSheet: false,
    });
    
  }, []);

  // called when pagination item clicked to slice the correct amount of posts for viewing
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentPosts(selectedPosts.slice((pageNumber - 1) * postsPerPage, pageNumber * postsPerPage));
  }

  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Posts" />
      <div className={styles.blogGallery}>
        {/* Start of blog categories */}
        <div className={styles.blogCategories}>
          {Object.keys(categoryDescriptions)
            .sort()
            .map((category) => {
              const chipColour =
                selectedCategory === category ? "#e85f5c" : "#7F7F7F";
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
                    size="medium"
                    label={category}
                    style={{
                      textTransform: "uppercase",
                      backgroundColor: chipColour,
                      color: "white",
                      margin: "5px",
                    }}
                    onClick={() => {
                      setSelectedCategory(category);
                      filterBlogs(category);
                    }}
                  />
                </BootstrapTooltip>
              );
            })}
        </div>
        {/*Start of blog search bar*/}
        <div className={styles.searchBar}>
          <input 
              className={styles.inputSearchBar}
              type="text"
              placeholder="Search blog post by title" 
              onChange={(event) => {
                  setSearchTerm(event.target.value);
              }}
          />
        </div>
        {/*Start of blog posts*/}
        <div className={styles.blogPosts}>
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
            {!loading && currentPosts
              .filter((blog) => {
                if (searchTerm === "") {
                  return blog;
                } else if (blog.heading.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return blog;
                }
              }).map((blog) => {     
                return <BlogPreview
                  key={blog.blogNo}
                  blogNo={blog.blogNo}
                  imgUrl={`/blog-covers/${blog.img}`}
                  heading={blog.heading}
                  date={blog.date}
                  subheading={blog.subheading}
                  authors={blog.authors}
                  category={blog.category.split(",")}
                />
            })}   
          </div>
        <PaginationComp 
          totalPages={Math.ceil(selectedPosts.length/postsPerPage)} 
          paginate={paginate}
          page={currentPage}
        />
        <ScrollUpBtn/>
        {/*End of blog posts*/}
      </div>
    </>
  );
};

export default Blog;
