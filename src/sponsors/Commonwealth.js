import React, { Component } from "react";

class Commonwealth extends Component {	 
	render() {
		return (
            <div> 
                <a href="https://www.commbank.com.au/about-us/careers.html">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/cba-major.png"}
                        alt="Commonwealth Bank"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                </a>
            </div>
        );
	}
}

export default Commonwealth;