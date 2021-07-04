import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";
import Tabletop from "tabletop";
import Chip from "@material-ui/core/Chip";
import BlogEndPreview from "./blog-end-preview";
import { Link } from "react-router-dom";

class blogPost34 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor() {
    super();
    this.state = {
      currentBlogNo: 0,
      currentBlog: "",
      previousBlogs: [],
      currentBlogCategories: [],
    };
  }

  render() {
    // Get Previous 2 Blog Info
    var currBlogNo = parseInt(
      String(this.props.match.url).split("/").reverse()[0]
    );
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        const blogOriginal = googleData["blog-previews"]["elements"];
        let blogPreviews = googleData["blog-previews"]["elements"];
        const authorList = googleData["blog-authors"]["elements"];
        blogOriginal.forEach((blogPreview, index) => {
          const tempAuthor = {};
          blogPreview.authors.split(",").forEach((authorKey) => {
            const result = authorList.filter(
              (authorItem) => authorItem.authors === authorKey
            )[0];
            tempAuthor[authorKey] = [
              `/potraits/blog-authors/${result.img}`,
              result.name,
            ];
          });
          blogPreviews[index].authors = tempAuthor;
        });

        var lastTwoBlogPreviews = blogPreviews.slice(
          currBlogNo - 3,
          currBlogNo - 1
        );

        var currBlogCategories = blogPreviews[currBlogNo - 1].category.split(
          ","
        );

        this.setState({
          previousBlogs: lastTwoBlogPreviews,
          currentBlog: blogPreviews[currBlogNo - 1],
          currentBlogNo: currBlogNo,
          currentBlogCategories: currBlogCategories,
        });
      },
      simpleSheet: false,
    });

    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #34" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              What I Learnt From Shadiyah Lim
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>October 25, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Co-hosting the very first Careers Deep Dive episode of our Talk
              WIT Us podcast, I was lucky enough to chat to Shadiyah Lim, an
              Innovation Advisory Consultant at AWS. Surprisingly, as we’d
              quickly learned, she hasn’t always been in the Digital
              Transformation industry. Shadiyah graduated with a communications
              and media studies degree, spent two years teaching English in
              South Korea, and began work as a writer before ever stepping foot
              into her current industry. Of course, she was bursting with
              experience and advice to share during our chat, but some amazing
              lessons stuck out.
            </p>
            <br />

            <p className={styles.question}>
              It’s okay when things don’t go to plan.
            </p>

            <p className={styles.postContent}>
              <em>
                “[I graduated] during the Global Financial Crisis, so I was
                teaching English in Seoul because I couldn’t find a job at the
                time. I wanted to go back to the States, but it was still pretty
                hard to find a job. I came to Australia where I could live and
                work for a year. And that year turned into ten.”
              </em>
            </p>
            <p className={styles.postContent}>
              Shadiyah’s struggle to find a job after graduating during the
              Global Financial Crisis struck similarities with the pandemic
              situation we currently find ourselves in. Just like with the GFC
              ten years ago, our lives have been upended by circumstances
              outside of our control. For companies struggling to stay afloat,
              graduate opportunities are the last thing on their mind, and there
              is not much that we as students can do about that. Inevitably,
              even fully qualified graduates like Shadiyah ten years ago, can be
              left without a company that will offer them a place.
            </p>
            <p className={styles.postContent}>
              Even though I have a few years left at uni, I can’t pretend that I
              haven’t been a little anxious that jobs will still be in short
              supply when I graduate, and that doesn’t even compare to how tough
              it is for the students graduating this year. Despite these
              struggles, Shadiyah turned a difficult situation into new
              opportunities that have led her to the successful career that she
              has today. So even though we might be currently living in a
              pandemic, it’s important to realize that this situation won’t last
              forever.
            </p>
            <p className={styles.postContent}>
              Her experience is a timely reminder that even when things don’t go
              to plan, there are other pathways to find. If Shadiyah had found a
              job directly after graduating, would she have found herself in
              South Korea, or with a successful career in the tech industry in
              Australia? Likewise, for us, we could discover new pathways that
              lead to something which we couldn’t have imagined otherwise.
            </p>
            <br />

            <p className={styles.question}>
              Don’t be afraid to put your hand up.
            </p>

            <p className={styles.postContent}>
              <em>
                “Be the person who isn’t afraid to put your hand up. Think big.
                Go for opportunities.”
              </em>
            </p>
            <p className={styles.postContent}>
              When we asked Shadiyah for her last words of advice to our
              listeners, it’s no wonder she encouraged us to tenaciously pursue
              opportunities. Hearing about how she moved from a writer to a
              product owner at CBA without a traditional tech background, it’s
              clear that these accomplishments came about by willingly stepping
              up to challenges and going beyond what was expected of her.
            </p>
            <p className={styles.postContent}>
              It’s easy to pre-empt failure and shy away from taking on the
              challenges we face. Shadiyah emphasised the need to ask the people
              around her for help when she was stuck, and the continual learning
              she undertook. It’s about looking at challenges with a growth
              mindset, because even when we do fail, we have gained important
              lessons, and these lessons have great power in helping us the next
              time we put our hands up.
            </p>
            <br />

            <p className={styles.question}>
              The future is at the intersection of business and technology.
            </p>

            <p className={styles.postContent}>
              <em>
                “Technology is ever-changing, so our customers' wants and needs,
                as well as business’s wants and needs… If you can bridge
                technical understanding with business and customer
                understanding, that is gold.”
              </em>
            </p>
            <p className={styles.postContent}>
              The intersection of business and technology is at the heart of
              what Shadiyah does as an Innovation Advisory Consultant at AWS.
              She believes it is also at the heart of businesses moving
              forwards.
            </p>
            <p className={styles.postContent}>
              Coming from a more technical background myself, I’ve usually been
              interested in tech for its own sake. This opened my eyes to the
              fact that to a business, its greatest value is in its ability to
              help address its customers’ needs. In that sense, technology
              innovation can’t exist in its own bubble. Businesses and customers
              need to benefit from these innovations, and we can only achieve
              that with an understanding of both tech capabilities and business
              needs.
            </p>
            <br />

            <p className={styles.question}>
              Recruiters look for someone who can inspire a team.
            </p>
            <p className={styles.postContent}>
              <em>
                “When I’m interviewing, I’m always looking for someone who can
                demonstrate they were able to bring clarity to a situation, they
                were able to make the people around them very confident, they
                were able to build trust and attract desire to progress that
                initiative further.”
              </em>
            </p>
            <p className={styles.postContent}>
              We were super lucky that Shadiyah could offer a recruiter’s
              perspective on the skills and attributes that she looks for in a
              potential employee. What she said wasn’t quite what I expected to
              hear from a recruiter.
            </p>
            <p className={styles.postContent}>
              I’ve heard plenty of times that employers are looking for someone
              who takes initiative and is a capable problem solver. However,
              Shadiyah suggests that it takes more than being able to solve
              problems on your own. It’s about being able to inspire others to
              believe in your solutions as well.
            </p>
            <p className={styles.postContent}>
              This is a skill that can be developed by actively participating in
              teamwork, whether that be at uni or outside of it. Following her
              advice from earlier, putting your hand up to more challenges also
              creates more opportunities to solve problems alongside other
              people, and thus, the opportunity to inspire them as well.
            </p>
            <br />

            <p className={styles.postContent}>
              These lessons all add up to an overarching theme: that anything is
              possible with the right mindset and an openness to learn. Shadiyah
              embodied this attitude, and her energy was completely infectious.
              Particularly in the uncertainty of a global pandemic, this belief
              is more important than ever. With this in mind, the future holds
              opportunities for all of us, as long as we take the initiative to
              find them.
            </p>
            <p className={styles.postContent}>
              For more amazing advice and to hear Shadiyah’s journey and more,
              listen to our chat with Shadiyah in her Talk WIT Us episode,
              available in these platforms!
            </p>
            <br />

            <div className={[styles.outerBox, styles.smallContainer].join(" ")}>
              <a
                className={styles.innerBox}
                href="https://anchor.fm/unswwit/episodes/Episode-2-Careers-Deep-Dive---Digital-Transformation-w-Shadiyah-Lim-ekak30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/blog-attachments/podcast-platforms/anchor-logo.jpg"
                  }
                  alt="Anchor"
                />
              </a>
              <a
                className={styles.innerBox}
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zNTQxM2JkMC9wb2RjYXN0L3Jzcw/episode/NTIwMDU5N2YtMjg5NC00ZjEwLWE2NTItMWRiMDc4ZGU0Njc5?sa=X&ved=0CAUQkfYCahcKEwigtazP_szsAhUAAAAAHQAAAAAQAQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/blog-attachments/podcast-platforms/google-podcasts-logo.jpg"
                  }
                  alt="Google Podcasts"
                />
              </a>
              <a
                className={styles.innerBox}
                href="https://radiopublic.com/talk-wit-us-Ww3A3m/s1!284a5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/blog-attachments/podcast-platforms/radiopublic-logo.jpg"
                  }
                  alt="RadioPublic"
                />
              </a>
              <a
                className={styles.innerBox}
                href="https://open.spotify.com/episode/1HAs2EMlXumfQzoaGMUpV8?si=isyEiUXwTBCqg5gLDwQiOg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/blog-attachments/podcast-platforms/spotify-logo.jpg"
                  }
                  alt="Spotify"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.chipContent}>
          <div className={styles.BlogCategories}>
            {this.state.currentBlogCategories.map((category) => {
              const chipColour = "#7F7F7F";
              return (
                <Link
                  to={{ pathname: "/media/blog", category }}
                  style={{ textDecoration: "none" }}
                >
                  <Chip
                    size="medium"
                    label={category}
                    style={{
                      textTransform: "uppercase",
                      backgroundColor: chipColour,
                      color: "white",
                      margin: "5px",
                    }}
                    onClick={() => {}}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "angenie-bai": [
              "/potraits/blog-authors/angenie-bai.jpg",
              styles.authorProfile,
              "Angenie Bai",
              "Externals Team",
            ],
          }}
        />

        {/*Bottom Share Buttons*/}
        <div className={styles.shareContent}>
          <p className={styles.shareTextPosition}>Share this blog post</p>
          <ShareBtns />
        </div>

        {/*More From WIT Section*/}
        <div className={styles.moreFromWITContent}>
          <p className={styles.moreFromWITTextPosition}>More From WIT</p>
          {this.state.previousBlogs.map((blog) => {
            return (
              <div className={styles.scaleDown}>
                <BlogEndPreview
                  key={blog.blogNo}
                  blogNo={blog.blogNo}
                  imgUrl={`/blog-covers/${blog.img}`}
                  heading={blog.heading}
                  date={blog.date}
                  subheading={blog.subheading}
                  authors={blog.authors}
                  category={blog.category.split(",")}
                />
              </div>
            );
          })}
        </div>

        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost34;
