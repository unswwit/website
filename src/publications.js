import React from 'react'

import "./publications.css"

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
                  {/*2020 articles*/}

                    <h1>2020</h1>

                    <div className = "row">

                    <div className = "article">

                      <div className = "image_container">
                        <img src={process.env.PUBLIC_URL + './pub_mini.png'} alt="wit logo"
                        resizeMode='contain'className = "article_img"/>
                      </div>
                      <div className = "text_container">
                      <div className = "dark" > </div>
                        <h2> Title Title </h2>
                        <p> Date Published </p>
                        <div className = "button">
                          <h3> Read More </h3>
                        </div>
                      </div>
                    </div>

                      <div className = "article">
                        <div className = "dark" > </div>
                        <div className = "image_container">
                          <img src={process.env.PUBLIC_URL + './pub_mini.png'} alt="wit logo"
                          resizeMode='contain'className = "article_img"/>
                        </div>
                        <div className = "text_container">
                          <h2> Title Title </h2>
                          <p> Date Published </p>
                          <div className = "button">
                            <h3> Read More </h3>
                          </div>
                        </div>
                      </div>

                      <div className = "article">
                        <div className = "dark" > </div>
                        <div className = "image_container">
                          <img src={process.env.PUBLIC_URL + './pub_mini.png'} alt="wit logo"
                          resizeMode='contain'className = "article_img"/>
                        </div>
                        <div className = "text_container">
                          <h2> Title Title </h2>
                          <p> Date Published </p>
                          <div className = "button">
                            <h3> Read More </h3>
                          </div>
                        </div>
                      </div>

                    </div>


                    {/*2019 articles*/}

                      <h1>2019</h1>

                      <div className = "row">

                        <div className = "article">
                          <div className = "dark" > </div>
                          <div className = "image_container">
                            <img src={process.env.PUBLIC_URL + './pub_mini.png'} alt="wit logo"
                            resizeMode='contain'className = "article_img"/>
                          </div>
                          <div className = "text_container">
                            <h2> Title Title </h2>
                            <p> Date Published </p>
                            <div className = "button">
                              <h3> Read More </h3>
                            </div>
                          </div>
                        </div>

                        <div className = "article">
                          <div className = "dark" > </div>
                          <div className = "image_container">
                            <img src={process.env.PUBLIC_URL + './pub_mini.png'} alt="wit logo"
                            resizeMode='contain'className = "article_img"/>
                          </div>
                          <div className = "text_container">
                            <h2> Title Title </h2>
                            <p> Date Published </p>
                            <div className = "button">
                              <h3> Read More </h3>
                            </div>
                          </div>
                        </div>



                        <div className = "article">
                          <div className = "dark" > </div>
                          <div className = "image_container">
                            <img src={process.env.PUBLIC_URL + './pub_mini.png'} alt="wit logo"
                            resizeMode='contain'className = "article_img"/>
                          </div>
                          <div className = "text_container">
                            <h2> Title Title </h2>
                            <p> Date Published </p>
                            <div className = "button">
                              <h3> Read More </h3>
                            </div>
                          </div>
                        </div>


                      </div>

                </div>
            </div>

        );
    }
}

export default Publications;
