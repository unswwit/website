import React, { Component } from "react";

class Deloitte extends Component {	 
	render() {
		return (
            <div> 
                <a href="https://www2.deloitte.com/us/en/pages/careers/topics/careers.html/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/deloitte-major.png"}
                        alt="Delloite"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                </a>
            </div>
        );
	}
}

export default Deloitte;