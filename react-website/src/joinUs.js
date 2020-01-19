import React from 'react'
// import { Redirect } from 'react-router-dom'

class JoinUs extends React.Component {
    render() {
        const spARCUrl = "";
        const fbPageUrl = "https://www.facebook.com/unsw.wit/?ref=br_rs";
        const fbGroupUrl = "https://www.facebook.com/groups/804189483040095/";
        const linkedInUrl = "https://www.linkedin.com/company/unsw-women-in-technology/";
        const instagramUrl = "https://www.instagram.com/wit.unsw/";
        const snapChatUrl = "";

        return (
            // <Router>
            //   <Route path='/join' component={JoinUs}/>
            // </Router>
            <div>
                <img src={process.env.PUBLIC_URL + '/wit_cover.jpg'} className="" alt="banner" 
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
                <div className='column'>
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
                    <div className='divider'></div>
                    <a className='button' href={snapChatUrl}>
                        Snapchat
                    </a>
                </div>
            </div>
        );
    }
}

export default JoinUs;
