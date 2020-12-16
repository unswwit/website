import React from "react";
import PageHeader from ".././header";
import "./joinUs.css";

class JoinUs extends React.Component {
  render() {
    const spARCUrl =
      "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE";
    const fbPageUrl = "https://www.facebook.com/unsw.wit/";
    const fbGroupUrl = "https://www.facebook.com/groups/unswwit/";
    const linkedInUrl =
      "https://www.linkedin.com/company/unsw-women-in-technology/";
    const instagramUrl = "https://www.instagram.com/wit.unsw/";
    const youtubeUrl =
      "https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw/videos/";
    const twitchUrl = "https://www.twitch.tv/unswwit";
    const spotifyUrl = "https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P";

    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/join-header-1.png" title="Join Us" />
        <div className="joinUsBody">
          <div className="joinUsRight">
            <h2>Connect with us</h2>
            <div className="joinButtons">
              <a href={fbPageUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/facebook.png"}
                  title="Facebook Page"
                  alt="Facebook Page"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={fbGroupUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/facebook-group.png"}
                  title="Facebook Group"
                  alt="Facebook Group"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/linkedin.png"}
                  title="Linked-In"
                  alt="Linked-In"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/instagram.png"}
                  title="Instagram"
                  alt="Instagram"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={spARCUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/sparc.png"}
                  title="spARC"
                  alt="spARC"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/youtube.png"}
                  title="youtube"
                  alt="youtube"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={twitchUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/twitch.png"}
                  title="twitch"
                  alt="twitch"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/spotify.png"}
                  title="spotify"
                  alt="spotify"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
          </div>
          <div className="googleMap">
            <iframe
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
