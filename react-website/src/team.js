//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./team.css";

class TeamPage extends Component {
  render() {
    // TODO: Make Profile Component, and use includes rather hardcoded html
    return (
      <div>
        {/* Cover Photo */}
        <img
          src={process.env.PUBLIC_URL + "/wit_cover_team.jpg"}
          className=""
          alt="banner"
          resizeMode="contain"
          style={{
            width: "100%",
            height: "auto"
          }}
        />

        {/* Main Title, and Subtitle Area */}
        <div className="title_area">
          <h1 className="centre">Meet Our Team!</h1>
          <p className="subheader centre">
            {`
                        2020 Executive Team
                    `}
          </p>
        </div>
        
        {/* Row of Profiles */}
        <div className="section">
          {/* Individual Profile of an Exec */}
          <div class="profile">
            <img
              src={process.env.PUBLIC_URL + "/wit_team_elicia.jpg"}
              className="profile_img"
              alt="banner"
              resizeMode="contain"
            />

            {/* Profile Details */}
            <div className="profile_details">
              <p className="profile_text_name">Elicia Moustache Au Doung</p>
              <p className="profile_text_position">Position</p>
              <p>degree and year</p>
              <p>cool funny quote or details</p>
              <p>more interesting stuff</p>
              {/* Icon Bar shoulddd be a horizontal row of icons */}
              <div classname="icon_bar">
                {/* Linkedin Icon - target=_blank opens in new tab */}
                <a
                  href="https://www.linkedin.com/in/eliciaauduong/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* LinkedIn Icon Img */}
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                    alt="Facebook Icon"
                  />
                </a>

                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/eliciacauduong/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                    alt="Facebook Icon"
                  />
                </a>

                {/* This email address needs to be changed to Elicia's rn is just Execs */}
                <a
                  href="mailto:elicia@unswwit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_email.png"}
                    alt="Facebook Icon"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="profile">
            <img
              src={process.env.PUBLIC_URL + "/wit_team_elicia.jpg"}
              className="profile_img"
              alt="banner"
              resizeMode="contain"
            />

            <div className="profile_details">
              <p className="profile_text_name">Elicia Moustache Au Doung</p>
              <p className="profile_text_position">Position</p>
              <p>degree and year</p>
              <p>cool funny quote or details</p>
              <p>more interesting stuff</p>

              {/* Icon Bar shoulddd be a horizontal row of icons */}
              <div classname="icon_bar">
                {/* Linkedin Icon - target=_blank opens in new tab */}
                <a
                  href="https://www.linkedin.com/in/eliciaauduong/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* LinkedIn Icon Img */}
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                    alt="Facebook Icon"
                  />
                </a>

                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/eliciacauduong/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                    alt="Facebook Icon"
                  />
                </a>

                {/* This email address needs to be changed to Elicia's rn is just Execs */}
                <a
                  href="mailto:elicia@unswwit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_email.png"}
                    alt="Facebook Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section_subcommittee">
          <img
            src={process.env.PUBLIC_URL + "/wit_team_elicia.jpg"}
            className="profile_img"
            alt="banner"
            resizeMode="contain"
          />

          <div className="profile_details_subcommittee">
            <p className="profile_text_name">Elicia Moustache Au Doung</p>
            <p className="profile_text_position">Position</p>
            <p>degree and year</p>
            <p>cool funny quote or details</p>
            <p>more interesting stuff</p>

            {/* Icon Bar shoulddd be a horizontal row of icons */}
            <div classname="icon_bar">
              {/* Linkedin Icon - target=_blank opens in new tab */}
              <a
                href="https://www.linkedin.com/in/eliciaauduong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* LinkedIn Icon Img */}
                <img
                  className="icon"
                  src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                  alt="Facebook Icon"
                />
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/eliciacauduong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                  alt="Facebook Icon"
                />
              </a>

              {/* This email address needs to be changed to Elicia's rn is just Execs */}
              <a
                href="mailto:elicia@unswwit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={process.env.PUBLIC_URL + "/icon_email.png"}
                  alt="Facebook Icon"
                />
              </a>
            </div>

            <p>Subcommittee Member Names Here: </p>
            <p>- Tree 1 </p>
            <p>- Child Node 1 </p>
            <p>- Child Node 2 </p>
            <p>- Prune Tree =( </p>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamPage;
