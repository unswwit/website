import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost10 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #10" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing: Lana King, Senior Consultant of Deloitte
            </h2>
            <p className={styles.date}>July 1, 2020</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Lana King is a Senior Consultant at Deloitte Australia,
              specialising in Enterprise Technology exploring how information
              technology resources and data are used across businesses and
              projects. King undertook a Bachelor of Science and Engineering at
              Monash University where she majored in Mechanical Engineering,
              Applied Mathematics, and Astrophysics. After completing her
              degree, she took a Summer Internship role at Deloitte which then
              provided her with the opportunity to become an analyst and then
              consultant.{" "}
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              Growing up I always liked finding out how something worked, being
              able to pull it apart and put it back together. Studying
              engineering was the logical step for me and I loved the problem
              solving that came with it.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              I joined Deloitte after completing a Vacation Program 3 years ago
              in the Enterprise Technology SAP team and have been here ever
              since.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?{" "}
            </p>
            <p className={styles.postContent}>
              I would like to continue growing my career with Deloitte, learning
              as much as I can and taking every opportunity that comes my way.
            </p>
            <br />

            <p className={styles.question}>What do you love about your career now?</p>
            <p className={styles.postContent}>
              I love that I get to work with such a diverse group of people with
              different backgrounds, skill sets, and time-zones on different
              exciting projects. It gives me the opportunity to build
              relationships with people I never would have met otherwise.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>
            <p className={styles.postContent}>
              Be who you are and say what you feel, because those who mind don't
              matter, and those who matter don't mind <br />– Dr. Seuss
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "victoria-ruming": [
              "/potraits/blog-authors/victoria.jpg",
              styles.authorProfile,
              "Victoria Ruming",
              "Education team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost10;
