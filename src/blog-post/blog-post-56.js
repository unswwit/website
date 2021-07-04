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

class blogPost56 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #56" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Cherry Zhang, Software Engineering Manager at Cochlear
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 8, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Throughout her career Cherry Zhang has had a passion for change,
              not only for the wellbeing of others but also for gender equality.
              Cherry aims to inspire other women to pursue careers in STEM,
              increasing diversity of thought in problem-solving, becoming a
              role model for young women, and seeing leaders being developed.
              This week, we talk to Cherry about her career and valuable advice
              she offers for anyone in STEM.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              Growing up in the 90s, I vividly remember the awe and excitement
              it brought me hearing the dial-up tone of a modem and seeing
              yahoo.com coming to life on an Intel 486 personal computer.
              <br />
              <br />I really believed computer science and engineering were
              going to change the world; since then, I’ve always been passionate
              about technology.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              I studied Computer Science at UNSW, then a Master of Digital Media
              at the University of Sydney. It was while there, I developed an
              interest in building digital products, so I went on to do just
              that in my next 2 jobs, where I worked in several different roles
              from Digital Producer to System Engineer, Pre-sales, Product
              Development, and then in 2010 I joint Cochlear as a developer,
              working on varies digital products, and over time progressed to
              team lead and then Software Engineering Manager.
            </p>
            <br />

            <p className={styles.question}>
              {" "}
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              I'm passionate about diversity and inclusion in tech and a
              customer-centric approach to problem-solving. I love mentoring and
              growing teams and helping people achieve their career goals and
              become leaders in their own rights. I see myself continuing on
              this journey, developing the next generation leaders, and becoming
              a role model for young women interested in a STEM career.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I love working for an organisation that is mission-driven and
              passionate about using technology innovation to help people hear,
              connect with others and live full lives. Making a positive impact
              on people's lives is a satisfying feeling at work. I also feel
              incredibly privileged to have the opportunity to help others grow
              in their career.
            </p>
            <br />

            <p className={styles.question}>
              {" "}
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              50% of the population is women. Yet, by and large, problem-solving
              and product design have been centred around men.
              <br />
              <br />
              Only through empowering more women and increasing their
              involvement in STEM will we bring diverse and inclusive
              problem-solving to the forefront. Think of all the innovations and
              advancement we could have had if we had more representation of
              women.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              It's both a challenging and fun aspect of a STEM career - staying
              current on all the new and emerging technologies. Be prepared for
              continued learning and enrichment of your knowledge.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              I've been fortunate enough to have good mentors and female role
              models in my career who had confidence and trust in me before I
              did myself. And my parents have installed hard-working ethics in
              me. They have always inspired and encouraged me to aim high and
              pursue my career.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>
            <p className={styles.postContent}>
              To pursue a similar career path as mine, university education in
              computer science, engineering, or equivalent degree will give you
              a solid foundation of knowledge; you will build on top of that
              through hands-on experience. Find out the areas you are interested
              in, take on side projects of your own and start building out your
              own ideas.
              <br />
              <br />
              Regarding soft skills, it is important to build trust and
              relationship with your co-workers and work on your collaboration
              and communication skills.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              We are ultimately accountable for our own development and growth,
              go for your career ambition, don’t be afraid of rejection and ask
              for help.
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              Say yes to opportunities even when you don't feel ready or
              comfortable with them.
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
            "georgie-mansfield": [
              "/potraits/blog-authors/georgie2021.jpg",
              styles.authorProfile,
              "Georgie Mansfield",
              "Education Executive",
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
export default blogPost56;
