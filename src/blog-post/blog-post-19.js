import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost19 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #19" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing : Shatabdi De, Web Developer at Nine Entertainment Co.
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>August 5, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Shatabdi De completed her Masters of IT at UNSW in 2011. Since
              then, she has had the opportunity to utilise creative and
              problem-solving skills, working with Nine Entertainment Co. as a
              frontend developer for the past six years, and a frontend web
              developer for the last three years. In doing so, she has had the
              privilege of watching her programming talents come to life as she
              works on content management systems, campaign and website
              features, research and developing, and much more! Read her
              interview below to find out more about her career journey.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              Science and technology runs in my family, due to them I took up
              maths and science subjects at school. My favorite subject though
              was English. In university I was exposed to various aspects of
              computer science ranging from programming, operating systems,
              matlab, embedded systems etc. I got interested in the web
              programming side of it and that led me to study Masters in
              Information Technology in UNSW. There I enjoyed the subjects on
              web application development(ecommerce, database).
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far.
            </p>

            <p className={styles.postContent}>
              I started as a graduate engineer in Solentive. There I gained
              hands on experience in working with C# .Net, Javascript, SQL and
              other web technologies. I applied the concepts of Java learnt in
              university there. I really liked working with Javascript and
              applied to Channel Nine. I was hired in a creative wing where I
              worked on front end campaigns for partner companies. At that time
              React and Node were new and I wanted to work in that space, which
              led me to changing teams and to my current team Nine Digital. In
              Nine Digital, I work on the suite of nine.com.au websites and
              their supporting applications.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>

            <p className={styles.postContent}>
              Not sure of this at the moment. Sometimes it’s worth trying
              different things to see where they lead you.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>

            <p className={styles.postContent}>
              There’s always a new direction, something new to learn.
              Programming is quite creative, in the sense you are constantly
              problem solving and coming up with ideas and solutions. I love
              seeing something come to life on screen, from a jira ticket to a
              feature on the web. Technology also has a great community. There
              are a lot of meetups, blogs, learning resources both free and paid
              to avail of.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              “Be like water making its way through cracks.” - Bruce Lee (This
              is a long quote, I’ve just put the first line.)
            </p>
            <br />
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
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost19;
