import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";

class blogPost38 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #38" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              WIT Personal Project Series - eXsight{" "}
            </h2>
            <p className={styles.date}>9th November 2020</p>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Apart from studying, attending lectures, completing internships,
              attending society events and hanging out with friends, some
              students manage to complete incredible personal projects during
              their time at uni! WIT will be shining the spotlight on the
              amazing personal projects students at UNSW have created.
            </p>
            <p className={styles.postContent}>
              This week, we continue our Personal Project Series with the winner
              of the prestigious 2018 Peter Ferrell Cup, the inspiring
              Co-Founder of the start-up eXsight! eXsight aims to help users who
              are suffering from colour blindness differentiate between commonly
              confused colours.
            </p>
            <p className={styles.postContent}>
              Without further ado, let’s get talking with Emma Casolin!
            </p>
            <br />
            <p className={styles.question}>What inspired you to start eXsight?</p>
            <p className={styles.postContent}>
              My brother and other members of my family are colour blind, so I
              knew about the difficulties the condition can cause in everyday
              life. eXsight originally started as my Design and Technology major
              work in year 12, but since then it has evolved into something much
              more. We now are striving to increase awareness surrounding colour
              blindness and help to make the world more accessible.
            </p>
            <br />
            <p className={styles.question}>
              Please tell us a little bit about your university experience
            </p>
            <p className={styles.postContent}>
              I’m studying a double degree (Advanced Science and Engineering)
              majoring in Psychology and Software Engineering. I previously
              majored in Aerospace Engineering, during which time I was a member
              of FLU (Flight Labs UNSW) - a society that predominantly builds
              flying drones. Now that eXsight is building a software-based
              product, I want to use my Software Engineering degree to help.
            </p>
            <br />
            <p className={styles.question}>
              How did your university experience help you start eXsight?
            </p>
            <p className={styles.postContent}>
              Being at UNSW opened my eyes to the possibility of turning my
              small concept into a startup business. It also allowed me to meet
              Maggie (eXsight’s Co-Founder) and introduced me to opportunities
              and mentors that I would never otherwise have had access to. All
              of this combined is what motivates me to continue eXsight.
            </p>
            <br />
            <p className={styles.question}>
              Can you tell us about the process of starting and building
              eXsight? What time commitments did it require?
            </p>
            <p className={styles.postContent}>
              Not only do we need to set aside time for building and developing
              our product, but we also need to devote time to marketing, as well
              as entering ourselves into events and workshops to both promote
              eXsight and build up our skills. Since we’re both studying at the
              same time, we often have to put eXsight on hold now and again in
              order to manage other commitments.
            </p>
            <br />
            <p className={styles.question}>
              Who did you turn to for help along the way?
            </p>
            <p className={styles.postContent}>
              The UNSW Founders program was a major help throughout the entire
              process and eXsight would definitely not be where it is today, or
              even exist, without the help of the programs Maggie and I have
              been a part of. The Founders program is what allowed us to meet
              outside individuals and organisations as well.
            </p>
            <br />

            <p className={styles.question}>
              What valuable lessons did you learn whilst developing eXsight?
              What skills did you pick up?{" "}
            </p>
            <p className={styles.postContent}>
              We learnt a lot about the importance of listening to your target
              market - neither Maggie nor I are colour blind, so we have to go
              by what people who are colour blind tell us about their
              experiences. Because of this barrier to understanding the true
              problem, we were working on a product for over a year that we
              later realised wasn’t even addressing the true issues people were
              talking to us about. We’ve also learnt the importance of putting
              yourself out there and learned that there are a lot of people out
              there who really want to help small businesses - there’s a ‘give
              back’ sort of mindset within the startup community where people
              want to help each other out, and I really love that.
            </p>
            <br />
            <p className={styles.question}>
              What was the biggest challenge you faced whilst developing eXsight
              and how did you overcome it?
            </p>
            <p className={styles.postContent}>
              Probably having to drop our original idea in order to create
              something new that solved the problem better. It was really hard
              to put aside all the hard work we’d done and essentially start
              from scratch, but it was essential if we wanted to actually create
              something meaningful and helpful for people. Keeping the long term
              benefits in mind, as well as our goals for ourselves and our
              business, is what helped us make the decision to pivot.
            </p>
            <br />
            <p className={styles.question}>
              What advice would you give to prospective students who wish to
              start their own technology projects?
            </p>
            <p className={styles.postContent}>
              I would highly recommend reaching out to existing startups and
              small businesses. From my experience, everyone is willing to help
              out and a lot of people will be willing to have a chat with you in
              exchange for a coffee. It’s also important to find other people
              who share your passions and are willing to put in the work to
              start a small business - it’s a lot of work and I really wouldn’t
              recommend trying to do it all on your own.
            </p>
            <br />
            <p className={styles.question}>
              What do you hope to be doing in future? What are your future plans
              for eXsight?
            </p>
            <p className={styles.postContent}>
              We’d like to have a working prototype of our new product working
              by the end of this year. Ultimately we’d really like to release a
              product that makes a difference in the world and makes life
              easier/more enjoyable for people. We want accessibility to be the
              norm - not something that businesses are praised for, but an
              expectation that everyone is accomodating for everyone.
            </p>
            <br />
            <p className={styles.postContent}>
              Increasing quality of life with a determination to help others is
              at the core of this inspiring start-up, and eXsight truly
              highlights the impact amazing Co-Founders Emma and Maggie are
              making. Building up skills beyond technology, challenging
              themselves, and seeking to make the world a better place is a path
              that eXsight is paving. We’d like to thank Emma for sharing her
              experience, and wish all the best for eXsight in the future!
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "srija-mukherjee": [
              "/potraits/srija.jpg",
              styles.vivwImg,
              "Srija Mukherjee",
              "Externals Team",
            ],
            "georgie-mansfield": [
              "/potraits/georgie.jpg",
              styles.vivwImg,
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
export default blogPost38;
