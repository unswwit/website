import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost66 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #66" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Daanisha Mistry, Consulting Development Analyst at Accenture
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 21, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Since a young age, Daanisha Mistry has always been interested in STEM, which is reflected in her studies. She undertook a double degree in Mechatronics Engineering (Honours) and Commerce, writing her honours thesis on the applications of deep learning for autism spectrum disorder analysis. Daanish is self-driven and determined, tackling any technical challenge given to her. She later interned at Accenture as a technology analyst and this week, we asked Daanisha about her career journey.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              STEM just made sense - I was always big on all the science subjects through school. Adding to that, I had a really supportive teacher throughout high school who encouraged me to pursue a career in engineering.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>

            <p className={styles.postContent}>
              I started as an intern at Accenture while at uni and was offered a graduate position soon after. I started as an analyst last year and have worked in 3 very different industries during my time so far. I've been lucky enough to work across vastly differing projects and am slowly finding my niche within consulting.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future?
            </p>

            <p className={styles.postContent}>
              I hope to dive deeper into the world of data analytics. I think it’s a really interesting and impactful space with a lot of potential for growth.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>

            <p className={styles.postContent}>
              The ability to try out lots of different things. As cliché as it is, no two days are the same. Everyday poses a new challenge or task so you're always kept on your toes.
            </p>
            <br />
            
            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>

            <p className={styles.postContent}>
              Finding that perfect work-life balance but, total disclaimer, I think this is something everyone starting out in their career struggles with.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your career?
            </p>

            <p className={styles.postContent}>
              Working with different people and learning from their work ethic and drive to educate themselves both at work and outside has really molded my approach to work and how I view and tackle challenges.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students who are interested in pursuing a similar career path (for internship/graduate role) to upskill on?
            </p>

            <p className={styles.postContent}>
              There is no doubt coding skills are a valuable asset to have, so I would encourage learning a coding language such as R or Python; familiarising yourself with cloud technologies; or understanding how to create impactful data stories.
            </p>

            <p className={styles.postContent}>
              More importantly, soft skills for any graduate entering the workforce would include communication, team collaboration, being inquisitive, and a positive attitude is a must. For some reason, there's this weird preconceived notion that graduates have that they should already know everything, which is so wrong. Asking questions and clearing up confusions is also a really important skill to have. It's always better to ask than to assume.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger self back in university?
            </p>

            <p className={styles.postContent}>
              Get involved in societies and go to more parties.
            </p>
            <br />

          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "natalie-leroy": [
              "/potraits/blog-authors/natalie-leroy.png",
              styles.anonProfile,
              "Natalie Leroy",
              "Education Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost66;
