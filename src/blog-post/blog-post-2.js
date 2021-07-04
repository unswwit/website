//All necessary imports for this javascript
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

class blogPost2 extends Component {
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
          currBlogNo,
          currBlogNo - 2
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #2" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing: Professor Lisa Harvey Smith, Astrophysicist and
              Australia’s First Women In STEM Ambassador
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>May 27, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              British-Australian astrophysicist Lisa Harvey Smith discovered her
              love of astronomy whilst homeschooling herself at the age 11. Soon
              after, she joined her first amateur astronomical society. Her love
              for astronomy, which she describes as “ridiculous” guided her
              educational pursuits. By age 26, she had already earned a Ph.D. in
              Radio Astronomy. Her work on the SKA Pathfinder telescope led to
              the discovery of tens of millions of new galaxies. And if solving
              the mysteries of the universe isn’t enough, in 2018, she was
              appointed the Australian Government Ambassador for Women in STEM.
            </p>
            <br />

            <p className={styles.postContent}>
              Dr. Harvey shares astronomical concepts with women in ways that
              are interesting and accessible. She explains her reason for being
              a science communicator and educator instead of a traditional
              teacher is because: “I wanted to use my creativity rather than
              teach in a confined setting – that’s what I love about science
              communication, the creative aspect. The challenge of breaking out
              of my science niche and cutting through the jargon and explaining
              these cool concepts. I find it challenging and engaging and I love
              watching people’s faces as the penny drops.”
            </p>
            <br />

            <p className={styles.postContent}>
              If Dr. Harvey had to be described in one word, it would be
              ambitious. When she’s not conducting astronomical research and
              sharing her love of astronomy with others, she’s advocating for
              women in the workplace. In her 10-year plan for Women in STEM, she
              urges the need to accelerate the pace of change in reducing the
              gender pay gap for women. In her address to the National Press
              Club in 2019, she warned that it will take more than 200 years to
              close the gap at the current rate of progress. Her research on
              unconscious bias in the workplace and her advocacy has already led
              to improvements in the hiring process. Companies are now removing
              gendered pronouns in applications so that more women will receive
              research grants and job opportunities.
            </p>
            <br />

            <p className={styles.postContent}>
              Currently, women make up only 17% of the STEM qualified population
              in Australia. Professor Harvey Smith advises that it is the
              responsibility of students, educators, parents, and businesses to
              encourage, promote, and raise awareness for all women in STEM. As
              an author for young children, her wish is for young girls to see
              smart and empowering female leaders involved in science and
              technology and feel a part of the STEM community. She urges,
              “Instead of asking girls what the colour of the flower is, ask how
              many flowers there are.” By encouraging young females to think
              mathematically and scientifically, she believes more females will
              seek careers in STEM and gender equity will become the norm.
            </p>
            <br />

            <p className={styles.postContent}>
              Professor Lisa Harvey Smith shows us that successful females not
              only have love, determination and exploration for their own
              fields, but they also make time to encourage women in STEM.
            </p>
            <br />

            <p className={styles.postContent}>
              Professor Lisa Harvey Smith is currently the Professor of Practice
              at UNSW.
            </p>
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
            "elisa-sanjurjo": [
              "/potraits/blog-authors/elisa.jpg",
              styles.authorProfile,
              "Elisa Sanjurjo",
              "Education Team",
            ],
            "victoria-ruming": [
              "/potraits/blog-authors/victoria.jpg",
              styles.authorProfile,
              "Victoria Ruming",
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
export default blogPost2;
