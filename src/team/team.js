//All necessary imports for this javascript
import React from "react";
import "./team.css";

import PageHeader from ".././header";
import Execs from "./execs";
import SubCom from "./subcom";

function OurTeam() {

  return (
    <div>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/2021-team-header.jpg" title="Meet Our Team" />

      <div className="profile_section_heading">
        <h2 className="team-heading">OUR 2021 EXECUTIVE TEAM</h2>
      </div>

      {/* 2021 Exec section */}
      <div className="all_execs_section">
        <div className="exec_row">
          <Execs
            imgUrl="/potraits/2021-exec/viv_w.jpg"
            name="Vivian Wong"
            className="exec_2021_img"
            position="Co-President"
            degree="Commerce/Actuarial Science"
            year="3rd"
            linkedin="vivian-wong-75511b169"
            fb="profile.php?id=100027563555266"
            email="vivianwong@unswwit.com"
          />

          <Execs
            imgUrl="/potraits/2021-exec/gabbie.jpg"
            name="Gabrielle Younes"
            className="exec_2021_img"
            position="Co-President"
            degree="Bioinformatic Engineering/Advanced Science"
            year="3rd"
            linkedin="gabrielle-younes-a05a70182"
            fb="profile.php?id=100017209069498"
            email="gabrielle@unswwit.com"
          />
        </div>

        <div className="exec_row">
          <Execs
            imgUrl="/potraits/2021-exec/victoria.jpg"
            name="Victoria Yu"
            className="exec_2021_img"
            position="General Secretary"
            degree="Information Systems"
            year="3rd"
            linkedin="victoria-yu-7a09001a3"
            fb="victoria.yu.75"
            email="victoriayu@unswwit.com"
          />

          <Execs
            imgUrl="/potraits/2021-exec/connie.jpg"
            name="Connie Shi"
            className="exec_2021_img"
            position="Treasurer"
            degree="Commerce/Information Systems"
            year="4th"
            linkedin="connie-shi-6b709915b"
            fb="connie.shi3"
            email="connie@unswwit.com"
          />
        </div>

        <div className="exec_row">
          <Execs
            imgUrl="/potraits/2021-exec/jane.jpg"
            name="Jane Wang"
            className="exec_2021_img"
            position="Co-events Executive"
            degree="Commerce/Information Systems"
            year="3rd"
            linkedin="jane-wang-a993b2168"
            fb="jauewang"
            email="jane@unswwit.com"
          />

          <Execs
            imgUrl="/potraits/2021-exec/nishmi.jpg"
            name="Nishmi Kapoor"
            className="exec_2021_img"
            position="Co-events Executive"
            degree="Commerce and Advanced Science"
            year="3rd"
            linkedin="nishmikapoor"
            fb="nishmi.kapoor"
            email="nishmi@unswwit.com"
          />
        </div>

        <div className="exec_row">
          <Execs
            imgUrl="/potraits/2021-exec/srija.jpg"
            name="Srija Mukherjee"
            className="exec_2021_img"
            position="Externals Executive"
            degree="Software Engineering"
            year="2nd"
            linkedin="srija-mukherjee"
            fb="srija.mukherjee.587"
            email="srjia@unswwit.com"
          />

          <Execs
            imgUrl="/potraits/2021-exec/claire.jpg"
            name="Claire Yu"
            className="exec_2021_img"
            position="Human Resources Executive"
            degree="Commerce/Information Systems"
            year="2rd"
            linkedin="claire-yu-4bb2791a2"
            fb="profile.php?id=100017301277446"
            email="claire@unswwit.com"
          />
        </div>

        <div className="exec_row">
          <Execs
            imgUrl="/potraits/2021-exec/alana.jpg"
            name="Alana Hua"
            className="exec_2021_img"
            position="Information Technology Executive"
            degree="Software/Biomedical Engineering"
            year="4th"
            linkedin="alana-hua-43a06b15a"
            fb="alana.hua.3"
            email="alana@unswwit.com"
          />

          <Execs
            imgUrl="/potraits/2021-exec/kim.jpg"
            name="Vy Kim Nguyen"
            className="exec_2021_img"
            position="Marketing Executive"           
            degree="Bioinformatics/Biomedical Engineering"         
            year="3rd"
            linkedin="vykim-nguyen"
            fb="kim.vy.3"
            email="kim@unswwit.com"
          />
        </div>

        <div className="exec_row">
          <Execs
            imgUrl="/potraits/2021-exec/georgie.jpg"
            name="Georgie Mansfield"
            className="exec_2021_img"
            position="Education Executive"
            degree="Chemical Engineering and Materials Science"
            year="3rd"
            linkedin="georgina-mansfield"
            fb="georgie.mansfield.9"
            email="georgie@unswwit.com"
          />
        </div>       
      </div>

      <div className="profile_section_heading">
        <h2 className="team-heading">OUR 2020 EXECUTIVE TEAM</h2>
      </div>

      {/* Exec section */}
      <div className="all_execs_section">
        <div className="exec_row">
          <Execs
            imgUrl="/potraits/viv.jpg"
            name="Vivian Shen"
            position="President"
            degree="Data Science"
            year="3rd"
            linkedin="vivian-shen-046110"
            fb="vivian.shen.71619"
            email="vivianshen046110@gmail.com"
          />

          <Execs
            imgUrl="/potraits/amanda.JPG"
            name="Amanda Li"
            position="Vice President"
            degree="Software Engineering/Biomedical Engineering"
            year="3rd"
            linkedin="amanda-li-031199"
            fb="amaandarin"
            email="amandali031199@gmail.com"
          />
        </div>

        <div className="exec_row">
          <Execs
            imgUrl="/potraits/kelly.jpg"
            name="Kelly Liang"
            position="General Secretary"
            degree="Commerce/Information System"
            year="2nd"
            linkedin="kelly-liang-03877017b"
            fb="keleriter"
            email="kellyliang156@gmail.com"
          />

          <Execs
            imgUrl="/potraits/elizabeth.JPG"
            name="Elizabeth Zhong"
            position="Treasurer"
            degree="Software Engineering"
            year="3rd"
            linkedin="elizabeth-zhong-561806160"
            fb="elizabethzhong2"
            email="elizabeth.zhong@hotmail.com"
          />
        </div>

        <div className="exec_row">
          <Execs
            imgUrl="/potraits/gabby.jpg"
            name="Gabrielle Younes"
            className="gab_img"
            position="Events Executive"
            degree="Bioinformatic Engineering/Advanced Science"
            year="2nd"
            linkedin="gabrielle-younes-a05a70182"
            fb="profile.php?id=100017209069498"
            email="gabrielle@unswwit.com"
          />

          <Execs
            imgUrl="/potraits/rhea.jpg"
            name="Rhea Thomas"
            position="Externals Executive"
            degree="Information Systems"
            year="2nd"
            linkedin="rhea-t-2400b113a"
            fb="profile.php?id=100013567812434"
            email="rhea@unswwit.com"
          />
        </div>

        <div className="exec_row">   
          <Execs
            imgUrl="/potraits/alison.jpg"
            name="Alison Chin"
            position="Human Resources Executive"
            degree="Information Systems"
            year="3rd"
            linkedin="alison-chin-958581148"
            fb="alison.chin.52"
            email="alison@unswwit.com"
          />

          <Execs
            imgUrl="/potraits/elicia.jpg"
            name="Elicia Au Duong"
            className="eli_img"
            position="Information Technology Executive"
            degree="Commerce/Computer Science"
            year="2nd"
            linkedin="eliciaauduong"
            fb="eliciaauduong"
            email="elicia@unswwit.com"
          />
        </div>

        <div className="exec_row">   
          <Execs
            imgUrl="/potraits/felicia.jpg"
            name="Felicia Ee"
            position="Marketing Executive"
            degree="Commerce/Software Engineering"
            year="2nd"
            linkedin=""
            fb="profile.php?id=100015374733436"
            email="felicia@unswwit.com"
          />

          <Execs
            imgUrl="/potraits/vivw.jpg"
            name="Vivian Wong"
            className="vivw_img"
            position="Education Executive"
            degree="Commerce/Actuarial Science"
            year="2nd"
            linkedin="vivian-wong-75511b169"
            fb="profile.php?id=100027563555266"
            email="vivianwong@unswwit.com"
          />
        </div>
      </div>      

      {/* Subcommittee section */}
      <h2
        className="team-heading"
        style={{ marginTop: "2vw", paddingBottom: "5px" }}
      >
        OUR 2020 SUBCOMMITTEE TEAM
      </h2>
      <div className="subcom_section">
        <h3 className="subcom-type">Education Team</h3>
        <SubCom name="Elisa Sanjurjo" degree="Commerce/Science" year="4th" />

        <SubCom
          name="Georgie Mansfield"
          degree="Chemical Engineering/Materials Science"
          year="2nd"
        />

        <SubCom
          name="Victoria Ruming"
          degree="Mechatronic Engineering/Biomedical Engineering"
          year="2nd"
        />

        <h3 className="subcom-type">Events Team</h3>
        <SubCom
          name="Ariane Notaras"
          degree="Commerce(Finance)/Information Systems"
          year="2nd"
        />

        <SubCom
          name="Jane Wang"
          degree="Commerce/Information Systems"
          year="2nd"
        />

        <SubCom
          name="Justin Clarke"
          degree="Data Science and Decisions"
          year="2nd"
        />

        <SubCom
          name="Nishmi Kapoor"
          degree="Commerce/Advanced Sciences"
          year="2nd"
        />

        <SubCom
          name="Shirlee Salaria"
          degree="Commerce/Information Systems"
          year="2nd"
        />

        <h3 className="subcom-type">Externals Team</h3>
        <SubCom name="Angeni Bai" degree="Computer Science" year="1st" />

        <SubCom name="Rue Teh" degree="Software Engineering" year="2nd" />

        <SubCom
          name="Srija Mukherjee"
          degree="Software Engineering"
          year="1st"
        />

        <h3 className="subcom-type">Human Resources Team</h3>
        <SubCom
          name="Claire Yu"
          degree="Commerce/Information System"
          year="1st"
        />

        <SubCom name="Victoria Yu" degree="Information Systems" year="2nd" />

        <h3 className="subcom-type">Information Technology Team</h3>
        <SubCom
          name="Alana Hua"
          degree="Software Engineering/Biomedical Engineering"
          year="3rd"
        />

        <SubCom name="Chelsea Chaffey" degree="Computer Science" year="1st" />

        <SubCom
          name="Gianfelix Goenawan"
          degree="Computer Science/Commerce"
          year="2nd"
        />

        <SubCom
          name="Lily Yang"
          degree="Computer Science/Environmental Engineering"
          year="1st"
        />

        <h3 className="subcom-type">Marketing Team</h3>
        <SubCom
          name="Anisa Islam"
          degree="Media in Communications and Journalism"
          year="1st"
        />

        <SubCom
          name="Connie Shi"
          degree="Commerce/Information Systems"
          year="3rd"
        />

        <SubCom
          name="Vy Kim Nguyen"
          degree="Bioinformatics/Biomedical Engineering"
          year="2nd"
        />
      </div>

      <footer>
        <div className="footer_area" style={{ marginTop: "8vw" }} />
      </footer>
    </div>
  );
}

export default OurTeam;
