import React from 'react'

import "./joinUs.css"

class JoinUs extends React.Component {
    render() {
        const spARCUrl = "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE";
        const fbPageUrl = "https://www.facebook.com/unsw.wit/?ref=br_rs";
        const fbGroupUrl = "https://www.facebook.com/groups/2815903298432739/";
        const linkedInUrl = "https://www.linkedin.com/company/unsw-women-in-technology/";
        const instagramUrl = "https://www.instagram.com/wit.unsw/";

        return (

            <div>
              <div className = 'joinUsHeader'>
                <img src={process.env.PUBLIC_URL + '/join-header.png'} width = "100%" className="centre" alt="banner"
                resizeMode='cover'
                />
                <h1 className='centre'>Join Us</h1>
              </div>

              <div className = 'joinUsBody'>
                <img src={process.env.PUBLIC_URL + '/join-us-map.png'} width = "100%" className="googleMap" alt="map"
                />
                <div className = 'joinUsRight'>
                  <h2>Connect with us</h2>
                  <div className = 'joinButtons'>
                    <a href={fbPageUrl}> FB
                    </a>
                    <a href={instagramUrl}>
                        Insta
                    </a>
                    <a href={linkedInUrl}>
                        Linked
                    </a>
                  </div>
                  <h2>Subscribe to our mailing list</h2>
                  <div className = 'mailingForm' >
                  </div>
                </div>
              </div>

            </div>

        );
    }
}

export default JoinUs;
