import React, { Component } from "react";

class Amanda extends Component {	 
	render() {
		return (
            <div>
                <div class="profile_crop">
                  <img
                    src={process.env.PUBLIC_URL + "/potraits/amanda.JPG"}
                    className="profile_img"
                    alt="banner"
                    resizeMode="contain"
                  />
                </div>

                <div className="profile_details">
                  <p className="profile_text_name">Amanda Li</p>
                  <p className="profile_text_position">Vice President</p>
                  <p className="profile_degree">Software Engineering, 3rd Year</p>

                  {/* Icon Bar shoulddd be a horizontal row of icons */}
                  <div classname="icon_bar">
                    {/* Linkedin Icon - target=_blank opens in new tab */}
                    <a
                      href="https://www.linkedin.com/in/amanda-li-031199/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* LinkedIn Icon Img */}
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/linkedin.png"}
                        alt="LinkedIn Icon"
                      />
                    </a>

                    {/* Facebook Icon */}
                    <a
                      href="https://www.facebook.com/amaandarin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/facebook.png"}
                        alt="Facebook Icon"
                      />
                    </a>

                    <a
                      href="mailto:vp@unswwit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/email.png"}
                        alt="Email Icon"
                      />
                    </a>
                  </div>
                </div>
            </div>
        );
	}
}

export default Amanda;