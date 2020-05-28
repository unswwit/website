import React, { Component } from "react";

class Nine extends Component {	 
	render() {
		return (
            <div> 
                <a href="https://www.nineforbrands.com.au/">
                    <img
                        src={process.env.PUBLIC_URL + "/sponsors/nine-major.png"}
                        alt="Nine"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                    />
                </a>
            </div>
        );
	}
}

export default Nine;