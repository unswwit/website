//All necessary imports for this javascript
import React, { Component } from "react";
import ".././style.css";
import "./opportunities.css";

class OppCard extends Component {
  render() {
    return (
      <div>
        {/*for the blog post author*/}
        {Object.keys(this.props.details).map((key, index) => (
          <div key={index} className="opp-post">
            <table cellpadding="0">
              <tr>
                <tr>
                  <td className="opp-preview">
                    <tr>
                      <td>
                        <div className="opp-frame">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              this.props.details[key][0]
                            }
                            className="opp-img"
                            alt={key}
                          />
                        </div>
                      </td>
                      <td style={{ width: "200px" }}>
                        <div className="heading">{key}</div>
                        <div className="subheading">
                          {this.props.details[key][1]}
                        </div>
                      </td>
                    </tr>

                    <div className="opp-details">
                      <div className="job-position">
                        {this.props.details[key][2]}
                      </div>

                      <div className="subheading">
                        {this.props.details[key][3]}
                      </div>
                      <div className="more-link">
                        <a
                          className="more-link"
                          href={this.props.details[key][4]}
                        >
                          More
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tr>
            </table>
          </div>
        ))}
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default OppCard;
