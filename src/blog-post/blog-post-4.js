import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost4 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #4" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing: Syin Li Tan, Consultant at Deloitte
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 10, 2020</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Syin Li Tan has all the hallmarks of a promising career at
              Deloitte Consulting in Australia. Upon graduating with a master’s
              degree in Information Systems from Monash University in 2017, she
              became a graduate in Deloitte Melbourne's Enterprise Applications
              (SAP) practice. Just 18 months later, Syin advanced to an SAP
              Consultant role, specializing in implementing SAP S/4HANA Project
              Systems.{" "}
            </p>
            <br />
            <p className={styles.postContent}>
              Most young professionals don’t land their dream job right out of
              university. But before Deloitte welcomed Syin to their team, she
              had completed four internships for tech companies, earned awards
              for academic excellence, and volunteered as a photographer and
              musician.{" "}
            </p>
            <br />
            <p className={styles.postContent}>
              Let’s read what Syin had to say about her journey into tech below.
            </p>

            <p className={styles.question}>
              {" "}
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              Modern. Evergreen. Fast-paced. Constantly moving. That’s what drew
              me to the field of Technology!
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              {" "}
              After completing my degree, I started at Deloitte as a Graduate in
              Deloitte’s Graduate Program where I was equipped with foundational
              consulting skills and started building my knowledge in SAP. I am
              now an SAP Consultant, building a speciality in SAP project
              systems within Deloitte’s SAP Practice in Melbourne.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              In the future, I hope to be seen as the “go-to person” for SAP
              Project Systems and other modules in finance and procurement. I
              also aspire to be a great manager of people and teams.
            </p>
            <br />

            <p className={styles.question}>What do you love about your career now?</p>
            <p className={styles.postContent}>
              I love that I work with individuals who uphold integrity in their
              lives and work, and individuals who have ambition to constantly
              improve and achieve excellence.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>
            <p className={styles.postContent}>
              “Whatever you do, work at it with all your heart.
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
export default blogPost4;
