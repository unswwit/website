import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost28 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #28" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Technical Interview Walkthrough with Amanda Li and Vivian Shen
              (Part 1)
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>October 4, 2020</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Technical interviews are an intimating, yet necessary aspect of
              the job-seeking process. They are crucial for helping recruiters
              understand a potential employee's set of practical skills and
              whether or not their way of thinking is compatible with the
              company. In this Q&A, Vivian Shen and Amanda Li, the President and
              Vice President of WIT respectively, offer the useful advice they
              have gathered from their own experiences to help you succeed in
              your next technical interview.
            </p>
            <br />

            <ol className={styles.list}>
              <li className={styles.question}>Can you tell us about yourself?</li>
              <br />{" "}
              <p className={styles.postContent}>
                <strong>Vivian(V)</strong>: I'm Vivian, and I’m currently
                studying B. Data Science & Decisions (Computational Major). I am
                the current President of WIT and formerly the Treasurer of CSE
                Revue. I was a Google STEP Intern last summer, and I will be an
                Atlassian Data Science Intern this Summer.
              </p>
              <p className={styles.postContent}>
                <strong>Amanda(A)</strong>: I’m Amanda, and I’m a third-year
                student studying Software and Biomedical Engineering. I’ve been
                a part of a few societies and Arc Volunteering. I am currently
                the VP for WIT and the Careers Director for EngSoc. I started
                applying for internships this year, and I’m interning at AI
                Australia as a Web Dev. This summer, I’ll be an Atlassian
                Software Developer Intern.
              </p>
              <br />
              <li className={styles.question}>
                How have you prepared for technical interviews?
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: I brushed up on common data structures and algorithms,
                including time and space complexities, using university
                resources from COMP2521, Medium articles and Youtube videos. I
                practiced by doing questions on websites such as HackerRank and
                LeetCode. Additionally, I browsed on Reddit and other forums to
                understand the interview process and what types of questions I
                might be asked for a specific interview. After I felt like I was
                prepared enough, I had a couple of our friends sit through mock
                technical interviews with me and give me feedback on my
                performance.
              </p>
              <p className={styles.postContent}>
                A: I researched people's past experiences interviewing for the
                company and role, especially on forums like Reddit, Glassdoor
                and Quora. People often describe their interview process, how
                they found it (difficulty level) and what types of questions
                they were asked. I also knew that they would be assessing data
                structure and algorithms, so I revisited my COMP2521 notes.
              </p>
              <br />
              <li className={styles.question}>
                Where did you find practice questions?{" "}
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: I found many practice questions on HackerRank and Leetcode.
              </p>
              <p className={styles.postContent}>
                A: Typical sites are HackerRank and Leetcode. HackerRank is
                great because it provides verified solutions in multiple
                languages and tagged topics and difficulty levels. Questions
                also have some test cases given. Additionally most companies use
                platforms like HackerRank for their coding test stages so it’s
                good to familiarise yourself with the setup. Another website you
                could try is InterviewBit. They have video tutorials on topics
                and hand-picked questions. You also get rated with a points
                system and if you excel you get referred to top-notch companies.
              </p>
              <br />
              <li className={styles.question}>
                What was the structure of the technical interviews you
                completed?
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: The structure of technical interviews would differ depending
                on the company and role you've applied to. Today, we're going to
                go over the most common structure of technical interviews for a{" "}
                <strong>software engineering role</strong>.
              </p>
              <p className={styles.postContent}>
                The typical interview is ~45 minutes long. We begin with
                self-introductions for the first ~5 minutes. Here's your
                opportunity to tell the interviewer a little bit about yourself,
                your motivations for applying to this role and what experiences
                you have (from other internships, hackathon, personal projects
                etc). Next we would spend the next 30-35 minutes answering
                technical questions and wrap-up with ~5 minutes of questions you
                would like to ask the interviewer.
              </p>
              <p className={styles.postContent}>
                For the technical questions, you should expect to be given
                either 1 hard question or 2 easy-medium questions for you to
                CODE up in the 30-35 minutes. Following this, you will always be
                asked about the time and space complexity of your code. You
                should always begin by understanding the question asked. Spend
                the next 2-3 minutes asking any clarifying questions (addressing
                input/output types, asking how it might handle certain edge
                cases) and think of test cases and confirming their intended
                output. Then, you can think about your code implementation and
                verbalize how you intend to implement the code. After the
                interviewer has given you the 'green light' you should begin by
                choosing your coding language and start coding it up.
              </p>
              <p className={styles.postContent}>
                A: I’ve only done 1 technical interview and it was actually 55
                minutes and one part of a three hour session. There was a brief
                introduction (there was only one interviewer) and then we jumped
                into the problem-solving and ended off with around 5 minutes of
                questions for the interviewer too. Most people answer 2 - 3
                questions (easy-medium difficulty). The platform used was
                CodePair which lets you and your interviewer collaboratively
                code. The interview gave one question at a time, I would code,
                test and then be asked ways to optimise my implementation based
                on space and time complexity.
              </p>
              <br />
              <li className={styles.question}>
                How did you test your code in your interviews?
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: For the technical interviews I sat, they were usually done on
                a whiteboard or on CoderPad. Either way, they don't let you
                'run' your code. You can 'test' your code by thinking of edge
                cases and seeing how your code handles it, or how you can adjust
                your code to handle this case.
              </p>
              <p className={styles.postContent}>
                A: My technical interview was online/virtual so I could actually
                run my code within the online coding platform but the testing
                process is the same - you would input test cases (consider edge
                cases and error cases if any) and compare the output.
              </p>
              <br />
              <li className={styles.question}>
                What are some of the questions/topics you were asked?
              </li>
              <div className="img-box outer-box">
                <div className="inner-box">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/blog-attachments/blog-28-topics-1.jpg"
                    }
                    alt="techInterviews-1"
                    resizeMode="contain"
                  />
                </div>
              </div>
              <br />
              <p className={styles.postContent}>
                V: Another thing you also want to be familiar with is the
                libraries of your chosen language eg. Python would have a number
                of existing functions. If you wanted to translate all the lower
                cases to upper cases you can use the inbuilt string.upper() to
                handle this instead of coding it up from scratch. This is
                important since it would tell the interviewer how well you know
                the language and it would also make your code <em>pythonic</em>,
                aligning with the Python style guides.
              </p>
              <p className={styles.postContent}>
                A: I was told to revise on data structures and algorithms (not
                necessarily the names but how to apply them) before my
                interview. The questions I received were on manipulation of
                arrays, strings and binary.
              </p>
              <br />
              <li className={styles.question}>
                Which language did you use and how did you decide to use that
                language?{" "}
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: Code in the language you are most <strong>comfortable</strong> in. At
                UNSW most students would begin by learning C, which is arguably
                not the best language to sit your technical interviews in.
                However, if you feel that C is your strongest language, then by
                all means sit your interview in C. I sat my Google STEP
                interviews in C and passed, and I know many other UNSW students
                who did the same for their roles and got accepted too.
              </p>
              <p className={styles.postContent}>
                A: I’ve been coding with Python for all my coding tests and
                technical interviews. It’s what I’m most comfortable with and
                there’s just some things (e.g. data structures) that are quicker
                and easier to implement in Python than C (even though C was my
                first language). For general software developer interviews, they
                usually choose questions that can be answered in a range of
                languages, so if you only know one language like C, that’s fine
                - it just might take longer to answer. However, if you are
                applying for a role with a specific language (e.g. C#
                Developer), then your coding tests will most likely require you
                to code in that language.
              </p>
              <br />
              <li className={styles.question}>
                How did you communicate your thought process / code
                implementation to the interviewer?
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: You want to verbalise your thought process to the interview
                as you code. This is actually a lot harder than you think
                because we're not used to doing this. You should definitely take
                the chance to practice a couple of mock interviews with friends
                or at society events such as WIT where you can practice
                technical interviews with company representatives.
              </p>
              <p className="psot-content">
                A: Even with uni exams, I tend to write my plan of attack in
                comments first (e.g. sort through this, loop through this then
                find this). So during the interview, I would also be saying it
                aloud too. Having those comments down just helps me target each
                step of solving the question one by one (e.g. first I have to
                sort, how do I sort, what’s the smartest way to sort).
              </p>
              <br />
              <li className={styles.question}>
                What questions would you recommend asking the interviewer?
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: You should ask the interviewer about things you would want to
                know about the company. Instead of the cliched, "Tell me about
                your role" or "How are you enjoying your work", think about what
                you would want to know about the company/role before you go in.
              </p>
              <p className={styles.postContent}>
                I’m pretty sure I asked the typical “What projects do you work
                on” but just because I was genuinely curious. I think it’s ok to
                start off by asking these things but not just filler questions -
                ask them if you actually want to know. That way, when they
                reply, there will be particular parts that interest you which
                you can ask more about. My interviewer was a backend developer
                but I’m more interested in frontend so I asked about how the
                different sides interacted, how tasks are separated/delegated,
                why he chose backend and difference between intern and grad
                application process.
              </p>
              <br />
              <li className={styles.question}>
                Did you ever get a question you didn’t know how to answer? If
                yes, what did you do?
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: Yes definitely. In interviews, you should always expect to
                answer questions you have never seen or heard of. You just need
                to think about how you would try to solve this with what
                knowledge you have and push through. Something that worked for
                me was to begin by how I would solve it logically without code
                and then seeing how that would translate into code.
              </p>
              <p className={styles.postContent}>
                A: Yes I have, even in coding tests. I got stuck at one point
                when he asked me how I would optimise my code in terms of space
                complexity. I threw around suggestions of ways I could change
                the data structure / algorithm I used. Not going to lie, I was
                stalling for time to think but also hoped bouncing ideas off him
                would help me see if I was going in the right direction. He
                actually gave me a hint to point me in the right direction, and
                I ended up getting it.
              </p>
              <br />
              <li className={styles.question}>
                What were some of the differences between the interview process
                at different companies?{" "}
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                V: For a software engineering role, the interview process would
                differ in terms of number of interviews, assessment days as well
                as types of questions etc.
              </p>
              <p className={styles.postContent}>
                Some companies such as Atassian would send through a HackerRank
                test to help filter out applicants before they get to proceed to
                a technical interview. Whereas other companies such as Facebook
                would go straight into technical interviews.
              </p>
              <p className={styles.postContent}>
                For Canva, you get to pick if you want to sit through a back-end
                or front-end interview, and your interview questions would be
                specifically on these areas instead of the usual data structure
                and algorithm questions.
              </p>
              <p className={styles.postContent}>
                Sometimes companies who don't have a Sydney office such as Jane
                Street would also fly you out to their office for a final
                assessment day (usually 3 consecutive interviews in one day).
              </p>
              <p className={styles.postContent}>
                A: For Atlassian, you would also experience a final assessment
                day usually in office but online due to COVID this year with 3
                interviews in a row (technical interview with a whiteboard
                interview and values interview).
              </p>
              <p className={styles.postContent}>
                That being said, the interview processes do differ slightly for
                each company in terms of structure, format and questions. If the
                interview process is unclear, you should definitely clarify this
                with your HR point of contact.
              </p>
              <br />
              <li className={styles.question}>
                What tips for success in technical interviews do you have for
                others?
              </li>
              <br />{" "}
              <p className={styles.postContent}>
                <span role="img" aria-label="red-cross">
                  &#10060;
                </span>{" "}
                Don't leave it to the last minute - usually technical interviews
                aren't something you can prepare for the night before.
              </p>
              <p className={styles.postContent}>
                <span role="img" aria-label="red-cross">
                  &#10060;
                </span>{" "}
                Don't begin your studies by working on the hard questions first,
                start at a level you're comfortable with and then work your way
                up.
              </p>
              <p className={styles.postContent}>
                <span role="img" aria-label="red-cross">
                  &#10060;
                </span>{" "}
                If you encounter a problem you weren’t prepared for, don’t freak
                out and give up immediately. Talk it through and throw out any
                suggestions you have.
              </p>
              <p className={styles.postContent}>
                <span role="img" aria-label="red-cross">
                  &#10060;
                </span>{" "}
                Don’t be discouraged if you don’t pass a technical interview.
                Companies often give you feedback if you reach this stage, and
                if not, ask the recruiter you’re in contact with. You can always
                do better next time.
              </p>
              <br />
              <p className={styles.postContent}>
                <span role="img" aria-label="green-tick">
                  &#9989;
                </span>{" "}
                Do practice beforehand - revise using COMP2521 materials,
                websites such as HackeRank and LeetCode.
              </p>
              <p className={styles.postContent}>
                <span role="img" aria-label="green-tick">
                  &#9989;
                </span>{" "}
                Do your research on your company - mission, values, what types
                of questions you might be asked. Also make sure to come dressed
                appropriately!
              </p>
              <p className={styles.postContent}>
                <span role="img" aria-label="green-tick">
                  &#9989;
                </span>{" "}
                Do ask your friends for help - mock interviews, understand
                concepts/questions
              </p>
              <p className={styles.postContent}>
                <span role="img" aria-label="green-tick">
                  &#9989;
                </span>{" "}
                If you’re stuck (some test cases failing) and your interviewer
                offers help, listen to them - that was a point my interviewer
                mentioned in my feedback that he liked. Don’t be afraid of the
                interviewer, they’re there to help you along and they want to
                see you pass.
              </p>
              <br />
            </ol>
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
export default blogPost28;
