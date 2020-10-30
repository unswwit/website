import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost3 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/blog-header.png" title="Blog Post #3" />

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class="blog-title">
              4 Lessons From Marissa Mayer's Life in Tech
            </h2>
            <p class="date"> 3rd June 2020 </p>
          </div>

          <div class="post">
            <p class="post-content">
              High achiever, resilience, and persistence are not unknown to tech
              CEO Marissa Mayer. Mayer has an inspirational journey, from
              becoming the first female software engineer at Google while Google
              was still a start-up, the CEO of Yahoo! despite the criticism
              surrounding her, all the way to founding her own AI start-up. She
              has continually broken barriers in technology and has been the
              talk of the world.{" "}
            </p>
            <br />
            <p class="post-content">
              In this week’s blog, we take a look at 4 lessons we can learn from
              her amazing life, and how she continues to redefine technology as
              we know it today.
            </p>
            <br />
            <p class="question">
              {" "}
              Lesson 1: Computer Science is a form of Art{" "}
            </p>
            <br />
            <p class="post-content">
              Perhaps “art” is not the first thing that comes to our mind when
              considering technology.
            </p>
            <p class="post-content">
              Yet this is what sparked Mayer’s interest in technology when she
              undertook a degree in Symbolic Systems at Stanford University. It
              involved exploring philosophy, linguistics, computer science and
              examining the complexity and depth in how people think and seeing
              how computers can reflect that same logic.
            </p>
            <p class="post-content">
              Mayer took this view to her tech projects, resulting in an impact
              in tech that goes beyond computers, and redefines the way people
              think.
            </p>
            <br />
            <p class="question">
              Lesson 2: Feeling Confident Even When Feeling Unprepared{" "}
            </p>
            <br />
            <p class="post-content">
              {" "}
              Big decisions are daunting. Marissa Mayer was no stranger to
              feeling unprepared when making big decisions at certain stages of
              her life.
            </p>
            <p class="post-content">
              {" "}
              Mayer had a whopping 14 job offers lined up after finishing her
              studies from Stanford University. Each offer was diverse and
              exciting, but after weeks of anxiety, stress, and support from her
              mentors, she chose her life-changing role at Google, based on two
              things:
            </p>
            <ol>
              <li class="list">
                {" "}
                Surrounding herself with smart, ambitious and like-minded
                people.
              </li>
              <br />
              <li class="list">
                {" "}
                Pursuing a role that she didn’t feel totally prepared for, a
                role that would challenge her, pushing her out of her comfort
                zone, thus allowing her to grow personally and professionally.
              </li>
            </ol>{" "}
            <br />
            <p class="question">Lesson 3: Dealing with Scrutiny</p>
            <br />
            <p class="post-content">
              Our daring goals in life, though exciting for us, are often
              matched with scrutiny from others.active
            </p>
            <p class="post-content">
              For Mayer, this arises when she began working as a CEO at Yahoo!
            </p>
            <p class="post-content">
              Instead of receiving support as a female executive who was working
              in a male-dominated industry, she found criticism. Instead of
              receiving optimism for new ideas, she was handed pessimism.
            </p>
            <p class="post-content">
              As she redefined business models, strategizing for both the
              company’s short and long term goals, and implementing new
              initiatives in response to the constant disruption in the tech
              industry (for the better), the media took the opportunity to slam
              and criticize her decisions as well as her work ethic.
            </p>
            <p class="post-content">
              But Mayer didn’t let it phase her. Instead, she took the
              progressive side of the criticism, pulling out valuable feedback
              that had been made, and was motivated by it to keep achieving
              more.
            </p>
            <br />
            <p class="question">
              Lesson 4: The Daring Side of Reinventing
            </p>{" "}
            <br />
            <p class="post-content">
              Starting something brand-new, challenging the convention, and fear
              of failure is something we all grapple with.
            </p>
            <p class="post-content">
              Mayer’s work at Google began as the internet began to change the
              world. She designed Google’s search interface, was involved in
              major product management including Gmail, and developed systems
              for customising searches on Google.
            </p>
            <p class="post-content">
              Motivating her team at Yahoo! to achieve success was challenging.
              Instead of attempting to fix the declining lines of business, she
              led her team to recreate them, investing in mobile apps at the
              brink of their popularity. Redesigning a major company was a huge
              risk and although Yahoo! was later sold to Verizon, Mayer was a
              fundamental key in its future success.
            </p>
            <p class="post-content">
              After her resignation at Yahoo!, Mayer began her own start-up Lumi
              Labs, a business that utilises AI to complete mundane tasks. Lumi
              Labs gave Mayer the perfect opportunity to reinvent her own
              success, building a business based on passion, embracing new
              opportunities with confidence, viewing computer science as art,
              taking scrutiny in her stride, and seeing for herself the daring
              side of reinventing.{" "}
            </p>
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/georgie.jpg",
              "profile_img vivw_img",
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
export default blogPost3;
