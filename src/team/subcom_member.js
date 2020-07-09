import React, { Component } from "react";
import "./subcom_member.css";

class Subcom_member extends Component {	 
	render() {
		return (
            <div>
                <div className="profile_crop">
                    <img
                    src={process.env.PUBLIC_URL + "/potraits/felicia.png"}
                    className="profile_img fel_img"
                    alt="felicia-ee"
                    resizeMode="contain"
                    />
                </div>

                <div className="profile_details">
                    <p className="subcom_profile_name">Elisa Sanjurjo</p>
                    <p className="subcom_profile_degree">Degree, 2nd Year</p>
                </div>
            </div>
        );
	}
}

export default Subcom_member;