import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost63 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #63" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Introducing Christine Ha</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 7, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Christine Ha is a current UNSW undergraduate civil engineering and
              commerce student and ‘Women in Engineering’ scholar. Her academic
              work won her a place on the Faculty of Engineering Dean's Honours
              List in 2019 and 2020, and her extra-curricular and professional
              work experience is equally impressive. Christine is the co-founder
              of UNSW Women in Consulting (WIC) and currently serves as the Vice
              President (External). She has also held a broad range of positions
              in The Civil and Environmental Engineering Society UNSW, UNSW
              Illuminate and the UNSW Fashion and Beauty Society. Christine
              secured her first civil engineering internship with Arup in 2018,
              and in 2019 went on to secure an ongoing civil engineering
              internship at WSP in the defence, mining and resources sector. She
              loves her role at WSP, where she is involved in project management
              and contract administration duties, as well as technical
              engineering design. A typical day might include writing and
              reviewing reports and presentations, preparing proposals for
              project bids and tenders, or using Excel to manage budget, risk
              and stakeholders on a project. She manages her work at WSP
              alongside her academic studies, and still finds time to tutor UNSW
              engineering undergraduates in the ‘Computing for Engineers’ and
              ‘Introduction to Engineering Design and Innovation’ courses!
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>
            <p className={styles.postContent}>
              Back in high school, maths and design technology were my favourite
              subjects. I loved the challenge, precision and certainty of maths,
              but also loved the creativity, tactility and practicality of
              design technology. Engineering seemed to be the perfect
              combination of both! I chose civil engineering in particular
              because I had an interest in buildings and architecture. When I
              was younger, Bob the Builder was my favourite TV show, so I guess
              that was a sign too!
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far.
            </p>
            <p className={styles.postContent}>
              I solidified my interest in civil engineering through work
              experience during high school at a top tier engineering design
              consultancy called Arup. At Arup, I got a real taste of civil
              engineering and its disciplines including water, transport, roads
              and highways, geotechnics and traffic modelling.
            </p>
            <p className={styles.postContent}>
              In 2020, I completed a short internship at a company called EIC
              Activities in their digital engineering team, where I experimented
              with different CAD software and modelled different design options,
              in order to understand how we can better use technology to solve
              problems.
            </p>
            <p className={styles.postContent}>
              Currently, I have been working at WSP, another top tier
              engineering design consultancy, for the past year and a half in
              the Power and Resources business unit on various defence and
              mining engagements.
            </p>
            <p className={styles.postContent}>
              On the side, I also am a private high school tutor and casual
              academic at UNSW for engineering courses.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>
            <p className={styles.postContent}>
              I see myself managing large teams on complex interdisciplinary
              projects and being able to effectively manage and communicate with
              all stakeholders to deliver high quality solutions to my company’s
              clients. I want to be a down-to-earth leader that creates a
              friendly and supportive team culture where each individual feels
              valued and acknowledged for their contribution to the project,
              regardless of their role or position. I also hope to be able to
              inspire my team to excel and do their best, whilst providing them
              a safe space to learn, fail and develop themselves both personally
              and professionally.
            </p>
            <br />

            <p className={styles.question}>
              What is the most rewarding and challenging aspect of your career?
            </p>
            <p className={styles.postContent}>
              You never stop learning! Once you’ve mastered something, there is
              always something new to learn. Since civil engineering has been
              around since civilisation began, there is a wealth of knowledge
              and expertise to draw upon. This makes my industry both
              challenging and rewarding at the same time. Along with that, the
              industry is quite technically rigorous, so the learning curve is
              often steep which makes it even more challenging.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>
            <p className={styles.postContent}>
              As our client’s issues become increasingly complex to solve, we
              need diverse and interdisciplinary teams to come up with solutions
              to these problems. Decades of research by scientists,
              psychologists and economists clearly indicate that a diverse
              workplace makes people more innovative, creative, hardworking and
              diligent.
            </p>
            <p className={styles.postContent}>
              Diversity makes us smarter, and it comes in many forms, with
              gender being only one of them. That is why we need more women to
              pursue STEM – to provide a fresh perspective on projects so that
              teams can deliver better solutions.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>
            <p className={styles.postContent}>
              I take inspiration from a variety of sources but, my parents have
              always been a major inspiration. They instilled in me the belief
              that no matter who you are or where you came from, if you work
              hard, anything is possible. This has carried me throughout my
              successes and failures.
            </p>
            <p className={styles.postContent}>
              I also always seek to meet new people from different walks
              of life and engage in meaningful conversations with them. Although
              a piece of advice might not resonate with you at that moment, it
              may in the future, and that can be a way to reconnect with them
              too.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you would advise students
              who are interested in pursuing a similar career path (for an
              internship/graduate role) to upskill on?
            </p>
            <p className={styles.postContent}>
              In terms of hard skills for engineering, I would definitely
              recommend familiarising yourself with Excel. There are often
              tedious calculations in your uni courses that can be automated
              using Excel, so use these as opportunities to practice your Excel
              skills. I’d highly suggest also learning AutoCAD, as it is often
              used in industry to better communicate complex ideas with others.
              Otherwise you’ll be left to do hand sketches like me :’) All other
              software is discipline-related and normally learnt on the job. Be
              sure to also learn the shortcuts, so you can complete work faster!
            </p>

            <p className={styles.postContent}>
              In terms of soft skills, communication is key. Practice all forms
              of communication; written, email, verbal, non-verbal, like body
              language, presentation, public speaking, visual, like formatting
              slide decks and reports, and listening. Resilience is also really
              important, and it goes hand-in-hand with failure and learning.
              When you start a new job, it’s easy to forget that you are not
              expected to know everything! You will need be comfortable with
              making mistakes, gracefully owning up to them and learning from
              the experience.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>
            <p className={styles.postContent}>
              You can’t do everything! When you’re young and curious, it’s easy
              to say ‘Yes’ to every opportunity thrown your way. But there comes
              a point where you need to prioritise your commitments and choose
              those that will add the most value to your personal and
              professional development.
            </p>
            <p className={styles.postContent}>
              If you commit to too much, you’ll end up committing to nothing
              because no matter how hard you try, you won’t be able to put 100%
              into everything. And when that happens, you’ll be missing out on
              valuable learning opportunities.
            </p>
            <p className={styles.postContent}>
              Don’t forget that you are human, so look after your mental health,
              be kind to yourself, and enjoy life because you’re only young
              once!
            </p>
            <br />

            <p className={styles.question}>Favourite quote or motto?</p>
            <p className={styles.postContent}>
              My favourite quote changes all the time, but my current favourite
              is “The harder you fail, the faster you learn. If you want to
              succeed, double your failure rate.”
            </p>

            <p className={styles.postContent}>
              Linking to my piece of advice above, if you’re having trouble
              deciding which commitments to take up, my advice is to choose
              those that push you out of your comfort zone, force you to
              overcome your weaknesses, and encourage you to fail harder and
              faster. Plus, when you’re young, you have every excuse to fail!
              Because usually there’s a manager on the other side to pick up
              your mistakes…
            </p>
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
export default blogPost63;
