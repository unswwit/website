import React from 'react'

import "./joinUs.css"

class JoinUs extends React.Component {
    render() {
        const spARCUrl = "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE";
        const fbPageUrl = "https://www.facebook.com/unsw.wit/";
        const fbGroupUrl = "https://www.facebook.com/groups/unswwit/";
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
                    <a href={fbPageUrl}>
                      <img src={process.env.PUBLIC_URL + '/facebook.png'} className="" alt="banner" resizeMode='contain'
                            style={{width:'100%', height:'100%'}} />
                    </a>
                    <a href={instagramUrl}>
                      <img src={process.env.PUBLIC_URL + '/instagram.png'} className="" alt="banner" resizeMode='contain'
                            style={{width:'100%', height:'100%'}} />

                    </a>
                    <a href={linkedInUrl}>
                      <img src={process.env.PUBLIC_URL + '/linkedin.png'} className="" alt="banner" resizeMode='contain'
                            style={{width:'100%', height:'100%'}} />

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
