import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost17 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #17" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing: Natasha Jones, SAP Consultant at Deloitte
            </h2>
            <p className={styles.date}>July 29, 2020</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Natasha Jones’ journey began with her studies in Marketing and
              Business Information Systems at university. She excelled in this
              area and was twice awarded as a High Achiever in Database Design
              and Information Systems. Her professional career began as a Junior
              Marketing Analyst for BRITA, after which she moved into consulting
              continuing to make an impact with 180 Degrees Consulting, where
              she was awarded Most Valuable Consultant, and with her team, voted
              Most Collaborative. With this amazing success, she moved to her
              current role at Deloitte. This week, we join Natasha as she
              reflects on her journey through STEM, and how she has continued to
              strive for success.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              I’ve always felt naturally geared towards STEM. I’ve explored STEM
              and non-STEM subjects in high school, and whilst I enjoy both
              areas, I was most curious and interested in Technology. My passion
              in STEM grew from here and I went on to study a Bachelor’s degree
              in Information Systems at University.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              After completing my Bachelor’s, I worked in different areas
              including Operation-driven analytics and Social Media. Then, I
              joined Deloitte as a Graduate in the SAP Consulting practise
              almost three years ago. During my time with Deloitte, I have
              specialised in the design and delivery of modern financial
              consolidation, budgeting and planning solutions across resource,
              public, and consumer product industries!
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              I see myself leading valuable technology-driven transformation
              programs to help businesses maximise company-wide success.
            </p>
            <br />

            <p className={styles.question}> What do you love about your career now?</p>
            <p className={styles.postContent}>
              I enjoy consulting, designing and delivering transformative
              solutions that help businesses improve their internal processes
              and efficiencies. I also love the amount of exposure I get in
              working with clients across different industries.
            </p>
            <br />

            <p className={styles.question}> Favourite Quote or Motto?</p>
            <p className={styles.postContent}>
              When you want to succeed as bad as you want to breathe, then you
              will be successful
            </p>
            <p className={styles.postContent}>- E. Thomas</p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/georgie.jpg",
              styles.authorProfile,
              "Georgie Mansfield",
              "Education Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost17;
