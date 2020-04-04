import React, { Component } from "react";

class Baraja extends Component {	 
	render() {
		return (
            <div> 
                <a href="https://www.baraja.com/careers/">
                    <img
                    src={process.env.PUBLIC_URL + "/sponsors/baraja-major.png"}
                    alt="Baraja"
                    resizeMode="contain"
                    style={{'height': '150px', 'width': '300px'}}
                    />
                </a>
            </div>
        );
	}
}

export default Baraja;