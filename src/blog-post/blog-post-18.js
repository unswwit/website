import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost18 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #18" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Which technology degree are you?
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>August 2, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Software Engineering. Computer Science. Information Systems. The
              big 3 of technology degrees. With the ever-growing evolution of
              the technology sector, students with these degrees become more
              in-demand and relevant across all different industries.
            </p>
            <br />

            <p className={styles.postContent}>
              But what makes them unique? Which career paths can they lead to?
              Take the quiz below to find out which degree you are!
              <i>
                And don’t forget to check out{" "}
                <a href="https://issuu.com/womenintechnology/…/wit_2020_careers_guide">
                  WIT’s Career Guide
                </a>{" "}
                for more information!
              </i>
            </p>
            <br />

            <ol className={styles.list} type="1">
              <li className={styles.question}>Finish the word, mother-</li>
              <br />
              <ol className={styles.list} type="a">
                <li>ship</li>
                <br />
                <li>board</li>
                <br />
                <li>hood</li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                You get home and realise you forgot your keys. Do you…
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>Climb in through the window?</li>
                <br />
                <li>
                  Design a new system so that you aren’t locked out again?
                </li>
                <br />
                <li>Call someone?</li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                It’s 3am, you are most likely to be found...
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>Finishing something you forgot about</li>
                <br />
                <li>Sleeping</li>
                <br />
                <li>Watching a documentary on Netflix</li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                Project-wise you would manage:
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>Product</li>
                <br />
                <li>Code</li>
                <br />
                <li>People</li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                You’re on a boat, and take a stop in the middle of the ocean.
                You decide to...
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>Swim to a small island in the distance</li>
                <br />
                <li>Dive as deep as you can go</li>
                <br />
                <li>
                  Stay on the boat, but suggest that you explore a bit more
                </li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                Say that you choose to dive to the bottom, what interests you
                more?
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>The challenge</li>
                <br />
                <li>
                  Knowing you reached the bottom
                  <span role="img" aria-label="party">
                    🥳
                  </span>
                </li>
                <br />
                <li>Finding out what’s at the bottom</li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>Pick a letter:</li>
              <br />
              <ol className={styles.list} type="a">
                <li>A</li>
                <br />
                <li>B</li>
                <br />
                <li>(A+B)!</li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                It’s interview time! You are most nervous about…
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>The case interview!</li>
                <br />
                <li>Project experience!</li>
                <br />
                <li>Not knowing enough!</li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                You’re talking to your friend, and they mispronounce a word. Do
                you..
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>Leave them, they’ve got the gist of it?</li>
                <br />
                <li>Correct them?</li>
                <br />
                <li>
                  Don’t correct them, and now worry that it’s a new word you’ve
                  never heard of?
                </li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                You find yourself stranded on an island, you are most likely
                to...
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>Build a new life for yourself on the island</li>
                <br />
                <li>Figure out how you are going to get off the island</li>
                <br />
                <li>
                  Use my ECON1101 Playconomics expertise to help me live a
                  prosperous and economical life on the island :)
                </li>
                <br />
              </ol>
              <br />

              <li className={styles.question}>
                You walk over a sewer grate, do you…
              </li>
              <br />
              <ol className={styles.list} type="a">
                <li>Hold your phone tighter?</li>
                <br />
                <li>Step around it?</li>
                <br />
                <li>Wonder how deep the hole goes?</li>
                <br />
              </ol>
              <br />
            </ol>
            <br />

            <p className={styles.superEmph}>THE RESULTS</p>
            <br />

            <p className={styles.question}>
              <b>Mostly A’s:</b> Software Engineering!
            </p>

            <p className={styles.postContent}>
              “Itching to learn skills that are practical and discover how cool
              computing is” sums you up perfectly!
            </p>

            <p className={styles.postContent}>
              Like Elizabeth (treasurer), you enjoy “combining your technical
              side and creative side to have fun whilst being constantly
              challenged”. This is shown by your willingness to take on the
              challenge of exploring unknown depths, understanding the breadth
              of concepts and issues, and your innovative mind in the most
              complex situations!
            </p>

            <p className={styles.postContent}>
              “The number one skill in Software Engineering is learning quickly
              and adapting” Arthur (WIT member) says. An interviewer's interest
              in your problem-solving skills and ability to logically think
              through a situation is more important than just getting the right
              answer.
            </p>
            <br />
            <br />

            <p className={styles.question}>
              <b>Mostly B’s:</b> Computer Science!
            </p>

            <p className={styles.postContent}>
              As told by Gian (IT Subcommittee), “I am challenged to not only
              think logically but also creatively in designing a software” and
              similarly, you’re drawn to computer science. You’re amazing at the
              technical side of computing as well as inspired by the power of
              programming and depth of knowledge that allows you to accomplish
              even the hardest of challenges.
            </p>

            <p className={styles.postContent}>
              A pro-tip and resource from one of our student responses to help
              you ace your interviews: “I recommended websites such as Leetcode
              and Hackerrank for practising when you prepare for coding
              interviews”. Jiamin (WIT member) provides further wisdom in
              collaboration and seeing your brilliant ideas through, “how we
              communicate our ideas drastically impacts the final output and
              quality of the experience…take the initiative to suggest new ideas
              and compromise or negotiate.”
            </p>

            <p className={styles.postContent}>
              You are career-driven, a quick-adapter, and know what you want to
              achieve in an environment that is challenging, fun, and allows you
              to push your creativity!
            </p>
            <br />
            <br />

            <p className={styles.question}>
              <b>Mostly C’s:</b> Information Systems!
            </p>

            <p className={styles.postContent}>
              “Being able to think logically through complex problems without
              relying on a specific programming language or tool” is a great
              quality you’ve been able to develop. You love combinations,
              blends, and like Rhea (External Relations Executive), you’ve
              achieved “the perfect blend of information technology and
              commerce!”
            </p>

            <p className={styles.postContent}>
              You have an amazing breadth of knowledge from these two
              disciplines ready to create solutions, stay in control of complex
              issues, and with the wide range of career possibilities, you’re
              set for success!
            </p>

            <p className={styles.postContent}>
              Alison’s (Human Resources Executive) pro-tip to get you
              interview-ready is “rather than the knowledge there is more of
              interest from interviewers in looking at how you have managed to
              apply these skills in the real world, whether that be through
              personal projects, extra-curricular, or part-time roles.”
            </p>

            <p className={styles.postContent}>
              So go out there you go-getter, and keep exploring “technology,
              it’s ever-evolving nature and how it disrupts the modern business
              landscape,” like Calista (WIT member).
            </p>
            <br />
            <br />

            <p className={styles.postContent}>
              Thank you so much to the student responses that helped to put
              together this insightful, and hopefully super fun blog post!
            </p>
            <br />

            <p className={styles.postContent}>
              Interested in learning more about these degrees and looking for
              more advice about your career? Check out{" "}
              <a href="https://issuu.com/womenintechnology/…/wit_2020_careers_guide">
                our careers guide
              </a>{" "}
              for more information.
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
export default blogPost18;
