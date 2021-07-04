import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";
import Tabletop from "tabletop";
import Chip from "@material-ui/core/Chip";
import BlogEndPreview from "./blog-end-preview";
import { Link } from "react-router-dom";

class blogPost20 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor() {
    super();
    this.state = {
      currentBlogNo: 0,
      currentBlog: "",
      previousBlogs: [],
      currentBlogCategories: [],
    };
  }

  render() {
    // Get Previous 2 Blog Info
    var currBlogNo = parseInt(
      String(this.props.match.url).split("/").reverse()[0]
    );
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
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

        var lastTwoBlogPreviews = blogPreviews.slice(
          currBlogNo - 3,
          currBlogNo - 1
        );

        var currBlogCategories = blogPreviews[currBlogNo - 1].category.split(
          ","
        );

        this.setState({
          previousBlogs: lastTwoBlogPreviews,
          currentBlog: blogPreviews[currBlogNo - 1],
          currentBlogNo: currBlogNo,
          currentBlogCategories: currBlogCategories,
        });
      },
      simpleSheet: false,
    });

    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #20" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing : Aneita Yang, Product Manager At Atlassian
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>September 2, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Aneita Yang is product manager of Bitbucket Cloud at Atlassian, a
              program that allows teams to manage workflow from design to
              implementation as well as edit and deploy the code these teams are
              working on. Aneita has had fascinating experience in a variety of
              technological fields, including animation and visual effects at
              Animal Logic, an internship at a software engineer at Google where
              she developed new web tools for Google Drive, and cyber security
              as Product Manager of Identity at Atlassian, while also spreading
              her enthusiasm and passion for computer science as a tutor at
              UNSW. In her current role as Product Manager for BitBucket Cloud,
              Aneita has worked with international companies such as Microsoft,
              Amazon, JFrog, and SonarCloud in helping integrate BitBucket Cloud
              into their everyday operations. Keep reading to learn more about
              Aneita’s philosophy, journey in STEM, and how computer science has
              constantly changed her perception!
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              STEM wasn't really something that was promoted while I was at high
              school but I always had an interest in technology. Technology was
              everywhere and it had led to a lot of transformations in peoples'
              day-to-day lives but also in numerous industries and that always
              fascinated me. I decided to enrol myself in a computer science
              degree, ended up loving it, and the rest is history!
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far.
            </p>

            <p className={styles.postContent}>
              After graduating from university, I joined Atlassian as a product
              manager. I worked on Bitbucket Cloud for close to 3 years before
              going on to join the Identity team. Despite originally planning to
              pursue a career as a software engineer, I discovered the role of
              product management during one internship and have never looked
              back.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>

            <p className={styles.postContent}>
              Being able to work with different people from all around the
              business on challenging problems. The team around me helps me
              continually learn and grow.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>Fail fast!</p>
            <br />
          </div>
        </div>

        <div className={styles.chipContent}>
          <div className={styles.BlogCategories}>
            {this.state.currentBlogCategories.map((category) => {
              const chipColour = "#7F7F7F";
              return (
                <Link
                  to={{ pathname: "/media/blog", category }}
                  style={{ textDecoration: "none" }}
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
                    onClick={() => {}}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/georgie.jpg",
              styles.authorProfile,
              "Georgie Mansfield",
              "Education Team",
            ],
          }}
        />

        {/*Bottom Share Buttons*/}
        <div className={styles.shareContent}>
          <p className={styles.shareTextPosition}>Share this blog post</p>
          <ShareBtns />
        </div>

        {/*More From WIT Section*/}
        <div className={styles.moreFromWITContent}>
          <p className={styles.moreFromWITTextPosition}>More From WIT</p>
          {this.state.previousBlogs.map((blog) => {
            return (
              <div className={styles.scaleDown}>
                <BlogEndPreview
                  key={blog.blogNo}
                  blogNo={blog.blogNo}
                  imgUrl={`/blog-covers/${blog.img}`}
                  heading={blog.heading}
                  date={blog.date}
                  subheading={blog.subheading}
                  authors={blog.authors}
                  category={blog.category.split(",")}
                />
              </div>
            );
          })}
        </div>

        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost20;
