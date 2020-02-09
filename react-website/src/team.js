//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./team.css";

class OurTeam extends Component {
  render() {
    // TODO: Make Profiile Component, and use includes rather hardcoded html
    return (
      <div>
        <div className="crop">
        {/* Cover Photo */}
          <img
            src={process.env.PUBLIC_URL + "/potraits/group.png"}
            className="banner"
            alt="banner"
            resizeMode="contain"

          />
        </div>

        {/* Main Title, and Subtitle Area */}
        <div className="title_area">
          <h1 className="centre">Meet Our Team!</h1>
          <p className="subheader centre">
            {`
                        2020 Executive Team
                    `}
          </p>
        </div>
        <div className="all_execs_section">

        {/* Row of Profiles */}
        <div className="section">
          {/* Individual Profile of an Exec */}
          <div>
            <div class="profile">
              <div class="profile_crop">
                <img
                  src={process.env.PUBLIC_URL + "/potraits/viv.png"}
                  className="profile_img"
                  alt="vivian-shen"
                  resizeMode="contain"
                />
              </div>
              {/* Profile Details */}
              <div className="profile_details">
                <p className="profile_text_name">Vivian Shen</p>
                <p className="profile_text_position">President</p>
                <p className="profile_degree">Data Science, 3rd Year</p>
                {/* Icon Bar shoulddd be a horizontal row of icons */}
                <div classname="icon_bar">
                  {/* Linkedin Icon - target=_blank opens in new tab */}
                  <a
                    href="https://www.linkedin.com/in/vivian-shen-046110/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* LinkedIn Icon Img */}
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                      alt="LinkedIn Icon"
                    />
                  </a>

                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/vivian.shen.71619/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                      alt="Facebook Icon"
                    />
                  </a>
                  <a
                    href="mailto:president@unswwit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_email.png"}
                      alt="Email Icon"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="profile">
              <div class="profile_crop">
                <img
                  src={process.env.PUBLIC_URL + "/potraits/amanda.JPG"}
                  className="profile_img"
                  alt="banner"
                  resizeMode="contain"
                />
              </div>

              <div className="profile_details">
                <p className="profile_text_name">Amanda Li</p>
                <p className="profile_text_position">Vice President</p>
                <p className="profile_degree">Software Engineer, 3rd Year</p>

                {/* Icon Bar shoulddd be a horizontal row of icons */}
                <div classname="icon_bar">
                  {/* Linkedin Icon - target=_blank opens in new tab */}
                  <a
                    href="https://www.linkedin.com/in/amanda-li-031199/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* LinkedIn Icon Img */}
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                      alt="LinkedIn Icon"
                    />
                  </a>

                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/amaandarin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                      alt="Facebook Icon"
                    />
                  </a>

                  <a
                    href="mailto:vp@unswwit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_email.png"}
                      alt="Email Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div>
          <div class="profile">
            <div class="profile_crop">
              <img
                src={process.env.PUBLIC_URL + "/potraits/kelly.png"}
                className="profile_img"
                alt="kelly-liang"
                resizeMode="contain"
              />
            </div>
            {/* Profile Details */}
            <div className="profile_details">
              <p className="profile_text_name">Kelly Liang</p>
              <p className="profile_text_position">General Secretary</p>
              <p className="profile_degree">Commerce and Information System, 2nd Year</p>
              {/* Icon Bar shoulddd be a horizontal row of icons */}
              <div classname="icon_bar">
                {/* Linkedin Icon - target=_blank opens in new tab */}
                <a
                  href="https://www.linkedin.com/in/kelly-liang-03877017b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* LinkedIn Icon Img */}
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                    alt="LinkedIn Icon"
                  />
                </a>

                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/keleriter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                    alt="Facebook Icon"
                  />
                </a>
                <a
                  href="mailto:secretary@unswwit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_email.png"}
                    alt="Email Icon"
                  />
                </a>
              </div>
            </div>
            {/* profile closing div */}
          </div>

          <div class="profile">
            <div class="profile_crop">
              <img
                src={process.env.PUBLIC_URL + "/potraits/elizabeth.JPG"}
                className="profile_img"
                alt="elizabeth-zhong"
                resizeMode="contain"
              />
            </div>

            <div className="profile_details">
              <p className="profile_text_name">Elizabeth Zhong</p>
              <p className="profile_text_position">Treasurer</p>
              <p className="profile_degree">Software Engineer, 3rd Year</p>

              {/* Icon Bar shoulddd be a horizontal row of icons */}
              <div classname="icon_bar">
                {/* Linkedin Icon - target=_blank opens in new tab */}
                <a
                  href="https://www.linkedin.com/in/elizabeth-zhong-561806160/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* LinkedIn Icon Img */}
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                    alt="LinkedIn Icon"
                  />
                </a>

                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/elizabethzhong2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                    alt="Facebook Icon"
                  />
                </a>

                <a
                  href="mailto:treasurer@unswwit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + "/icon_email.png"}
                    alt="Email Icon"
                  />
                </a>
              </div>

            </div>
            {/* profile closing div */}
          </div>
        {/* kelly and liz div */}
        </div>
        {/* section div */}
        </div>

        
        <div className="section_subcommittee">
        <table>
          <tr>
            <th>
            <div className="profile_subcommittee"> 
              <div className="profile_crop">
                <img
                  src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                  className="profile_img_subcommittee_version"
                  alt="vivian-wong"
                  resizeMode="contain"
                />
              </div>
              <div className="profile_details_subcommittee">
                <p className="profile_text_name">Vivian Wong</p>
                <p className="profile_text_position">Education Executive</p>
                <p className="profile_degree">Commerce/Acturial Science, 2nd Year</p>

                <p>
                {/* Icon Bar shoulddd be a horizontal row of icons */}
                <div classname="icon_bar">
                  {/* Linkedin Icon - target=_blank opens in new tab */}
                  <a
                    href="https://www.linkedin.com/in/vivian-wong-75511b169/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* LinkedIn Icon Img */}
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                      alt="LinkedIn Icon"
                    />
                  </a>

                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/lovefromviv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                      alt="Facebook Icon"
                    />
                  </a>

                  <a
                    href="mailto:vivianwong@unswwit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/icon_email.png"}
                      alt="Email Icon"
                    />
                  </a>
                </div>
                </p>
              </div>
            </div>
            </th>

            <th>

            <div className="profile_subcommittee"> 
              <div className="profile_crop">
                <img
                  src={process.env.PUBLIC_URL + "/potraits/gabby.jpg"}
                  className="profile_img_subcommittee_version"
                  alt="gabrielle"
                  resizeMode="contain"
                />
              </div>
              <div className="profile_details_subcommittee">
                <p className="profile_text_name">Gabrielle Younes</p>
                <p className="profile_text_position">Events Executive</p>
                <p className="profile_degree">Bioinformatic Engineering/Advanced Science, 2nd Year</p>

                <p>
                {/* Icon Bar shoulddd be a horizontal row of icons */}
                <div classname="icon_bar">
                  {/* Linkedin Icon - target=_blank opens in new tab */}
                    <a
                      href="https://www.linkedin.com/in/gabrielle-younes-a05a70182/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* LinkedIn Icon Img */}
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                        alt="LinkedIn Icon"
                      />
                    </a>

                    {/* Facebook Icon */}
                    <a
                      href="https://www.facebook.com/profile.php?id=100017209069498"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                        alt="Facebook Icon"
                      />
                    </a>

                    <a
                      href="mailto:gabrielle@unswwit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Email Icon"
                      />
                    </a>
                  </div>
                </p>
              </div>
            </div>
            </th>
          </tr>
          <tr>

            <th>
            <div className="profile_subcommittee"> 
              <div className="profile_crop">
                <img
                  src={process.env.PUBLIC_URL + "/potraits/rhea.png"}
                  className="profile_img_subcommittee_version"
                  alt="rhea-thomas"
                  resizeMode="contain"
                />
              </div>
              <div className="profile_details_subcommittee">
                <p className="profile_text_name">Rhea Thomas</p>
                <p className="profile_text_position">Externals Executive</p>
                <p className="profile_degree">Information Systems, 2nd Year</p>
                <p>
                {/* Icon Bar shoulddd be a horizontal row of icons */}
                  <div classname="icon_bar">
                    {/* Linkedin Icon - target=_blank opens in new tab */}
                    <a
                      href="https://www.linkedin.com/in/rhea-t-2400b113a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* LinkedIn Icon Img */}
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                        alt="LinkedIn Icon"
                      />
                    </a>

                    {/* Facebook Icon */}
                    <a
                      href="https://www.facebook.com/profile.php?id=100013567812434"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                        alt="Facebook Icon"
                      />
                    </a>
                    <a
                      href="mailto:rhea@unswwit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Email Icon"
                      />
                    </a>
                  </div>
                </p>
              </div>
            </div>
            </th>

            <th>
            <div className="profile_subcommittee"> 
              <div className="profile_crop">
                <img
                  src={process.env.PUBLIC_URL + "/potraits/alison.png"}
                  className="profile_img_subcommittee_version"
                  alt="alison-chin"
                  resizeMode="contain"
                />
              </div>
              <div className="profile_details_subcommittee">
                <p className="profile_text_name">Alision Chin</p>
                <p className="profile_text_position">Human Resources Executive</p>
                <p className="profile_degree">Information Systems, 3rd Year</p>

                <p>
                  {/* Icon Bar shoulddd be a horizontal row of icons */}
                  <div classname="icon_bar">
                    {/* Linkedin Icon - target=_blank opens in new tab */}
                    <a
                      href="https://www.linkedin.com/in/alison-chin-958581148/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* LinkedIn Icon Img */}
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                        alt="LinkedIn Icon"
                      />
                    </a>

                    {/* Facebook Icon */}
                    <a
                      href="https://www.facebook.com/alison.chin.52"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                        alt="Facebook Icon"
                      />
                    </a>

                   <a
                      href="mailto:alison@unswwit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Email Icon"
                      />
                    </a>
                  </div>
                </p>
              </div>
            </div>
            </th>
          </tr>

          <tr>
          <th>
            <div className="profile_subcommittee"> 
              <div className="profile_crop">
                <img
                  src={process.env.PUBLIC_URL + "/potraits/felicia.png"}
                  className="profile_img_subcommittee_version"
                  alt="felicia-ee"
                  resizeMode="contain"
                />
              </div>

              <div className="profile_details_subcommittee">
                <p className="profile_text_name">Felicia Ee</p>
                <p className="profile_text_position">Marketing Executive</p>
                <p>Commerce/Computer Science, 2nd Year</p>

                <p>
                {/* Icon Bar shoulddd be a horizontal row of icons */}
                  <div classname="icon_bar">
                    {/* Linkedin Icon - target=_blank opens in new tab */}
                    <a
                      href="https://www.linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* LinkedIn Icon Img */}
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                        alt="LinkedIn Icon"
                      />
                    </a>

                    {/* Facebook Icon */}
                    <a
                      href="https://www.facebook.com/profile.php?id=100015374733436"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                        alt="Facebook Icon"
                      />
                    </a>

                    <a
                      href="mailto:felicia@unswwit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Email Icon"
                      />
                    </a>
                  </div>
                </p>
              </div>
            </div>
            </th>
            <th>
            <div className="profile_subcommittee"> 
              <div className="profile_crop">
                <img
                  src={process.env.PUBLIC_URL + "/potraits/elicia.jpg"}
                  className="profile_img_subcommittee_version"
                  alt="elicia"
                  resizeMode="contain"
                />
              </div>
              <div className="profile_details_subcommittee">
                <p className="profile_text_name">Elicia Au Dong</p>
                <p className="profile_text_position">IT Executive</p>
                <p>Commerce/Computer Science, 2nd Year</p>

                <p>
                {/* Icon Bar shoulddd be a horizontal row of icons */}
                  <div classname="icon_bar">
                    {/* Linkedin Icon - target=_blank opens in new tab */}
                    <a
                      href="https://www.linkedin.com/in/eliciaauduong/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* LinkedIn Icon Img */}
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_linkedin.png"}
                        alt="LinkedIn Icon"
                      />
                    </a>

                    {/* Facebook Icon */}
                    <a
                      href="https://www.facebook.com/eliciacauduong/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "/icon_facebook.png"}
                        alt="Facebook Icon"
                      />
                    </a>

                    <a
                      href="mailto:elicia@unswwit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <img
                          className="icon"
                          src={process.env.PUBLIC_URL + "/icon_email.png"}
                          alt="Email Icon"
                        />
                      </a>
                  </div>
                </p>
              </div>  
            </div>
            </th>
          {/* </div> */}
          </tr>
          </table>
        </div>
        
        
      </div>
      <footer>
        <div className="footer_area"></div>
        </footer>

{/* the very last diff */}
      </div>
      
    );
  }
}
export default OurTeam;
