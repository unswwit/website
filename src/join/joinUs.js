import React from 'react'
import "./joinUs.css"

class JoinUs extends React.Component {
    render() {
        const spARCUrl = "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE";
        const fbPageUrl = "https://www.facebook.com/unsw.wit/";
        const fbGroupUrl = "https://www.facebook.com/groups/unswwit/";
        const linkedInUrl = "https://www.linkedin.com/company/unsw-women-in-technology/";
        const instagramUrl = "https://www.instagram.com/wit.unsw/";

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
        <PageHeader imgUrl="/headers/join-header-1.png" title="Join Us" />
        <div className={styles.joinUsBody}>
          <div className={styles.joinUsRight}>
            <h2>Connect with us</h2>
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
                  />
                </a>
              })}
            </div>

        );
    }
}

export default JoinUs;
