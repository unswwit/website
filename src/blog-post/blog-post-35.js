import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";

class blogPost35 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #35" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing: Calista Kusuma, Information Systems and Marketing
              Student
            </h2>
            <p className={styles.date}>28th October 2020</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Calista Kusuma is a Marketing and Information Systems student at
              UNSW, passionate about finding new opportunities to grow and
              making an impact with those opportunities. Kusuma has had diverse
              experience, being in programs with Boston Consulting Group,
              McKinsey & Co, and Bloomberg. She currently works as an Analytical
              journalist at The Smart Smart where she researches, interviews
              industry experts about critical issues in industries across the
              globe. Read more on how studying a technology driven degree and
              having a self- starter attitude can open doors for a successful
              career.
            </p>{" "}
            <br />
            <p className={styles.question}>
              Why did you choose to pursue an information systems degree?
            </p>
            <p className={styles.postContent}>
              I entered uni with a Bachelor of Commerce (International), not
              knowing what I wanted to do with my career. But I'd always been
              fascinated by technology, its ever-evolving nature and how it
              disrupts the modern business landscape. This led me to take
              INFS1602 and INFS1603 in first year, which sparked the idea of
              pursuing an information systems degree with commerce. After some
              research, I became increasingly attracted to interesting subjects
              like mobile app development, and the wide career opportunities
              that information systems offered. I also felt it would be a unique
              match with my Marketing major- I wanted variety in my studies, and
              to build a wide range of technical and soft skill sets so that I
              could explore different fields as I figured out what I wanted in a
              career. So, I chose to change to a Commerce and Information
              Systems degree to explore my curiosities in-depth.
            </p>
            <p className={styles.postContent}>
              The differences between information systems and marketing are
              exactly what has made studying them together so enjoyable - I can
              be coding in one tutorial and researching Adidas' brand strategy
              the next! I've also been able to explore many industries due to
              the diversity and transferability of the skills I've developed.
              I've completed development programs with great firms like
              McKinsey, BCG and Bloomberg, and jobs and projects in areas from
              technology consulting, marketing to even analytical journalism. My
              majors always come up at interviews and networking events, and
              I've gotten positive feedback on the range of skills learnt in the
              pairing- especially how learning information systems is a great
              choice in an increasingly digitized world.
            </p>
            <p className={styles.postContent}>
              Overall, my information systems degree has enabled me to be well
              equipped for a tech-driven future, develop strong technical acumen
              through skills like Java and business analysis, and explore a
              range of career fields.
            </p>
            <br />
            <p className={styles.question}>
              What skills do you think are important to continue to develop for
              your future career?
            </p>
            <p className={styles.postContent}>
              I feel that self-motivation is an essential skill that sets people
              apart - no matter what career or industry you're in. YOU are the
              only person who can define your career and it's up to you seek out
              and put effort into achieving your ambitions. Everyone has times
              of self-doubt where they feel that their dreams are out of reach,
              but what sets people apart is whether they can overcome these
              thoughts to achieve their goals! By having a self-starter
              attitude, you'll empower yourself to remain driven in the face of
              setbacks and be able to recognize opportunity intuitively. It's
              also valuable to employers who are always looking for proactive
              candidates.
            </p>
            <p className={styles.postContent}>
              The ability to adapt to new situations, work under pressure and
              problem solve are also important skills. The business landscape is
              constantly changing, which means that you need to be prepared for
              unfamiliar business problems that you can't Google the answers to
              (sadly). Having these skills will allow you to embrace and rise
              above challenges at work and your career- facing times of stress
              with resilience to deliver strong results. You can grow these
              skills in many ways throughout uni- joining societies in
              subcommittee or executive positions. It is particularly great in
              growing your ability to meet deadlines under pressure and adapt to
              unexpected circumstances.
            </p>
            <p className={styles.postContent}>
              Finally, I think having some technological acumen is important in
              an increasingly digitized world. Whether this means having a
              technical skill like Java or Python, or being able to understand
              concepts like blockchain. Technological change has become a
              constant, and it's important to be aware of relevant trends and
              innovations for your industry.
            </p>
            <br />
            <p className={styles.question}>
              What are some of the technical skills you learned in your
              information system degree?
            </p>
            <p className={styles.postContent}>
              SQL was the first language that I learnt in the degree. It stands
              for Structured Query Language and is the primary language used to
              interact with relational databases. SQL is in high-demand within
              all industries in an increasingly data-driven world- it's critical
              in enabling us to access and manage data. This in turn enables the
              user to create meaningful insights from the extracted data. For
              example, I've talked to marketers who have used SQL to capture
              customer data and actions, from which they can easily analyze
              things like target market demographics and the effectiveness of an
              advertising campaign.
            </p>
            <p className={styles.postContent}>
              Java is another key language that you learn. Java is a programming
              language that is intended to let app developers 'write once, run
              anywhere'. You use Java to build so many things- from mobile,
              desktop and web apps to video games. I love how there is an
              infinite amount of possibilities as to what you can create, and
              it's a great one to learn if you're considering a path in
              innovation.
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
export default blogPost35;
