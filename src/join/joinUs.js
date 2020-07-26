import React from 'react'
import PageHeader from ".././header";
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

            {/* Cover Photo */}
            <PageHeader
              imgUrl="/join-header-1.png"
              title="Join Us"
            />

                <div className = 'joinUsBody'>
                    <img src={process.env.PUBLIC_URL + '/join-us-map.png'}
                        width = "100%"
                        className="googleMap"
                        alt="map"
                    />
                    <div className = 'joinUsRight'>
                    <h2>Connect with us</h2>
                    <div className = 'joinButtons'>
                        <a href={fbPageUrl}>
                            <img src={process.env.PUBLIC_URL + '/facebook.png'}
                                title = 'Facebook Page'
                                alt="Facebook Page"
                                resizeMode='contain'
                                style={{width:'100%', height:'100%'}}
                            />
                        </a>
                        <a href={fbGroupUrl}>
                            <img src={process.env.PUBLIC_URL + '/facebook-group.png'}
                                title = 'Facebook Group'
                                alt="Facebook Group"
                                resizeMode='contain'
                                style={{width:'100%', height:'100%'}}
                            />
                        </a>
                        <a href={linkedInUrl}>
                            <img src={process.env.PUBLIC_URL + '/linkedin.png'}
                                title = 'Linked-In'
                                alt="Linked-In"
                                resizeMode='contain'
                                style={{width:'100%', height:'100%'}}
                            />
                        </a>
                        <a href={instagramUrl}>
                            <img src={process.env.PUBLIC_URL + '/instagram.png'}
                                title = 'Instagram'
                                alt="Instagram"
                                resizeMode='contain'
                                style={{width:'100%', height:'100%'}}
                            />
                        </a>
                        <a href={spARCUrl}>
                            <img src={process.env.PUBLIC_URL + '/sparc.png'}
                                title = 'spARC'
                                alt="spARC"
                                resizeMode='contain'
                                style={{width:'100%', height:'100%'}}
                            />
                        </a>
                    </div>

                    </div>
                </div>
            </div>

        );
    }
}
export default JoinUs;
