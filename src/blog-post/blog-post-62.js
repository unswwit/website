import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";
import Tabletop from "tabletop";
import Chip from "@material-ui/core/Chip";
import BlogEndPreview from "./blog-end-preview";
import { Link } from "react-router-dom";

class blogPost62 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #62" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              How Virtual Reality could change the world
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 1st, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              <em>
                “We live in a fantasy world, a world of illusion. The great task
                in life is to find reality.”
              </em>
              <p style={{ marginLeft: "2em" }}>
                - Iris Murdoch, Irish/British Novelist and Philosopher
              </p>
            </p>
            {/* <p className={styles.postContent} style={{ marginLeft: "1em" }}>- Iris Murdoch, Irish/British Novelist and Philosopher</p> */}

            <p className={styles.postContent}>
              Now, more than ever, these words ring true. In a world where we
              are constantly connected over the radio waves, the boundaries
              between everyday realities and online life become more blurred. Is
              reality simply a series of experiences - mere sight, smell, touch
              and thought - or is it something more? Does technology isolate us,
              or does it expand our horizons?
            </p>
            <p className={styles.postContent}>
              At the moment, many of our daily online experiences are static:
              scrolling through social media, watching YouTube, listening to the
              radio. But one day, our virtual experiences may become
              indistinguishable from the real world. Putting on a simple headset
              could mean stepping into another country, another world, or
              another universe. This is not teleportation, nor is it a dream. It
              is Virtual Reality, and its foundations are already in our grasp.
            </p>
            <br />

            <p className={styles.question}>What is Virtual Reality?</p>

            <p className={styles.postContent}>
              Virtual Reality, or VR, is a simulated, 3D multisensory experience
              created by technology. Once in the realm of science fiction, the
              age of Virtual Reality began in 2010 when teenager Palmer Lucky
              duct-taped together what became the first prototype of the Oculus
              Rift.
            </p>

            <p className={styles.postContent}>
              Like novels, cinemas, and games, Virtual Reality has the ability
              to unlock alternate fantastical worlds. There’s no doubt that what
              makes VR so appealing is the promise of escaping our everyday
              worries. But while VR technologies such as Playstation VR, the HTC
              Vive, and the Oculus Rift have been a huge success in the gaming
              industry, its potential to revolutionize other parts of our world
              has been largely unexplored.
            </p>
            <br />

            <p className={styles.question}>
              Where can Virtual Reality take us?
            </p>
            <p className={styles.postContent}>
              Virtual Reality could become a safe platform for training in
              high-risk professions. In careers such as firefighters and pilots,
              surgeons and military personnel, a mistake could cost someone’s
              life. Medical residents can practise surgery in VR without
              operating on patients or cadavers, and construction or machinery
              workers can practise emergency shutdown procedures. By replacing a
              dangerous situation with a realistic simulation, VR training can
              ease the pressure on trainees, and provide them invaluable
              hands-on experiences.
            </p>

            <p className={styles.postContent}>
              Other companies have taken VR training into the corporate world.
              From sales and negotiation skills, to diversity and inclusion
              training, virtual training helps employees learn skills rarely
              focused on in schools. Experiential learning is arguably the most
              effective way to learn, with studies showing memory retention
              increases by over 75%. Simulations can expose employees to
              millions of situations, which when coupled with real-time
              feedback, become a cohesive learning tool.
            </p>

            <p className={styles.postContent}>
              Furthermore, VR can open up a new realm of creativity for creative
              professionals. Imagine designers sketching in three dimensional
              space. Imagine architects ‘constructing’ their buildings in VR,
              and walking clients through their creations before they’re even
              built,or corporation bosses conducting business in a virtual
              skyrise. Imagine people being able to interact, not over facetime,
              but personally, despite being separated by thousands of
              kilometers. A headset could be the doorway to an international
              classroom with teachers and students from all over the world.
            </p>

            <p className={styles.postContent}>
              When we start perceiving VR as not just a fantastical escape, but
              as an extension of reality, we can truly unlock its potential.
            </p>
            <br />

            <p className={styles.postContent}>
              Further reading: Learn how Virtual Reality tricks your brain.
              <br />
              <a
                href="https://www.youtube.com/watch?v=ybyib5pAq7Y"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/watch?v=ybyib5pAq7Y{" "}
              </a>
            </p>
            <br />
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
            "chelsea-chaffey": [
              "/potraits/blog-authors/chelsea-chaffey.png",
              styles.anonProfile,
              "Chelsea Chaffey",
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
export default blogPost62;
