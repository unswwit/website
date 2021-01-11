import React, { useEffect, useState } from "react";
import "./team.css";

import PageHeader from "../header";
import Execs from "./execs";
import SubCom from "./subcom";

import { firebase } from "../config/firebase";
import Timeline from "./Timeline";

function OurTeam() {
  const db = firebase.firestore();
  const sectors = ["Events", "Externals", "Human Resources", "Education", "Marketing", "Information Technology"];
  const [execs, setExecs] = useState([]);
  const [subcommittee, setSubcommittee] = useState([]);
  const [year, setYear] = useState("2021");
  const execToClassName = {
    2021 :"exec_2021_img",
    2020: {
      "Elicia Au Duong": "eli_img",
      "Gabrielle Younes": "gab_img",   
      "Vivian Wong": "vivw_img",   
    }
  }

  const handleYear = (newYear) => {
    setYear(newYear);
  };

  useEffect(() => {
    // set exec team
    db
      .collection("teams")
      .doc(year)
      .collection("execs")
      .orderBy("index").get()
      .then(querySnapshot => {
        let execsTemp = [];
        querySnapshot.forEach(doc => {          
          let member = doc.data();
          member["id"] = doc.id;
          execsTemp.push(member);
        });

        const result = execsTemp.reduce(function(result, _, index, execsTemp) {
          if (index % 2 === 0)
            result.push(execsTemp.slice(index, index + 2));
          return result;
        }, []);
        return result;
      })
      .then((result) => {
        setExecs(result);      
      });

    // set subcommittee team
    db
      .collection("teams")
      .doc(year)
      .collection("subcommittee")
      .get()
      .then(querySnapshot => {
        let subcomTemp = [];
        querySnapshot.forEach((doc) => {
          let member = doc.data();
          member["id"] = doc.id;
          subcomTemp.push(member);
        });
        return subcomTemp;
      })
      .then((result) => {
        setSubcommittee(result);      
      });
  }, [db, year]);

  return (
    <div>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/2021-team-header.jpg" title="Meet Our Team" />

      <Timeline updateYear={handleYear} />
      <div className="profile_section_heading">
        <h2 className="team-heading">OUR {year} EXECUTIVE TEAM</h2>
      </div>

      {/* Exec section */}
      <div className="all_execs_section">
        <div className="exec_row">
          {execs.map((row, index) => {
            return <div key={index} className="exec_row">
              {row.map((exec) => {              
                return <Execs
                  key={exec.id}
                  imgUrl={`/potraits/${year}-exec/${exec.img}`}
                  name={exec.name}
                  className={year === "2020" ? execToClassName[year][exec.name] : execToClassName[year]}
                  position={exec.position}
                  degree={exec.degree}
                  year={exec.year}
                  linkedin={exec.linkedin}
                  fb={exec.facebook}
                  email={exec.email}
                />
              })}
            </div>
          })}  
        </div> 
      </div>

      {subcommittee.length ?
        <>
          <h2
            className="team-heading"
            style={{ marginTop: "2vw", paddingBottom: "5px" }}
          >
          OUR {year} SUBCOMMITTEE TEAM
          </h2>
          <div className="subcom_section">
            {sectors.map((sector) => {
              return <div key={sector} >
                <h3 className="subcom-type">{sector} Team</h3>
                {subcommittee
                  .filter((member) => member.team === sector)
                  .map((member) => {         
                    return  <SubCom 
                      key={member.id}
                      name={member.name} 
                      degree={member.degree}
                      year={member.year}
                    />
                  })}  
              </div>     
            })}   
          </div>
        </>
        : null}
      {/* Exec section */}
      {/* <div className="all_execs_section">
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
      </div>*/}

      <footer>
        <div className="footer_area" style={{ marginTop: "8vw" }} />
      </footer>
    </div>
  );
}

export default OurTeam;
