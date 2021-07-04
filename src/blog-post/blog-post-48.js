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

class blogPost48 extends Component {
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
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #48" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Industry Insight Series Featuring Gunjan Arora
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>March 21, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Today we’re talking with Gunjan Arora, who was a Senior Quality
              Assurance Analyst at Nine Publishing, and finding out how and why
              she chose a career in this area. Gunjan walks us through what her
              role entails, the skills needed to succeed, and insight into how
              the field is changing and evolving. Gunjan also shares some
              valuable tips on coping with change and setting practical
              long-term goals.
            </p>
            <br />

            <p className={styles.question}>What is your background?</p>

            <p className={styles.postContent}>
              I did my engineering degree in Computer Science Stream. As an
              active member of the college’s dramatics team, I participated in
              various street plays highlighting social issues. Post my
              graduation, I joined an engineering institute as a lecturer and
              taught computer programming in C and Java. Thereafter I started my
              career as a software engineer and since then have held different
              positions in large-scale programs in telecommunication,
              e-commerce, and media domains. I am also an active member of the
              Women In Technology Group at Nine, wherein I have led and
              contributed to different streams.
            </p>
            <br />

            <p className={styles.question}>
              Describe a typical day in your role as a Senior Quality Assurance
              Analyst at Nine Publishing?
            </p>

            <p className={styles.postContent}>
              A day of a Quality Assurance Engineer isn’t really all too
              different from that of a software developer. My day starts with a
              daily scrum meeting. This is the forum for everyone to report on
              what they have done yesterday, what’s the plan for today, and are
              there any issues hindering the work. My responsibility here is to
              make sure that everyone on the team follows defined QA processes (
              peer-testing , peer-reviews etc). Post standup, I continue with my
              assigned tickets, primarily related to writing automation scripts.
              In addition to the above, and based on the project or sprints
              requirement, I develop test strategies, test plans, grooming
              tickets, organizing and facilitating bug bash, improving QA
              processes, maintaining existing tests and frameworks, etc.
              Basically, I try to simplify and innovate wherever we can.
            </p>
            <br />

            <p className={styles.question}>
              What made you want to pursue a career as a Quality Analyst after
              graduation?
            </p>

            <p className={styles.postContent}>
              After graduation, when I joined the IT company I stumbled into a
              testing project and from there my career as a Quality Engineer
              started. Soon I realized that QA is a vital part of software
              development and adds a lot of value to the business, hence I
              decided to pursue it as my career. To get a better understanding
              of the concepts, I did a certification which helped me understand
              the fundamentals. With each new project, I kept learning,
              exploring and evolving as a QA.
            </p>
            <p className={styles.postContent}>
              Lately there has been a seismic shift in the way quality is being
              imbibed in the development teams from quality assurance to quality
              assistance.
            </p>
            <p className={styles.postContent}>
              It’s a great field to be in. No matter what product you’re working
              on, you are making people’s lives better by reducing the problems
              they have to deal with in their day.
            </p>
            <br />

            <p className={styles.question}>
              What’s the most challenging aspect of your role?
            </p>

            <p className={styles.postContent}>
              As the fine lines between different roles within a Tech Company
              are diminishing and the Quality Assurance roles are changing and
              moving to Quality assistance roles, It's very important and
              challenging to keep evolving and to keep improving the skill-set.
              With Continuous Integration and Delivery, the whole landscape of
              Tech development has changed mandating continuous testing for
              faster feedback.
            </p>
            <p className={styles.postContent}>
              Another challenging aspect of a Quality Analyst Role is to bring a
              balance between critical thinking and creative thinking. Being
              critical helps you to look at software with a different
              perspective, to question assumptions/ software behaviors whereas
              creative thinking is important to bring innovation to the way you
              work.
            </p>
            <br />

            <p className={styles.question}>
              What are skills (both technical and soft) you advise students to
              upskill on?
            </p>

            <p className={styles.postContent}>
              Being a student is the best time to explore the subjects that
              really interest you and don’t be afraid to dive deep and get your
              hands dirty. This will provide practical experience giving you an
              edge during the interviews. Always be humble and curious to learn
              as it will not only help to learn from others but will provide you
              with ways to do your job better.
            </p>
            <p className={styles.postContent}>
              You can never over-invest in communication skills because you will
              need to express ideas and share information with your colleagues
              and stakeholders. Equally important are listening skills as it
              helps in creating trust, relationships, and help in getting an
              understanding of a different perspective.
            </p>
            <br />

            <p className={styles.question}>
              How did you get started in this field and how well did your work
              relate to the experience and studies that you had in university?
            </p>

            <p className={styles.postContent}>
              I did my graduation in Computers Engineering which provided me
              with much needed knowledge in software fundamentals to start my
              career within the IT space. Based on my graduation background, I
              applied for software engineering positions in different IT
              companies and got selected in one of them. Being a newbie in the
              professional IT world, I had to refresh my fundamentals on
              software testing and revisited various concepts time and again. I
              was also supported by the company and colleagues with training and
              courses. But the real learning came from the actual work done
              within the project.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>

            <p className={styles.postContent}>
              I believe that there is always something to learn from people
              surrounding you and the situation you are in. In my career I have
              seen my colleagues and my managers tactically and patiently
              dealing with the ups and downs of professional life. I have learnt
              from them how to stay focused during challenging times, and to
              keep the team motivated besides huge pressures.
            </p>
            <p className={styles.postContent}>
              I am grateful that I was given the opportunities and support to
              learn and succeed in various roles. Also I have met some amazing
              women throughout my career who have taught me that being a female
              in a male-oriented field, it’s important to stay confident and
              authentic.
            </p>
            <p className={styles.postContent}>
              My role model has been Indra Nooyi, the best advice from her has
              been: To develop technical mastery at what you do. Create a
              reputation of being good at doing that particular thing.
            </p>
            <br />

            <p className={styles.question}>
              Throughout your career, how have you best adapted to and taken
              advantage of change?
            </p>

            <p className={styles.postContent}>
              Technology is a constantly evolving field. Change becomes
              comfortable to someone who is very curious about learning new
              things. A technologist has to be a lifelong learner.
            </p>
            <p className={styles.postContent}>
              I make sure I keep reading,learning, and researching on how to
              improve processes.
            </p>
            <p className={styles.postContent}>
              From my experience I have learnt that you will thrive in your
              career when you will thrive with yourself, hence accepting the
              change and staying positive will always give you a new perspective
              in such a situation.
            </p>
            <p className={styles.postContent}>
              Whenever you land in a situation which is different from a
              previous role, relationships you build with your colleagues always
              help, you can always ask them to help you when needed.
            </p>
            <p className={styles.postContent}>
              Communication is the key in these situations, you always need to
              make sure your manager is aware of how you are feeling and coping
              with the change and if you need any help.
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in five years?
            </p>

            <p className={styles.postContent}>
              We often tend to under-estimate our goals when we take a five year
              period, So I usually set my long-term goals for the next two to
              three years. Though it is equally important to have a long-term
              vision which automatically keeps you motivated.
            </p>
            <p className={styles.postContent}>
              In the next three years, I would like to see myself as a Full
              Stack Quality Engineer, technically well versed and specialized in
              quality processes. To make my career fulfilling I see myself
              guiding, mentoring a Quality team and contributing to the testing
              community.
            </p>
            <br />
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
            "vivian-wong": [
              "/potraits/blog-authors/vivianw2021.jpg",
              styles.authorProfile,
              "Vivian Wong",
              "Co-President",
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
export default blogPost48;
