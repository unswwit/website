import React, { Component } from "react";

class InsideSherpa extends Component {	 
	render() {
		return (
            <div>
                <a href="https://www.insidesherpa.com/">
                    <img
                        src={process.env.PUBLIC_URL + "/sponsors/inside-sherpa-inkind.png"}

                        alt="Inside Sherpa"
                        resizeMode="contain"
                        style={{'height': '100px', 'width': '200px'}}
                    />
                </a>
            </div>
        );
	}
}

export default InsideSherpa;