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
		                    style={{'height': '22.5vw'}}
	                    />
                </a>
            </div>
        );
	}
}
export default TechTrivia;
