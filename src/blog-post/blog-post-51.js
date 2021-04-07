import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost51 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #51" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Introducing, the Women of ENIAC</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>April 7, 2021</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              In WW2, determining a missile’s trajectory in certain weather conditions was a calculation that would take up to 
              40 hours by hand. Being as tedious a calculation as it sounds, combined with a shortage of engineers, 
              approximately 100 women in the US were hired to perform this task. Their job title? “Computer”. 
            </p>

            <p className={styles.postContent}>
              As WW2 progressed, the need for important calculations such as missile trajectories quickly grew, 
              and thus, the Electronic Numerical Integrator and Computer or ENIAC was built.
            </p>
        
            <p className={styles.postContent}>
              After the building of ENIAC was completed, the AI computer needed to be programmed to actually perform the 
              calculations required. To do this, 6 women, Jean Jennings, Marlyn Wescoff, Ruth Lichterman, Betty Snyder, 
              Frances Bilas, and Kay McNulty from the Computers were selected to the milestone project - programming the ENIAC. 
              These women were given 3 months of intensive training on how to handle some of the IBM machines being used at the 
              time, after which they were given a pile of wiring diagrams and as Kay Mauchly (nee. McNulty) recalls, they were 
              simply told to “figure out how the machine works, and then figure out how to program it.” After an intense effort 
              of hand-wiring, switches, cables, and differential equations, the programming of the ENIAC, and world’s first 
              computer program was finally completed.
            </p>

            <p className={styles.postContent} style={{"textAlign":"center"}}>
              <b>
                  <em>
                      “We were sure this machine could do anything we wanted it to do.” – Marlyn Wescoff
                  </em>
              </b>
            </p> 

            <p className={styles.postContent}>
              The legacy left by these women is astounding, and although their work was not completed in time for the 
              war effort, it paved the way for calculations, computing, and programming today. Not only that, but the 
              effort of these women and many other female pioneers in computer science such as Ada Lovelace and Grace Hopper 
              highlight the elemental role women have played in creating computing and founding the discipline as we know it 
              today. The programming of the ENIAC also introduced some of the earliest forms of artificial intelligence, 
              where a job previously taking over 40 hours for a person to complete, could be undertaken in less than a second 
              by the AI computer, the ENIAC.
            </p>

            <p className={styles.postContent}>
              While the effort and ground-breaking work undertaken by the women of ENIAC was so essential, their names quickly 
              became lost in history, until an undergraduate computer science student, Kathy Kleiman, began searching for a 
              female role model in a degree where she was surrounded by males. She came across an image of the women of ENIAC 
              working on the computer and was astounded by the confidence of these women as they handled the complex machine. 
              The confidence of these women remains empowering for women in STEM today. The task was difficult, it was brand 
              new to the women of ENIAC, and required a rapid learning of skills that paved the way for technology everywhere, 
              creating confidence amongst these women that “this machine could do anything we wanted it to.” In a world where 
              sometimes our effort feels useless, this mindset of confidence is important for all of us in our work. It can 
              encourage us to take on challenges, to push ourselves, to have a willingness to learn new things, and to take on 
              the unknown.
            </p>

            <p className={styles.postContent}>
              The Women of ENIAC have left a remarkable legacy for all computer science students, the founding efforts of 
              an essential discipline, a willingness to learn, excitement of taking on challenges, pushing themselves, 
              working together, and a lesson of confidence in their work to all. 
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
              "Education Executive"
            ]
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost51;
