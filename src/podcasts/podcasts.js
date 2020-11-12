import React from "react";
import PageHeader from ".././header";
import "./podcasts.css";

class Podcasts extends React.Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/contact-header-1.png" title="Podcasts" />

        <h2 className="contact-team">CONTACT OUR TEAM</h2>
        <div className="newEmails">
          <div className="col2">
            <div className="profile2">
              <img
                src={process.env.PUBLIC_URL + "/pres-icon.png"}
                alt="pres-icon"
              />
              <h3> Vivian Shen </h3>
              <a href="mailto:president@unswwit.com">president@unswwit.com</a>
            </div>
            <div className="profile2">
              <img
                src={process.env.PUBLIC_URL + "/vp-icon.png"}
                alt="vp-icon"
              />
              <h3> Amanda Li </h3>
              <a href="mailto:vp@unswwit.com">vp@unswwit.com</a>
            </div>

            
          </div>
        </div>
      </div>
    );
  }
}

export default Podcasts;
