import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost55 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #55" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              The Biotech hype <em>EXPLAINED</em>
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 1, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              I think we can all agree that 2020 was a chaotic year. Coronavirus
              erupted and swept the globe, infecting millions and causing
              nationwide lockdowns. Scientists and governments have moved with
              unprecedented speed to develop multiple vaccines to combat the new
              virus, with over 4 million doses administered to Australians by
              the end of May 2021.
            </p>

            <p className={styles.postContent}>
              You may have heard of the companies involved in this vaccine
              research, such as Moderna, Novavax, and Pfizer. But did you know
              that the umbrella these companies sit under is that of
              <em style={{ fontWeight: 500 }}> biotechnology</em>?
            </p>

            <p className={styles.postContent}>
              Over the past decade, the biotech world has advanced faster than
              many other areas of STEM, rocketing in popularity and
              possibilities. Biotechnology has huge potential to help solve
              global problems, from medical and agricultural, to industrial and
              environmental. And while you’ve probably heard of the term, you
              may be a bit fuzzy on exactly what biotechnologists get up to.
            </p>

            <p className={styles.postContent}>
              It’s time to demystify the exciting realm of biotechnology!!
            </p>

            <p className={styles.question}>So, what is biotech?</p>

            <p className={styles.postContent}>
              Biotechnology is the use of a biological system, a whole organism
              or a component of an organism, to manufacture a product or process
              for a particular use. Australia is now home to a thriving network
              of over 470 biotech companies.
            </p>

            <p className={styles.postContent}>
              When you think of biotechnology, images of news stories such as
              Dolly the cloned sheep may come to mind, and these cutting-edge
              lab techniques are certainly important biotech examples! But
              processes and products that have been around for thousands of
              years, such as crop breeding and antibiotics, are also examples of
              biotechnology.
            </p>

            <p className={styles.postContent}>
              Biochemical engineer and UNSW A/Prof Christopher Marquis, when
              asked to summarise biotechnology, replied that it “takes our
              understanding of cell biology and chemistry to create a range of
              products and solutions to problems in medicine, food and energy.
              We can think of fermented foods, antibiotics, vaccines and
              biofuels as just a few of the biotechnology innovations that have
              made enormous impacts on humanity.”
            </p>

            <p className={styles.question}>
              Current applications and key fields of research
            </p>

            <p className={styles.postContent}>
              Biotechnology is not a new discipline, but advances over the last
              decade have led to more applications in our day-to-day lives, from
              pharmaceutical development to food production and waste treatment.
              Brand new areas of research include nanotechnology-enhanced
              therapies, microalgae manipulation to produce biomolecules,
              plastic-degrading enzymes, stem cell engineering, and wearable
              biosensors for diagnostic purposes.The possibilities really are
              endless!
            </p>

            <p className={styles.postContent}>
              Many types of modern biotechnology rely on DNA technology.
              Sequencing an entire genome is still a very complex task to
              accomplish. It requires breaking the DNA into many small pieces to
              sequence, and then assembling these sequences into a single long
              consensus. According to Chris Marquis, “With our rapidly
              increasing capacity to understand cell biology through, for
              example, genetic sequencing, biotechnology will play a key role in
              providing sustainable improvements in health, agriculture and
              environment for the 21st century.”
            </p>

            <p className={styles.question}>Why is biotech so important?</p>

            <p className={styles.postContent}>
              Biotechnology is part of the current technology revolution; our
              world is becoming increasingly digitised, and science cannot be
              applied without technology and engineering. As the world is faced
              with environmental and human issues such as climate change, loss
              of species diversity, antibiotic resistance and viral pandemics,
              biotechnologists will help lead the way to innovative solutions.
              The success of the current COVID-19 vaccines is one such
              achievement. No vaccine has ever been developed so quickly before,
              nor readied for widespread use and manufactured at scale on this
              timescale.
            </p>

            <p className={styles.postContent}>
              However, as we’ve seen with the recent coronavirus vaccines,
              biotechnology inventions can raise practical concerns and ethical
              questions that must be adequately addressed. While it has the
              potential to provide tremendous benefits to society, biotechnology
              can also have negative or unintended consequences.
            </p>
            <br />

            <p className={styles.postContent}>
              As we move into an increasingly biotechnology-driven world, we
              must embrace new ideas whilst also considering the future impact
              of our technologies.
            </p>

            <p className={styles.postContent}>
              I think you’ll agree that biotech really is something to be
              excited about!
            </p>
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
export default blogPost55;
