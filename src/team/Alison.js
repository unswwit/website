import React, { Component } from "react";

class Alison extends Component {	 
	render() {
		return (
            <div>
                <div className="profile_crop">
                    <img
                    src={process.env.PUBLIC_URL + "/potraits/alison.png"}
                    className="profile_img alison_img"
                    alt="alison-chin"
                    resizeMode="contain"
                    />
                </div>
                <div className="profile_details">
                    <p className="profile_text_name">Alison Chin</p>
                    <p className="profile_text_position">Human Resources Executive</p>
                    <p className="profile_degree">Information Systems, 3rd Year</p>

                    <p>
                    {/* Icon Bar shoulddd be a horizontal row of icons */}
                    <div classname="icon_bar">
                        {/* Linkedin Icon - target=_blank opens in new tab */}
                        <a
                        href="https://www.linkedin.com/in/alison-chin-958581148/"
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
                        href="https://www.facebook.com/alison.chin.52"
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
                        href="mailto:alison@unswwit.com"
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
                    </p>
                </div>
            </div>
        );
	}
}

export default Alison;