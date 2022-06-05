import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "../../styles/team.module.css";
import PageHeader from "../../components/header";
import Execs from "./execs";
import SubCom from "./subcom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Timeline from "../../components/Timeline";
import ScrollUpBtn from "../../components/ScrollUpBtn";
import LoadingScreen from "../../components/LoadingScreen";
import axios from "axios";
import humps from "humps";
import { execToClassName, marks, valueToYear } from "./data/teamData";

function OurTeam() {
  const masterExec = useRef();
  const masterSubcom = useRef();
  const [filteredExecs, setFilteredExecs] = useState([]);
  const [filteredSubcom, setFilteredSubcom] = useState([]);
  const [year, setYear] = useState(2022);
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);

  const handleYear = (newYear) => {
    setYear(newYear);
  };

  // get execs
  // input: execs data from google sheets
  // output: array of dictionaries containing execs data
  const fetchExecs = async () => {
    await axios
      .get("https://wit-database.herokuapp.com/execs")
      .then((execRes) => {
        masterExec.current = humps.camelizeKeys(execRes.data);
      });
  };

  // get subcom
  // input: subcom data from google sheets
  // output: array of dictionaries containing subcom data
  const fetchSubcom = async () => {
    await axios
      .get("https://wit-database.herokuapp.com/subcommittee")
      .then((subcomRes) => {
        masterSubcom.current = humps.camelizeKeys(subcomRes.data);
      });
  };

  const filterDataByYear = useCallback(() => {
    // Enable loading spinner
    setLoading(true);

    // Execs
    const tempExecs = masterExec.current.filter(
      (exec) => exec.yearJoined === year
    );
    const result = tempExecs.reduce(function (result, _, index, tempExecs) {
      if (index % 2 === 0) result.push(tempExecs.slice(index, index + 2));
      return result;
    }, []);
    setFilteredExecs(result);

    // Subcom
    const subcom = masterSubcom.current.filter(
      (exec) => exec.yearJoined === year
    );
    setFilteredSubcom(subcom);

    // Disable loading spinner
    setLoading(false);
  }, [year]);

  // Scroll to the top of the page on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // show loading sign for team page
    setLoading(true);
    const fetchDataPromises = [
      fetchExecs().catch((error) =>
        // error handling
        console.error(error)
      ),
      fetchSubcom().catch((error) =>
        // error handling
        console.error(error)
      ),
    ];
    Promise.all(fetchDataPromises).then(() => {
      filterDataByYear();
      setSourceLoading(false);
    });
  }, [filterDataByYear]);

  // Moved from teamData.js to prevent new portfolios
  // from showing when the year is earlier than 2021.
  const sectors = year < 2022 ? [
    "Events",
    "Externals",
    "Human Resources",
    "Education",
    "Marketing",
    "Information Technology",
  ] : [
    "Careers",
    "Competitions",
    "Externals",
    "Human Resources",
    "Information Technology",
    "Marketing",
    "Media",
    "Publications",
  ];

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <div id={styles.pageContainer}>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/2022-team-header.jpg"
            title="Our Team"
            imageLoading={setHeaderLoading}
          />

          {/* Timeline */}
          <Timeline
            margin={"50px"}
            page={"teams"}
            step={20}
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
                  {filteredExecs.map((row, index) => {
                    return (
                      <div key={index} className={styles.execRow}>
                        {row.map((exec, index) => {
                          return (
                            <Execs
                              key={index}
                              imgUrl={
                                exec.img
                                  ? `/portraits/${year}-exec/${exec.img}`
                                  : ""
                              }
                              name={exec.name}
                              className={
                                year === 2020
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
              {filteredSubcom.length ? (
                <>
                  <h2 className={styles.teamHeading}>
                    OUR {year} SUBCOMMITTEE TEAM
                  </h2>

                  <div className={styles.subcomSection}>
                    {sectors.map((sector) => {
                      return (
                        <div key={sector}>
                          <h3 className={styles.subcomType}>{sector} Team</h3>
                          {filteredSubcom
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
          <ScrollUpBtn />
        </div>
      )}
    </div>
  );
}

export default OurTeam;
