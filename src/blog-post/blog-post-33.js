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

class blogPost33 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #33" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>WCW ~ ALL WIT Exec Team 2020</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>October 21, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.question}>
              What sparked your interest to study a STEM degree?
            </p>
            <p className={styles.postContent}>
              <strong>Amanda</strong>: I always knew I wanted to have a job that
              had both a creative and analytical/logical side and studying
              software was the perfect combination of the two, being able to
              design and implement products. Technology also interested me
              because it’s a field where you have to constantly learn and adapt
              as the fast-paced industry evolves, meaning you’ll never be bored.
              I also chose engineering, particularly biomedical, to accompany
              software because I knew I wanted a career which creates a positive
              impact on the world, and helps others enjoy a better standard of
              living.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future?
            </p>
            <p className={styles.postContent}>
              <strong>Elizabeth</strong>: In the near future (5 years or so) I
              still see myself working in a software engineering role hopefully
              doing something that is still challenging and something I can
              learn from. I don’t particularly foresee being in a managerial
              position however I do see myself mentoring others who are just
              starting their STEM careers because I am passionate about
              inspiring others to pursue their interests and also encouraging
              others to see what is beyond just the traditional software
              engineering role. I also have many aspirations outside my career
              such as travelling so I hope that I can also achieve those goals
              as well!
            </p>
            <br />

            <p className={styles.question}>
              What is your favourite aspect of being part of WIT Exec Team 2020
            </p>
            <p className={styles.postContent}>
              <strong>Vivian Wong</strong>: I loved how I could get involved in
              other portfolios, and I was part of the organising committee for
              Flagship events such as the WIT Hackathon, WIT Industry mentoring
              program and Case Crack. WIT gave me the opportunity to write the
              mark scheme and be the moderator for the Hackathon, be the MC of
              events and attend meetings with sponsors, as well as other
              societies. This really allowed me to develop myself personally and
              professionally, and I was able to apply the skills that I learned
              from the WIT experience into other societies and work. WIT has
              opened up a world of opportunities for me, allowing me to meet
              people from diverse backgrounds who are ambitious and passionate
              about the same thing as I am.
            </p>
            <br />

            <p className={styles.question}>
              Who are your personal inspirations and heroes?
            </p>
            <p className={styles.postContent}>
              <strong>Kelly</strong>: From a young age, I was always awed by my
              mother’s perseverance and diligence. As a first generation
              immigrant, she is the founder of her very own computer hardware
              startup, Dotsmart. Thinking back, I witnessed years of her
              managing her company, learning new and challenging skills that was
              critical in striving for a better future. Thus, I am also trying
              to take a page out of her book: “if you work hard on something,
              someday you will be an expert at it.”
            </p>
            <br />

            <p className={styles.question}>
              What is a piece of advice that you would give to your younger
              self?
            </p>
            <p className={styles.postContent}>
              <strong>Gabby</strong>: Something that my younger self and current
              self constantly needs reminding is the importance of prioritising
              tasks and commitments, and to never forget to prioritise your
              mental and physical health first. As an intrinsically competitive
              person, it's so important to remind yourself that we can only
              forge our own futures by competing with the expectations that we
              hold to ourselves, not others - so avoid spiralling down the
              rabbit hole of LinkedIn, you are on your way to where you should
              be.
            </p>
            <br />

            <p className={styles.question}>
              What was the greatest challenge you faced? How did you overcome
              this challenge?
            </p>
            <p className={styles.postContent}>
              <strong>Rhea</strong>: Sometimes, our biggest battles are not with
              the outside world but within ourselves. As I slowly transition
              into the workforce, I cannot help but experience the “Imposter
              Syndrome”. With all this talent Among Us, I irrationally fear that
              others will suspect me as an Imposter.
            </p>
            <p className={styles.postContent}>
              However, I’m not alone. The only way to overcome feeling like a
              fraud is to recognise that you are not one. Don’t devalue your
              worth and undermine your experience - if you focus on your
              strengths, destiny will take you where you are most needed.
            </p>
            <br />

            <p className={styles.question}>
              What’s a motto or quote you live by?
            </p>
            <p className={styles.postContent}>
              <strong>Vivian Shen</strong>: Be the change you seek.
            </p>
            <p className={styles.postContent}>
              This is something I live by and I feel so strongly about. It
              really helps me stay focused, driven and create something that
              will add value and be a positive influence on people’s
              lives.There’s always something you can improve that might not be
              apparent to others. and in times like this it’s extremely
              important to take the first step towards change.
            </p>
            <br />

            <p className={styles.question}>
              How do you stay inspired and creative? What drives you to succeed?
            </p>
            <p className={styles.postContent}>
              <strong>Felicia</strong>: One of the best ways to stay inspired is
              to surround yourself with inspiring people! Any time I’ve got a
              creative block, I ask for advice and feedback to get a fresh
              perspective. In the same vein, working with others is the biggest
              driver for me - knowing that I have expectations to meet and
              succeed, and a team to support and push each other.
            </p>
            <br />

            <p className={styles.question}>
              How has technology influenced you in becoming who you are today?
            </p>
            <p className={styles.postContent}>
              <strong>Elicia</strong>: Technology lies at the forefront of
              almost everything I do. Its influence lies in its power to connect
              people, information, and stories across the globe. From reading
              books and listening to music to sharing photos with friends and
              family, it all feels like an extension of myself as I share my
              passions and interests with others. And through my degrees in
              Computer Science combined with Commerce, I aspire to make the most
              of technology to create a positive impact wherever I am.
            </p>
            <br />

            <p className={styles.question}>
              What are some of the major changes happening to you and do you
              have any tips in adapting to change?
            </p>
            <p className={styles.postContent}>
              <strong>Alison</strong>: Going into the final year of university,
              is a pretty daunting change with the realisation that one chapter
              is closing and the real adult chapter begins from here. Change is
              inevitable and at every milestone we achieve there’s an
              uncertainty about the future and nostalgia of passed time. Through
              my roles within societies, my degree and work the lesson has been
              that change brings opportunities and unpredictability. If we do
              not take the chance to embrace the unknown, we will never know if
              we will succeed or not. Adapting to uncertainty is key in
              understanding ourselves in future.
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
export default blogPost33;
