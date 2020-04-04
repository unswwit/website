import React, { Component } from "react";

class McGrathNicol extends Component {	 
	render() {
		return (
            <div>
                <a href="https://www.mcgrathnicol.com/">
                    <img
                        src={process.env.PUBLIC_URL + "/sponsors/mcgrathcicol-major.png"}

                        alt="McGrathNicol"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                    />
                </a>
            </div>
        );
	}
}

export default McGrathNicol;