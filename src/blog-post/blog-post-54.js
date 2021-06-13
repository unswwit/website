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

class blogPost54 extends Component {
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
        console.log(this.state);
      },
      simpleSheet: false,
    });

    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #54" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Lina Kim, Engineer at Cochlear
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>April 28, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Lina Kim is a graduate engineer at Cochlear, where she
              collaboratively develops hearing implant technology. Having
              studied biomedical engineering with a focus on IT, Lina has delved
              into a range of health and technology industries during
              university, including summer internships with both Deloitte and
              Cochlear. Lina has expressed a passion for innovation and
              diversity throughout her journey, and we are keen to hear her
              insights about working at Cochlear and upskilling for similar
              opportunities in our interview this week.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              It’s an old cliché - when I was younger, I wanted to become a
              doctor. However, as I grew older, I had this growing realisation
              that my passion didn’t lie in becoming a doctor but in helping
              others. This distinction was personally important to me because it
              no longer mattered what I became as long as I was going in the
              right direction. I knew I always had a keen interest in
              technology, innovation, and creativity so when I stumbled upon a
              biomedical engineering degree (actually at a UNSW Careers Fair),
              it was a ‘This is it’ moment.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far.
            </p>
            <p className={styles.postContent}>
              My major in Biomedical engineering was IT. This presented me with
              a lot of options in terms of where to start my career journey. I
              did a short project with a tech company, did my thesis with a
              hospital research team, interned at a consulting firm, and
              eventually ended up at a medical device company, which is where
              I’m working as a graduate engineer at the moment.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              Surprisingly, I don’t have a clear plan for my future career. I
              enjoy what I do now so I will try to learn as much as possible
              from other engineers I work with and where I end up in the future!
              For the next few years at least, I would like to stay as an
              engineer and get as much hands-on experiences as possible in this
              field.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              People! They are so knowledgeable, passionate, supportive, and
              always willing to help each other. Over time, they have built this
              amazing culture where junior engineers like me can really be
              ourselves and feel safe to experiment with things.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              Another cliché – diversity is the key. In my past experiences, the
              outcomes of projects were much more satisfying when I worked in a
              diverse team. We were able to bounce ideas off each other and this
              kind of diversity brought different perspectives to the team. I
              believe encouraging women in our society to not limit themselves
              in terms of where they go or what they see themselves doing is
              crucial.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              The most challenging aspect for me is that there is so much more
              that I don’t know. I think this is something that makes careers in
              the STEM industry fascinating but also challenging. With the help
              of my colleagues, I have learned that there will always be
              something I don’t know and that’s okay.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              I met a director at a consulting firm I interned at in my 3rd
              year. Being an intern, I didn’t have a lot of interactions with
              her but until this day, she is my leadership role model and an
              inspirational figure in my life. Her leadership style contradicted
              what I believed to be effective before that internship and it
              completely blew my mind that someone can be soft and affirmative
              at the same time.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>
            <p className={styles.postContent}>
              I would recommend upskilling on two skills – one that is relevant
              to what you study and one that you have no knowledge of. Being
              well-versed in areas that were not directly relevant to my degree
              helped me through a lot of things. I recommend upskilling on areas
              that are relevant to your degree because you might already be
              expected to be proficient in those areas.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              Make it a habit to keep a healthy lifestyle.
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              "Sky is your limit"
              <br />
              Aim for higher than what you think you can do, and you’ll achieve
              much more than you expect.
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
                  to={"/resources/blog"}
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
export default blogPost54;
