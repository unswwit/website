import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost26 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #26" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Personal Project Series #1 - Link Up</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>September 27, 2020</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Apart from studying, attending lectures, completing internships,
              attending society events, hanging out with friends, and more, some
              students manage to complete incredible personal projects during
              their time at uni! WIT will be shining the spotlight on the
              amazing personal projects students at UNSW have created.
            </p>
            <br />

            <p className={styles.postContent}>
              In this blog post, we’ll be hearing from the founders of LinkUp!
              Perhaps you used LinkUp to discover WIT or other societies. Just
              like any great tool, it started with the recognition of a need,
              followed by a great idea. Let’s dive into our conversation with
              the three founders!
            </p>
            <br />

            <p className={styles.postContent}>
              Hey, we’re Deki, Zhou, and Felicia, three UNSW 2nd year students
              who created LinkUp!
            </p>
            <br />

            <p className={styles.question}>Introduce yourself!</p>
            <p className={styles.postContent}>
              <strong>Deki(D)</strong>: I’m a software engineering student that
              listens to one too many tech podcasts and enjoys playing Valorant.
            </p>
            <p className={styles.postContent}>
              <strong>Zhou(Z)</strong>: Just your average 2nd-year Comp Sci
              student. Quiet and introverted. I enjoy cooking, video games, and
              watching anime in my spare time.
            </p>
            <p className={styles.postContent}>
              <strong>Felicia(F)</strong>: I’m a Software Eng/Commerce student
              who loves baking, music (I play classical guitar), and graphic
              design - something I get to do a lot of as WIT’s Marketing Exec!
            </p>
            <br />

            <p className={styles.question}>What is LinkUp?</p>
            <p className={styles.postContent}>
              Z: It’s a uni event tracker to help find events happening at your
              uni.
            </p>
            <p className={styles.postContent}>
              F: By collating society events, we aim to help students find
              ‘their people’ in the student community, as well as help societies
              reach more students.
            </p>
            <br />

            <p className={styles.question}>What inspired you to create LinkUp?</p>
            <p className={styles.postContent}>
              D: I am actually from QLD, and when I first came to UNSW O-week I
              didn’t know anyone, so I was trying my best to go to every
              workshop/society stalls. However, finding events and workshops
              around campus was difficult and scattered over multiple mediums
              (UNSW website, Eventbrite, Facebook), and I wondered why there
              wasn’t an easier way to navigate events on campus.
            </p>
            <br />

            <p className={styles.question}>
              How did LinkUp become affiliated with Arc? How did you pitch your
              idea?
            </p>
            <p className={styles.postContent}>
              F: Arc actually reached out to us after seeing our posts on the
              UNSW Discussion Group! They loved how we were making it easier for
              students to be involved with uni life and offered their support.
              It was a great experience working with them.
            </p>
            <br />

            <p className={styles.question}>
              Who was on the founding team and what roles did you have
              allocated? After the project took off, were more people recruited
              to join the team?
            </p>
            <p className={styles.postContent}>
              D: LinkUp started off with me, Zhou and Felicia. I worked mainly
              on the frontend of the website while Zhou worked on backend and
              devops. Felicia was in charge of marketing. After a period of
              growth, yes, we did decide to recruit more members to help LinkUp
              become an even better product.
            </p>
            <br />

            <p className={styles.question}>
              Can you tell us about the process of building LinkUp? What time
              commitments did it require?
            </p>
            <p className={styles.postContent}>
              Z: Building LinkUp took a long time. The whole process involved
              splitting the project into iterations so it was easier to handle,
              and focused on building MVPs so we could iteratively improve them
              later on. We experimented with code and features and researched
              methods and solutions to our problem, which we defined earlier:
              finding events. We also talked a lot with each other before making
              decisions. A small part of the project was Googling and using
              Stack Overflow to find tutorials and code examples that we could
              use since we were relatively new to personal projects. In terms of
              time commitment, the project was very flexible and fit within our
              schedules. Some weeks we might have spent a few hours on it, and
              others felt like a full-time job (often when we had nothing else
              to do e.g,. summer holidays). We’ve probably spent well over a few
              hundred hours so far on LinkUp.
            </p>
            <p className={styles.postContent}>
              F: In terms of building our user base and reaching students, we
              focused on Facebook discussion groups as the easiest way to reach
              a large number of students.
            </p>
            <br />

            <p className={styles.question}>
              What did you learn whilst creating LinkUp?
            </p>
            <p className={styles.postContent}>
              D: LinkUp consists of a small and dedicated team, so I learned how
              to work in a team and the importance of communication and time
              management to deploy features on time. I also learned to work with
              external parties to satisfy both Linkup’s needs and theirs.
            </p>
            <p className={styles.postContent}>
              Z: I learned how to use AWS to host our website, CDN and backend,
              how to write scripts to scrape websites using Python and set up
              continuous delivery for our repo. I also learned a bit of React so
              I could help out with the frontend.
            </p>
            <p className={styles.postContent}>
              F: I have definitely developed my teamwork and communication
              skills along the way, but I also realised how lucky we are at UNSW
              to have such an active and engaged student community. Society
              events are a huge part of the uni experience at UNSW, in
              comparison to other universities, and I’m really grateful for
              that. It would be amazing if LinkUp could help shape student
              communities in other unis as well.
            </p>

            <p className={styles.question}>
              What are some of the challenges you faced while creating LinkUp?
            </p>
            <p className={styles.postContent}>
              Z: Probably encountering a bug or error and not being able to find
              a fix on Google. The best thing to do here is to take a break and
              refresh your mind for a while, so when you come back, you can take
              a different approach. Another challenge was finding the motivation
              to do the project. This might be different for everyone, but I
              found setting goals and thinking about the future helped me be
              more motivated in creating LinkUp.
            </p>
            <br />

            <p className={styles.question}>
              Who did you turn to for help along the way?
            </p>
            <p className={styles.postContent}>
              Z: Whenever we needed help, we would either Google it, ask our
              teammates for help, or ask questions in relevant coding
              communities available to us. Some supportive communities for
              asking coding related questions are CSESoc workshops, Pcsoc
              discord, r/learn programming, and other programming subreddits, a
              certain UNSW society discord, and plenty of others.
            </p>
            <p className={styles.postContent}>
              F: We also have talked to a wonderful mentor from UNSW Founders,
              who helped guide us and focus on our goals.
            </p>
            <br />

            <p className={styles.question}>
              What has been the most rewarding part of creating LinkUp?
            </p>
            <p className={styles.postContent}>
              D: Seeing students using LinkUp and receiving feedback about how
              much it has helped them find events around campus will continue to
              be the most rewarding part of Linkup. Knowing that other people
              are also finding value in a project that you spent so much time
              and effort on will serve as a motivation to improve LinkUp
              continually.
            </p>
            <p className={styles.postContent}>
              Z: While creating LinkUp, I realised how rewarding a personal
              project can be and how much you can learn from the experience.
              Personal projects are completely different from course projects
              regarding how much control you have over your project. You get to
              choose your own teammates without any restrictions, have a
              flexible time commitment that fits in with your schedule, do
              something you are interested in, plus so many other things.
              Ultimately, this made it easier to learn the technologies required
              to build LinkUp and learn what we were interested in. I highly
              encourage everyone interested in software engineering to start a
              personal project for something that interests them. There is just
              so much you can learn from it.
            </p>
            <p className={styles.postContent}>
              F: Like Deki, for me, it’s knowing students are using the site and
              that we’re actually helping strengthen UNSW’s student community.
              Every time a student or society contacts us with questions or
              support, it’s super exciting and makes me want to do more.
            </p>
            <br />

            <p className={styles.question}>
              What has been the initial impact of LinkUp? Have more students
              joined societies?
            </p>
            <p className={styles.postContent}>
              Z: So far we have had 7.7k users and 12k sessions. We’re not too
              sure of how much we impacted students joining societies, but it
              has certainly made it easier to find events to go to.
            </p>
            <p className={styles.postContent}>
              F: We’ve been impacted a lot by COVID, with many events being
              postponed or canceled. But, we’ve received a lot of positive
              feedback, so hopefully, as we move back on campus LinkUp can reach
              even more people.
            </p>
            <br />

            <p className={styles.question}>
              What’s next for LinkUp? What are your plans and goals and will you
              be pursuing it after
            </p>
            <p className={styles.postContent}>
              Z: We hope more students will use LinkUp, so we’re planning to add
              many features to help make uni events better! We can’t say much
              yet, but you can expect ways to give feedback for an event and a
              voting system. We will still maintain it after graduation,
              depending on how much time we have, but don’t expect any major
              updates. This should be fine, though, as it doesn’t require much
              time to maintain.
            </p>
            <br />

            <p className={styles.question}>
              What advice would you give to other students who want to pursue a
              personal project?
            </p>
            <p className={styles.postContent}>
              D: If you have a personal project you are interested in, then I
              would say just start it. If you need help learning the frameworks
              or languages, there are so many great resources with my personal
              favourite being Youtube and Codecademy.
            </p>
            <p className={styles.postContent}>
              Z: Do something you’re interested in, go to relevant workshops,
              use your support (founders, CSESOC, WIT, etc,) and have fun.
            </p>
            <p className={styles.postContent}>
              F: Think about what you want to achieve and why, write down your
              goals, and celebrate every victory.
            </p>
            <br />

            <p className={styles.postContent}>
              Deki, Zhou, and Felicia have built something that makes every
              student’s life easier and more enriching at UNSW. Not many people
              leave that sort of legacy! Along the way, they developed their
              technical skills, overcome technical challenges, and explored
              their interests. And of course, this project showcases their
              skills in a unique way that will surely be attractive to many
              employers. On behalf of all UNSW students, thank you Deki, Zhou,
              and Felicia for volunteering your time to build something we love
              so much! We hope you will find the knowledge and support you need
              to reach all your LinkUp goals.
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
export default blogPost26;
