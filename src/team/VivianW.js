import React, { Component } from "react";

class VivianW extends Component {	 
	render() {
		return (
            <div>
                <div className="profile_crop">
                    <img
                    src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                    className="profile_img vivw_img"
                    alt="vivian-wong"
                    resizeMode="contain"
                    />
                </div>
                <div className="profile_details">
                    <p className="profile_text_name">Vivian Wong</p>
                    <p className="profile_text_position">Education Executive</p>
                    <p className="profile_degree">Commerce/Actuarial Science, 2nd Year</p>

                    <p>
                    {/* Icon Bar shoulddd be a horizontal row of icons */}
                    <div classname="icon_bar">
                    {/* Linkedin Icon - target=_blank opens in new tab */}
                    <a
                        href="https://www.linkedin.com/in/vivian-wong-75511b169/"
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
                        href="https://www.facebook.com/profile.php?id=100027563555266"
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
                        href="mailto:vivianwong@unswwit.com"
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

export default VivianW;