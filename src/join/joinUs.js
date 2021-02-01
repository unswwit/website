import React from "react";
import PageHeader from ".././header";
import "./joinUs.css";
import CircularProgress from "@material-ui/core/CircularProgress";

class JoinUs extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.hideSpinner = this.hideSpinner.bind(this);
    this.spARCUrl = "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE";
    this.fbPageUrl = "https://www.facebook.com/unsw.wit/";
    this.fbGroupUrl = "https://www.facebook.com/groups/unswwit/";
    this.linkedInUrl = "https://www.linkedin.com/company/unsw-women-in-technology/";
    this.instagramUrl = "https://www.instagram.com/wit.unsw/";
    this.youtubeUrl = "https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw/videos/";
    this.twitchUrl = "https://www.twitch.tv/unswwit";
    this.spotifyUrl = "https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P";
  }

  // hides the loading sign
  hideSpinner() { 
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/join-header-1.png" title="Join Us" />
        <div className="joinUsBody">
          <div className="joinUsRight">
            <h2>Connect with us</h2>
            <div className="joinButtons">
              <a href={this.fbPageUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/icons/facebook.png"}
                  title="Facebook Page"
                  alt="Facebook Page"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={this.fbGroupUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/icons/facebook-group.png"}
                  title="Facebook Group"
                  alt="Facebook Group"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={this.linkedInUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/icons/linkedin.png"}
                  title="Linked-In"
                  alt="Linked-In"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={this.instagramUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/icons/instagram.png"}
                  title="Instagram"
                  alt="Instagram"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={this.spARCUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/icons/sparc.png"}
                  title="spARC"
                  alt="spARC"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={this.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/icons/youtube.png"}
                  title="youtube"
                  alt="youtube"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={this.twitchUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/icons/twitch.png"}
                  title="twitch"
                  alt="twitch"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={this.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/icons/spotify.png"}
                  title="spotify"
                  alt="spotify"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
          </div>
          <div className="googleMap">
            {this.state.loading ? 
              (<CircularProgress
                variant="indeterminate"
                size={50}
                thickness={5}
                id="joinLoading"
              />) : null}
            <iframe
              onLoad={this.hideSpinner}
              title="google-maps"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=UNSW%20Sydney%20High%20St%20Kensington,%20NSW%202052%20Australia+(UNSW%20Sydney)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default JoinUs;
