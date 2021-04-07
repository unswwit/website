import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost39 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #39" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              How to Take Notes Effectively, Professionally, and Academically
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>November 15, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              How many times have you been in a lecture and struggled to write
              quickly enough? Or Missed important details because you were busy
              writing something else?
            </p>
            <p className={styles.postContent}>
              While many lectures and presentations are recorded and shared with
              the attendees nowadays, note-taking is still a necessity, so here
              we explore how to take Notes Effectively, Professionally, and
              Academically
            </p>
            <p className={styles.postContent}>
              In every lecture and tutorial, students face the daunting task of
              extracting and remembering the most important information and so
              note-taking can be an effective way to reinforce what you’re
              learning. Additionally, it’s more efficient to learn and capture
              the important information when you're hearing it for the first
              time, instead of spending more time reviewing a recording of it.
            </p>
            <p className={styles.postContent}>
              <i>
                “Acquiring the habit of note-taking is a wonderfully
                complementary skill to that of listening.” - Richard Branson,
                English business magnate, investor, and author.{" "}
              </i>
            </p>
            <br />

            <p className={styles.superEmph} style={{ color: "black" }}>
              Do’s and Don’ts for Note Taking
            </p>
            <p className={styles.question}>
              Tips to help you take notes effectively:
            </p>
            <p className={styles.postContent}>Do:</p>
            <ul className={styles.list}>
              <li className={styles.postContent}>
                Identify the speaker’s purpose
              </li>
              <li className={styles.postContent}>
                Write down the main points, essence, and notable facts that
                would be hard to recall on your own later
              </li>
              <li className={styles.postContent}>
                To save time, use abbreviations.
              </li>
              <li className={styles.postContent}>
                To add organization, use bullets, highlight, underline and
                capitalize appropriately
              </li>
              <li className={styles.postContent}>
                Use arrows to show how concepts are connected
              </li>
              <li className={styles.postContent}>
                Create easily identifiable symbols such as stars to identify
                action items etc
              </li>
              <li className={styles.postContent}>
                At the end of the lecture or meeting, summarize the main
                messages into one to two sentences to reinforce your
                understanding of the material
              </li>
            </ul>
            <p className={styles.question}>
              Things to avoid while note-taking:
            </p>
            <p className={styles.postContent}>Do not:</p>
            <ul className={styles.list}>
              <li className={styles.postContent}>
                Write down everything the lecturer/speaker says
              </li>
              <li className={styles.postContent}>
                Multitask. Stay focused on the speaker
              </li>
              <li className={styles.postContent}>
                Experiment with the presentation or organization of your notes
                while taking notes. Determine the style, organization, and
                method before taking notes. Remember to always be open to trying
                out a new style of taking notes, but plan ahead.
              </li>
            </ul>
            <br />

            <p className={styles.superEmph} style={{ color: "black" }}>
              Tools for Note Taking
            </p>
            <p className={styles.postContent}>
              Online note-taking and organizational tools such as Evernote and
              OneNote are popular and effective tools used to organize their
              notes, manage tasks, and archive the notes that are no longer
              needed. These programs allow users to gather notes and information
              in a variety of ways — from traditional writing, audio, and video
              recordings to storing complete webpages.
            </p>

            <p className={styles.superEmph} style={{ color: "black" }}>
              Popular Note Taking Methods
            </p>
            <p className={styles.postContent}>
              <b>Outline Method</b> - This method organizes information in a
              structured and logical manner and becomes an excellent study
              guide. Use simple bullet points and hierarchy (have a main heading
              and bullet point below the heading). Use top-level bullet points
              for the main points and lower level bullet points for the details.
            </p>
            <p className={styles.postContent}>
              <b>Cornell Method</b> - Divide paper into 3 sections. On the top
              of your paper, you’ll have two columns with the left one being the
              cue column and the right one being the notetaking column.
              Underneath the columns, you have a section for the summary where
              you summarise the key point using your own words. During the
              lecture, you add notes. After class, you add questions or cues
              related to the summary bullet points on the right. Then, you write
              a summary of the lecture below.
            </p>
            <p className={styles.postContent}>
              <b>Mind Map Method</b> - This method allows you to highlight
              important facts, show the structure of a subject and its important
              individual parts, and ultimately, make new connections between
              ideas. It’s ideal for when you need to think creatively. Write the
              topic at the center of a piece of paper. Then, add tree limbs with
              topics and subtopics.
            </p>
            <p className={styles.postContent}>
              <b>Flow Method</b> - The goal of this method is to learn the
              material once while sitting in class. Create your mental image of
              the subject on paper. Organize it spatially, including arrows to
              connect concepts and ideas.
            </p>
            <p className={styles.postContent}>
              <b>Charting Method</b> - This method is ideal when you’re learning
              about chronological events. Identify the topics that will be
              covered in the lecture. Then, draw columns and write the headings
              based on the categories. During the lecture or tutorial, write
              down words, phrases, and main ideas into the appropriate category.
            </p>
            <br />
            <p className={styles.postContent}>
              Now, you have some new methods, tips, and tools to help you write
              notes effectively and efficiently for school or your professional
              life!
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
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost39;
