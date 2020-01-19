import React, { Component } from "react";
import "./style.css";
import "./team.css";

class TeamPage extends Component {
  render() {
    // TODO: Make Executive Component, and include in here
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/wit_cover_team.jpg"}
          className=""
          alt="banner"
          resizeMode="contain"
          style={{
            //Todo: Make image fit
            maxHeight: 768,
            maxWidth: 1336
          }}
        />
        <h1 className="centre">Meet Our Team!</h1>
        <p className="subheader centre">
          {`
                        2020 Executive Team
                    `}
        </p>

        {/*Everything inside is made into columns */}
        <div className="column">
          <div class="profile">
            <div class="profile_image">
              <img
                src={process.env.PUBLIC_URL + "/wit_team_elicia.jpg"}
                className=""
                alt="banner"
                resizeMode="contain"
              />
            </div>
            <div className="profile_details">
              
            </div>
          </div>

          <div class="profile">
            <div class="profile_image">
              <img
                src={process.env.PUBLIC_URL + "/wit_team_elicia.jpg"}
                className=""
                alt="banner"
                resizeMode="contain"
              />
            </div>
            <div className="profile_details"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamPage;
