//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./opportunities.css";
//import { Link } from "react-router-dom";

class Opportunities extends Component {
  render() {
    return (
      <div>
        {/*Start of Header*/}
        <div class="coverPhoto">
          <div class="title">
            <h1>Opportunities</h1>
          </div>
        </div>
        {/*End of Header*/}

        {/*Start of opportunities grid table*/}
        <div style={{ margin: "125px" }}>
          <table class="main-table" cellpadding="25">
            <tr>
              {/*This is row one with 3 sub tables*/}
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/amazon-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/nine-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/quantium-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
            </tr>

            <tr>
              {/*This is row two with 3 sub tables*/}
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/atlassian-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/baraja-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/deloitte-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
            </tr>

            <tr>
              {/*This is row three with 3 sub tables*/}
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/dxc-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/amazon-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
              <td>
                <div class="opp-post">
                  <table cellpadding="0">
                    <tr>
                      <tr>
                        <td class="opp-preview">
                          <tr>
                            <td>
                              <div class="author-pic">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/sponsors/amazon-major.png"
                                  }
                                  className="profile_img "
                                  alt="vivian-wong"
                                  resizeMode="contain"
                                />
                              </div>
                            </td>
                            <td style={{ width: "200px" }}>
                              <div class="heading">Company Name</div>
                              <div class="subheading">Published Date</div>
                            </td>
                          </tr>

                          <div class="opp-details">
                            <div class="job-position">Job Position</div>
                            <div class="subheading">Description</div>
                            <div class="subheading">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi
                            </div>
                            <div class="more-link">
                              <a
                                class="more-link"
                                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
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
              </td>
            </tr>
          </table>
        </div>
        {/*End of opportunities grid table*/}
      </div>
    );
  }
}
export default Opportunities;
