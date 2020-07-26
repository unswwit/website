import React from 'react'
import "./publications.css"
import PageHeader from ".././header";
// import PubArticle from "./publications-article"

class Publications extends React.Component {
    render() {
        return (
            <div>

            {/* Cover Photo */}
            <PageHeader
              imgUrl="/publications-header.png"
              title="Publications"
            />

                <div className = "publicationsBody">
                    <img src={process.env.PUBLIC_URL + './pubs-soon.png'} resizeMode='contain' style={{width: '100%', marginBottom: '5px', marginTop: '5px'}} alt="coming soon"/>
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
