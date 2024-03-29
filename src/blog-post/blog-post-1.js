//All necessary imports for this javascript
import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost1 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #1" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing: Silvia Lin, Senior Consultant of PWC and WIT
              Co-founder
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>May 20, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Silvia’s passionate about three things: technology, solving
              problems, and educating women about the opportunities in
              technology. Her passions collide in her role as a senior
              consultant of the SuccessFactors Team at PwC Australia. With a
              keen understanding of her client’s strategic business objectives
              and the feasibility of system design, she thrives in creating
              solutions for clients that allow them to operate more efficiently.
            </p>
            <br />

            <p className={styles.postContent}>
              Let’s read what Silvia had to say about her journey into tech
              below
            </p>

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              I definitely "stumbled" into the field of STEM, it was never an
              area quite popular in highschool when we are picking our future
              degrees. I was introduced to it as part of the Co-op program and
              just went with it since I didn't know what to do. Mind you I
              definitely struggled in my first year of studying tech, I
              definitely thought I was the odd one out, was struggling to
              understand basic concepts of SQL and was prepared to quit and
              leave it all behind. I definitely think the turning point was
              meeting Blair, who gave me a personalised presentation slides of
              why I/women should stay in tech and the Info systems support
              circle that really opened my eyes about the opportunities in tech.
              I definitely would not have lasted my first year of uni without
              any of them. Once you enter the industry you realise how many
              awesome opportunities there are, and that there is definitely a
              role for everyone regardless what background you come from. It's
              not just all coding, or all project management. There's a happy
              space for everyone.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              I have been quite fortunate in working at several amazing places
              within the tech industry. I started off a planning and research
              analyst at the Reserve Bank of Australia, before trying out the
              Cyber security space in IAG. I then interned at PwC's Experience
              and Insights Team and gave a shot at strategy consulting at
              Deloitte's S&I team. I am now a senior consultant in PwC's
              Technology Consulting team, specifically in the SuccessFactors
              team.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              Absolutely no idea! I think over the years I have realised certain
              aspects I enjoy, and that is I like to help people and clearly see
              that my work is contributing to a good cause. I am always learning
              regardless where I end up, so I try not to aim for a "final
              destination", rather I think about what other areas I can learn
              from. I definitely do want to move to another country just to
              understand how the tech industry is like in another geographic
              region.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I love how I get to try out a variety of roles and work with
              different industries. What was really interesting for me was that
              I was the second member of the SuccessFactors team alongside my
              director, and really I got to help build the team and work with
              some amazing people - Kudos to Lynsye. Everyday I am not stuck at
              a routine, yes sometimes certain days are tougher than others, but
              it certainly makes it enjoyable when you see the impact your work
              has to make your client's job run more efficiently and effectively
              and by extension helping support our society.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>
            <p className={styles.postContent}>
              "Do it for yourself, not to prove to others" - Dr Carmen Leong
            </p>
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
export default blogPost1;
