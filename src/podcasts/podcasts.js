import React from "react";
import PageHeader from ".././header";
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
