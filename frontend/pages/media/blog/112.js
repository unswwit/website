import React, { Component } from "react";
import PageHeader from "../../../components/Header";
import { loadBlogPreviews } from "../../../lib/api";
import styles from "../../../styles/Blog-post.module.css";
import AuthorCard from "../../../components/AuthorCard";
import BlogSuggestions from "../../../components/BlogSuggestions";
import ShareBtns from "../../../components/ShareBtns";
import Image from "next/image";

class blogPost112 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #112" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div className={styles.blogHeader}>
            <p className={styles.date}>September 29, 2022</p>
            <h2 className={styles.blogTitle}>
              Historical Women in Tech: How the women of the past shaped our
              future
            </h2>

            {/*for the blog post author*/}
            <AuthorCard
              authors={{
                "kara-mckinney": [
                  "/portraits/blog-authors/kara-mckinney.png",
                  styles.authorProfile,
                  "Kara McKinney",
                ],
              }}
            />
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              It’s no secret that there have been a plethora of pioneering women
              in tech that paved the way for us to develop into a society
              reliant on technology. Names from Ada Lovelace to Melanie Perkins
              are generally recognised and treated with a degree of reverence,
              at least by those in the tech sphere. But what, exactly, have
              these women done - and more importantly, how did their
              accomplishments create today’s world?
            </p>

            <p className={styles.postContent}>
              Widely regarded as the first ‘computer programmer’, Ada Lovelace
              published the first ever algorithm intended for use by a computer.
              Ada was the infamous Lord Byron’s daughter and a disappointment to
              the poet, who wanted a son. Soon after Ada’s birth, her father
              left her, perhaps taking with him any hope thathis daughter will
              follow his artistic pursuits. Instead, she was taught the natural
              sciences and displayed a talent for mathematics. Ada’s status as a
              Countess allowed her to pursue these interests, and in 1833 she
              met Charles Babbage. He introduced her to his ‘difference engine’,
              a mechanical calculator. But it was his ‘analytical engine’ - the
              first Turing-complete machine design - thatinterested Ada. She
              wrote with full detail an algorithm thataimed to calculate a
              sequence of Bernoulli numbers - yet the machine was never created,
              and her algorithm was never tested on it. Despite this she is
              regarded as the first computer programmer, paving the way for
              later scientists to expand on and test computer programs. Although
              Ada’s gender undoubtedly made it difficult for some to take her
              seriously as a scientist, her position in high society was the
              reason why she had the time and funds to pursue these interests.
              It is not until far later in history that we see women pushing
              against both class and gender bounds to make important scientific
              advances.
            </p>

            <div className={styles.pic}>
              <img
                src={"/blog-attachments/blog-112-ada-lovelace.jpeg"}
                alt="Ada Lovelace"
              />
            </div>

            <p className={styles.postContent}>
              The 1900s brought with them an exponential advance in technology
              and technological research, unfortunately spurred by the wars that
              plagued the century. Coupled with the rising number of women in
              the workforce, this meant more women from wider backgrounds could
              contribute to research - research which often contributed to
              international intelligence at best, mass death at worst. Grace
              Hopper was one such woman, volunteering for the Navy Reserve in
              1943 after completing a PhD in mathematics. After serving in the
              war effort and directly contributing to the Manhattan project in
              the process, Hopper began work on UNIVAC and her crowning
              achievement - COBOL. Grace proposed a programming language written
              in words, rather than symbols - and so COBOL was born. For the
              latter half of the 20th century, Hopper’s language was used in the
              vast majority of businesses, and although it is now rarely used,
              her legacy will live on, possibly for decades, in the systems of
              governments and large corporations.
            </p>

            <div className={styles.pic}>
              <img
                src={"/blog-attachments/blog-112-grace-hopper.jpeg"}
                alt="Grace Hopper"
              />
            </div>

            <p className={styles.postContent}>
              The women above both faced scrutiny for their gender, but grew up
              in privileged environments where access to education was expected.
              Annie Easley was a NASA computer engineer and one of the first
              Black women to work for the agency. She grew up during the
              segregation era in the US and had very limited access to
              education. In 1955, Annie began a job at NASA as a ‘computer’
              before her title was changed to computer technician upon NASA’s
              increasing use of electronic computers. Despite encountering a
              multitude of challenges, from being denied the financial aid and
              higher pay that her white colleagues were receiving, to facing the
              racism rampant in 1950s America, Annie continued to advance in her
              career, all whilst running minority outreach programs and
              assisting in college recruitment. Her NASA work was focused
              largely on the development of code to analyze alternative energies
              with the aim of assisting rocket flight. This work directly
              impacted later launches, thus helping future space travel.
            </p>

            <div className={styles.pic}>
              <img
                src={"/blog-attachments/blog-112-annie-easley.jpeg"}
                alt="Grace Hopper"
              />
            </div>

            <p className={styles.postContent}>
              There are thousands, if not millions, of women who have shaped the
              technological world we live in today - the above are simply small
              examples. Behind every piece of technology you use is the research
              of generations of humans - from the ancient Greek mathematicians
              to modern day megalomaniac billionaires. Women have always
              contributed to this research - and always will.
            </p>
          </div>

          {/* <span>
            <ShareBtns />
          </span> */}
        </div>

        {/*see blog suggestions*/}
        {/* <BlogSuggestions
          category={"Lifestyle"}
          index={112}
          blogPreviews={blogPreviews}
        /> */}
        {/*End of blog posts*/}
      </div>
    );
  }
}

export default blogPost112;

// export async function getStaticProps() {
//   const blogPreviews = await loadBlogPreviews();
//   console.log(blogPreviews);
//   return {
//     props: { blogPreviews },
//   };
// }
