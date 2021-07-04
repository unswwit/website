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

class blogPost59 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #59" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Why is Coding Important?</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 17, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              With the advent of technology and the virality of the Internet in
              today’s society, code has become an integral role in many of our
              real-world applications. Technical skills have become a part of
              the hiring process where candidates are expected to possess a
              fundamental knowledge of IT in order to be granted workforce
              entry. Subsequently, the need for coding expertise has naturally
              increased across various industries to support their backend
              developments, and as such many programming job roles exist today
              from software developers to cloud engineers.
              <br />
              <br />
              Going forward as an ‘IN’ topic, coding is here to stay in the long
              run and it will undoubtedly be set as one of the most vital skill
              sets required to thrive in a future of technological innovation.
            </p>
            <br />

            <p className={styles.question}>
              Industry and Daily Outlook of Coding Applications
            </p>

            <p className={styles.postContent}>
              Coding can be found almost everywhere in backend systems or
              software to power up supporting functionalities. Without coding,
              machines like computers and AI chatbots would become obsolete
              equipment that cannot be operated. Coding can also be seen as the
              embodiment of bringing technological products ‘alive’, providing
              installations of source codes to feed in a set of unique commands
              for them to execute accordingly.
              <br />
              <br />
              Across various industries, many software applications are
              supported by strings of codes to efficiently perform their
              functionalities today. Some of the common ones include:
              <br />
              <ol type="1">
                <li>
                  Using database management systems to store records of business
                  information such as departmental and clientele
                  confidentialities.
                </li>
                <li>
                  Marketers using analytical tools to conduct secondary research
                </li>
                <li>
                  Medical professionals using in-house digital equipment to
                  facilitate diagnosis and patient treatments
                </li>
                <li>
                  Supply chain and logistic processes powered by automation with
                  built-in AI and RPA (robotic processing automation) to improve
                  accuracy and lower operational costs
                </li>
                <li>
                  UI/UX designers developing their webs and user interface
                  designs
                </li>
              </ol>
              All of these digital technologies would not be made possible
              without the functional dependence of coding. In our personal
              lives, the activities that we do on our electronic devices: like
              searching up what Netflix show to binge-watch or ordering your
              favorite Uber food delivery or best of all, taking a selfie from
              your phone, all strings of codes behind them that are developed to
              allow you as an end-user to use their interfaces anytime,
              anywhere.
              <br />
              <br />
              Sounds pretty interesting right? Although the lines of codes are
              not visible to the public eye, at this moment we can pinpoint out
              how vividly significant the role of coding has played in our lives
              and business landscapes in years to come.
            </p>
            <br />

            <p className={styles.question}>I Don’t Do STEM, So I Can’t Code</p>
            <p className={styles.postContent}>
              <b>Misconception:</b>
            </p>

            <pre>
              <code>
                Stem_qualification = input( “Do you have a STEM background?
                Yes/No: ”)
              </code>
              <br />
              <code>If Stem_qualification == “Yes”:</code>
              <br />
              <code style={{ marginLeft: "3em" }}>
                print(“I am qualified to become a programmer”)
              </code>
              <br />
              <br />
            </pre>

            <p className={styles.postContent}>
              <b>The Truth:</b>
              <br />
              Many people tend to form their own preconceived notions that
              “Coding is Only For Certain People”: mainly those “gifted” with
              mathematically-inclined skills or have withheld a strong degree
              background in STEM. This is a common misconception that a lot of
              us tend to subconsciously assume before taking the first steps
              into learning to code and resultantly, it creates a deterrence for
              those who are either not confident in their coding abilities or
              are wary of the technical difficulty levels expected to produce
              effective results, to shy away from their interests.
              <br />
              <br />
              Debunking the coding myth above,{" "}
              <b>
                <i>‘Coding is not an exclusive language’.</i>
              </b>{" "}
              Its wide accessibility is meant to be welcoming and honestly,
              there is so much more to discover in coding beyond simply the
              logical flows of technical scripts. After all, the main identity
              factor towards finding “fun” in coding is the instant
              gratification of being able to experiment with your creative
              methods of approaching a case problem and implementing your
              programming codes to solve them. It connects you deeply to the
              longing of crafting your own innovative solution and the
              investment in producing something useful of your own!
              <br />
              <br />
              However, at the same time, many people say coding is too hard and
              eventually give up and fail. For those trying to stay motivated
              while learning, don’t overlook the fact that coding processes can
              take a long time for programmers and developers too with many
              trials and errors to undergo in proof-checking to ensure all
              scripts are functioning with an accuracy rate close to 100%.
              <br />
              <br />
              It is normal to feel frustrated while learning. But ultimately, it
              is all part of the experimentation process and that’s the beauty
              of coding. You can enjoy the learning growth as you practice your
              coding skills, be challenged to solve real-world problems, and
              become a technical inventor yourself. Being able to see the ‘fun’
              in coding will come naturally when you find joy in tackling
              challenges and are constantly driven to search for deep-rooted
              answers beneath the surface problem.
            </p>
            <br />

            <p className={styles.question}>Future of Coding</p>
            <p className={styles.postContent}>
              Technology is at the forefront of our future of innovation,
              sustainable developments, and personal convenience. The rollout of
              coding programs has started to launch worldwide beginning from
              tutoring early age to adults. Coding could become a prerequisite
              skill for everyone to possess as part of their academic curriculum
              and can serve as a second language for us to adapt to
              <br />
              <br />
              How can we be future-ready for this technological shift towards a
              focus on coding?
              <br />
              <br />
              Upskilling is definitely necessary but ultimately it lies in
              personal development. Our learning attitudes and mindsets have to
              be more dynamic and flexible in order to gear up for success.
              Perseverance and resilience are keys to thrive in the
              technologically advanced world we are beginning to live in and
              these attributes will push us out of our comfort zone to adapt to
              new skills like coding.
              <br />
              <br />
              <i>
                If we are willing to put in the committed efforts in crafting
                our coding skills, we will be able to see our personal results
                achieve fruition and attain a sense of accomplishment in
                learning something new! Guess it is time to get started on
                coding!
              </i>
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
            "erika-shi": [
              "/potraits/blog-authors/erika-shi.png",
              styles.anonProfile,
              "Erika Shi",
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
export default blogPost59;
