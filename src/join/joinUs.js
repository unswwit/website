import React from "react";
import { Link } from "react-router-dom";
import PageHeader from ".././header";
import styles from "./joinUs.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

class JoinUs extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.hideSpinner = this.hideSpinner.bind(this);

    this.socials = {
      spARC: ["https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE", "sparc.png"],
      "Facebook Page": ["https://www.facebook.com/unsw.wit/", "facebook.png"],
      "Facebook Group": ["https://www.facebook.com/groups/unswwit/", "facebook-group.png"],
      LinkedIn: ["https://www.linkedin.com/company/unsw-women-in-technology/", "linkedin.png"],
      Instagram: ["https://www.instagram.com/wit.unsw/", "instagram.png"],
      Youtube: ["https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw/videos/", "youtube.png"],
      Twitch: ["https://www.twitch.tv/unswwit", "twitch.png"],
      Spotify: ["https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P", "spotify.png"],
      Discord: ["https://discord.gg/BWY4tzM326", "discord.png"]
    };
  }

  // hides the loading sign
  hideSpinner() { 
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/join-header-2.jpg" title="Join Us" />
        <div className={styles.joinUsBody}>
          <h2>Connect with us</h2>
            <div className={styles.joinUsRight}>
              <div className={styles.joinButtons}>
                {Object.keys(this.socials).map((social, index) => {
                  return <a 
                    className={styles.joinLink}
                    key={index}
                    href={this.socials[social][0]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/${this.socials[social][1]}`}
                      alt={social}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                })}
              </div>
            </div>
            <div className={styles.googleMap}>
              {this.state.loading ? 
                (<CircularProgress
                  variant="indeterminate"
                  size={50}
                  thickness={5}
                  id={styles.joinLoading}
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
        <h2>How to join</h2>
        <div className={styles.descriptionHowto}>
          Interact through social media
          <p>
            Stay up to date with our latest events, blogs, podcasts, videos and streams 
            through connecting with us through our social media and&nbsp;
            <Link to="https://www.facebook.com/groups/unswwit/" className={styles.link}>
                facebook group
            </Link>
            .
          </p>
          Become a LinkedIn Alumni
          <p>
            For past and current executives, subcommittee members or speakers at WIT events, 
            our&nbsp;
            <Link to="https://www.linkedin.com/groups/12373268/" className={styles.link}>
              LinkedIn Alumni network
            </Link>
            &nbsp;is available to provide advice and resources for our team to convey through 
            our platform. In joining our Alumni Network, you will also be notified of 
            new opportunities that will enable you to engage with our members.
          </p>
          Subcommittee Recruitment
          <p>
            Subcommittee recruitment is open at the beginning of 
            UNSW’s first academic term, in February each year, via our&nbsp;
            <Link to="https://www.facebook.com/unsw.wit/" className={styles.link}>
              Facebook page
            </Link>
            . To join, search for our subcommittee Facebook event and fill in the 
            registration form attached to the event. The application closing period 
            varies from year to year.
          </p>
        </div>
      </div>
    );
  }
}
export default JoinUs;
