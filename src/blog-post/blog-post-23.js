import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost23 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #23" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Danni Ovens, Forward Deployed Software Engineer
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>September 16, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              As a 2020 UNSW Software Engineering Graduate, Danni Ovens has
              already followed her passion for software engineering to work for
              companies on three continents. From working as a software
              engineering intern at Google in Sydney and California to interning
              and later working at Palantir Technologies in the UK, she’ll go
              just about anywhere she can use her software engineering training
              to solve complex problems. During her training at UNSW, she
              volunteered her time to share her technical know-how with fellow
              students and children through Code Create, Tutorial Demonstrator,
              and Code Like a Girl. Let’s dive into our interview with this
              rising star!
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              Ever since I was a young girl, I always loved maths and science.
              Eventually when it became time to choose a degree it felt like the
              natural next step to explore engineering. In my first semester of
              uni I (somewhat luckily) found myself in an introduction to
              programming course which piqued my interest in the field and set
              me on the path toward software engineering!
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              In my first year studying software engineering, I started tutoring
              at UNSW and tutored several subjects throughout my studies.
              Outside of uni I also volunteered with organisations like Code
              Like a Girl. During university I had two consecutive internships
              at Google - the first in Sydney and the second in California. In
              my final year I had an internship at Palantir in London and am now
              working as a Forward Deployed Engineer at Palantir in London.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I love the problem solving nature of software engineering, and I
              am so grateful to be able to do that every day! I love working
              with a team to understand and convert complex 'life-sized'
              problems into efficient, usable and sustainable technical
              solutions.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              I believe everyone should feel a sense of belonging doing the work
              that they love doing. For me and many women out there, that place
              is in the STEM industry - but sadly many of these women feel
              excluded or alienated due to the lack role models, colleagues, and
              peers that they can relate to. By showing these girls and women
              that they have a community we can help everyone feel welcome doing
              the work that they love doing, thus diversifying and improving the
              industry as a whole.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              The biggest challenge I've faced so far is the feeling that I have
              started 3 steps behind everyone else and I've had to learn to deal
              with the feeling that I need to prove myself as an engineer.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              Seeing how others have overcome adversity to achieve their goals
              and pursue their passions is an incredible inspiration to me!
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              Be yourself and don't hold back!
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>
            <p className={styles.postContent}>
              “None of us can know what we are capable of until we are tested.”
              <br />- Elizabeth Blackwell
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
export default blogPost23;
