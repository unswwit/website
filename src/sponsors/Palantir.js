import React, { Component } from "react";

class Palantir extends Component {	 
	render() {
		return (
            <div>
                <a href="https://www.palantir.com/">
                    <img
                        src={process.env.PUBLIC_URL + "/sponsors/palantir-support.png"}

                        alt="Palantir"
                        resizeMode="contain"
                        style={{'height': '100px', 'width': '200px'}}
                    />
                </a>
            </div>
        );
	}
}

export default Palantir;
