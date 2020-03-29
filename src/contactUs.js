import React from 'react'

import "./contactUs.css";
import "./sponsors.css";

class ContactUs extends React.Component {
    render() {
        return (
            <div>
              <div className = 'sponsorHeader'>
                <img src={process.env.PUBLIC_URL + '/contact-header.png'} width = "100%" className="" alt="banner"
                resizeMode='contain'
                />

                <h1 class="header">Contact Us</h1>
                </div>


                    <div className = 'form'>
                      <div className = 'formLeft'>

                        <h2>Send Through a General Inquiry</h2>

                        <form action="mailto:exec@unswwit.com" method="post" enctype="text/plain" className = 'formStyle'>

                            <br/>
                            <input className = 'formInput' type="text" name="name" placeholder = "Full Name"/>
                            <br/>

                            <br/>
                            <input className = 'formInput' type="text" name="mail" placeholder = 'Email Address' />
                            <br/>

                            <br/>
                            <textarea className = 'formInput' name="message" placeholder = 'Message' rows="5"></textarea>
                            <br/>
                            <input type="submit" value="Submit" class="button" style={{float: 'left'}} />
                        </form>
                      </div>

                      <div className = 'formRight'>
                      <img src={process.env.PUBLIC_URL + '/contact-image.png'} width = "100%" className="centre"
                      alt="contact us" resizeMode='contain'
                      />
                      </div>

                    </div>

                    <div className = "newEmails">
                      <h2 style={{textAlign: 'center'}}>CONTACT OUR TEAM </h2>

                      <div className = "col2">
                        <div className = "profile2">
                          <div class = 'dot'> </div>
                          <h3> Vivian Shen </h3>
                          <a href="mailto:president@unswwit.com">president@unswwit.com</a>
                        </div>
                        <div className = "profile2">
                          <div class = 'dot'> </div>
                          <h3> Amanda Li </h3>
                          <a href="mailto:vp@unswwit.com">vp@unswwit.com</a>
                        </div>

                        <div className = "profile2">
                          <div class = 'dot'> </div>
                          <h3> Kelly Liang </h3>
                          <a href="mailto:secretary@unswwit.com">secretary@unswwit.com</a>
                        </div>
                        <div className = "profile2">
                          <div class = 'dot'> </div>
                          <h3> Elizabeth Zhong </h3>
                          <a href="mailto:treasurer@unswwit.com">treasurer@unswwit.com</a>
                        </div>
                      </div>


                      <div className = "col3">
                        <div className = "profile3">
                          <div class = 'dot'> </div>
                          <h3> Vivian Wong </h3>
                          <a href="mailto:vivianwong@unswwit.com">vivianwong@unswwit.com</a>
                          <a href="mailto:education@unswwit.com">education@unswwit.com</a>
                        </div>
                        <div className = "profile3">
                          <div class = 'dot'> </div>
                          <h3> Gabrielle Younes </h3>
                          <a href="mailto:gabriella@unswwit.com">gabrielle@unswwit.com</a>
                          <a href="mailto:events@unswwit.com">events@unswwit.com</a>
                        </div>
                        <div className = "profile3">
                          <div class = 'dot'> </div>
                          <h3> Rhea Thomas </h3>
                          <a href="mailto:rhea@unswwit.com">rhea@unswwit.com</a>
                          <a href="mailto:externals@unswwit.com">externals@unswwit.com</a>
                        </div>

                        <div className = "profile3">
                          <div class = 'dot'> </div>
                          <h3> Alison Chin </h3>
                          <a href="mailto:alison@unswwit.com">alison@unswwit.com</a>
                          <a href="mailto:hr@unswwit.com">hr@unswwit.com</a>
                        </div>
                        <div className = "profile3">
                          <div class = 'dot'> </div>
                          <h3> Elicia Au Duong </h3>
                          <a href="mailto:elicia@unswwit.com">elicia@unswwit.com</a>
                          <a href="mailto:it@unswwit.com">it@unswwit.com</a>
                        </div>
                        <div className = "profile3">
                          <div class = 'dot'> </div>
                          <h3> Felicia Ee </h3>
                          <a href="mailto:felicia@unswwit.com">felicia@unswwit.com</a>
                          <a href="mailto:marketing@unswwit.com">marketing@unswwit.com</a>
                        </div>
                      </div>
                    </div>

            </div>
        );
    }
}

export default ContactUs;
