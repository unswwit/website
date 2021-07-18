import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../components/header";
import ShareBtns from "./ShareBtns";

class blogPost15 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #15" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              A Journey in IT with Zitni Handoo
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 19, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Zitni, a final year IT masters student from India, dreams big. She
              would love to use her knowledge of AI to contribute to solving
              problems like cyber attacks or diagnosing diseases. In this blog
              post, we share our Q&A with Zitni, covering everything from her
              inspiration to study AI to the most challenging aspects of
              university life. Get ready to take some notes!{" "}
            </p>
            <br />

            <p className={styles.question}>What is your degree about?</p>
            <p className={styles.postContent}>
              I'm studying Information Technology, and my specialization is
              Artificial Intelligence.The courses are mostly technical and
              involve lots of coding, broadly covering major aspects of IT.
            </p>
            <br />

            <p className={styles.question}>
              What inspired you to explore your topic?
            </p>
            <p className={styles.postContent}>
              During my bachelor’s studies, I took up Artificial Intelligence as
              one of my subjects. While studying it, I realized just how much I
              was fascinated by it and how I wanted to explore the field
              in-depth. I've been a fan of reading Sci-fi novels since I was a
              teenager, and I have read quite a bit with AI in them. And again,
              I've never felt like it when it comes to any other subject that
              I've studied. I just knew that my further studies had to be
              related to AI. AI is literally going to be incorporated in almost
              every aspect of our lives in the years to come. It has already
              begun and it’s only a matter of time before it starts booming
              rapidly.{" "}
            </p>
            <br />

            <p className={styles.question}>
              What skills are most important in order to successfully complete
              the degree?
            </p>
            <p className={styles.postContent}>
              I believe that it's very important to be diligent in your studies,
              and consistent hard and smart work is the key. Things can get
              overwhelming at times, and that's alright. What's important is
              that we give our best and stay patient. Throughout the degree,
              there will be various opportunities to interact with fellow
              students and work on projects - so effective communication also
              plays a very important role.{" "}
            </p>
            <br />

            <p className={styles.question}>
              What piece of advice would you give your younger self?
            </p>
            <p className={styles.postContent}>
              I would tell my younger self to continue working without thinking
              of the outcome and enjoy what you're studying. It's so important
              to enjoy what you do, and once you do that, things will
              automatically fall into place.
            </p>
            <br />

            <p className={styles.question}>
              How did you open opportunities to yourself?
            </p>
            <p className={styles.postContent}>
              I attended all the lectures and interacted with the professors and
              students to learn about opportunities. And I also actively took
              part in any volunteering opportunities I learned about. During the
              second trimester, I volunteered for the RoboCup event at the ICC
              and frankly, it was really amazing!
            </p>
            <br />

            <p className={styles.question}>
              In your opinion, what are the most important skills needed in the
              workforce?
            </p>
            <p className={styles.postContent}>
              Technical skills are important, like coding. In addition, various
              soft skills are vital like good communication, teamwork,
              analytical abilities, problem solving, management, and critical
              thinking.
            </p>
            <br />

            <p className={styles.question}>
              What is your biggest eye-opening moment in recent years?
            </p>
            <p className={styles.postContent}>
              The biggest eye opening moment was realizing that if I'm
              determined to do something which I am passionate about, it will go
              a long way in helping me come over the obstacles along the way. A
              lot of difficulties arise when pursuing a degree. But I realized
              that if there is any moment where I'm not sure of what to do, I
              can seek comfort in knowing that I'm pursuing what I am extremely
              passionate about, and continue working. This idea has been really
              eye-opening. You not only tend to succeed in what you are
              pursuing; you start to believe in yourself in a way you've never
              before.
            </p>
            <br />

            <p className={styles.question}>
              What would you like the impact of your degree to be?
            </p>
            <p className={styles.postContent}>
              The applications of AI are spreading far and wide - from
              driverless cars to cybersecurity intelligence to virtual
              assistants. I'd like my education to serve the society in a
              positive way - for example, maybe work to better disease diagnosis
              and medication to provide these facilities to people anytime
              anywhere, or even security enhancement, where AI technology could
              be used to understand and improve the cyber environment and help
              prevent attacks. Or maybe I could use this technology for the
              agricultural sector, allowing farmers to know everything using
              their devices such as detecting pests and predicting crop yields.
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
export default blogPost15;
