import React, { Component } from "react";

class Kelly extends Component {	 
	render() {
		return (
            <div>
                <div class="profile_crop">
                  <img
                    src={process.env.PUBLIC_URL + "/potraits/kelly.png"}
                    className="profile_img"
                    alt="kelly-liang"
                    resizeMode="contain"
                  />
                </div>
                {/* Profile Details */}
                <div className="profile_details">
                  <p className="profile_text_name">Kelly Liang</p>
                  <p className="profile_text_position">General Secretary</p>
                  <p className="profile_degree">Commerce/Information System, 2nd Year</p>
                  {/* Icon Bar shoulddd be a horizontal row of icons */}
                  <div classname="icon_bar">
                    {/* Linkedin Icon - target=_blank opens in new tab */}
                    <a
                      href="https://www.linkedin.com/in/kelly-liang-03877017b/"
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
                      href="https://www.facebook.com/keleriter"
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
                      href="mailto:secretary@unswwit.com"
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

export default Kelly;