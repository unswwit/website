import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost5 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #5" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Interview - Salina Jantarang</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 12, 2020</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              After high school, Salina Jantarang studied at the University of
              Sheffield (UK) and graduated in 2015 with a MEng in Chemical
              Engineering (First Class Honours). Afterwards, she enjoyed a
              placement in the Particles and Catalysis Research Group (PARTCAT)
              of UNSW, and continued with the group for her PhD programme from
              2016 to 2020. The following interview outlines Salina’s journey,
              as well as advice about finding success in university and beyond.
            </p>
            <br />

            <p className={styles.question}>What is your research about?</p>
            <p className={styles.postContent}>
              Due to the level of carbon dioxide (CO2) emissions, there is a
              need to mitigate their impact on the environment. One method is to
              utilise CO2 as a feedstock for fuel production. My PhD research
              focused on the engineering of nickel catalysts for carbon dioxide
              hydrogenation to methane. The reaction aims to promote process
              sustainability by occurring under photothermal conditions,
              dependent on the light-to-heat conversion. Similar to most
              chemical reactions, a catalyst is needed for the reaction. The
              scope of my work involved probing the impact of catalyst support
              properties, separating the effects of light and heat in the
              reaction, and understanding the role of defects in the catalyst.
            </p>
            <br />

            <p className={styles.question}>
              What are the limitations of your research?
            </p>
            <p className={styles.postContent}>
              Relative to other conditions of CO2 conversion to methane,
              photothermal conditions and the number of catalysts tested have
              not been probed as extensively. Therefore, there are limitations
              in terms of understanding such as on the catalyst properties that
              influence the reaction.
            </p>
            <br />

            <p className={styles.question}>
              What inspired you to explore your research topic?
            </p>
            <p className={styles.postContent}>
              Prior to my PhD studies, my research project during the MEng
              programme (at the University of Sheffield) also involved utilising
              CO2 as a building block. I found the concept to be very
              interesting because it involved producing a valuable product from
              something that would have essentially become ‘waste’. I was drawn
              by the sustainability aspect of the process and how it addresses
              the current environmental issues.
            </p>
            <br />

            <p className={styles.question}>
              What challenges/conflicts have you faced in your studies or your
              research?
            </p>
            <p className={styles.postContent}>
              There’s a lot of new skills to learn and responsibilities to
              undertake, which can be challenging at first. However, it’s just a
              matter of working through it and over time, new concepts would be
              easier to grasp. Challenges can also be a source of motivation,
              such as when testing a new material and anticipating the result.
              Some experiments take several hours or days, and waiting to
              observe the outcome is very exciting.
            </p>
            <br />

            <p className={styles.question}>
              What skills are most important in order to successfully complete a
              research project?
            </p>
            <p className={styles.postContent}>
              In my experience, the skills I found important were time
              management, perseverance, patience, creativity, and communication.
            </p>
            <br />

            <p className={styles.question}>
              What piece of advice would you give your younger self?
            </p>
            <p className={styles.postContent}>
              I would say that my experience at the beginning of my PhD
              programme was a steep learning curve. There was a lot to learn,
              process, and skills to acquire. I think that the advice I would
              give to my younger self would be to be patient with myself, always
              be proactive in seeking resolution, and the importance of a
              supportive network. Guidance and support from attentive
              supervisors also have a strong influence on the experience.
              Additionally, I frequently talk through my ideas and challenges
              with friends, who were great at listening and help process my
              thoughts. It is equally important for me to be present and
              supportive.
            </p>
            <p className={styles.postContent}>
              I would also tell myself to find a hobby or learn new skills. It’s
              a good way to give yourself a break.
            </p>
            <br />

            <p className={styles.question}>
              How did you open opportunities for yourself?
            </p>
            <p className={styles.postContent}>
              I think that it’s important to be proactive with your goals,
              consistently work on improving skills, and be enthusiastic to
              learn new things. Based on my experience, when I was an undergrad
              student, I knew that I wanted to do a PhD degree after graduation
              and so I was keen to do research placements during my university
              breaks. Finding a placement definitely takes time and motivation.
              As I was looking for work experience in Australia while I was in
              England, I started almost one year prior to find a placement. I
              was very fortunate to have gained research experience at the
              Commonwealth Scientific and Industrial Research Organisation
              (CSIRO) in Melbourne and with PARTCAT at UNSW during the summer
              after Year 2 and 3, respectively. The experience from both places
              were invaluable and I am incredibly grateful to my supervisors and
              colleagues.
            </p>
            <br />

            <p className={styles.question}>
              In your opinion, what are the most important skills needed in the
              workforce?
            </p>
            <p className={styles.postContent}>
              I would say that the important skills are honesty, time
              management, critical thinking, and communication. My PhD studies
              was definitely a time that I’ve acquired many technical skills and
              new understanding, which are transferable to the workforce. There
              are also non-technical skills developed which builds your
              character.
            </p>
            <br />

            <p className={styles.question}>
              What is your biggest eye-opening moment in recent years?
            </p>
            <p className={styles.postContent}>
              In terms of research, it’s very interesting to read on new
              findings and developments in the area of interest, which inspires
              and shifts your perspective on an issue.
            </p>
            <p className={styles.postContent}>
              As for personal reflection, it’s interesting to see how far my
              life has come since high school and the unexpected events that
              happen. I find that over time, challenges are easier to deal with
              and to give myself more credit for the things I’ve achieved.
            </p>
            <br />

            <p className={styles.question}>
              What would you like the impact of your research to be?
            </p>
            <p className={styles.postContent}>
              I hope that the findings from my work would be beneficial for
              future researchers. With the ongoing efforts for a sustainable
              society, I hope that my work has made an impact.
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
export default blogPost5;
