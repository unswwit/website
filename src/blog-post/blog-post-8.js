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

class blogPost8 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #8" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              WIT Crush Wednesday - Dr Marguerite Evans-Galea
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 24, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Dr. Marguerite Evans-Galea is one of Australia’s leading
              scientists, respected and known internationally for her research
              in cell and gene therapies.
            </p>
            <br />

            <p className={styles.postContent}>
              In a 2017 radio interview published by ABC Sunday Extra in 2017,
              Marguerite reflected on her path into STEM and the challenges
              women faced entering these professions. But STEM was not her first
              choice. Initially, Marguerite was drawn to classical music and
              dreamed of becoming a music therapist. Whilst reading the
              discovery of the structure of DNA by James Watson, Marguerite fell
              in love with DNA in high school. She expressed that “I loved the
              idea of solving something at the molecular level”, and was
              immediately drawn to the complexities and excited by the
              challenges in science.
            </p>
            <br />

            <p className={styles.postContent}>
              Graduating with a Ph.D. in Molecular Biology from UNSW, Marguerite
              was enthusiastic to start her career in the US as a postdoctoral
              fellow at the University of Utah. Here, she really began to
              understand the premise of a male-dominant culture in STEM. As a
              leading advocate for women in technology, Margarite does not
              believe there is any lack of interest, passion, or ambition for
              girls and women to enter the STEM field. However, she outlines
              that the field has not been the most accommodating to women,
              especially for those who want families. She finds that the rolling
              contracts and competitive atmosphere in STEM are unforgiving for
              women who take career breaks to have a child, posing as a
              significant barrier for women interested in STEM. Nonetheless, she
              managed to successfully build a family whilst growing her career!{" "}
            </p>
            <br />

            <p className={styles.postContent}>
              After her postdoctoral work, Margarite began working at St Jude
              Children's Research Hospital in Memphis, Tennessee to pursue her
              passion for helping people, by developing current research to cure
              patients. Here, she published her first academic article in the
              Science publication, “Molecular Therapy.” A few years later, she
              joined the clinical team at the Bruce Lefroy Centre for Genetic
              Health Research at the Murdoch Children's Research Institute in
              Australia, where she works to this day and has published 15 more
              scholarly works. She helped develop cell and gene therapies for
              Friedreich’s Ataxia, a neurodegenerative disease that affects
              children. The goal of her research is to understand disease
              mechanisms and develop safe, effective therapies for Friedreich
              ataxia that readily translate to the clinic. As a result,
              therapies services will be more accessible to patients from
              different backgrounds who are diagnosed with Friedreich’s Ataxia
              backgrounds.
            </p>
            <br />

            <p className={styles.postContent}>
              As Marguerite’s career has blossomed, she has devoted herself to
              inspiring more women and students into STEM. In 2017, she became
              the Executive Director for the Industry Mentoring Network for
              STEM. ” She serves on the steering committee of the Science in
              Australia Gender Equity Forum and is the co-founder of Women in
              Science, Australia. Reflecting on her work, she expresses that “I
              work with a lot of young people in research and sometimes you have
              to say to them “don’t worry, be happy!” Try not to worry about the
              future. Just embrace it and go for it." Having received numerous
              awards for her research and leadership, Marguerite says all of it
              was possible due to her “sheer and utter determination.”
              Marguerite’s success is living, breathing, proof that there is a
              place for women in STEM, in research, in the hard sciences. She
              admits that it is a difficult path, yet the obstacles look
              surmountable, and the rewards large because of women like
              Marguerite.
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
export default blogPost8;
