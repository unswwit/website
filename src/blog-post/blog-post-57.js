import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost57 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #57" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>S(c)ent From the Past</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 10, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Scents have the nostalgic power to remind us of things in the
              past. More so than any other sense, our sense of smell is directly
              linked to memory. Smell is processed in the area of our brains
              that is directly connected to the amygdala, which contributes to
              emotional memories. This is why sometimes, when we catch a whiff
              of a specific scent, detailed memories or intense emotions can be
              triggered.
              <br />
              <br />
              Now a team of historians, chemists, perfumers, and specialists in
              artificial intelligence have taken this concept to the next level,
              utilising the power of AI in order to preserve the historic smells
              of 16th to 20th century Europe, in a project dubbed “Odeuropa”.
              Each distinct smell will have a labelled source, origin,
              qualities, and significance in its respective time period,
              collated as part of a huge online database, the Encyclopedia of
              Smell Heritage.
            </p>
            <br />

            <p className={styles.question}>Why recreate ancient smells?</p>

            <p className={styles.postContent}>
              According to the Odeuropa team, the project aims to “identify and
              trace how ‘smell’ was expressed in different languages, with what
              places it was associated, what kinds of events and practices it
              characterised, and to what emotions it was linked”, thus
              preserving the larger collective olfactory heritage of Europe.
              <br />
              <br />
              Dr William Tullett, a history and smell expert from Anglia Ruskin
              University says, “For me, tobacco is really an essential smell in
              European history and heritage. It's a hot, smoky, pungent smell
              but of course, it's not one smell at all, because perfumers and
              tobacconists and grocers have experimented with scenting tobacco
              in all kinds of ways. But as a historian, it's also interesting
              for me because it links to histories of sociability, of trade and
              colonisation and also health.”
              <br />
              <br />
              Smells like tobacco, among others, can reveal a lot about a time
              period, not only in the obvious way - in how it smelt - but also
              about the social climate of the time and the cultural
              significance.
            </p>
            <br />

            <p className={styles.question}>A multidisciplinary project</p>
            <p className={styles.postContent}>
              The information documented in the Encyclopedia of Smell Heritage
              would be used by chemists and perfumers to reconstruct and produce
              a number of significant smells. These reconstructed odours would
              then be displayed at museums and heritage sites, making the
              exploration of European history more of an immersive multi-sensory
              experience. In making the exploration and appreciation of history
              more multidimensional, perhaps the smells recreated could evoke
              untapped emotions within us.
            </p>
            <br />

            <p className={styles.question}>
              The Power of Artificial Intelligence
            </p>
            <p className={styles.postContent}>
              The project will use AI algorithms to identify any mention or
              descriptions of smells and fragrances across thousands of texts,
              ranging from historical to scientific. The dataset is expected to
              have over 4,000,000 texts and paintings, in seven different
              languages - Latin, English, Italian, German, French, Dutch, and
              Slovenian. As the AI is taught words, phrases, and expressions
              relating to smells or describing the act of smelling, such as
              “fragrance”, “odour”, “aroma”, “the scent of…”, feeding the
              automatic learning algorithm, it can in turn search for, and
              recognise any references to smell within texts.
              <br />
              <br />
              Similarly, the AI would identify any aromatic elements within
              artworks too. The algorithm would be fed image datasets with
              scented elements, such as flowers or smoke, or images of noses “in
              action” that are in the process of smelling something. It could
              also be taught to recognise the facial expressions of figures
              while smelling - and deduce whether the smells were pungent or
              pleasant!
              <br />
              <br />
              The process of training the machine learning software to recognise
              references to smell in computer texts would take about 18 months,
              according to project manager Marieke van Erp. By the end of it,
              the learning software would be able to scan thousands of documents
              and images and identify those smell descriptions by itself. By
              utilising AI’s power to examine massive quantities of data at top
              speeds, the project maximises the amount of information that can
              be collated into the online encyclopedia of scents.
              <br />
              <br />
              In using AI algorithms to reconstruct elements of history, we can
              see how artificial intelligence, a part of our future, is
              recreating our past. In a way, as technology meets history, the
              lines between the past and the future are blurred.
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "therese-nguyen": [
              "/potraits/blog-authors/therese-nguyen.png",
              styles.authorProfile,
              "Therese Nguyen",
              "Education Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost57;
