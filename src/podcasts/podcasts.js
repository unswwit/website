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
            <div class='intro'>
              <h2>Talk WIT Us</h2>
              <p>Join us every Monday as we talk about tech, uni, and life, featuring
              our wonderful WIT team and some special guests!</p>
            </div>
          </div>


          <div class="panel-container">
            <PodcastPanel
              imgUrl="podcasts/episode-0.jpg"
              date="September 19, 2020"
              heading="Welcome to Talk WIT Us"
              description="WIT is thrilled to reveal our new weekly podcast: Talk WIT Us! Join us every Monday as we talk all about tech, uni, and life, featuring our wonderful WIT team and some special guests! Tune in next Monday for our first episode, Chat and Chill."
            />
            <PodcastPanel
              imgUrl="podcasts/episode-1.jpg"
              date="September 21, 2020"
              heading="Chat and Chill"
              description="Welcome to episode one of Talk Wit Us: Chat and Chill! Join us as members of the WIT Executive and Subcommittee team engage in retrospective discussions on the extra-curricular that defined their time at university, personal development, and a guide to how to make the most of your time at university!"
            />
            <PodcastPanel
              imgUrl="podcasts/episode-2.jpg"
              date="September 29, 2020"
              heading="Careers Deep Dive"
              description="Not sure what to do with your life? Not sure what you can do with your life? The WIT Career Deep Dive sits down with successful women in the tech industry and uncovers the ins and outs of their daily work to demystify the opportunities that are available."
            />

          </div>

          <div class="comments">
            <h3> Comments </h3>
            <div class="icons">
              <a href="https://www.breaker.audio/talk-wit-us">
                <img src={process.env.PUBLIC_URL + "/podcasts/podcast-breaker.png"} alt="breaker-icon"/>
              </a>
              <a href="https://anchor.fm/unswwit">
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-anchor.png"} alt="anchor-icon"/>
              </a>
              <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8zNTQxM2JkMC9wb2RjYXN0L3Jzcw==">
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-google-podcasts.png"} alt="google-podcasts-icon"/>
              </a>
              <a href="https://pca.st/kzc50ug6">
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-pocket-casts.png"} alt="pocket-casts-icon"/>
              </a>
              <a href="https://radiopublic.com/talk-wit-us-Ww3A3m">
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-radio-republic.png"} alt="radio-republic-icon"/>
              </a>
              <a href="https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P">
              <img src={process.env.PUBLIC_URL + "/podcasts/podcast-spotify.png"} alt="spotify-icon"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Podcasts;
