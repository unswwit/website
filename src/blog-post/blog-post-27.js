import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost27 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #27" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing: Ankita Singh, PHD Student
            </h2>
            <p className={styles.date}>September 30, 2020</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Ankita Singh is a PhD student at UNSW where she is optimising
              analysis of rocks through techniques and concepts used by Harvard
              Medical School and the Netherlands Cancer Institute. Ankita began
              her journey as a student in petroleum engineering at UNSW where
              she gained experience at Woodside energy in using and building
              algorithms to determine amounts of oil and gas present, and helped
              to improve analysis methods to develop greater accuracy, reduce
              mathematical parameters, and minimise errors in data.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              Studying STEM gives us younger generations the chance to be the
              change we want to see in society. Whether it be addressing climate
              change, making government policies, or developing the self-driving
              car technology - STEM gives us the power to live the wildest, yet
              the most impactful dreams.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>

            <p className={styles.postContent}>
              I completed a Bachelor of Petroleum Engineering (Honours) in 2016
              at UNSW. During my Bachelor's degree, I have contributed immensely
              to the UNSW student community in the role of Peer mentor and
              Petroleum Engineering Student Ambassador, and consequently, was
              awarded the 'Engineering Student Service Award'. Since then, I am
              pursuing doctoral studies at UNSW School of Minerals and Energy
              Resources Engineering with a focus on image analysis, data
              science, and rocks. To keep myself updated with the energy
              industry, I have also had internships at Woodside Energy in Perth.
              Finally, I look forward to finishing my doctoral studies in 2020
              and be more involved with the energy industry to contribute to a
              greener and cleaner future.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>

            <p className={styles.postContent}>
              I really believe that the more exposure one has to real-world
              problems, the better one can contribute to the community and think
              out-of-box. As I finish my doctoral studies, I aim to get a
              360-degree experience in petroleum, mining, renewable, and data
              science industries. The need to gain experience in this
              quadra-combo will guide my future career roles in the short to
              medium term.
            </p>
            <br />
            <br />

            <p className={styles.question}>What do you love about your career now?</p>

            <p className={styles.postContent}>
              I absolutely love that I learn something new every day. As a
              doctoral student, you learn to never give up and tackle the same
              problem in so many different ways that it will amaze you how
              thinking differently and collaborating can lead to great
              innovations. Looking at my career in a broader sense, being a part
              of such a diverse energy and resources industry, thrills me every
              day because there is a vision that I can live up to and that is to
              be able to bring electricity to those households who are currently
              deprived of such luxuries.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>

            <p className={styles.postContent}>
              In the last few years, we have all witnessed that technology has
              developed and progressed at a lightning speed. From a business
              perspective, implementing some of these outstanding technologies
              has been challenging in the mining and petroleum industry. This is
              even the case when we know that we need it to keep the costs low
              and be more efficient. Therefore, I think being able to use
              state-of-the-art data science and cloud computing technologies to
              bring in the value to the companies is a big challenge. More so,
              there are multiple avenues to improve performance and address
              issues such as climate change and human rights policies that help
              the energy companies operate in harmony with everyone.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>

            <p className={styles.postContent}>
              My family is my biggest inspiration. My father taught me to never
              give up, my mother (a.k.a my superwoman) taught me to always hold
              my moral values and be accountable for my actions, and my younger
              sister (a.k.a the smarter sibling) has supported me to be a
              stronger person.
            </p>

            <p className={styles.postContent}>
              While at university, my Ph.D. supervisors inspired me at every
              step and took me by hand as a young 19-year old till today to
              imbibe those skills that will help me march ahead and be a great
              team player. I have also had some awesome managers during my
              internships who stay in touch, believe in me, and support me
              whenever I am in doubt. The list never ends. I think everyone who
              has inspired me has left a footprint in my career history that
              reflects my learnings from them. I am grateful and thank everyone
              who has been such great support in my journey so far.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you advised students who
              are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>

            <p className={styles.postContent}>
              Be open. Communicate. Be Willing to Learn. Build those networks.
              Contribute wherever you can. Take risks and never sit back. You
              can grow only when things aren't the most comfortable for you. Be
              humble and keep your moral values.{" "}
            </p>

            <p className={styles.postContent}>
              It really doesn't matter what career you chose, you could be a
              great painter or an excellent engineer but without the drive and
              honesty... it's hard to keep up.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>

            <p className={styles.postContent}>
              Take it slow. You might not know the answers to all your questions
              but believe that whatever you deserve will eventually come to you
              at the right time. Until then, enjoy the ride and smile wide.
            </p>
            <br />
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              If you never try, you'll never know what you are capable of.
              <br />– John Barrow
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
export default blogPost27;
