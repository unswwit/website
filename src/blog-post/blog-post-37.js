import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost37 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #37" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Tanzeem Syeda, Software Engineer at WiseTech Global
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>November 4, 2020</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Tanzeem’s journey is nothing short of impressive. Since beginning
              her first internship at Google when she was only 15, Tanzeem has
              continued to challenge herself, and continually worked to become
              better. She is passionate about making a difference, especially in
              the technology industry, and encouraging more women to take up
              STEM careers. In this week’s WIT Crush Wednesday, Tanzeem tells us
              about her journey, what motivates her, and how she strives to make
              an impact.
            </p>
            <br />
            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              When I was in Year 9, I chose a subject called Information
              Software Technology. My teacher could see how much I loved the
              subject and challenged me to start learning how to code. It was
              very simple and early stages of learning how to program but the
              level of analytical and logical thinking really interested me. I
              always knew that I loved Mathematics as well so I was naturally
              inclined to Engineering. The more I learnt to code and about the
              technological industry, I knew I wanted to keep learning in this
              field and that is how I joined the STEM field as a Software
              Engineer.
            </p>
            <br />
            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>
            <p className={styles.postContent}>
              I started my career in Technology at a very young age. I was 15
              when I secured an Internship at Google. I worked tirelessly to get
              this role and I was driven to make a difference for other
              students. At 16, I worked at a tech platform that connected
              industries to students. The company secured a $1 million
              investment. I didn’t want to stop. I wanted to make a difference.
              My passion to be a leader in the IT industry landed me a role as a
              Technical Specialist at Apple, making me one of the youngest. I
              became one of the first Women to be awarded an Engineering
              Scholarship at the University of Technology Sydney for a Bachelor
              of Software Engineering (Honours) with a Diploma of Professional
              Engineering Practice. Till now, I have had the opportunity to work
              in different companies such as Apple, Cuscal, CSIRO and WiseTech
              Global. I have always been proactively involved in roles that will
              allow me to implement significant changes in current practices
              within the company or in the technology they use.
            </p>
            <br />
            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              My drive is to make an impact and create ripples of change around
              me. I have always been passionate about sharing my personal story
              to encourage other students that no matter what age, you can
              achieve your dreams. In the future, I see myself being a leader in
              my field and creating a vision. I want to be able to design a
              sustainable lifestyle with technology in the developing countries
              to truly increase the life quality and standard to the best of my
              ability.
            </p>
            <br />
            <p className={styles.question}>What do you love about your career now?</p>
            <p className={styles.postContent}>
              Too many things, but I will keep it short. What I love about my
              career is that it is always changing and evolving into something
              better. I love the idea of improving, whether that means personal
              growth or even if it makes automating something small for more
              effective and efficient results. I am grateful that I have a lot
              of experience for my age and I love that I can keep aiming for
              high and trying new opportunities and roles. Technology and STEM
              related careers allow you to think big and outside the box. It is
              not narrow. I love that even if I love coding now, I still have
              the knowledge and ability to be in a non-technical role. The
              skills are interchangeable and as a young person in the early
              stages of their career, it really inspires me to keep pushing hard
              and making the most of all opportunities.
            </p>
            <br />
            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              This is so important! For so many years, women have been a
              minority in the STEM Industry. There have been so many instances,
              too many to count where I am the only woman in a meeting, in a
              group assignment or in a lab. When you empower someone else, you
              have no idea how you can change their life. You have the ability
              to share your own experiences in the hope that they will take
              something, even a little bit out of it and make progress towards
              their goals. This is how we inspire others. By empowering other
              women and by actively increasing involvement in the STEM industry,
              we are creating ripples of goodness around us and breaking the
              stereotypes in STEM careers. If we work towards this, there may be
              a time when women do not feel inferior to take action.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              I believe the hardest thing for me so far has been truly
              understanding what I want to do in my career, and stepping away
              from the pressure around me to specialise in certain technical
              areas. I have found that with so many options in technology and
              something so broad, I sometimes wake up and feel like I should
              know what is going on in every single field, that I often forget
              to slow down and enjoy the journey.
            </p>
            <br />
            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              At the beginning of my career, I always went to networking events
              to meet new people and just have simple conversations. I was
              always inspired by people’s courage and passion in what they did.
              I have had some of the most amazing mentors, from a young age that
              have given me amazing insights into their career and how I can
              improve. As I have progressed into my own career, I have started
              to see that every single person has a different story and it is
              about embracing those that are like minded to you but also those
              that are different. Everyone you meet will show you a different
              perspective, but it is about how you can give it the power to
              change and inspire you.
            </p>
            <br />
            <p className={styles.question}>
              What are the hard and soft skills that you advised students who
              are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>
            <p className={styles.postContent}>
              Have a good balance of both hard and soft skills! In our rapidly
              growing industry, you have to know how to be technical but also
              know how to share and communicate your ideas. Both go hand in hand
              with each other and I have found this is a good way to grow and
              embrace every role you get.
            </p>
            <br />
            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              Enjoy and embrace the process of learning. Education is a blessing
              that we often fail to recognise.
            </p>
            <br />
            <p className={styles.question}>Favourite Quote or Motto?</p>
            <p className={styles.postContent}>
              You only regret the chances you do not take. If you don't do what
              you want to, how will you ever know what could have happened ?
            </p>
            <p className={styles.postContent}>
              Stay tuned! Tanzeem’s upcoming podcast will soon be released with
              more details about her amazing journey and how she achieved
              ambitious goals!
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
export default blogPost37;
