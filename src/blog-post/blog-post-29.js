import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";

class blogPost29 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #29" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Davina Adisusila, Engineering Team Lead at Eucalyptus
            </h2>
            <p className={styles.date}>October 10, 2020</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Davina Adisusila, a former UNSW Computer-Science student, has put
              her skills and knowledge to great use over the years. In the past,
              she interned as a software engineer at News Corp Australia and
              Google, and as a software developer at Atlassian. She would also
              go on to work at Atlassian as a fully-fledged software engineer.
              Currently, Davina works as the Engineering Team Lead at
              Eucalyptus, a brand engine that builds and runs digital consumer
              companies. In this Q&A, Davina elaborates on the experiences and
              advice she has gained during her incredible journey.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              Growing up I was really fascinated by Pixar's skill of evoking
              emotion and long lasting memories in its audiences through 3D
              animation. From there I started exploring the digital world, which
              unlocked a passion for building and creating in the technology
              space through coding.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>

            <p className={styles.postContent}>
              I studied Computer Science at UNSW and did multiple internships as
              a Software Developer at companies including Google and Atlassian.
              I continued on as a full time developer at Atlassian, working on
              products that enabled all kinds of teams and developers. I grew
              fond of big tech companies, but decided to take a leap of faith
              and joined a fast growing startup called Eucalyptus where I am now
              the Engineering Team Lead. We've built pilot.com.au and
              kinfertility.com.au and I'm absolutely loving working in
              telehealth.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>

            <p className={styles.postContent}>
              I feel like I've changed a lot in the past few years, and I still
              have a lot to learn and grow into. So far I'm enjoying the
              management path of technical teams and am excited to see where it
              takes me.
            </p>
            <br />

            <p className={styles.question}>What do you love about your career now?</p>

            <p className={styles.postContent}>
              My career has allowed me to build up skills and apply them in an
              area I really care about with is online healthcare. It's so
              rewarding to know that I am helping people in some way through
              software I've built or facilitated.
            </p>

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>

            <p className={styles.postContent}>
              In the STEM industry, we build for a variety of people, and if the
              teams building these products aren't as diverse as its audience,
              we're never going to create the best solutions to really help
              others. Diverse teams really enrich the pool of ideas that are
              possible and has resulted in some exciting innovations in STEM.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>

            <p className={styles.postContent}>
              Imposter syndrome is a huge one and always kicks in every now and
              again. The nature of working in STEM involves facing new
              challenges, hard problems and many unknowns, and from that can
              arise a feeling of self doubt. But, you just need to remember that
              being scared is better than feeling comfortable, and that doubt
              most likely comes from a place of passion and wanting to do your
              best.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>

            <p className={styles.postContent}>
              There have been so many people throughout my journey that have
              been instrumental in shaping me today. From high school, through
              to university to working in the industry. The network in the
              computing world is so amazingly supportive and intelligent, and
              I've learnt so much about what kind of engineer or manager I
              should be striving to be from them.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you advised students who
              are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>

            <p className={styles.postContent}>
              For those interested in becoming a software engineer, I would say
              foundational computer science skills are key. Learn how to learn.
              New technologies and frameworks pop up a lot, but if you have the
              techniques to learn them, you're able to overcome that initial
              hurdle. Also learn how to be a team player. Behind great software
              is a great team, and if people enjoy working with you, you'll go
              far.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>

            <p className={styles.postContent}>
              If you're not happy, change something. Only you can author your
              story.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              It's not how good you are, it's how good you want to be <br /> –
              Paul Arden
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "victoria-ruming": [
              "/potraits/blog-authors/victoria.jpg",
              styles.authorProfile,
              "Victoria Ruming",
              "Education Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost29;
