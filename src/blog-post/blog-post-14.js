import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../components/header";
import ShareBtns from "./ShareBtns";

class blogPost14 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #14" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing: Hannah Beder, Creative Technologist at Creatable and
              NSW Young Woman of the Year 2020
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 15, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Hannah Beder is a Creative Technologist at the startup Creatable,
              a tech education company preparing young women for the future of
              work. She is extremely passionate about tech, education, and
              supporting young women in STEM fields. Before joining Creatable,
              she found time to volunteer at the Coder Academy and Code Like a
              Girl whilst being a software engineer at the Macquarie Group. Her
              passion for teaching began while she was completing a Computer
              Science degree at UNSW, where she found time to develop and teach
              an introductory course in computing to high school students and
              tutor her peers in Computer Science and Engineering.
            </p>
            <p className={styles.postContent}>
              We’re excited to share a recent Q&A we had with Hannah about her
              career journey in STEM.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              I fell into STEM by accident - I spent most of high school
              focusing on music and language, and I nearly went to music school!
              I didn't know what engineering really was, but I knew I didn't
              struggle too much with maths, and that I had a good balance of
              problem solving and creative thinking. Engineering seemed like a
              good place to start.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              During my studies I interned with Google in Sydney and Seattle,
              worked at an AI startup, and tutored many subjects at UNSW. I
              worked as a Software Engineer at Macquarie Group for two years
              after graduating, and recently took a new role as a Creative
              Technologist at a tech education company called Creatable. I’ve
              also kept teaching casually on the side with Code Like A Girl and
              Coder Academy!
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              I see myself making technology more accessible and exciting for
              young women, while exploring the ways that technology intersects
              with and enhances other industries and disciplines.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I love that my career is now a genuine expression of who I am. I
              feel like I can be my best self when I’m using my skills to pursue
              my passions. Investing in the future of young women is engaging
              and the passion is infectious, I’ve never felt more supported by
              people who have watched me grow.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              All roles will require some level of technical proficiency,
              whether that’s abstract skills like problem solving and ideation,
              or ‘hard skills’ like deeper computing literacy and specialised
              technical knowledge. The STEM industry is the future of work, and
              diversity begets more inclusive and creative solutions. It is
              imperative that women are able to have a hand in building the
              future they will inhabit.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              "Never let perfection get in the way of good enough". I know that
              sounds like a motto for people who want to slack off, but it has
              helped me course correct when I let perfectionism get in the way
              of acknowledging my progress and success.
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
export default blogPost14;
