import React, { Component } from "react";
import "./subcom_member.css";

class Subcom_member extends Component {	 
	render() {
		return (
            <div>
                <div className="profile_crop">
                    <img
                    src={process.env.PUBLIC_URL + this.props.picUrl}
                    className={"profile_img " + this.props.transform}
                    alt={this.props.alt}
                    resizeMode="contain"
                    />
                </div>

                <div className="profile_details">
                    <p className="subcom_profile_name">{this.props.name}</p>
                    <p className="subcom_profile_degree">{this.props.degree}</p>
                </div>
            </div>
        );
	}
}

export default Subcom_member;