import React, { Component } from "react";

class Gabrielle extends Component {	 
	render() {
		return (
            <div>
                <div className="profile_crop">
                    <img
                    src={process.env.PUBLIC_URL + "/potraits/gabby.jpg"}
                    className="profile_img_subcommittee_version gab_img"
                    alt="gabrielle"
                    resizeMode="contain"
                    />
                </div>
                <div className="profile_details">
                    <p className="profile_text_name">Gabrielle Younes</p>
                    <p className="profile_text_position">Events Executive</p>
                    <p className="profile_degree">Bioinformatic Engineering/Advanced Science, 2nd Year</p>

                    <p>
                    {/* Icon Bar shoulddd be a horizontal row of icons */}
                    <div classname="icon_bar">
                    {/* Linkedin Icon - target=_blank opens in new tab */}
                        <a
                        href="https://www.linkedin.com/in/gabrielle-younes-a05a70182/"
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
                        href="https://www.facebook.com/profile.php?id=100017209069498"
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
                        href="mailto:gabrielle@unswwit.com"
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

export default Gabrielle;