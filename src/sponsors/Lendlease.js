import React, { Component } from "react";

class Lendlease extends Component {	 
	render() {
		return (
            <div>
                <a href="https://www.lendlease.com/au/">
                    <img
                        src={process.env.PUBLIC_URL + "/sponsors/lendlease-support.png"}

                        alt="Lendlease"
                        resizeMode="contain"
                        style={{'height': '100px', 'width': '200px'}}
                    />
                </a>
            </div>
        );
	}
}

export default Lendlease;