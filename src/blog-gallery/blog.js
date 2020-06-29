//All necessary imports for this javascript
import React, { Component } from "react";
import "../style.css";
import "./blog.css";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
        <div>

            {/*Start of Header*/}
            <div class="coverPhoto">
                <div class="title">
                    <h1>Blog Posts</h1>
                </div>
            </div>
            {/*End of Header*/}

            {/*Start of blog posts*/}

            {/*blog post 9*/}
            <Link to="/blog/9" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "10vw", marginBottom: "5vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            {/*TO BE CHANGED */}
                            <img src={process.env.PUBLIC_URL + "/blog-covers/09-procrastinating.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                What Are You REALLY Procrastinating?
                                </div>
                                <div class="date">29/06/2020</div>
                                <div class="subheading">Inspired by Tim Urban’s TED Talk, 
                                we look at challenging procrastination, and how it really exists in all of us, 
                                even the non-procrastinators.</div>
                            </div>
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/georgie.jpg"}
                                    className="profile_img vivw_img"
                                    alt="Georgie Mansfield"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Georgie Mansfield</div>

                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>

            {/*blog post 8*/}
            <Link to="/blog/8" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "5vw", marginBottom: "5vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog-covers/08-marguerite-evans-galea.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                WIT Crush Wednesday - Dr Marguerite Evans-Galea
                                </div>
                                <div class="date">24/06/2020</div>
                                <div class="subheading">Take a look at Dr Marguerite Evans-Galea's
                                journey into STEM as well as advice for students who are interested in
                                pursuing a career in STEM</div>
                            </div>
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                                    className="profile_img vivw_img"
                                    alt="vivian-wong"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Vivian Wong</div>

                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>

            {/*blog post 7*/}
            <Link to="/blog/7" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "5vw", marginBottom: "5vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog-covers/07-ace-your-hackathon.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                How To Ace Your Hackathon
                                </div>
                                <div class="date">21/06/2020</div>
                                <div class="subheading">Let's read what past WIT Hackathon winner has to say regarding their best tip to ace for your hackathon.</div>
                            </div>
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                                    className="profile_img vivw_img"
                                    alt="vivian-wong"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Vivian Wong</div>

                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>



            {/*blog post 5*/}
            <Link to="/blog/6" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "5vw", marginBottom: "5vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog-covers/06-fontaine-foxworth.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                Introducing: Fontaine Foxworth, Product Manager of Google
                                </div>
                                <div class="date">17/06/2020</div>
                                <div class="subheading">Let’s read what Fontaine had to say about her journey into tech.</div>
                            </div>
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/victoria.jpg"}
                                    className="profile_img vivw_img"
                                    alt="victoria-ruming"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Victoria Ruming</div>

                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>

            {/*blog post 5*/}
            <Link to="/blog/5" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "5vw", marginBottom: "5vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog-covers/05-salina-jantarang.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                Interview - Salina Jantarang
                                </div>
                                <div class="date">12/06/2020</div>
                                <div class="subheading">
                                    Explore Salina's research journey as PHD student in chemical engineering as well as advices about finding success in university and beyond
                                </div>
                            </div>
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                                    className="profile_img vivw_img"
                                    alt="vivian-wong"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Vivian Wong</div>

                                </td>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/victoria.jpg"}
                                    className="profile_img vic_img"
                                    alt="elisa-sanjurjo"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Victoria Ruming</div>
                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>

            {/*blog post 4*/}
            <Link to="/blog/4" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "5vw", marginBottom: "5vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog-covers/04-syin-li-tan.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                Introducing: Syin Li Tan, Consultant at Deloitte
                                </div>
                                <div class="date">10/06/2020</div>
                                <div class="subheading">
                                    Another story to cover! Gain insights from Deloite consultant Syin Li Tan on her career-related thoughts and experiences!
                                </div>
                            </div>
                            <tr>
                                <td>
                                <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                                    className="profile_img vivw_img"
                                    alt="vivian-wong"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="heading auth">Vivian Wong</div>

                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>

            {/*blog post 3*/}
            <Link to="/blog/3" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "5vw", marginBottom: "5vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog-covers/03-marissa-mayer.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                    4 Lessons From Marissa Mayer's Life in Tech
                                </div>
                                <div class="date">03/06/2020</div>
                                <div class="subheading">
                                    Take a look at 4 lessons we can learn from Marissa's amazing life, and how she continues to redefine technology as we know it today.
                                </div>
                            </div>
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/georgie.jpg"}
                                    className="profile_img vivw_img"
                                    alt="Georgie Mansfield"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Georgie Mansfield</div>

                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>

            {/*blog post 2*/}
            <Link to="/blog/2" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "5vw", marginBottom: "5vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog-covers/02-lisa-harvey-smith.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                    Introducing: Professor Lisa Harvey Smith, Astrophysicist and Australia’s First Women In STEM Ambassador
                                </div>
                                <div class="date">27/05/2020</div>
                                <div class="subheading">
                                    Explore Professor Harvey Smith’s experiences, influential nature and numerous achievements proving that women in the tech industry are NOT to be underestimated.
                                </div>
                            </div>
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/elisa.jpg"}
                                    className="profile_img vivw_img"
                                    alt="elisa-sanjurjo"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Elisa Sanjurjo</div>

                                </td>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/victoria.jpg"}
                                    className="profile_img vic_img"
                                    alt="elisa-sanjurjo"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="auth">Victoria Ruming</div>
                                </td>
                            </tr>

                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>

            {/*blog post 1*/}
            <Link to="/blog/1" style={{ textDecoration: 'none' }}>
            <div class="blog-post" style={{marginTop: "5vw", marginBottom: "10vw"}}>

                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog-covers/01-silvia-lin.png"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <div class="blog-details">
                                <div class="heading">
                                    Introducing: Silvia Lin, Senior Consultant of PWC and WIT Co-founder
                                </div>
                                <div class="date">20/05/2020</div>
                                <div class="subheading">
                                    Learn more about our co-founder and now PWC Senior Consultant Silvia Lin and her journey into technology!
                                </div>
                            </div>
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                                    className="profile_img vivw_img"
                                    alt="vivian-wong"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="heading auth">Vivian Wong</div>

                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>

            {/*End of blog posts*/}
        </div>
    );
  }
}
export default Blog;
