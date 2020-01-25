//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./team.css";

class TeamPage extends Component {
  render() {
    // TODO: Make Profiile Component, and use includes rather hardcoded html
    return (
      <div>
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

        <div className="title_area">
          <h1 className="centre">Meet Our Team!</h1>
          <p className="subheader centre">
            {`
                        2020 Executive Team
                    `}
          </p>
        </div>

        <div className="section">
          <div class="profile">
            <img
              src={process.env.PUBLIC_URL + "/wit_team_elicia.jpg"}
              className="profile_img"
              alt="banner"
              resizeMode="contain"
            />

            <div className="profile_details">
              <p className="title">Elicia Moustache Au Doung</p>
              <p className="subheader">Position</p>
              <p>degree and year</p>
              <p>cool funny quote or details</p>
              <p>more interesting stuff</p>
            </div>

            <div classname="icon_bar">
              {/* Todo: insert icon images in a row with h-ref links */}
              <a href="https://www.linkedin.com/in/eliciaauduong/">
                <img className="icon"
                  src={process.env.PUBLIC_URL + "/icon_linkedin"}
                  alt="Facebook Icon"
                />
              </a>
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
              <p className="title">Elicia Moustache Au Doung</p>
              <p className="subheader">Position</p>
              <p>degree and year</p>
              <p>cool funny quote or details</p>
              <p>more interesting stuff</p>
            </div>

            <div classname="icons">
              {/* Todo: insert icon images in a row with h-ref links */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamPage;
