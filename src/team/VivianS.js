import React, { Component } from "react";

class VivianS extends Component {	 
	render() {
		return (
            <div>
                <div class="profile_crop">
                    <img
                    src={process.env.PUBLIC_URL + "/potraits/viv.png"}
                    className="profile_img"
                    alt="vivian-shen"
                    resizeMode="contain"
                    />
                </div>
                <div className="profile_details">
                    <p className="profile_text_name">Vivian Shen</p>
                    <p className="profile_text_position">President</p>
                    <p className="profile_degree">Data Science, 3rd Year</p>
                    <div classname="icon_bar">
                        <a
                            href="https://www.linkedin.com/in/vivian-shen-046110/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                            className="icon"
                            src={process.env.PUBLIC_URL + "/linkedin.png"}
                            alt="LinkedIn Icon"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/vivian.shen.71619/"
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
                            href="mailto:president@unswwit.com"
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

export default VivianS;