import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../components/header";
import ShareBtns from "./ShareBtns";

class blogPost43 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #43" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Q & A with Aditi Nitturkar</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>March 3, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Aditi Nitturkar is a fourth-year student at UNSW, completing a
              dual degree in mechatronic-engineering and computer-science. She
              is the current President of CREATE, a maker society at UNSW. This
              week, we share our conversation with Aditi about her ongoing
              research and project, which has been carried out through amazing
              opportunities she has taken in the Faculty of Built Environment
              and ARUP Global.
            </p>
            <br />

            <p className={styles.question}>
              What is your research project about?
            </p>
            <p className={styles.postContent}>
              Over the last two years, I have been conducting research with the
              Faculty of Built Environment and an engineering consultancy, ARUP
              Global, in the field of morphing architecture. In essence, I am
              designing and fabricating robotic ‘modules’ that can interlock
              with other modules to form dynamic, adaptive structures like
              bridges. This would help rapid construction in disaster-stricken
              zones, in space or in unpredictable environments like at sea or
              inside an underground cave.
            </p>
            <p className={styles.postContent}>
              There are a lot of lessons from biology, such as construction
              algorithms based on ant and termite colonies, or communication
              algorithms based on bees. As I started this very early in my first
              year, I pretty much had to parallely teach myself all the concepts
              I needed as I started learning about them at uni. This made for an
              interesting journey, as I found myself immediately applying what I
              was learning, making the uni experience way more meaningful and
              exciting for me.
            </p>
            <br />

            <p className={styles.question}>
              In what ways did your research project help you learn and grow as
              a person?
            </p>
            <p className={styles.postContent}>
              At my interview, my boss was an incredibly inspiring woman and
              made a genuine connection with me. When I found out I had been
              selected, she and I grew a close bond. She was always firm and had
              high standards, and that pushed me to work really hard. She gave
              me personal advice about how to deal with the stress of male
              colleagues in the workplace, and how to position myself for
              post-graduate courses. By giving me that first chance, she set me
              on a whole new trajectory.
            </p>
            <p className={styles.postContent}>
              With a change of leadership and numerous changes to the project
              specification, I learnt the importance of adapting to continuously
              changing circumstances. I learnt how to fail, and do so
              gracefully. When you can’t meet a deadline, real life isn’t as
              simple as a pass or fail. Research has to move on, you just dust
              yourself off, make a report outlining how you plan to avoid what
              happened, and move on!
            </p>
            <br />

            <p className={styles.question}>
              What was your biggest transformation since beginning your project?
            </p>
            <p className={styles.postContent}>
              I still remember the first time I walked past the Makerspace. I
              was a shiny new first year, pumped up to get my hands dirty and do
              all the engineering things I was promised. I was equally daunted
              by the much taller, much buffer boys and some women in the space
              handling the drills, saws and hammers with such ease and
              authority. Having never even seen a laser cutter or 3D printer in
              my high school, the Makerspaces seemed like an unreal, distant
              dream.
            </p>
            <p className={styles.postContent}>
              Fast forward to now. Every second computer in three makerspaces
              has my email logged in from when I sent myself a random Rhino file
              to laser cut. All my clothes are stuffed into three drawers, and
              my closet is filled with sheets of plywood, acrylic and 3mm
              aluminium for my personal projects.
            </p>
            <br />

            <p className={styles.question}>
              What is your best piece of advice?
            </p>
            <p className={styles.postContent}>
              You tend to get a lot of advice about your career, a lot of it
              unsolicited or from people who haven’t really done what they
              wanted to do either. There isn’t a ‘right’ time to start working
              on your career. As soon as you get to uni, you are in a perfect
              twilight zone. You are recognised as an adult, get given paid
              opportunities and have access to tools, equipment and resources
              that high schoolers could only dream of. At the same time, you are
              young enough for a lot of inexperience to be forgiven, and any
              achievements you make are given a lot more credit than they would
              in 10 years. Use that!
            </p>
            <p className={styles.postContent}>
              Think about what interests you within your degree. Look up what
              professors are working in that field. Write to some of them
              checking if they are looking for or can make a place for interns.
              Keep an eye out on facebook pages like CREATE, MTRNSoc, WIT etc.
              for internship advertisements. Check out VIP and ChallENG
              projects. Visit a Makerspace and ask if they have any fun projects
              you can get involved in. Look into small startups - they won’t pay
              much but you will get a lot of unique experiences and they are
              usually always looking for a hand!
            </p>
            <br />

            <p className={styles.question}>
              What is your best piece of advice?
            </p>
            <p className={styles.postContent}>
              I, as have a lot of women in STEM, suffered from imposter syndrome
              throughout my university career. The opportunities you earn seem
              to feel like you were just at the right place at the right time. I
              was voted in to be the first female president of CREATE. As a
              female leader, I constantly found myself second-guessing my
              decisions.
            </p>
            <p className={styles.postContent}>
              I think the hardest part isn’t proving to others that you are
              worth your mettle, it is proving that to yourself. I still
              struggle with it sometimes. It helped me to find myself a mentor
              network - people I personally thought were where I wanted to be.
              This diverse group of inspiring people would get late night texts
              from me, asking for advice, tips, feedback, etc. Their support and
              encouragement fuelled me, as it was praise coming from people who
              I genuinely thought were extremely talented and special, I could
              trust it and feel like I deserved it.
            </p>
            <p className={styles.postContent}>
              Life as a female engineering student isn’t as hard as it used to
              be, but there is a long way to go before it is a fully inclusive
              space. But I think the most important step we can take to push it
              along in the right direction is to first accept and be proud of
              who we are and what we can be. It’s the only way everyone else
              will see that too!
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/victoria.jpg",
              styles.authorProfile,
              "Victoria Ruming",
              "",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost43;
