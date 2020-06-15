import React, { Component } from "react";

class WCrushTan extends Component {
	render() {
		return (
            <div>
                <a href="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2328983924073142/">
                      <img
                        src={process.env.PUBLIC_URL + "/initiatives/witcrush_tan.jpg"}
                        alt="Syin Li Tan"
                        resizeMode="contain"
                        style={{'height': '22.5vw'}}
                      />
                </a>
            </div>
        );
	}
}

export default WCrushTan;
