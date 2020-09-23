import React, { Component } from "react";

class SupportInKind extends Component {	 
	render() {
		return (
      <div>
        {
        Object.keys(this.props.details).map((key, index) => ( 
          <a href= {this.props.details[key][0]}>
            <img
              src={process.env.PUBLIC_URL + this.props.details[key][1]}
              alt={key}
              resizeMode="contain"
              style={{'height': '75px', 'width': '150px'}}
            />
          </a>
        ))
        }
      </div>
    );
	}
}

export default SupportInKind;