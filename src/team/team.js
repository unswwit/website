import React, { useEffect, useState } from "react";
import "./team.css";

import PageHeader from "../header";
import Execs from "./execs";
import SubCom from "./subcom";

import database from "../config/firebase";
import Timeline from "./Timeline";

function OurTeam() {
  const db = database.firestore();
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
      .orderBy("index")
      .get()
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
  
      <footer>
        <div className="footer_area" style={{ marginTop: "8vw" }} />
      </footer>
    </div>
  );
}

export default OurTeam;
