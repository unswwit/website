import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";

class blogPost31 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #31" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Sophie Warner, Tech Intern at National Australia Bank
            </h2>
            <p className={styles.date}>October 14, 2020</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Sophie’s journey began while studying Bioengineering and
              Biomedical engineering at UNSW, where she realised her love for
              computer, coding, and technology. Sophie’s journey has led her to
              Co-Founding Exolution, a tech start-up that aimed to make wearable
              robotics to reduce fatigue and increase activity for the elderly,
              projects in Real Skills Education, and now works as a tech intern
              at NAB. Here, we interview Sophie about her amazing journey and
              lessons she’s learnt along the way.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              I always liked maths and physics in high school and saw
              engineering as the intersection of this which could be applied to
              a practical career. My year 12 physics teacher was absolutely
              amazing, she could calculate logs in her head would do a bunch of
              practical experiments, nearly electrocuting herself once.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>

            <p className={styles.postContent}>
              I came back from my gap year having no idea what engineering
              courses to enrol in, walked into a random office in the science
              building and ended up being enrolled in a fundamental computer
              science course. After growing up never being a particularly
              computer savvy person I absolutely loved the problem-solving
              aspect of it and changed degrees. A few years later I got my first
              internship at NAB which I am currently 8 months into and learning
              lots about cloud computing, system architecture, and security.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>

            <p className={styles.postContent}>
              I'd love to move into a role where I can focus more heavily on
              design; where I'd be able to create the systems not just maintain
              them.
            </p>
            <br />

            <p className={styles.question}>What do you love about your career now?</p>

            <p className={styles.postContent}>
              There is always something more to learn. Every day I have touched
              a new part of the infrastructure or teach myself languages not
              covered in uni such as groovy or jsp.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>

            <p className={styles.postContent}>
              I feel like many women quash their traditional femininity in the
              workplace because it isn't professional. However, the more women
              join STEM the less I'll get scoffed at for not having seen Star
              Wars or not having a Discord account.
              <span role="img" aria-label="smiley face">
                😊
              </span>
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>

            <p className={styles.postContent}>
              Keeping track of a million moving parts to find which one has a
              small fracture.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>

            <p className={styles.postContent}>
              They've helped show me the many varying journeys that can be taken
              to achieve your goals, and how those goals change along the way.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you advised students who
              are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>

            <p className={styles.postContent}>
              Not only being able to talk in front of others but being able to
              talk about technical topics that you have pre-existing knowledge
              about in a professional way. So much of being a software engineer
              is being able to explain and convince, which involves being able
              to rattle off about 20 different AWS acronyms.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>

            <p className={styles.postContent}>
              Get involved in as many activities as possible, especially ones
              with a technical component. Once you graduate there aren't as many
              clubs that'll give you access to amazing resources and
              opportunities in the adult world.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              Katie Boland, Head of Front End Engineering at PWC gave this piece
              of advice for dealing with imposter syndrome: "Always carry a cup
              of tea so that when someone asks you a challenging question, you
              can take a long sip and have a moment to think."
            </p>
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
export default blogPost31;
