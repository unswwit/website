import React, { Component } from "react";

class TechTrivia extends Component {
	render() {
		return (
            <div>
                <a href="https://www.facebook.com/events/208115483507235/">
	                    <img
		                    src={process.env.PUBLIC_URL + "/initiatives/techtrivia.jpg"}
		                    alt="Tech Trivia"
		                    resizeMode="contain"
	                    />
                </a>
            </div>
        );
	}
}
export default TechTrivia;
