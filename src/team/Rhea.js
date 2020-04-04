import React, { Component } from "react";

class Rhea extends Component {	 
	render() {
		return (
            <div>
                <div className="profile_crop">
                    <img
                    src={process.env.PUBLIC_URL + "/potraits/rhea.png"}
                    className="profile_img_subcommittee_version"
                    alt="rhea-thomas"
                    resizeMode="contain"
                    />
                </div>
                <div className="profile_details">
                    <p className="profile_text_name">Rhea Thomas</p>
                    <p className="profile_text_position">Externals Executive</p>
                    <p className="profile_degree">Information Systems, 2nd Year</p>
                    <p>
                    {/* Icon Bar shoulddd be a horizontal row of icons */}
                    <div classname="icon_bar">
                        {/* Linkedin Icon - target=_blank opens in new tab */}
                        <a
                        href="https://www.linkedin.com/in/rhea-t-2400b113a/"
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
                        href="https://www.facebook.com/profile.php?id=100013567812434"
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
                        href="mailto:rhea@unswwit.com"
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

export default Rhea;