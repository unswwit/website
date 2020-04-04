import React, { Component } from "react";

class Amazon extends Component {	 
	render() {
		return (
            <div>
                <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/amazon-major.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                </a>
            </div>
        );
	}
}

export default Amazon;