import React from 'react'

class Sponsors extends React.Component {
    render() {
        return (
            <div className='centre'>
                {/* <ResponsiveImage>
                    <ResponsiveImageSize
                    default
                    minWidth={0}
                    path={'wit_cover_sponsors.jpg'}
                    />
                </ResponsiveImage> */}
                <img src={process.env.PUBLIC_URL + '/wit_cover_sponsors.jpg'} className="" alt="banner" 
                    resizeMode='contain'
                    style={{
                    maxHeight: 768,
                    maxWidth: 1366
                    }} />
                <h1>Sponsors</h1>
                <p className='subheader'>{`
                    Thank you to our sponsors for generously supporting our cause and 
                    collaborating with us to provide our students invaluable opportunities.
                    `}
                </p>
                <h1>Major Sponsors</h1>
                <img src={process.env.PUBLIC_URL + '/major_sponsors.png'} alt="major sponsors"
                    resizeMode="cover" 
                    style={{
                    maxHeight: 768,
                    maxWidth: 1366
                    }}></img>
                <h1>Support Sponsors</h1>
                <img src={process.env.PUBLIC_URL + '/support_sponsors.png'} alt="support sponsors"
                    resizeMode='contain'
                    style={{
                    maxHeight: 768,
                    maxWidth: 1366
                    }}></img>
                <h3 className='subheader'>{`Interested in partnering with us? Contact us at `}
                    <a className='subheader' href="mailto:external.unswwit@gmail.com">external.unswwit@gmail.com</a>.
                </h3>
            </div>
        );
    }
}

export default Sponsors;
