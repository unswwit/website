import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost7 extends Component {
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
        title="Blog Post #7"
      />

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class = "blog-title">How to Ace Your Hackathon</h2>
            <p class = "date"> 21st June 2020 </p>
          </div>

          <div class="post">
            <p class="question">What is a Hackathon?</p>
            <p class="post-content">Hackathons are opportunities for students
            to challenge themselves and showcase their skills by creating a technical
            product to resolve real world problems. Teams of 3-5 members are presented with a current
            societal problem to research, present their findings and pitch their proposed solution.</p><br/>

            <p class="question">Hackathon Participants Make a Difference</p>
            <p class="post-content">Our 2019 WIT Hackathon theme, <b> Do with Digital </b>,
            challenged participants to design assistive technology to improve the lives of
            Australians living with disabilities or functional impairments. The year prior, students
              developed innovative solutions to create more livable cities
              in line with the theme, <b>Our Cities, Our Future</b>. We use our hackathon
              themes to raise awareness and highlight the importance of these societal concerns.
              </p>
            <p class="post-content">Stay tuned for the theme of this year’s WIT Hackathon!</p><br/>

            <p class="question">The Most Vital Elements of Success</p>
            <p class="post-content">Former WIT Hackathon winners and runner up teams have shared
            what contributed to their success and what they would have done differently.  Here are
            some advice from WIT Hackathon winners Victor Tsang, Madeline Younes, Kai Feng, Rahil
            Agrawal and Christopher Shi.</p><br/>

            <br/><ol class="list">

            <li class="question">A Strong Pitch drives your team to success</li>
            <p class="post-content"><em>Instead of focusing on how your solution works,
            consider what the audience cares about and come up with a story that
            introduces a problem and your solution.</em> -First Place, Hungry Hakkers</p>
            
            <p class="post-content">Nearly all teams underestimated how long it takes
            to craft an engaging pitch and to work through a live-demo.
            You should identify your best public speakers at the start of the Hackathon,
            so they know from the get go that they will be pitching your team’s solution.
            They should demonstrate confidence in their idea, practice often, and let
            go of mistakes during the actual presentation. Some go so far as
            suggesting practicing beforehand with consultant case cracks related
            to tech, to help you organise your thoughts and ideas in a logical way,
            which will help your presentation.</p><br/>

            <li class="question">Generate and Research Project/Product Ideas Before the Hackathon Begins.</li>
            <p class="post-content">We were surprised to discover the winning
            teams did not prepare for the Hackathon! However, they all agreed
            their Hackathon experience would have been better if they had brainstormed
            and researched product ideas prior to the hackathon. With teams spending
            anywhere from 25-50 percent of their precious limited time during a
            hackathon coming up with an idea, product features, and value proposition,
            it’s no wonder they would advise arriving with researched ideas. </p><br/>

            <li class="question">Technical Skills Are A Must</li>
            <p class="post-content">Teams also point to the necessity for technical knowledge in the group. </p>

            <p class="post-content">As Hackathons have a technical focus, participants
            are usually expected to build a technical prototype from the ground up. As
            a result, every team should have at least one person who is technically
            well-versed so that they should be able to implement a full UI given some
            basic sketches in less than one day. Some teams cited a lack of
            technical expertise as a significant challenge. Some ways to hit
            the ground running on the tech end include learning a framework such as
            React Boilerplate, writing Boilerplate code and templates, learning
            skills to build the backend/infra such as CFN templates for AWS and
            familiarizing yourself with rapid prototyping (Including frontend/backend web,
              and UI sketches) before the Hackathon begins.</p><br/>

            </ol>

            <p class="question">Other Pearls of Wisdom</p>
            <p class="post-content">Team members shared other pearls of wisdom that
            will make your Hackathon experience more enjoyable and productive. </p><br/>

            <ul class="list">
            <li class="question">Arrive ready to learn and have fun! </li>
            <p class="post-content">While these teams earned top prizes in hackathons,
            they did not set out to win. They felt that would put unnecessary pressure
            on them. Instead, they all entered the Hackathons with the intent to
            learn and have fun. Boy, did it pay off!</p><br/>

            <li class="question">Decide how to spend your time and divide responsibilities. </li>
            <p class="post-content">Teams agreed that all members should be part of
            the idea creation and research phase and found various ways to
            divide other responsibilities based on team members’ strengths.
            Some common categories include technology (e.g. coding and prototype
              development), business model creation, and presentation (slide creation and delivery).
              One team advised separating what needs a working demonstration with code
              and what can be shown through image mockups. Image mockups allow people
              to see what it would look like and how it would work on a website
              such as proto.io.</p><br/>

            <li class="question">Share knowledge between team members. </li>
            <p class="post-content">Regardless of how tasks are divided, it’s important
            that members stay abreast of developments amongst their team. One team
            recommended creating a Google Document where members can share their
            knowledge and progress with other team members. </p><br/>

            <li class="question">Time pressure is a real challenge, so arrive with
            strategies to overcome it. </li>
            <p class="post-content">All teams face challenges in hackathons, with
            time pressure being the most commonly-cited challenge. Teams were
            particularly surprised by how long it took to come up with a great
            idea and prepare for their presentations. One team made too many major
            changes after the initial design phase and ran out of time. Students
            cited working as a team with members who were encouraging and
            motivating, as vital to their ability to overcome challenges and
            succeed. One team suggested preparing motivational music for
            intense times.</p><br/>
            </ul>

            <p class="question">Examples of winning products and projects </p>
            <p class="post-content">The winning teams have certainly earned the right
            to advise others on how to have a successful hackathon experience.
            Let’s look at the awesome ideas and products these teams developed
            during the WIT Hackathon!</p>

            <p class="post-content">In 2019, the first place winner (Hungry Hakkers;
              Victor Tsang, Kevin Lou, Sebastian Hodge, Iris Chong, Christine Wu)
            developed an application to help streamline caretakers' work in nursing
            homes. Their goal was to prototype a solution that would be of minimal
            cost and easy to use for the elderly, while also being the most convenient
            for the understaffed workers. Leveraging AWS Cloud Services for text-to-speech,
            transcribing, and translating, they prototyped a multilingual web application
            to call for assistance (food, water, hygiene, and emergencies) that had
            the potential to work in tandem with already-existing technology.</p>

            <p class="post-content">The 2019 second place winner (Team Nandos;
              Jovann Tjuandi, Kai Feng, Madeline Younes, Rebecca Tran) designed a
            prototype to simulate everyday scenarios that allows people with autism to
            become comfortable in everyday environments. Sharing a passion for
            mental illness, the team members created the virtual reality prototype
              to spread the message that mental health doesn't just affect the
              health of the individual but it also affects them socially.</p>

            <p class="post-content">The 2019 third place winner (Starks;
              Rahil Agrawal, Aditya Karia, Sushant Adhikari, Andrew Kaploun,
              Brittany Evat) came up with a filtering service to allow people to search
              for establishments that have facilities to accommodate people
              with various disabilities. With a shared passion for creating
              a more inclusive world for those living with disabilities
              and diseases, the team created a filtering service using
              integration with AWS APIs and Health APIs so users could find
              restaurants, companies, and other establishments that suit their needs. </p>

            <p class="post-content">The second place winning team of the 2017 WIT Hackathon
            (Christopher Shi, Mackenzie Alexander, Lena Albin, Vanessa Long) created
              a predictive platform to help students discover their career pathways.
              Team members were first-year students who wanted to discover what career
              to pursue. So, they built something to help themselves and other students
              in the same situation. Students complete psychometric quizzes and video
              interviews, AI evaluates the interviews, and the platform provides students
              with potential career pathways and opportunities. </p>

            <p class="post-content">We would like to share a special thanks to Victor
            Tsang, Madeline Younes, Kai Feng, Rahil Agrawal and Christopher Shi
            for helping with this blog post. As representatives of past winning
            teams, your advice will allow future WIT Hackathon participants
            to have a positive experience and create meaningful and relevant solutions. </p><br/>

            </div>
            </div>
            {/*for the blog post author*/}
            <AuthorCard
            authors={{"vivian-wong":["/potraits/vivw.jpg", "profile_img vivw_img", "Vivian Wong", "Education Executive"]}}
            />
            {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost7;
