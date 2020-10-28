//All necessary imports for this javascript
import React, { Component } from 'react';
import '.././style.css';
import './opportunities.css';

class OppCard extends Component {
  render() {
    return (
      <div>
        {/*for the blog post author*/}
        {Object.keys(this.props.details).map((key, index) => (
          <div class="opp-post">
            <table cellpadding="0">
              <tr>
                <tr>
                  <td class="opp-preview">
                    <tr>
                      <td>
                        <div class="opp-frame">
                          <img
                            src={process.env.PUBLIC_URL + this.props.details[key][0]}
                            className="opp-img"
                            alt={key}
                            resizeMode="contain"
                          />
                        </div>
                      </td>
                      <td style={{ width: '200px' }}>
                        <div class="heading">{key}</div>
                        <div class="subheading">{this.props.details[key][1]}</div>
                      </td>
                    </tr>

                    <div class="opp-details">
                      <div class="job-position">{this.props.details[key][2]}</div>

                      <div class="subheading">{this.props.details[key][3]}</div>
                      <div class="more-link">
                        <a class="more-link" href={this.props.details[key][4]}>
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
