import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../components/header";
import ShareBtns from "./ShareBtns";

class blogPost40 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #40" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Goals are like Soft Toys</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>February 14, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              The New Year is a milestone for goal setting and determining
              changes in our lives for the better. Although so many of us take
              the opportunity to set a New Year’s resolution, almost 80% of us
              also give up on that goal. But it’s not just New Year’s
              resolutions that we give up on, it’s the regular “new term, new
              me” that almost all of us have heard or said, the out-of-the-blue
              determination to start exercising, eating better, working harder,
              achieve something bigger and more exciting, that starts so slowly,
              but then accelerates so rapidly to turn from an ambitious goal to
              something we once wanted to do.
            </p>
            <p className={styles.postContent}>
              If these new, big, and exciting goals we decide to embark on in
              the blink of an eye are so easy for us to abandon, how do we
              change this mindset? How do we change the 80% of New Year goals
              failed into 80% of New Year goals achieved?
            </p>
            <br />
            <p className={styles.postContent}>
              <strong>We have to treat our goals like soft toys.</strong>
            </p>
            <p className={styles.postContent}>
              As kids, we had a toy that we grew up with. We took our soft toy
              to bed, to the shops, outside, in the rain, through the mud, it
              was part of us. Likewise, the determination to achieve our goals
              need to become part of us too, something that we notice has an
              impact in our daily lives no matter how specific the goal is.
            </p>

            <p className={styles.postContent}>
              We loved the soft toy. We brushed it, dressed it, and played with
              it. We had an emotional connection with our soft toy, and likewise
              we should with our goals. The emotional connection to goals gives
              us the drive and motivation to achieve them, as well as
              emphasising the personal gain we get from them. The emotional
              connection can be as simple as the visualisation of how proud you
              will be when you achieve the goal, all the way to the
              visualisation that the achievement of the goal will have great
              impacts upon your everyday life.
            </p>
            <br />

            <p className={styles.postContent}>
              Then trouble strikes with our soft toy. We get sick and have to
              wash it, the toy gets torn, the toy is lost or ruined. Equally,
              our goals are like this, achieving ambitious goals is difficult to
              do, and whether it’s the simplicity in washing your dirty soft
              toy, or the tiring and frustrating search of finding the toy you
              lost, you will find a solution to the challenges and know that it
              will be ok.
            </p>
            <p className={styles.postContent}>
              However, we may also lose the toy all together. It’s a devastating
              but also natural part of goal setting that sometimes they just
              don’t work out. But just as we overcame losing our soft toy as a
              child, we will overcome the goal that didn’t work out too.
            </p>
            <br />
            <p className={styles.postContent}>
              Eventually, our parting moment comes. We grow out of our soft
              toys, we become a big kid, lose the emotional connection, and
              begin looking for bigger and more mature things to do. Likewise,
              we grow out of the old goals we set for ourselves, the big goals
              we set will soon be the ones we achieved, and allow us to set
              bigger, more challenging goals that grow and change as we do.
            </p>
            <p className={styles.postContent}>
              The story of our soft toys through childhood ends here. However,
              the memory still remains, we might not have our childish soft toy
              anymore, or the comfort of something soft when we have a bad
              dream, but we will always remember how much fun we had with our
              soft toy, no matter how old we are.
            </p>
            <br />
            <p className={styles.postContent}>
              Our goals can be career-driven, set on self-improvement, or simply
              setting random fun challenges you want to do that year. Whatever
              our goal is we must find the fun and excitement in working for
              them so that when we look back on how far we’ve come we can smile
              knowing that it was hard work but worth every moment.
            </p>
            <br />
            <p className={styles.postContent}>
              That brings us to this year. We might neglect another New Year’s
              resolution, we might realise it wasn’t that fun, exciting, or
              impactful. So let’s set our next goals to do precisely that, set
              our next goals to be part of us, to have an emotional connection
              to us, to sit through the rollercoaster of only sometimes knowing
              if we will get through the challenges, setting bigger goals than
              we did before, and finding the fun.
            </p>
            <p className={styles.postContent}>
              <em>Our goals are like soft toys.</em> The excitement, challenge,
              parting, and growth. That’s how we succeed in our goals each year.
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/georgie2021.jpg",
              styles.authorProfile,
              "Georgie Mansfield",
              "Education Executive",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost40;
