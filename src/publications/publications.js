import React from 'react'
import "./publications.css"
import PubArticle from "./publications-article"

class Publications extends React.Component {
    render() {
        return (
            <div>
                <div className="publicationsHeader">
                    {/* Cover Photo */}
                    {/* Main Title, and Subtitle Area */}
                    <div className="overlay"></div>
                        <div className="title_area">
                            <h1 className="centre">Publications</h1>
                        </div>
                </div>
                <div className = "publicationsBody">
                    <img src={process.env.PUBLIC_URL + './pubs-soon.png'} resizeMode='contain' style={{width: '100%', marginBottom: '5px', marginTop: '5px'}} />
                    {/* 2020 articles

                    <h1>2020</h1>
                        <div className = "row">

                        <PubArticle
                        imgUrl="./pub_mini.png"
                        heading="Title Title"
                        date="Today's Date"
                        />

                        <PubArticle
                        imgUrl="./pub_mini.png"
                        heading="Title Title"
                        date="Today's Date"
                        />

                        <PubArticle
                        imgUrl="./pub_mini.png"
                        heading="Title Title"
                        date="Today's Date"
                        />

                        </div> */}
                </div>
            </div>

        );
    }
}

export default Publications;
