import React, { Component } from "react";

class Telstra extends Component {	 
	render() {
		return (
            <div>
                <a href="https://www.telstra.com.au/">
                  <img
                    src={process.env.PUBLIC_URL + "/sponsors/telstra-large.png"}
                    alt="Telstra"
                    resizeMode="contain"
                    style={{'height': '250px', 'width': '500px'}}
                  />
                </a>
            </div>
        );
	}
}

export default Telstra;