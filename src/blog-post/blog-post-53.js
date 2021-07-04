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

class blogPost53 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #53" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Gabrielle Palado, Software Engineer at Google
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>April 14, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Gabrielle Palado is currently a Software Engineer at Google, where
              she engages with the Chrome OS Essential Apps team to work on
              holistic full-stack codebase projects involving the design and
              implementation of handwriting gestures on virtual keyboards. As a
              versatile programmer with experienced knowledge in Java and C++,
              she had led multiple teams to thrive on solutions for existing
              features and began to constantly challenge herself in her profound
              interest after undertaking digital technology lessons back in high
              school. With a Bachelors in Software Engineering, Gabrielle has
              been through her share of achievements through proactively
              participating in many projects of her own and undergoing STEP
              Google program to work on data analysis solutions that were
              presented during their internal competitions! As a STEM woman
              herself, she has definitely broken the stereotypical ice of female
              perceptions in technology and this week, we are privileged to
              discuss our interview with Gabrielle on her passion for technology
              and journey to where she is today.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              My high school offered a digital technologies class where I
              learned the basics of web development, databases, mobile
              development, and robotics. I found I enjoyed the logical way of
              thinking and using it to work through the challenges.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far.
            </p>
            <p className={styles.postContent}>
              In my second year of university, I attended the Google outreach
              event. There I met a Googler who helped me brush up my CV, gave me
              some interview practice, and referred me for a STEP internship. I
              ended up getting the job and worked on the Google Maps Transit
              team for the summer, then returned the next year for an SWE
              internship and worked on the Chrome OS Essential Inputs team.
              After this, I was fortunate enough to be offered a full-time
              position on the Chrome OS Essential Apps team which is where I am
              now!
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              I'm currently still trying to figure out which problems tickle my
              brain the most. I'm hoping that in the future I'll find out what
              this area is so that I can find the opportunities to work on those
              problems, get better at them, and help others with them. I want to
              be in a position where I can pass on what I've learned and help
              others reach their full potential, like what my teammates and
              mentors are doing for me now.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I love the people I work with. They're all brilliant in their own
              ways, yet so approachable and down-to-earth. There's banter and
              there are people sharing their knowledge with each other (both
              work-related and non-work related). Everyone is so supportive of
              each other. It's a space in which I feel safe and encouraged to be
              myself.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              For the longest time, I felt like an outlier, sitting in my Comp
              Sci and Software Eng classes at university. I felt like I didn't
              belong like I wasn't the right kind of person to be pursuing this
              career. It really wasn't until I met the Googler at the outreach
              event that I felt I had a shot. It saddens me to think that so
              many brilliant women have been or may still be in the position I
              was in, but because they didn't have someone who believed in them
              and empowered them they didn't pursue a STEM career. It is
              important for those women to know that they do have a shot, that
              they do belong, and that they are enough. It is important that
              young girls see more women in STEM so they won't have that fear of
              not belonging or not being the right kind of person for the job or
              careers.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              The most challenging part of my career has been dealing with
              Impostor Syndrome, feeling like there must have been some mistake
              in the hiring process and that I landed this job on luck. But
              talking with my colleagues, mentors, and friends, it's something
              that everyone goes through. Accepting that fact helped me realise
              that we're all human and that we've all earned our place here, one
              way or another.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              The Googler that I met at the university outreach event inspired
              me to become a person who gives people hope. I strongly believe
              that there is no cookie-cutter personality that is perfect for a
              job in STEM, and I take every chance I get to share the message of
              "you can". I've had many conversations with classmates and young
              students where their belief that "they can't" stops them from
              trying. I want to give people the encouragement they need to take
              that first step because that can be the hardest part.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>
            <p className={styles.postContent}>
              Knowing how to ask questions is a very important soft skill to
              have. Because the problems in STEM can be so abstract and you'll
              likely be thrown into a problem space you have little experience
              with, knowing the best way to phrase a question and being
              comfortable with asking questions can come in really handy.
              Knowing the fundamental concepts of data structures and algorithms
              and how they can be applied in various problem spaces is also very
              handy. I can highly recommend having a personal project where you
              find a problem that interests you (for me it was translating morse
              code) and see how data structures and algorithms can be used to
              solve it.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              Believe in yourself. It's cheesy, but it's important. It'll give
              you more strength than you thought you had.
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              "I think it's perfectly acceptable and rather admirable to be
              moderately delusional" - Matther Gray Gubler
              <br />A reminder to stay quirky!
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
export default blogPost53;
