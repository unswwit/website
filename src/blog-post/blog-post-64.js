import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../components/header";
import ShareBtns from "./ShareBtns";

class blogPost64 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #64" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Stephanie Chen, PhD Student in Plant Genomics
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 14, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Current PhD student Stephanie Chen’s curiosity in the biology and
              technology fields have led her to undertake research opportunities
              at numerous Australian universities, alongside stints at CSIRO and
              the Botanical Gardens. As a casual academic at both Sydney
              University and UNSW’s own School of Biotechnology and Biomolecular
              Sciences, Stephanie has been able to gain a bunch of valuable
              experience in science education, in addition to her fascinating
              research into plant science and genetics.
            </p>
            <p className={styles.postContent}>
              We loved hearing from Stephanie this week about her academic
              career in STEM thus far, her insights into the research world and
              what advice she’d give aspiring women with similar interests and
              goals.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              I remember always being very interested in plants. I grew up
              surrounded by bushland and my grandmother would take me foraging
              when I was very young. I enjoyed science at school and decided
              scientific research would be a good career fit for me.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far.
            </p>
            <p className={styles.postContent}>
              My interest in plants led me to a science degree at the University
              of Sydney as they offered a major in Plant Science. I wanted to
              learn as much about plants at university as I could. I was also
              able to complete four internships along the way to try and figure
              out what types of research I might be interested in. After
              completing Honours where I modelled plant populations, I searched
              for doctoral opportunities that combined plant science and
              genetics, and that's how I landed in my current research project
              which is a collaboration between UNSW and the Royal Botanic Garden
              Sydney.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              I would like to continue on in research, so next up would be
              postdoc or two. Further down the track, I'd like to move into
              something like a Research Scientist role, perhaps in government or
              industry.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>
            <p className={styles.postContent}>
              The variety – my research involves field work, lab work and
              bioinformatics which gives me lots to learn and do.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              I think giving people the confidence to get involved is the key.
              Diversity is important to collectively do the best science we can.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>
            <p className={styles.postContent}>
              It's an exciting time to be doing bioinformatics and genomics, but
              keeping up with the latest advances in sequencing technologies and
              bioinformatic methods is definitely a challenge.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              I've admired the enthusiasm and dedication of researchers who I
              have been supervised and mentored by.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>
            <p className={styles.postContent}>
              In terms of hard skills, I took applied statistics in undergrad
              which has been very useful in all of the research projects I've
              been involved with. For soft skills, I think effective
              collaboration is very valuable in research and it's great to
              connect with other people who are interested in the same things.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              Contribute more in class and ask questions – you'll get more out
              of it, and the lecturers and tutors aren't as intimidating as you
              think!
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              Where is the wisdom we have lost in knowledge?
              <br />
              Where is the knowledge we have lost in information?
              <br />
              Excerpt from The Rock by T.S.Eliot
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "zoe-webster": [
              "/potraits/blog-authors/zoe-webster.png",
              styles.anonProfile,
              "Zoe Webster",
              "Education Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost64;
