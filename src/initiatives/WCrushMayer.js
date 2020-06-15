import React, { Component } from "react";

class WCrushMayer extends Component {
	render() {
		return (
            <div>
                <a href="https://www.facebook.com/unsw.wit/posts/2323194404652094">
                      <img
                        src={process.env.PUBLIC_URL + "/initiatives/witcrush_mayer.png"}
                        alt="Marissa Mayer"
                        resizeMode="contain"
                        style={{'height': '22.5vw'}}
                      />
                </a>
            </div>
        );
	}
}

export default WCrushMayer;
