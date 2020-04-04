import React, { Component } from "react";
import Alison from "./Alison";

class Kelly extends Component {	 
	render() {
		return (
            <div>
                
                <div className="profile_crop">
                    <img
                    src={process.env.PUBLIC_URL + "/potraits/elicia.jpg"}
                    className="profile_img_subcommittee_version eli_img"
                    alt="elicia"
                    resizeMode="contain"
                    />
                </div>
                <div className="profile_details">
                    <p className="profile_text_name">Elicia Au Duong</p>
                    <p className="profile_text_position">Information Technology Executive</p>
                    <p className="profile_degree">Commerce/Computer Science, 2nd Year</p>

                    <p>
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
                            src={process.env.PUBLIC_URL + "/linkedin.png"}
                            alt="LinkedIn Icon"
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
                            src={process.env.PUBLIC_URL + "/facebook.png"}
                            alt="Facebook Icon"
                        />
                        </a>

                        <a
                        href="mailto:elicia@unswwit.com"
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

export default Kelly;