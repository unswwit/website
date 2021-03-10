import React, { useState, useEffect } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import PageHeader from "../header";
import Tabletop from "tabletop";

const BlogPostTemplate = () => {
  const [blog, setBlog] = useState({});
  const [blogNumber, setBlogNumber] = useState("0");

  // retrieve blog number
  const handleBlogNumber = () => {
    let url = window.location.href.split("/");
    setBlogNumber(url[url.length - 1]);
    return url[url.length - 1];
  };

  useEffect(() => {
    //start webpage at the top
    window.scrollTo(0, 0);
    // setLoading(true);
    const currBlogNo = handleBlogNumber();
    
    // importing podcast episode
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        // redirect to 404 page if visiting an invalid podcast episode number in the url
        const allBlogs = googleData["blog-previews"]["elements"];

        // load the page content for the current podcast episode
        const currBlog = allBlogs.filter((blog) => {
          return blog.blogNo === currBlogNo;
        })[0];
        setBlog(currBlog);
    
        // hide the loading sign
        // setLoading(false);
      },
      simpleSheet: false
    })
  }, []);
  
  return (
    <div>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/blog-header.png" title={`Blog Post #${blogNumber}`} />
      {/*End of Header*/}

      {/*Start of blog post*/}
      <div className={styles.blogContent}>
        <div>
          <h2 className={styles.blogTitle}>{blog.heading}</h2>
          <p className={styles.date}>{blog.date}</p>
        </div>

        {/* import blog and author */}
        {require(`./blog-post-${blogNumber}`).default}
      </div>
      {/*End of blog posts*/}
    </div>
  );
}
export default BlogPostTemplate;