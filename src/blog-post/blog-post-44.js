import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost44 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #44" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>The Only Constant is Change</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>March 4, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.question}>
              What is your best piece of advice?
            </p>
            <p className={styles.postContent}>
              If there is one lesson we can all take away from 2020, it's that
              none of us have a crystal ball. We learnt first-hand that it’s
              impossible to predict the challenges that lay ahead. In the words
              of theGreek philosopher Heraclitus,
            </p>
            <p className={styles.postContent} style={{ textAlign: "center" }}>
              <em>‘The only constant in life is change’.</em>
            </p>
            <p className={styles.postContent}>
              So, as students, how should we handle the changes and transitions
              we will face? How do we prepare for our next steps in an uncertain
              and ever-evolving world? What kind of attitude and skills will we
              need to weather the storm and emerge victorious?
            </p>
            <p className={styles.postContent}>
              To help answer these questions, we spoke to Zoe Ong, a fourth-year
              Accounting and Information Systems at UNSW. Zoe’s journey so far
              has brought her face-to-face with tough decisions, periods of
              change and testing situations. Her achievements to date are as
              impressive as they are inspiring, so we decided to ask her to take
              us through her journey stage by stage to unlock her secrets.
            </p>
            <br />

            <p className={styles.question}>
              Let’s begin back in 2018 when you were studying a Business
              Administration and Accountancy degree at the University of the
              Philippines Diliman. What inspired you to make the move to
              Australia and study Computer Science and Commerce?
            </p>
            <p className={styles.postContent}>
              I was really attracted by the opportunity to do a double degree in
              Australia. I felt it was important to build my technical knowledge
              while also retaining the business element of my degree.
            </p>
            <p className={styles.postContent}>
              Another reason for the move was the fact that I was born and
              raised in the Philippines, where I was still firmly within my
              comfort zone. I decided that I wanted to pursue a new experience
              and see what I could accomplish if I were more independent in a
              completely new environment. I liked the idea of the challenge and
              seeing how I could grow through that experience.
            </p>
            <br />

            <p className={styles.question}>
              How would you describe your experience of moving to Sydney?
            </p>
            <p className={styles.postContent}>
              It was obviously a culture shock and I did struggle at times. I
              left behind a life that had taken so long to build in order to
              start afresh in Sydney. That meant having to build a group of
              friends I could trust and depend on, and establish myself all over
              again. After the first few months, I definitely felt like I had
              made a mistake. The way that university is structured is so
              different here. In the Philippines, I was part of a small cohort
              and we had plenty of overlapping classes. In Sydney, I soon
              realised that I could meet someone in a tutorial and then never
              speak to them again. As an introverted person, it takes a while
              for me to build relationships with people, so only being able to
              see one person once, or a handful of times, and having to quickly
              establish that relationship and rapport was challenging for me.
            </p>
            <p className={styles.postContent}>
              That said, the transition was also quite exciting with all of the
              constant change. I felt a general sense of gratitude, to be able
              to have this opportunity to experience these new things I would
              never have been able to experience in the Philippines. Without
              coming here, I wouldn't have been able to achieve all the things
              that have helped me build my confidence and understand myself more
              and realise what type of person I am. I wouldn’t have learned
              these things if I were still sheltered in my comfort zone.
            </p>
            <br />

            <p className={styles.question}>
              What extracurricular activities did you get involved in as a
              first-year here, and what drove you towards choosing those
              particular societies?
            </p>
            <p className={styles.postContent}>
              In my first year, I joined the subcommittee of UNIT. I wanted to
              join UNIT because, in the Philippines, I had joined a finance
              society, which I loved, and so I wanted to get involved in
              something similar.
            </p>
            <p className={styles.postContent}>
              I also joined Capital W,because I knew I wanted to be in business
              and I admired a lot of female entrepreneurs. Having a society
              dedicated to empowering women aligned with my values. I wanted to
              be part of a community of women who were also interested in
              business and shared similar aspirations.
            </p>
            <p className={styles.postContent}>
              And finally, I joined the events subcommittee of the Alternative
              Investment Society because I was especially interested in venture
              capital and the startup space. I felt like it would help me, as a
              future entrepreneur, understand how to get funding and how to
              appeal to investors.
            </p>
            <br />

            <p className={styles.question}>
              How did these experiences change you as a person?
            </p>
            <p className={styles.postContent}>
              Having wanted to push myself outside of my comfort zone, I
              realized that somehow all my choices in my first year were based
              on what I had done in the past. I used to be in a finance society
              in the Philippines, so I joined a finance society in Sydney. I
              used to be on an events committee in high school, so I joined an
              events subcommittee here.
            </p>
            <p className={styles.postContent}>
              Although I did move to Sydney because I wanted that change, I will
              admit that when I first moved it was a struggle to have to handle
              all of that change at once. So to keep myself from getting
              completely overwhelmed, I did try to think about some of the
              interests that I still had, and that I could kind of bring into my
              new life to have an anchor, so I didn’t get swept away by all
              these changes that were happening.
            </p>
            <p className={styles.postContent}>
              I think there’s a lesson in there, that you can continuously
              change, grow and explore, without having to completely abandon
              past versions of yourself. Some people think that in order to
              truly feel like you’ve grown, you have to take on a completely new
              role or do things that are completely different from things you’ve
              done in the past. That's not necessarily true. I believe that if
              you already know what you like doing, and that's part of who you
              are, you can grow by building on it.
            </p>
            <p className={styles.postContent}>
              This is vertical growth. I think this can be better than
              horizontal growth, which is expanding all of your interests, but
              not really building on any of them. That was something I was quite
              concerned about in my first year as well. I tried very hard to
              make sure I was growing vertically, instead of just trying out a
              bunch of random things without any sense of direction. I don't
              think you have to know exactly what you want but you need to have
              a bit of a plan and a sense of where you're going. It’s perfectly
              fine to head down one road and realise it’s not for you but you
              should let your experiences strengthen your internal compass. Then
              you know that when you move, you're moving forward.
            </p>
            <br />

            <p className={styles.question}>
              What did you learn from your society roles and how did these help
              you transition to your internships at L’Oreal and Deloitte?
            </p>
            <p className={styles.postContent}>
              I learned some technical skills from my society experiences, such
              as website design, user experience, and SQL. This was beneficial
              in terms of securing an internship as I could show an aptitude for
              tech and an ability to learn. I think that’s more important than
              being a technical ‘expert’ when it comes to internships.
            </p>
            <p className={styles.postContent}>
              Also, as a natural introvert working with a lot of talented people
              and strong personalities, I also learned that if I wanted to make
              an impact, I had to speak up and make sure my voice was heard.
              When you’re in front of a client, your first impression can be
              your last impression, so you have to step up and speak up, even if
              it doesn’t come naturally.
            </p>
            <p className={styles.postContent}>
              I also learned that soft skills are critical. For example, at
              Deloitte I had to ask clients a lot of questions, you really need
              to focus and make sure you're paying attention and listen
              actively. You need to be able to question the information they
              give you and ask insightful questions to get the information that
              you need. Strong verbal and written communication is crucial, too.
              You can learn technical knowledge as you go along but developing
              soft skills is key.
            </p>
            <br />

            <p className={styles.question}>
              How do you adapt to changes in life?
            </p>
            <p className={styles.postContent}>
              I just dive in, and learn and grow as I go along. I am very
              contemplative but I try to act before I reach the point of
              overthinking and analysis paralysis. You have to have grit and
              approach changes with hope and optimism, especially when you have
              a hard time adjusting at first. The right mindset is key.
            </p>
            <p className={styles.postContent}>
              Another important thing when dealing with change is a good support
              system. Build and nurture your support system because it can be
              the one constant when everything changes around you. A solid group
              of friends and family will keep you grounded and help you cope
              with constant change.
            </p>
            <br />

            <p className={styles.question}>Who inspires you?</p>
            <p className={styles.postContent}>
              I do admire people like Bill Gates, Elon Musk, and Warren Buffett.
              However, what inspires me the most is thinking back on times when
              I really wanted and pictured something and it ultimately happened
              for me. That's really motivating, especially when there are times
              when I'm still in the phase where I'm still trying to achieve
              something I really want. When I think about what I have
              accomplished and remember that I actually pictured these
              achievements months, or even years before, I feel energised to
              keep going and be even better than my past self. It’s important to
              keep a level of gratitude though, and not take things for granted
              when they do work out.
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
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
export default blogPost44;
