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

class blogPost45 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #45" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Introducing Nicola Daaboul</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>March 10, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Nicola Daaboul is a Principal Asset Management Consultant at
              Assetic, where she uses Assetic’s unique software to manage public
              works and infrastructure. Her journey in asset management began
              after she took a Masters of Infrastructure Management and
              Engineering, Civil Engineering at Monash University from which she
              worked in asset management at major councils throughout NSW before
              taking on her role at Assetic. Throughout her experience, Nicola
              has actively participated as a Director of IPWEA, a board for
              public work consultants like herself to develop professionally and
              technically throughout their careers. This week, we share our
              interview with Nicola about her passion for STEM and exciting
              career path.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              I've always had an interest in science and physics, but it wasn't
              until I attended a Girls in Maths and Science summer school when I
              was 14 that I realised that it was an area I wanted to work in.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              I don't know if I can briefly summarise my career as I haven't
              walked a 'traditional' path and it wasn't until recently that I
              even saw myself as having a career. I never set out to be an Asset
              Management Consultant, work in the public works industry, pursue a
              career in engineering any of the various jobs and roles I've taken
              on in life... I'm fortunate enough to have found a career that I
              love, and I did that through a little bit of trial and error and a
              lot of luck.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              This is perhaps the toughest question for me as I'm still working
              that out. I love public works engineering and asset management, it
              is something I'm very passionate about, so I can see myself
              working in this industry and I'd love to think that I would be a
              world class leader and SME (Subject Matter Expert) in my field.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              The biggest kick I get out of my job is seeing the positive
              influence I have on improving the way organisations manage their
              infrastructure, and take accountability by making informed
              decisions that best serve their communities.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              Diversity of thought. There is so much power in diversity of
              thought, so much can be gained by giving people a voice so that
              they can be heard, and so that they feel comfortable enough to
              speak out and share their ideas, and to have a go. Empowering
              women in STEM is important because women need to feel welcome in
              the STEM industry and they have so much to offer.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              I began my engineering career in a small rural country town and
              felt that I needed to work twice as hard as my male colleagues to
              prove that I belonged...the biggest challenge has been battling
              prejudice, mine and those of the people around me.. I think we all
              have a role to play to break down our conscious and unconscious
              biases about men and women in STEM.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              I began my engineering career in a small rural country town and
              felt that I needed to work twice as hard as my male colleagues to
              prove that I belonged...the biggest challenge has been battling
              prejudice, mine and those of the people around me.. I think we all
              have a role to play to break down our conscious and unconscious
              biases about men and women in STEM.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path to upskill
              on?
            </p>
            <p className={styles.postContent}>
              Being able to clearly communicate and articulate the message you
              want them to walk away with is a critical skill in any STEM
              career. You may have the best idea, the most innovative solution,
              but if you can't communicate it and bring people on a journey with
              you, you will struggle.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              breathe...trust yourself a little more...stop stressing
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              What you are aware of, you are in control of...what you are not
              aware of, is in control of you...Anthony DeMello
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
export default blogPost45;
