import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";

class blogPost39 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #41" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Genomic Sequencing Explained</h2>
            <p className={styles.date}>21st February 2021</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
							Genomic sequencing is a process used to identify and diagnose diseases present in DNA. It
							can help determine if an organism has a certain disease such as COVID-19.
            </p>
            <p className={styles.postContent}>
							As COVID-19 cases increased, so did the use of the phrase “genomic sequencing”. With each
							new case that was reported, genomic sequencing would be underway. How was the source of the
							initial case found? Through genomic sequencing.
            </p>
            <p className={styles.postContent}>
							So what is genomic sequencing? How is it performed? Why is it useful? How does it trace a
							disease like COVID-19?
            </p>
            <p className={styles.postContent}>A glossary will come in handy for this:</p>
            <p className={styles.postContent}>
              <strong>DNA: </strong> The simple yet powerful molecule, DNA lives within every one of your
							cells. This double-helix formation holds the genetic code of those individual cells; some
							coding for traits like eye color or how a cell functions while others provide instructions
							on when to grow. With billions of these twisting ladders inside you, it is easy to
							understand that there are many mysteries contained in each strand.
            </p>
            <p className={styles.postContent}>
              <strong>Nucleotides: </strong> What makes up the DNA molecule? The molecules are made of
							nucleotides which can be adenine (A), thymine (T), guanine (G), and cytosine (C). These four
							bases twist together to form a double helix chain that is connected by two bases attracting
							each other. This means that it is only possible for A and T to be paired with each other,
							whereas G and C attract each other.
            </p>
            <p className={styles.postContent}>
              <strong>RNA: </strong>It's not just DNA that can be seen as a double helix. RNA is a single
							strand, but it still has the same nucleotides and elements in place. The only difference is
							that thymine (T) is replaced by uracil (U) in RNA because of the chemical makeup of them
							both.
            </p>
            <p className={styles.postContent}>
              <strong>DNA Sequence: </strong>The order of the nucleotides.
            </p>
            <p className={styles.postContent}>
              <strong>Genome: </strong>An organism’s complete set of DNA.
            </p>
            <br />

            <p className={styles.question}>What is genomic sequencing and how is it performed?</p>
            <p className={styles.postContent}>
							In short, genomic sequencing is a method that is used to determine the order of DNA
							nucleotides in a genome that form an organism’s DNA.
            </p>
            <p className={styles.postContent}>Generally, genomic sequencing is performed by,</p>
            <ol className={styles.list} type="1">
              <li className={styles.postContent}>
								Cells that are cultured (grown) and then treated with chemicals causing the cell to open
								and release the DNA within them.
              </li>
              <br />
              <li className={styles.postContent}>
								The DNA is cut into shorter fragments using enzymes or mechanical disruption.
              </li>
              <br />
              <li className={styles.postContent}>
								A reaction called polymerase chain reaction (PCR) is used to make numerous copies of the
								DNA fragments.
              </li>
              <br />
              <li className={styles.postContent}>
								The fragments and their copies then go through a sequencer where the nucleotide order is
								read.
              </li>
              <br />
              <li className={styles.postContent}>
								This data is then put through a computer program where the DNA sequences are compared,
								and differences are identified. They can also be compared against data from other
								sequences which can tell scientists if the organism is part of the same outbreak or not.
              </li>
            </ol>
            <br />

            <p className={styles.question}>Why is it useful?</p>
            <p className={styles.postContent}>
							Genome sequencing has vast applications such as determining:            
              <ul>
                <li className={styles.list}>Where a disease came from</li>
                <li className={styles.list}>If a disease is hereditary</li>
                <li className={styles.list}>The presence of disease in asymptomatic people (people showing no symptoms)</li>
                <li className={styles.list}>
                  How DNA affects your traits such as smell, taste, and facial features, as well as your
                  ancestry - something that biotechnology companies such as 23andMe explore
                </li>
                <li className={styles.list}>How environment can have an impact on a disease that you are susceptible to</li>
              </ul>
            </p>
            <br />

            <p className={styles.question}>So how is it used to trace COVID-19?</p>
            <p className={styles.postContent}>
							Person-to-person, viruses usually retain their original genetic makeup often with only
							slight variations.
            </p>
            <p className={styles.postContent}>
							Scientists run genetic sequencing on the new positive test and can compare the DNA between
							the positive test and other previous positive tests. From this, the similarity of the DNA
							sequence in one patient can be traced back to other similar cases until the initial instance
							of COVID-19 has been located.
            </p>
            <p className={styles.postContent}>
							The nature of viruses retaining their genetic makeup with slight variations allowed
							scientists to distinguish determine between imported cases and cases caused by community
							transmission in the early waves of COVID-19.
            </p>
            <p className={styles.postContent}>It’s as simple as that.</p>
            <p className={styles.postContent}>
							So as COVID-19 cases have increased, along with genomic sequencing, our understanding of it
							now can too. The public eye has had it’s attention drawn to an emerging and powerful
							technology, and discovered what genomic sequencing is, how it’s performed, why is it is
							useful, and how it can help solve grand challenges in a global pandemic.
            </p>
            <br />

            <p className={styles.postContent}>
							For information and details on COVID-19 in NSW, visit:{" "}
              <a href="https://www.health.nsw.gov.au/">https://www.health.nsw.gov.au</a>
            </p>
            <p className={styles.postContent}>
							For more information on genomic sequencing and COVID-19 you can read Dr Rebecca Rockett’s
							article from July 2020 on how genomic sequencing tests for COVID-19 were introduced and
							implemented, visit:{" "}
              <a href="https://www.sydney.edu.au/news-opinion/news/2020/07/21/-genomic-fingerprinting--helping-to-trace-coronavirus-outbreaks.html">
								https://www.sydney.edu.au/news-opinion/news/2020/07/21/-genomic-fingerprinting--helping-to-trace-coronavirus-outbreaks.html
              </a>
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/georgie2021.jpg",
              styles.exec2021Img,
              "Georgie Mansfield",
              "Education Executive"
            ]
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost39;
