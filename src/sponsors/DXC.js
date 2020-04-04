import React, { Component } from "react";

class Fairfax extends Component {	 
	render() {
		return (
            <div> 
                <a href="https://jobs.dxc.technology/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/dxc-major.png"}
                        alt="DXC"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                </a>
            </div>
        );
	}
}

export default Fairfax;