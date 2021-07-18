import React, { useEffect, useState } from "react";
import styles from "./team.module.css";
import PageHeader from "../components/header";
import Execs from "./execs";
import SubCom from "./subcom";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Timeline from "../components/Timeline";
import ScrollUpBtn from "../components/ScrollUpBtn";
import LoadingScreen from "../components/LoadingScreen";

function OurTeam() {
  const sectors = [
    "Events",
    "Externals",
    "Human Resources",
    "Education",
    "Marketing",
    "Information Technology",
  ];
  const [execs, setExecs] = useState([]);
  const [subcommittee, setSubcommittee] = useState([]);
  const [year, setYear] = useState("2021");
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);

  const execToClassName = {
    2021: "exec2021Img",
    2020: {
      "Elicia Au Duong": "eliImg",
      "Gabrielle Younes": "gabImg",
      "Vivian Wong": "vivwImg",
      "Alison Chin": "alisonImg",
      "Felicia Ee": "felImg",
    },
  };

  const marks = [
    {
      value: 100,
      scaledValue: 2021,
      label: "2021",
    },
    {
      value: 75,
      scaledValue: 2020,
      label: "2020",
    },
    {
      value: 50,
      scaledValue: 2019,
      label: "2019",
    },
    {
      value: 25,
      scaledValue: 2018,
      label: "2018",
    },
    {
      value: 0,
      scaledValue: 2017,
      label: "2017",
    },
  ];

  const valueToYear = {
    0: "2017",
    25: "2018",
    50: "2019",
    75: "2020",
    100: "2021",
  };

  const handleYear = (newYear) => {
    setYear(newYear);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        // add in execs
        let tempExecs = googleData["execs"]["elements"].filter(
          (exec) => exec.yearJoined === year
        );
        const result = tempExecs.reduce(function (result, _, index, tempExecs) {
          if (index % 2 === 0) result.push(tempExecs.slice(index, index + 2));
          return result;
        }, []);
        setExecs(result);

        // add subcommittee
        setSubcommittee(
          googleData["subcommittee"]["elements"].filter(
            (subcom) => subcom.yearJoined === year
          )
        );

        // stop loading
        setLoading(false);
        setSourceLoading(false);
      },
      simpleSheet: false,
    });
  }, [year]);

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {/* Cover Photo */}
          <PageHeader imgUrl="/headers/2021-team-header.jpg" title="Our Team" imageLoading={setHeaderLoading} />

          {/* Timeline */}
          <Timeline
            margin={"50px"}
            page={"teams"}
            step={25}
            valueToYear={valueToYear}
            marks={marks}
            updateYear={handleYear}
          />

          <div id={styles.teamLoadingContainer}>
            {loading && (
              <CircularProgress
                variant="indeterminate"
                size={50}
                thickness={5}
                id={styles.teamLoading}
              />
            )}
          </div>

          {!loading && (
            <>
              {/* Exec section */}
              <h2 className={styles.teamHeading} id={styles.topHeading}>
                OUR {year} EXECUTIVE TEAM
              </h2>

              <div className={styles.allExecsSection}>
                <div className={styles.execRow}>
                  {execs.map((row, index) => {
                    return (
                      <div key={index} className={styles.execRow}>
                        {row.map((exec, index) => {
                          return (
                            <Execs
                              key={index}
                              imgUrl={
                                exec.img !== ""
                                  ? `/potraits/${year}-exec/${exec.img}`
                                  : ""
                              }
                              name={exec.name}
                              className={
                                year === "2020"
                                  ? execToClassName[year][exec.name]
                                  : execToClassName[year]
                              }
                              position={exec.position}
                              degree={exec.degree}
                              year={exec.year}
                              linkedin={exec.linkedin}
                              fb={exec.facebook}
                              email={exec.email}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Subcommittee section */}
              {subcommittee.length ? (
                <>
                  <h2 className={styles.teamHeading}>
                    OUR {year} SUBCOMMITTEE TEAM
                  </h2>

                  <div className={styles.subcomSection}>
                    {sectors.map((sector) => {
                      return (
                        <div key={sector}>
                          <h3 className={styles.subcomType}>{sector} Team</h3>
                          {subcommittee
                            .filter((member) => member.team === sector)
                            .map((member, index) => {
                              return (
                                <SubCom
                                  key={index}
                                  name={member.name}
                                  degree={member.degree}
                                  year={member.year}
                                />
                              );
                            })}
                          <br />
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : null}
            </>
          )}
          <footer>
            <div className={styles.footerArea} style={{ marginTop: "8vw" }} />
          </footer>
          <ScrollUpBtn />
        </div>
      )}
    </div>
  );
}

export default OurTeam;
