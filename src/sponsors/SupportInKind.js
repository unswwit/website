import React, { Component } from "react";

class SupportInKind extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.details).map((key, index) => (
          <a key={index} href={this.props.details[key][0]}>
            <img
              className="support-inkind"
              src={process.env.PUBLIC_URL + this.props.details[key][1]}
              alt={key}
            />
          </a>
        ))}
      </div>
    );
  }
}

export default SupportInKind;
