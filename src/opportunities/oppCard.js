//All necessary imports for this javascript
import React, { Component } from "react";
import ".././style.css";
import styles from "./opportunities.module.css";

class OppCard extends Component {
  render() {
    return (
      <div>
        {/*for the blog post author*/}
        {Object.keys(this.props.details).map((key, index) => (
          <div key={index} className={styles.oppPost}>
            <table cellpadding="0">
              <tr>
                <tr>
                  <td className={styles.oppPreview}>
                    <tr>
                      <td>
                        <div className={styles.oppFrame}>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              this.props.details[key][0]
                            }
                            className={styles.oppImg}
                            alt={key}
                          />
                        </div>
                      </td>
                      <td style={{ width: "200px" }}>
                        <div className={styles.heading}>{key}</div>
                        <div className={styles.subheading}>
                          {this.props.details[key][1]}
                        </div>
                      </td>
                    </tr>

                    <div className={styles.oppDetails}>
                      <div className={styles.jobPosition}>
                        {this.props.details[key][2]}
                      </div>

                      <div className={styles.subheading}>
                        {this.props.details[key][3]}
                      </div>
                      <div className={styles.moreLink}>
                        <a
                          className={styles.moreLink}
                          href={this.props.details[key][4]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More
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
