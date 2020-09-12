import React from 'react'
import "./publications.css"
import PubArticle from "./publications-article"
import PageHeader from ".././header";

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

                    {/*2020 articles*/}

                    <h1>2020</h1>
                    <div className = "row">

                    <PubArticle
                    imgUrl="./publications/careers-guide.png"
                    heading="Careers Guide"
                    date="27/7/2020"
                    url="https://issuu.com/womenintechnology/docs/wit_2020_careers_guide?fbclid=IwAR3RBADvuCd7KRAxeD4yK0USlDoQkVp05kY2SSYiYmjB2nZjBsI3xs_rX5c"
                    />

                    {/*default publication:
                    <PubArticle
                    imgUrl="./pub_mini.png"
                    heading="Title Title"
                    date="Today's Date"
                    url=""
                    />

                    coming soon image:
                    <img src={process.env.PUBLIC_URL + './pubs-soon.png'} resizeMode='contain' style={{width: '100%', marginBottom: '5px', marginTop: '5px'}} alt="coming soon"/>

                    */}
                    </div>


                    {/*2019 articles

                    <h1>2019</h1>
                    <div class="row">

                    <PubArticle
                    imgUrl="./pub_mini.png"
                    heading="Title Title"
                    date="Date Published"
                    />

                    <PubArticle
                    imgUrl="./pub_mini.png"
                    heading="Title Title"
                    date="Date Published"
                    />

                    <PubArticle
                    imgUrl="./pub_mini.png"
                    heading="Title Title"
                    date="Date Published"
                    />

                    </div>
                    */}

                </div>
            </div>

        );
    }
}

export default Publications;
