import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost20 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #20" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing : Aneita Yang, Product Manager At Atlassian
            </h2>
            <p className={styles.date}>2nd September 2020</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Aneita Yang is product manager of Bitbucket Cloud at Atlassian, a
              program that allows teams to manage workflow from design to
              implementation as well as edit and deploy the code these teams are
              working on. Aneita has had fascinating experience in a variety of
              technological fields, including animation and visual effects at
              Animal Logic, an internship at a software engineer at Google where
              she developed new web tools for Google Drive, and cyber security
              as Product Manager of Identity at Atlassian, while also spreading
              her enthusiasm and passion for computer science as a tutor at
              UNSW. In her current role as Product Manager for BitBucket Cloud,
              Aneita has worked with international companies such as Microsoft,
              Amazon, JFrog, and SonarCloud in helping integrate BitBucket Cloud
              into their everyday operations. Keep reading to learn more about
              Aneita’s philosophy, journey in STEM, and how computer science has
              constantly changed her perception!
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              STEM wasn't really something that was promoted while I was at high
              school but I always had an interest in technology. Technology was
              everywhere and it had led to a lot of transformations in peoples'
              day-to-day lives but also in numerous industries and that always
              fascinated me. I decided to enrol myself in a computer science
              degree, ended up loving it, and the rest is history!
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far.
            </p>

            <p className={styles.postContent}>
              After graduating from university, I joined Atlassian as a product
              manager. I worked on Bitbucket Cloud for close to 3 years before
              going on to join the Identity team. Despite originally planning to
              pursue a career as a software engineer, I discovered the role of
              product management during one internship and have never looked
              back.
            </p>
            <br />

            <p className={styles.question}>What do you love about your career now?</p>

            <p className={styles.postContent}>
              Being able to work with different people from all around the
              business on challenging problems. The team around me helps me
              continually learn and grow.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>Fail fast!</p>
            <br />
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
export default blogPost20;
