import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost11 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #11" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>AI in the Workplace</h2>
            <p className={styles.date}>July 4, 2020 </p>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 4, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              “Will AI take my Job?” is one of the most googled questions on the
              internet and probably a question many readers have considered
              themselves. However, I am here to tell you the answer to that
              question, and the answer is… probably not.{" "}
            </p>
            <br />

            <p className={styles.postContent}>
              Why? Because Artificial Intelligence needs humans, and humans need
              AI. AI is creating new industries, changing the way businesses
              work and changing what the workplace looks like. However, it is
              not replacing people but helping people with their jobs.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              So, what does AI in the workplace look like?
            </p>

            <p className={styles.postContent}>
              AI is helping the medical industry to not only create new jobs and
              research opportunities but to better the lives of people affected
              by diseases.{" "}
              <a href="https://sites.google.com/view/project-euphonia/">
                Project Euphonia
              </a>{" "}
              at Google AI is giving people with Amyotrophic Lateral Sclerosis
              (ALS) the ability to communicate and be understood. After
              recording thousands of phrases of ALS patients at varying stages
              of their illness, the team has trained voice recognition software
              to understand impaired speech and convert it into text. In the
              later stages of ALS, it can be almost impossible to understand a
              person’s speech, and AI is giving them the ability to communicate.{" "}
            </p>
            <br />

            <p className={styles.postContent}>
              This is where society can realize the outstanding benefits of AI.
              It can understand humans when other humans can’t. It is able to
              process mass volumes of data at incredible speeds. It can drive
              vehicles, predict eye disease and even make us pizza. But what it
              can’t do is learn in isolation and that’s why this technology
              needs to be utilized for good.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              How Will AI Affect Job Loss and Growth?
            </p>

            <p className={styles.postContent}>
              Gartner predicts that in 2020, 2.3 million new jobs in the health
              care, public sector, and education sectors will be created by AI.
              At the same time, manufacturing jobs will be eliminated as a
              result of AI, perhaps as many as 1.8 million jobs.
            </p>
            <br />
            <br />

            <p className={styles.question}>AI is Not All Powerful</p>

            <p className={styles.postContent}>
              Researchers at <a href="https://robohub.org/">RoboHub</a> at the
              University of Waterloo said the biggest misconception among the
              public is that robots are far more capable than they are. The
              researchers are trying to teach their robots to see and perceive
              the world like humans. In their opinion, AI works best in
              environments that are controlled and predictable like the
              construction or manufacturing industry. Here AI can help to reduce
              human error and make workplaces safer.
            </p>
            <br />

            <p className={styles.postContent}>
              Humans are learning from AI, working with AI and understanding the
              benefits of AI. In the Construction, Manufacturing, Food or
              Medical industry, AI can only succeed when partnered with humans.
              And that’s why… AI is not going to take your job, and may in fact,
              create a new world of job possibilities.
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "elisa-sanjurjo": [
              "/potraits/blog-authors/elisa.jpg",
              styles.authorProfile,
              "Elisa Sanjurjo",
              "Education team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost11;
