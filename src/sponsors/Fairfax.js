import React, { Component } from "react";

class Fairfax extends Component {	 
	render() {
		return (
            <div> 
                <a href="https://www.nineforbrands.com.au/">
                    <img
                        src={process.env.PUBLIC_URL + "/sponsors/fairfax-major.png"}
                        alt="Fairfax"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                    />
                </a>
            </div>
        );
	}
}

export default Fairfax;