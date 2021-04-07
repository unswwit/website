import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost42 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #42" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Edith Chow, Co-Founder of Aperture
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>February 24, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Imagine tackling major world problems with remarkably tiny
              materials on a hand-held device. Not only that, but being a
              scientific leader in this ground-breaking technology. This is real
              to Edith Chow, Co-Founder of Aperture. Edith has taken an
              inspirational journey, utilising nanotechnology and chemical
              sensing to detect contaminants in water and food.
            </p>
            <p className={styles.postContent}>
              Edith’s career began with her Bachelor of Science (Chemistry) at
              UNSW, pursuing her PhD, to working at CSIRO, where she received
              the NSW Young Nanotechnology Ambassador Award in 2010, and NSW
              Young Tall Poppy Award in 2015. This year Edith launched her
              startup, Aperture, aiming to implement her ground-breaking
              research in the real world. We talk to Edith about her amazing
              journey in tech, what inspires her, and the importance of
              increasing diversity within the STEM sector.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              As a teenager, I received a molecular model kit from my Uncle, a
              Professor in Hong Kong, and I remember building some intricate
              chemical structures from them. This sparked my interest to study
              chemistry and understand the nature of chemical reactions. It then
              led me on a fascinating, exploratory journey where I combined my
              love for science and technology to be where I am today.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              After completing my PhD at UNSW, I joined CSIRO where I
              co-invented a chemical sensor that could sniff out trace
              pollutants. CSIRO provided me with the platform to engage widely
              with researchers across different disciplines, and interact with
              industry partners to tackle challenging, global problems. In 2021,
              I co-founded Aperture, to pursue the research and product
              development of devices which harness the remarkable properties of
              nanomaterials.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              It’s an exciting time of change for me as I commence my new role
              at Aperture. Being an entrepreneur comes with its own risks and
              rewards. In the near future, I would love to see one of my own
              products in the hands of consumers, enabling improvements in their
              decision making.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I love having the intellectual freedom to explore what I like and
              be constantly learning and bouncing ideas with like-minded
              individuals. Working in a start-up environment means that we work
              with limited resources and upskill where we can. Although this is
              challenging, this is also a fun part of the experience!
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              Bringing as many ideas to the table is necessary to tackle some of
              the world’s greatest challenges. Women can process and share
              information differently, bring in different experiences, and offer
              different approaches to problem solving. Women need to have the
              confidence to speak up and be heard, and this comes from female
              role models and male champions-of-change.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              Clearly articulating your ideas or solutions to others so they can
              also support your vision can be challenging. It’s not just about
              being a great scientist/engineer, you also have to be great at
              communicating. Also, assembling a great, diverse team that can
              work seamlessly together to achieve these goals comes from
              possessing shared values and mutual respect for one another.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              There have been many people who have shaped me into the scientist
              I am today. At UNSW, my PhD advisors instilled their passion into
              me and taught me the value of hard-work and resilience. I was also
              encouraged to explore my curiosity, try new things, and not to be
              afraid of failure. The process of discovery is a wonderful journey
              but one will always face setbacks. Continue to set high standards
              for yourself, challenge yourself, and work to become a better
              version of yourself.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path to upskill
              on?
            </p>
            <p className={styles.postContent}>
              Gaining industrial experience is the best way to put into practice
              what you learn in the classroom. This allows one to gain a deeper
              understanding of scientific concepts, apply critical thinking, and
              visualise the work’s relevance in a practical manner.
              Additionally, the importance of effective teamwork and time
              management cannot be underestimated. For me, the ability to create
              trust, possess shared values, set clear goals, and juggle
              conflicting demands are key to leading a successful and rewarding
              career.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              Avoid having a rigid mindset of the type of scientist/engineer
              you’d like to become. Explore your passions and skills! Give
              yourself lots of options and don't be afraid to take on a course
              or extra-curricular activity that may be a little different or
              outside your comfort zone.
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              If you really want to do something, you’ll find a way. If you
              don’t, you’ll find an excuse.
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/georgie2021.jpg",
              styles.authorProfile,
              "Georgie Mansfield",
              "Education Executive",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost42;
