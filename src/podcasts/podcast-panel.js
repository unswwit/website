import React, { Component } from "react";
import ".././style.css";
import "./podcasts.css";
class PodcastPanel extends Component {
  render() {
    return (
      <div>
        {/*Start of podcast panel*/}

        <div className="panel">
          <div>
            <img
              src={process.env.PUBLIC_URL + this.props.imgUrl}
              alt={this.props.heading}
              className="panel_img"/>
          </div>

          <div className="panel_text">
            <p>{this.props.date}</p>
            <h3>{this.props.heading}</h3>
            <p>{this.props.description}</p>
          </div>

        </div>

        {/*End of podcast panel*/}
      </div>
    );
  }
}
export default PodcastPanel;
