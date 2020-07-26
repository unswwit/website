import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost9 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
      {/* Cover Photo */}
      <PageHeader
        imgUrl="/blog-header.png"
        title="Blog Post #9"
      />

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class = "blog-title">What Are You <em>Really</em> Procrastinating?</h2>
            <p class = "blog-subtitle">Inspired by Tim Urban’s TED Talk
            “Inside the Mind of a Master Procrastinator”</p>
            <p class = "date"> 29th June 2020 </p>
          </div>

          <div class="post">

            <iframe title="Tim Urban’s TED Talk “Inside the Mind of a Master Procrastinator” " width="560" height="315" src="https://www.youtube.com/embed/arj7oStGLkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <br/><br/><p class="post-content">To be honest, I don’t consider myself a master
            procrastinator. I start an assignment and study the day we’re notified, and
            although I leave the rest of the work until a couple of days before it’s due, as
            the anxious person I am, I panic early enough to get the work done on time and do
            it well. </p><br/>

            <p class="post-content">That’s all I really associated with procrastination with,
            assignments, bills, <b>deadlines.*</b> </p><br/>


            <p class="post-content">And then I watched Tim Urban’s TED Talk “Inside the Mind of a
            Master Procrastinator”. </p><br/>


            <p class="post-content">The talk begins with funny, light-hearted stories of the scary kind
            of procrastination, leaving the <b><u>whole</u></b> project to the last minute, but haha, I would never do that! Yet even though I never thought myself to be a master procrastinator, the Instant Gratification Monkey who sought instant satisfaction and the Panic Monster who came bolting in at the last moment that Tim Urban described related a little too closely than I expected to the ‘non-extremist’ procrastinator I believed myself to be. But still, I laughed along.</p><br/>

            <p class="post-content">That’s when humour was pushed aside and the actual issue came
            through with this picture: </p><br/>

            <div class="pic">
              <img
                src={process.env.PUBLIC_URL + "/blog-attachments/blog-9-box.png"}
                alt="boxes-of-life"
                resizeMode="contain"
                />
            </div>

            <p class="post-content">This picture shows one box for every week in a 90-year life. When
            you really look at it, there’s not a lot. That’s the moment when as a 19-year-old, my life
            had never felt shorter. </p><br/>

            <p class="post-content">All I could see jumping out at me was 20% of my life, where I
            hadn’t learnt Hebrew, I hadn’t travelled to the Middle East again, and I hadn’t repainted
            my room. Things I said I would do, but never have. That’s the same moment that Tim Urban
            declared “procrastination…without a deadline.”</p><br/>

            <p class="post-content">Now I knew why the Instant Gratification Monkey was so familiar
            satisfaction from a 90% exam result came much faster than learning a new language did.
            Completing something with a deadline could easily be ticked off then something without one.
            </p><br/>

            <p class="post-content">For each and every one of us ‘life procrastinators’, these are the
            things that I remember in my peaks of procrastination:</p><br/>

            <ol class="list">

                <li class="question">Feel unmotivated? Remember that life calendar.</li><br/>

                    <p class="post-content">I panic every time I think of this. It’s not just the fact
                    that my life is put into a shocking and short reality, but the idea of waking up
                    one morning when I’m 60 and realising that I never made the most of my life when I
                    had the chance. </p><br/>

                <li class="question">Everyone has something they love.
                And that thing <b class="super-emph">is</b> outside of uni.</li><br/>

                    <p class="post-content">Everyone is passionate about an activity! </p>

                    <p class="post-content"> Scrapbooking, finding new places to go, history, hiking,
                    cooking, reading, doesn’t matter what it is. Life is more than uni and working. You
                    absolutely have to find the fun in life. For example, after HSC I really thought I
                    didn’t have a hobby. Funnily enough, I turned back to the Senior Reading List my
                    Year 10 English teacher gave to me, and my love for classics came rushing back.
                    </p><br/>

                    <p class="post-content">Your something-you-love doesn’t need to be something new,
                    it just needs to make you happy, and make you proud of it.</p><br/>


                <li class="question">Goal setting</li><br/>
                    <p class="post-content"> Every year I write 10 goals that I want to achieve.
                    They’re mostly academic goals, like getting a good WAM and applying for an
                    internship, but now I try to push them a bit beyond that. My goals this year also
                    include finding a place that makes good burgers, joining a subcommittee (Success!),
                    and learning Hebrew. I think it’s important to have a balance of academic and life
                    goals, and also allow myself some ‘instant gratification’ goals that I can achieve
                    quickly to keep me motivated while pressing towards the long-term goals on the
                    list. </p><br/>

            </ol>

            <p class="post-content"> Since the first time I watched this TED Talk, I have tried to
            smash through goals, ambitions, and self-projects as quickly as I could. Turns out, <b><em>everyone</em></b> procrastinates, even the non-procrastinators. Procrastination isn’t about being done before the due date, it’s literally a question about whether you are making the most of your life, making the most of each box on that calendar, and doing something that means something to you on a deeper level. Surprisingly, I’ve found a lot more fulfilment in doing something that doesn’t have a deadline, that you learn a bit more from, that makes you a more rounded person, even though no one else can really see it. </p><br/>

            <p class="post-content"> No doubt, I’m still a procrastinator. I will always finish
            assignments the night before, keep leaving home 2 minutes before the bus arrives, and will
            probably continue paying my student contribution fees the day of class registration. But I
            still have 80% of a 90-year life left, and man alive. </p><br/>

            <p class="post-content"> I’m gonna make that 80% count. </p><br/>

          </div>
      </div>
         {/*for the blog post author*/}
         <AuthorCard
        authors={{"georgie-mansfield":["/potraits/georgie.jpg", "profile_img vivw_img", "Georgie Mansfield", "Education Team"]}}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost9;
