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

class blogPost19 extends Component {
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

    // Print out blog Number (Debug, TODO Remove)
    console.log(this.state.blogNumber);

    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #19" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing : Shatabdi De, Web Developer at Nine Entertainment Co.
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>August 5, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Shatabdi De completed her Masters of IT at UNSW in 2011. Since
              then, she has had the opportunity to utilise creative and
              problem-solving skills, working with Nine Entertainment Co. as a
              frontend developer for the past six years, and a frontend web
              developer for the last three years. In doing so, she has had the
              privilege of watching her programming talents come to life as she
              works on content management systems, campaign and website
              features, research and developing, and much more! Read her
              interview below to find out more about her career journey.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              Science and technology runs in my family, due to them I took up
              maths and science subjects at school. My favorite subject though
              was English. In university I was exposed to various aspects of
              computer science ranging from programming, operating systems,
              matlab, embedded systems etc. I got interested in the web
              programming side of it and that led me to study Masters in
              Information Technology in UNSW. There I enjoyed the subjects on
              web application development(ecommerce, database).
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far.
            </p>

            <p className={styles.postContent}>
              I started as a graduate engineer in Solentive. There I gained
              hands on experience in working with C# .Net, Javascript, SQL and
              other web technologies. I applied the concepts of Java learnt in
              university there. I really liked working with Javascript and
              applied to Channel Nine. I was hired in a creative wing where I
              worked on front end campaigns for partner companies. At that time
              React and Node were new and I wanted to work in that space, which
              led me to changing teams and to my current team Nine Digital. In
              Nine Digital, I work on the suite of nine.com.au websites and
              their supporting applications.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>

            <p className={styles.postContent}>
              Not sure of this at the moment. Sometimes it’s worth trying
              different things to see where they lead you.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>

            <p className={styles.postContent}>
              There’s always a new direction, something new to learn.
              Programming is quite creative, in the sense you are constantly
              problem solving and coming up with ideas and solutions. I love
              seeing something come to life on screen, from a jira ticket to a
              feature on the web. Technology also has a great community. There
              are a lot of meetups, blogs, learning resources both free and paid
              to avail of.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              “Be like water making its way through cracks.” - Bruce Lee (This
              is a long quote, I’ve just put the first line.)
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
          }}
        />

        {/*Bottom Share Buttons*/}
        <div className={styles.shareContent}>
          <p className={styles.shareTextPosition}>Share this blog post</p>
          <ShareBtns />
        </div>

        {/*More from WIT section*/}
        <div className={styles.moreFromWITContent}>
          <p className={styles.moreFromWITTextPosition}>More from WIT</p>
          <ShareBtns />
        </div>

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
export default blogPost19;
