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

class blogPost49 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #49" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Rachel Hsia, Software Engineer at WiseTech Global
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>March 31st, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Rachel Hsia applies herself to every opportunity offered by the
              tech industry. Her ongoing passion in software development can be
              seen from volunteering in the Girls Programming Network to being a
              NCSS Challenge Tutor which spanned over several weeks. She has
              also done work placement at Sydney iTec Repair Centre, requiring
              technical skills dealing with computers as well as a teaching
              assistant at CodeSpace where she helped primary school children
              with technology and engineering concepts. Through determination
              and hard work, she transitioned from being an external industry
              representative for the UTS Tech Society to the Vice President of
              the society. Rachel currently works at WiseTech Global as a
              Software Engineer where she continues to delve into the endless
              possibilities that technology provides.
            </p>

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              I participated in a games development work experience program in
              Year 10 when I first realised that digital media, such as games,
              awesome looking websites, and animations, didn't just sprout
              fully-formed out of a vacuum. Sometime after that, I was a student
              at Girls' Programming Network, where being surrounded by so many
              awesome people and role models made me decide to pursue a career
              in IT.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              I was lucky enough to learn how to code in Python during high
              school and found myself really enjoying the challenge of learning
              programming. Then, attending the NCSS camp at the start of Year 11
              pushed me to learn more about web development and programming.
              Now, I'm currently studying IT at UTS, volunteering as Vice
              President of the UTS Tech Society, and working as a software
              engineer at Wisetech Global at the same time.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              Definitely in a role where I'm coding a lot. I want to learn and
              get comfortable in as many web development frameworks and
              technologies as possible, so I hope to have the opportunity to try
              working with all sorts of different technologies.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I feel like in IT and especially in web-related areas of IT,
              there's no way one can know everything there is to know about
              coding, whether it's different languages, frameworks, or even
              design patterns, etc. so I find myself learning something new
              quite frequently and constantly levelling up my knowledge on how
              to implement functionality in elegant ways.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              The way I see it is that anyone can code and should have the
              opportunity to learn. Anyone can learn the basics of code, be
              creative and make something cool with code, and that shouldn't be
              a thing that's introduced mainly to one gender early on. The more
              women and non-binary people in the STEM industry, the more role
              models there are to prove to girls and non-binary kids that they
              can thrive in STEM as well.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              It's the other side of my favourite part of my career: the
              inability to know everything. I'm often confused and stumped when
              trying to develop a good way to code something, which is easily
              the most frustrating thing about my career. Luckily, though, the
              STEM industry is chock full of resources and people willing to
              help us to learn from each other's roadblocks and discoveries.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              I've seen other women hit a stressful point in a project and power
              through to complete it. There have been mentors I've strived to
              impress, friends I've admired for their strength in dealing with
              stressful situations in a team, whether it's putting a cheerful
              face on and directing others through the roadblock or
              communicating that they need a break and want help from others to
              take over. There's even been a point in time where I saw one of my
              mentors swear at the code for not working, and I thought, "Wow, I
              want to become as confident in my skills as her so I can swear at
              the program instead of doubting myself."
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path to upskill
              on?
            </p>
            <p className={styles.postContent}>
              The most important hard skill is the understanding of coding
              fundamentals that every language has. Variables and data types, if
              statements, loops, etc. If you know how those work, you can pick
              up any language you like, a lot more easily.
            </p>
            <br />

            <p className={styles.postContent}>
              In terms of soft skills, the ability to recognise when (or even
              where) to ask for help is the most difficult. For me, it's because
              I'm stubborn, but it gets to a point where you're searching and
              searching, and it turns out you just needed another pair of eyes
              on the problem. The ability to communicate your problem and
              explain what you know and what you're stuck on is super useful as
              well- heck, you might even realise the solution as you're
              explaining it to someone else.{" "}
              <span role="img" aria-label="happy face">
                😆
              </span>
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              I'm still studying at uni, so this will be towards my first-year
              self, I guess: Take your time when learning something new. There's
              so much pressure to be awesome and know everything the first time
              you learn it, especially in IT, where everyone seems to be an
              expert on something. It's going to take some time and practise
              before you get good and familiar with it. Don't beat yourself up
              for not being able to memorise how something works after just
              starting to learn it.{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              "Women can do anything" - my high school motto{" "}
              <span role="img" aria-label="upside down smiley face">
                🙃
              </span>
            </p>
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
            "natalie-leroy": [
              "/potraits/blog-authors/natalie-leroy.png",
              styles.anonProfile,
              "Natalie Leroy",
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
export default blogPost49;
