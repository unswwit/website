import React from 'react'

class JoinUs extends React.Component {
    render() {
        const spARCUrl = "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE";
        const fbPageUrl = "https://www.facebook.com/unsw.wit/?ref=br_rs";
        const fbGroupUrl = "https://www.facebook.com/groups/804189483040095/";
        const linkedInUrl = "https://www.linkedin.com/company/unsw-women-in-technology/";
        const instagramUrl = "https://www.instagram.com/wit.unsw/";

        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/wit_cover.jpg'} className="centre" alt="banner" 
                resizeMode='contain'
                style={{
                    maxHeight: 768,
                    maxWidth: 1366
                    }} />
                <h1 className='centre'>Join Us!</h1>
                <p className='subheader centre'>{`
                        How you can get involved
                    `}
                </p>
                <div className='joinColumn'>
                    <p className='subheader'>{`
                        Become an official Member by joining us on SpARC
                    `}
                    </p>
                    <a className='button' href={spARCUrl}>
                        SpARC
                    </a>
                    <p className='subheader'>{`
                        Keep updated by following us on Facebook
                    `}
                    </p>
                    <a className='button' href={fbPageUrl}>
                        FB Page
                    </a>
                    <div className='divider'></div>
                    <a className='button' href={fbGroupUrl}>
                        FB Group
                    </a> 
                    <p className='subheader'>{`
                        Follow us on Other Social Media Accounts 
                    `}
                    </p>
                    <a className='button' href={linkedInUrl}>
                        LinkedIn
                    </a>
                    <div className='divider'></div>
                    <a className='button' href={instagramUrl}>
                        Instagram
                    </a>
                </div>
            </div>
        );
    }
}

export default JoinUs;
