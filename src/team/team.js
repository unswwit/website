//All necessary imports for this javascript
import React, { Component } from 'react';
import './team.css';

import PageHeader from '.././header';
import Execs from './execs';
import SubCom from './subcom';

class OurTeam extends Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/team-header-1.jpg" title="Meet Our Team" />

        <div className="profile_section_heading">
          <h2 class="team-heading">
            {`OUR 2020 EXECUTIVE TEAM`}
          </h2>
        </div>

        {/* Exec section */}
        <div className="all_execs_section">
          <div class="exec_row">
            <Execs
              imgUrl="/potraits/viv.png"
              class=""
              name="Vivian Shen"
              position="President"
              degree="Data Science"
              year="3rd"
              linkedin="vivian-shen-046110"
              fb="vivian.shen.71619"
              email="president"
            />

            <Execs
              imgUrl="/potraits/amanda.JPG"
              class=""
              name="Amanda Li"
              position="Vice President"
              degree="Software Engineering/Biomedical Engineering"
              year="3rd"
              linkedin="amanda-li-031199"
              fb="amaandarin"
              email="vp"
            />
          </div>

          <div className="exec_row">
            <Execs
              imgUrl="/potraits/kelly.png"
              class=""
              name="Kelly Liang"
              position="General Secretary"
              degree="Commerce/Information System"
              year="2nd"
              linkedin="kelly-liang-03877017b"
              fb="keleriter"
              email="secretary"
            />

            <Execs
              imgUrl="/potraits/elizabeth.JPG"
              name="Elizabeth Zhong"
              class=""
              position="Treasurer"
              degree="Software Engineering"
              year="3rd"
              linkedin="elizabeth-zhong-561806160"
              fb="elizabethzhong2"
              email="treasurer"
            />
          </div>

          <div class="exec_row">
            <Execs
              imgUrl="/potraits/vivw.jpg"
              name="Vivian Wong"
              class="vivw_img"
              position="Education Executive"
              degree="Commerce/Actuarial Science"
              year="2nd"
              linkedin="vivian-wong-75511b169"
              fb="profile.php?id=100027563555266"
              email="vivianwong"
            />

            <Execs
              imgUrl="/potraits/gabby.jpg"
              name="Gabrielle Younes"
              class="gab_img"
              position="Events Executive"
              degree="Bioinformatic Engineering/Advanced Science"
              year="2nd"
              linkedin="gabrielle-younes-a05a70182"
              fb="profile.php?id=100017209069498"
              email="gabrielle"
            />
          </div>

          <div class="exec_row">
            <Execs
              imgUrl="/potraits/rhea.png"
              name="Rhea Thomas"
              class=""
              position="Externals Executive"
              degree="Information Systems"
              year="2nd"
              linkedin="rhea-t-2400b113a"
              fb="profile.php?id=100013567812434"
              email="rhea"
            />

            <Execs
              imgUrl="/potraits/alison.png"
              name="Alison Chin"
              class=""
              position="Human Resources Executive"
              degree="Information Systems"
              year="3rd"
              linkedin="alison-chin-958581148"
              fb="alison.chin.52"
              email="alison"
            />
          </div>

          <div class="exec_row">
            <Execs
              imgUrl="/potraits/elicia.jpg"
              name="Elicia Au Duong"
              class="eli_img"
              position="Information Technology Executive"
              degree="Commerce/Computer Science"
              year="2nd"
              linkedin="eliciaauduong"
              fb="eliciaauduong"
              email="elicia"
            />

            <Execs
              imgUrl="/potraits/felicia.png"
              name="Felicia Ee"
              class=""
              position="Marketing Executive"
              degree="Commerce/Software Engineering"
              year="2nd"
              linkedin=""
              fb="profile.php?id=100015374733436"
              email="felicia"
            />
          </div>
        </div>

        {/* Subcommittee section */}
        <h2 class="team-heading" style={{ marginTop: '2vw', paddingBottom: '5px' }}>
					OUR 2020 SUBCOMMITTEE TEAM
        </h2>
        <div className="subcom_section">
          <h3 class="subcom-type">Education Team</h3>
          <SubCom name="Elisa Sanjurjo" degree="Commerce/Science" year="4th" />

          <SubCom name="Georgie Mansfield" degree="Chemical Engineering/Materials Science" year="2nd" />

          <SubCom name="Victoria Ruming" degree="Mechatronic Engineering/Biomedical Engineering" year="2nd" />

          <h3 class="subcom-type">Events Team</h3>
          <SubCom name="Ariane Notaras" degree="Commerce(Finance)/Information Systems" year="2nd" />

          <SubCom name="Jane Wang" degree="Commerce/Information Systems" year="2nd" />

          <SubCom name="Justin Clarke" degree="Data Science and Decisions" year="2nd" />

          <SubCom name="Nishmi Kapoor" degree="Commerce/Advanced Sciences" year="2nd" />

          <SubCom name="Shirlee Salaria" degree="Commerce/Information Systems" year="2nd" />

          <h3 class="subcom-type">Externals Team</h3>
          <SubCom name="Angeni Bai" degree="Computer Science" year="1st" />

          <SubCom name="Rue Teh" degree="Software Engineering" year="2nd" />

          <SubCom name="Srija Mukherjee" degree="Software Engineering" year="1st" />

          <h3 class="subcom-type">Human Resources Team</h3>
          <SubCom name="Claire Yu" degree="Commerce/Information System" year="1st" />

          <SubCom name="Victoria Yu" degree="Information Systems" year="2nd" />

          <h3 class="subcom-type">Information Technology Team</h3>
          <SubCom name="Alana Hua" degree="Software Engineering/Biomedical Engineering" year="3rd" />

          <SubCom name="Chelsea Chaffey" degree="Computer Science" year="1st" />

          <SubCom name="Gianfelix Goenawan" degree="Computer Science/Commerce" year="2nd" />

          <SubCom name="Lily Yang" degree="Computer Science/Environmental Engineering" year="1st" />

          <h3 class="subcom-type">Marketing Team</h3>
          <SubCom name="Anisa Islam" degree="Media in Communications and Journalism" year="1st" />

          <SubCom name="Connie Shi" degree="Commerce/Information Systems" year="3rd" />

          <SubCom name="Vy Kim Nguyen" degree="Bioinformatics/Biomedical Engineering" year="2nd" />
        </div>

        <footer>
          <div className="footer_area" style={{ marginTop: '8vw' }} />
        </footer>
      </div>
    );
  }
}
export default OurTeam;
