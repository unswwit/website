import React from 'react';
import PageHeader from '.././header';
import './contactUs.css';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/contact-header-1.png" title="Contact Us" />
        <div className="form">
          <h2 class="inquiry">Send Through a General Inquiry</h2>
          <div className="formRight">
            <img
              src={process.env.PUBLIC_URL + '/contact-image.png'}
              P
              width="90%"
              height="400px"
              className="centre"
              alt="contact us"
              resizeMode="contain"
            />
          </div>

          <div className="formLeft">
            <form action="mailto:exec@unswwit.com" method="post" enctype="text/plain" className="formStyle">
              <br />
              <input className="formInput" type="text" name="name" placeholder="Full Name" />
              <br />
              <br />
              <input className="formInput" type="text" name="mail" placeholder="Email Address" />
              <br />
              <br />
              <textarea className="formInput" name="message" placeholder="Message" rows="5" />
              <br />
              <input type="submit" value="Submit" class="button" style={{ float: 'left' }} />
            </form>
          </div>
        </div>

        <h2 class="contact-team">CONTACT OUR TEAM</h2>
        <div className="newEmails">
          <div className="col2">
            <div className="profile2">
              <img src={process.env.PUBLIC_URL + '/pres-icon.png'} alt="pres-icon" />
              <h3> Vivian Shen </h3>
              <a href="mailto:president@unswwit.com">president@unswwit.com</a>
            </div>
            <div className="profile2">
              <img src={process.env.PUBLIC_URL + '/vp-icon.png'} alt="vp-icon" />
              <h3> Amanda Li </h3>
              <a href="mailto:vp@unswwit.com">vp@unswwit.com</a>
            </div>

            <div className="profile2">
              <img src={process.env.PUBLIC_URL + '/sec-icon.png'} alt="sec-icon" />
              <h3> Kelly Liang </h3>
              <a href="mailto:secretary@unswwit.com">secretary@unswwit.com</a>
            </div>
            <div className="profile2">
              <img src={process.env.PUBLIC_URL + '/tr-icon.png'} alt="tr-icon" />
              <h3> Elizabeth Zhong </h3>
              <a href="mailto:treasurer@unswwit.com">treasurer@unswwit.com</a>
            </div>
          </div>

          <hr class="line-break solid" width="90%" />
          <div className="col3">
            <div className="profile3">
              <img src={process.env.PUBLIC_URL + '/edu-icon.png'} alt="edu-icon" />
              <h3> Vivian Wong </h3>
              <a href="mailto:vivianwong@unswwit.com">vivianwong@unswwit.com</a>
              <a href="mailto:education@unswwit.com">education@unswwit.com</a>
            </div>
            <div className="profile3">
              <img src={process.env.PUBLIC_URL + '/ev-icon.png'} alt="ev-icon" />
              <h3> Gabrielle Younes </h3>
              <a href="mailto:gabriella@unswwit.com">gabrielle@unswwit.com</a>
              <a href="mailto:events@unswwit.com">events@unswwit.com</a>
            </div>
            <div className="profile3">
              <img src={process.env.PUBLIC_URL + '/ex-icon.png'} alt="ex-icon" />
              <h3> Rhea Thomas </h3>
              <a href="mailto:rhea@unswwit.com">rhea@unswwit.com</a>
              <a href="mailto:externals@unswwit.com">externals@unswwit.com</a>
            </div>

            <div className="profile3">
              <img src={process.env.PUBLIC_URL + '/hr-icon.png'} alt="hr-icon" />
              <h3> Alison Chin </h3>
              <a href="mailto:alison@unswwit.com">alison@unswwit.com</a>
              <a href="mailto:hr@unswwit.com">hr@unswwit.com</a>
            </div>
            <div className="profile3">
              <img src={process.env.PUBLIC_URL + '/it.png'} alt="it-icon" />
              <h3> Elicia Au Duong </h3>
              <a href="mailto:elicia@unswwit.com">elicia@unswwit.com</a>
              <a href="mailto:it@unswwit.com">it@unswwit.com</a>
            </div>
            <div className="profile3">
              <img src={process.env.PUBLIC_URL + '/mark-icon.png'} alt="mark-icon" />
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
