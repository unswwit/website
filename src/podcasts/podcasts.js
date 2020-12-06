import React from "react";
import PageHeader from ".././header";
import PodcastPanel from "./podcast-panel";
import "./podcasts.css";

class Podcasts extends React.Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/podcast-header.jpg" title="Podcasts" />

        <div class="margin">
          <div class="podcast-intro">
            <img src={process.env.PUBLIC_URL + "/podcast-logo.png"} alt="podcast-logo"
            className="podcast-logo"/>
            <h2>Talk WIT Us</h2>
            <p>Join us every Monday as we talk about tech, uni, and life, featuring
            our wonderful WIT team and some special guests!</p>
          </div>


          <div class="panels">
          <PodcastPanel
            imgUrl="/podcast-logo.png"
            date="September 19, 2020"
            heading="Welcome to Talk WIT Us"
            description="WIT is thrilled to reveal our new weekly podcast: Talk WIT Us! Join us every Monday as we talk all about tech, uni, and life, featuring our wonderful WIT team and some special guests! Tune in next Monday for our first episode, Chat and Chill."
          />
          <PodcastPanel
            imgUrl="/podcast-logo.png"
            date="September 21, 2020"
            heading="Chat and Chill"
            description="Welcome to episode one of Talk Wit Us: Chat and Chill! Join us as members of the WIT Executive and Subcommittee team engage in retrospective discussions on the extra-curricular that defined their time at university, personal development, and a guide to how to make the most of your time at university!"
          />
          <PodcastPanel
            imgUrl="/podcast-logo.png"
            date="September 29, 2020"
            heading="Careers Deep Dive"
            description="Not sure what to do with your life? Not sure what you can do with your life? The WIT Career Deep Dive sits down with successful women in the tech industry and uncovers the ins and outs of their daily work to demystify the opportunities that are available."
          />

          </div>

          <div class="comments">
            <h2> Comments </h2>
            <div class="icons">
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-breaker.png"} alt="breaker-icon"/>
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-anchor.png"} alt="anchor-icon"/>
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-google-podcasts.png"} alt="google-podcasts-icon"/>
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-pocket-casts.png"} alt="pocket-casts-icon"/>
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-radio-republic.png"} alt="radio-republic-icon"/>
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-spotify.png"} alt="spotify-icon"/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Podcasts;
