import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost12 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #12" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>WIT Crush Wednesday - Maddie Mackey</h2>
            <p className={styles.date}> 8th July 2020 </p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              “Maddie Mackey is a Junior Software Engineer at Nine. Not only has
              Maddie been involved in amazing work placements including a
              position as an Associate Software Developer at WiseTech Global,
              and a STEP intern at Google, but also also worked on many of her
              own projects such as developing and programming a high-altitude
              weather balloon that she undertook in Year 12, a medical booking
              system, and developing her own “Hunger Games” mobile app. Maddie’s
              determination and passion for software development has led her to
              become a tutor at Grok Learning and GPN (Girls Programming
              Network) where she teaches and inspires other females to build
              their own software programs and pursue careers in technology.{" "}
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              In high school I really enjoyed maths and science, and playing
              video games, so I jumped at the chance to learn programming. I
              love being able to solve real problems and create things from
              scratch with all the building blocks I need readily available
              through just a computer.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>

            <p className={styles.postContent}>
              I grew up just outside of Canberra on a farm, and after attending
              NCSS (National Computer Science Summer School) in senior high
              school and seeing some of the amazing tech companies in Sydney, I
              was set on moving here for university. So I undertook a Bachelor
              of IT at UTS, and graduated just last year. I did a few
              internships during uni, and after one at Nine I was offered a
              position to stay on as a junior software engineer on 9Now's TV
              apps team, where I am now.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>

            <p className={styles.postContent}>
              I look forward to continuing my career as a software engineer at
              Nine. I'm also passionate about equality in STEM, hoping to
              encourage and continue to advocate for equal opportunities for
              minorities. And if I ever get bored of tech, my backup plan is to
              buy a shack out in the bush and write musicals.{" "}
            </p>
            <br />

            <p className={styles.question}>What do you love about your career now?</p>

            <p className={styles.postContent}>
              I enjoy the many learning opportunities and unique problems that
              open up from developing a streaming service for such a wide range
              of devices and technologies. While this can make work challenging,
              my team is always happy to help. I love my team's keenness to
              share knowledge, and how the skills of each member are recognised
              regardless of official titles. Our team banter also makes work
              lots of fun.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              <em>"Speak your truth even if your voice shakes."</em>
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "vivian-wong": [
              "/potraits/2020-exec/vivw.jpg",
              styles.vivwImg,
              "Vivian Wong",
              "Education Executive",
            ],
            "georgie-mansfield": [
              "/potraits/georgie.jpg",
              styles.vivwImg,
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
export default blogPost12;
