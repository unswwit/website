import React, { useEffect, useState } from "react";
import "./team.css";

import PageHeader from "../header";
import Execs from "./execs";
import SubCom from "./subcom";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Timeline from "../Timeline";

function OurTeam() {
  const sectors = ["Events", "Externals", "Human Resources", "Education", "Marketing", "Information Technology"];
  const [execs, setExecs] = useState([]);
  const [subcommittee, setSubcommittee] = useState([]);
  const [year, setYear] = useState("2021");
  const [loading, setLoading] = useState(true);
  const execToClassName = {
    2021 :"exec_2021_img",
    2020: {
      "Elicia Au Duong": "eli_img",
      "Gabrielle Younes": "gab_img",   
      "Vivian Wong": "vivw_img",   
    }
  }

  const marks = [
    {
      value: 100,
      scaledValue: 2021,
      label: "2021"
    },
    {
      value: 75,
      scaledValue: 2020,
      label: "2020"
    },
    {
      value: 50,
      scaledValue: 2019,
      label: "2019"
    },
    {
      value: 25,
      scaledValue: 2018,
      label: "2018"
    },
    {
      value: 0,
      scaledValue: 2017,
      label: "2017"
    },
  ];

  const valueToYear = {
    0: "2017",
    25: "2018",
    50: "2019",
    75: "2020",
    100: "2021"
  }

  const handleYear = (newYear) => {
    setYear(newYear);
  };

  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        // add in execs
        let tempExecs = googleData[`${year} execs`]["elements"];
        const result = tempExecs.reduce(function(result, _, index, tempExecs) {
          if (index % 2 === 0)
            result.push(tempExecs.slice(index, index + 2));
          return result;
        }, []);
        setExecs(result);

        // add subcommittee
        if (googleData.hasOwnProperty(`${year} subcommittee`)) {
          setSubcommittee(googleData[`${year} subcommittee`]["elements"]);
        } else {
          setSubcommittee([]);
        }
        setLoading(false);
      },
      simpleSheet: false
    })
  }, [year]);

  return (
    <div>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/2021-team-header.jpg" title="Meet Our Team" />

      {/* Timeline */}
      <Timeline valueToYear={valueToYear} marks={marks} updateYear={handleYear} />
      <div id="teamLoadingContainer">
        {loading && <CircularProgress
          variant="indeterminate"
          size={50}
          thickness={5}
          id="teamLoading"
        />}
      </div>
    
          
      {!loading && 
      <>
        {/* Exec section */}
        <div className="profile_section_heading">
          <h2 className="team-heading">OUR {year} EXECUTIVE TEAM</h2>
        </div>      
        
        <div className="all_execs_section">
          <div className="exec_row">
            {execs.map((row, index) => {
              return <div key={index} className="exec_row">
                {row.map((exec, index) => {              
                  return <Execs
                    key={index}
                    imgUrl={exec.img !== "" ? `/potraits/${year}-exec/${exec.img}` : ""}
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
        
        {/* Subcommittee section */}
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
                    .map((member, index) => {         
                      return  <SubCom 
                        key={index}
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
      </>
      }
      <footer>
        <div className="footer_area" style={{ marginTop: "8vw" }} />
      </footer>
    </div>
  );
}

export default OurTeam;
