import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost58 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #58" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Melanie Dietrich, Data Analyst at Raisin & Co-Founder
              of Women In Data x Business
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 16, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Being both a Data Analyst at Raisin, a Berlin Fintech company and
              Co-Founder of Women in Data x Business, Melanie Dietrich has
              clearly demonstrated amazing qualities as a successful woman in
              her STEM career as she strives for equal representation in gender
              opportunities. It is certainly no easy feat and taking a huge leap
              of faith back in her early years, she grew an immense passion for
              data analytics and coding which led her to embark on an intensive
              Python online course, eventually landing a Data Analyst role at
              one of Berlin’s fastest growing Fintech companies. As someone who
              has displayed outstanding traits as a lifelong learner , Melanie
              has co-founded a female empowering network to promote gender
              diversity in business, data-driven careers and proven that women
              can also be part of the STEM community today.
            </p>
            <p className={styles.postContent}>
              It is splendid to witness her learning growth and perseverance
              towards a career shift in STEM and we are delighted to share our
              interview with Melanie on her unwavering passion for all things
              DATA!
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              I always enjoyed extracting insights from data and looking at all
              the perspectives.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              I studied business and worked for one of the Big 4 consulting
              companies in audit for 5 years, where I learned a lot about
              business processes and financial statement data. After that I
              wanted more from life, went travelling and became a digital nomad
              for a couple years, while working for an E-Commerce Start-up as
              Operations Manager. Handling the data there I encountered the
              limitations of Excel and got tempted to learn how to code to be
              able to extract even better insights from it more easily. So I
              taught myself SQL and some Python online (through Codecademy) and
              after 9 months of studying and networking I finally found a job as
              Data Analyst at a Fintech Startup in Berlin, Germany.
            </p>
            <br />

            <p className={styles.question}>
              {" "}
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              I love Data Analytics but might pivot into Data Science if I find
              I enjoy that or focus on a certain area of it, like visualization.
              I would love to be able to work remotely again and even freelance
              if need be. I also really enjoyed leading a team in my previous
              job.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I love that it's bridging the gap between business and tech. I can
              implement a tech solution to empower the stakeholders of various
              business lines to make data driven decisions for the benefit of
              the whole company.
            </p>
            <br />

            <p className={styles.question}>
              {" "}
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              Women have been discouraged to enter the STEM field for way too
              long even though many great inventions were made by them. It's
              time to turn this around and work towards equal representation to
              move away from a world view centered around men.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              Understanding and managing stakeholder expectations around
              timelines, availability and possibility of data implementations.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              I got all my jobs through people believing in me, which inspired
              me to do my best and prove them right. That is also why I
              recommend to connect to people a lot, for example through
              networking at meetups, job fairs etc.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>
            <p className={styles.postContent}>
              Hard Skills: Data Cleaning and Analytics with SQL and Python
              <br />
              <br />
              Soft Skills: ability to connect and translate business needs into
              a data use case and back when solved, understanding and managing
              stakeholder expectations, communication in general
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              You don't need to have all the answers yet on where this will take
              you. Let it all unfold as you go along and trust in your ability
              to cope.
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              'Without data you're just another person with an opinion' - W.
              Edwards Deming
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/erika-shi.png",
              styles.authorProfile,
              "Erika Shi",
              "Education Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost58;
