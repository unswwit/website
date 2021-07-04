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

class blogPost12 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #12" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              WIT Crush Wednesday - Maddie Mackey
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 8, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              “Maddie Mackey is a Junior Software Engineer at Nine. Not only has
              Maddie been involved in amazing work placements including a
              position as an Associate Software Developer at WiseTech Global,
              and a STEP intern at Google, but also also worked on many of her
              own projects such as developing and programming a high-altitude
              weather balloon that she undertook in Year 12, a medical booking
              system, and developing her own “Hunger Games” mobile app. Maddie’s
              determination and passion for software development has led her to
              become a tutor at Grok Learning and GPN (Girls Programming
              Network) where she teaches and inspires other females to build
              their own software programs and pursue careers in technology.{" "}
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              In high school I really enjoyed maths and science, and playing
              video games, so I jumped at the chance to learn programming. I
              love being able to solve real problems and create things from
              scratch with all the building blocks I need readily available
              through just a computer.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>

            <p className={styles.postContent}>
              I grew up just outside of Canberra on a farm, and after attending
              NCSS (National Computer Science Summer School) in senior high
              school and seeing some of the amazing tech companies in Sydney, I
              was set on moving here for university. So I undertook a Bachelor
              of IT at UTS, and graduated just last year. I did a few
              internships during uni, and after one at Nine I was offered a
              position to stay on as a junior software engineer on 9Now's TV
              apps team, where I am now.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>

            <p className={styles.postContent}>
              I look forward to continuing my career as a software engineer at
              Nine. I'm also passionate about equality in STEM, hoping to
              encourage and continue to advocate for equal opportunities for
              minorities. And if I ever get bored of tech, my backup plan is to
              buy a shack out in the bush and write musicals.{" "}
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>

            <p className={styles.postContent}>
              I enjoy the many learning opportunities and unique problems that
              open up from developing a streaming service for such a wide range
              of devices and technologies. While this can make work challenging,
              my team is always happy to help. I love my team's keenness to
              share knowledge, and how the skills of each member are recognised
              regardless of official titles. Our team banter also makes work
              lots of fun.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              <em>"Speak your truth even if your voice shakes."</em>
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
            "vivian-wong": [
              "/potraits/blog-authors/vivw.jpg",
              styles.authorProfile,
              "Vivian Wong",
              "Education Executive",
            ],
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
export default blogPost12;
