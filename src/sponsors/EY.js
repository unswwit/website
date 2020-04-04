import React, { Component } from "react";

class EY extends Component {	 
	render() {
		return (
            <div>
                <a href="https://www.ey.com/en_au">
                    <img
                        src={process.env.PUBLIC_URL + "/sponsors/ey-major.png"}
                        alt="EY"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                    />
                </a>
            </div>
        );
	}
}

export default EY;