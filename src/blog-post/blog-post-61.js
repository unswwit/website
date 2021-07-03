import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost58 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #61" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Vivian Shen
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 30, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              On course to graduate with a Bachelor of Data Science and Decisions, Vivian has
              already amassed a great deal of awe-inspiring experience, having interned at Google 
              and Atlassian and leading UNSW Women in Technology as its President in 2020. 
              Currently working as a casual academic in UNSW’s Computer Science and 
              Engineering Faculty, Vivian shares her knowledge and expertise with her fellow 
              technology students. From as early as her high school days, Vivian showed her 
              passion for technology and demonstrated her commitment to upskilling and 
              empowering others in STEM through her involvement in initiatives such as ‘Code 
              Camp’ as a teaching assistant. She continues to educate, inspire and empower 
              others to excel in STEM and is genuinely passionate about promoting diversity in the field.
            </p>
            <p className={styles.postContent}>
              Read on to find out more about Vivian’s journey; we hope you learn as much as we 
              did from her insights. 
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              In highschool, I was introduced to{" "}
              <a href= "https://groklearning.com/" 
                className={styles.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >Grok Learning</a>
              {" "}which is an online platform that teaches the basics of programming. Through this, I picked 
              up a web development course and found myself really enjoying it. I spent hours every 
              week teaching myself new concepts and solving the challenges!
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              I was a Google intern working on creating accessible front-end experiences on Chrome OS, Canvas.
              Following this, I worked as a data science intern on the Growth team at Atlassian. Currently I am 
              still a student, as well as a casual academic at UNSW taking the subjects COMP1531, COMP2041 and COMP2511. 
            </p>
            <br />

            <p className={styles.question}>
              {" "}
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              I am not sure what the future holds for me, but I know that I want to spend a couple 
              of years working in software engineering at a tech company. I am also extremely passionate
              about diversity, equity and inclusion so I can definitely see myself volunteering in that
              community. Ultimately, I do want to build my own startup and work on areas where I think 
              I can make a difference and that I am passionate about.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              I love the people in this community. You're surrounded by such talent, but most importantly 
              people who are willing to help you out and share their knowledge and experiences. They're
              incredibly supportive and really want to see you grow and achieve your goals. It really is 
              a safe space where you feel comfortable asking for help and being yourself!
            </p>
            <br />

            <p className={styles.question}>
              {" "}
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              STEM is going to be a big part of our future and it is really important that women and 
              underrepresented groups are encouraged to be involved in shaping our future so that it 
              can be more inclusive and accessible to everyone.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              Finding what career path is the right fit for you.
            </p>
            <p className={styles.postContent}>
              Technology is so broad and there are so many different pathways you can take - frontend, 
              backend, full-stack, data science, product management, UI/UX just to name a few. I had a 
              lot of different interests and that is why it is really important to take some time at university 
              exploring internships, programs, courses and most importantly talking to people in the industry 
              to better understand the role and the field. Through this, you can figure out what works for you 
              and decide if this role will be a good fit for your interest and your set of skills. 
            </p>
            <p className={styles.postContent}>
              Coming into university, I was really dead set on pursuing data science as a career despite 
              being interested in all these other areas. In my 2nd year, I began exploring all these different 
              avenues and areas and I finally found out in my 4th year that software engineering aligned better 
              with my interests and skills. After realising this, I picked up a couple more comp courses to better 
              prepare myself for a software engineering career despite planning to graduate with a data science 
              degree.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              There is an extraordinary amount of talented, passionate and resilient individuals at UNSW. I get 
              inspired regularly by my peers - they have a lot of really interesting ideas, work on amazing 
              projects and especially seeing how others overcome adversity, pick themselves up and continue to 
              move forward to pursue their goals is incredibly inspiring!
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>
            <p className={styles.postContent}>
              Hard Skills: research what hard skills are 'required' or assumed knowledge in the field(s) 
              you are interested in. Understanding key concepts, data structures and algorithms such as 
              time and space complexity, breadth-first search etc. 
              <br />
              <br />
              Soft Skills: communication and teamwork are key! Behind every successful story is an amazing 
              team.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              Have an open mind, take on challenges that are thrown your way and don't be afraid to ask 
              for help!
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              "Be the change you seek".
            </p>
            <p className={styles.postContent}>
              I used to hear this phrase a lot at school, and over time it has really morphed into 
              something I feel really strongly about. It helps me stay focused, driven and create 
              something that will add value and be a positive influence on people’s lives.
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "vivian-wong": [
              "/potraits/blog-authors/vivianw2021.jpg",
              styles.authorProfile,
              "Vivian Wong",
              "Co-President",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost58;
