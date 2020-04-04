import React, { Component } from "react";

class Google extends Component {	 
	render() {
		return (
            <div>
                <a href="https://careers.google.com/">
                    <img
                        src={process.env.PUBLIC_URL + "/sponsors/google-major.png"}

                        alt="Google"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                    />
                </a>
            </div>
        );
	}
}

export default Google;