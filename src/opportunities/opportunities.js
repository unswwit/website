//All necessary imports for this javascript
import React, { Component } from "react";
import PageHeader from ".././header";

import ".././style.css";
import styles from "./opportunities.module.css";
//import OppCard from "./oppCard.js";

class Opportunities extends Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader
          imgUrl="/headers/opportunities-header.jfif"
          title="Opportunities"
        />

        {/*start of active opportunies*/}
        <h2 className={styles.oppSubheading}>Active Opportunities</h2>
        <p className={styles.oppLookout} style={{ marginBottom: "100px" }}>
          Keep a lookout here for upcoming opportunities!
          {/*
          <OppCard
              details={{
                CommonwealthBank: [
                  "/sponsors/2020/telstra-large.png",
                  "7 July 2020",
                  "Summer Vacationer",
                  "Do you know that by being a Summer Vacationer at Telstra you could be considered for early offers and join the Graduate Program as soon as you graduate? Telstra will guide and support you on your journey, as you see what is possible in your career. Applications for Telstra’s Summer Vacation Program start July 7. Don’t miss out on this opportunity! #TeamTelstra #TelstraSummerVac",
                  "https://www.youtube.com/watch?v=4R6Vy7QOgKA&t=4s  ",
                ],
              }}
            />*/}
        </p>
        {/*Start of past opportunities*/}
        {/*
        <h2 className={styles.oppSubheading}>Past Opportunities</h2>
        <div className={styles.oppGrid}>
          <div className={styles.container}>
            <OppCard
              details={{
                Telstra: [
                  "/sponsors/2020/telstra-large.png",
                  "7 July 2020",
                  "Summer Vacationer",
                  "Do you know that by being a Summer Vacationer at Telstra you could be considered for early offers and join the Graduate Program as soon as you graduate? Telstra will guide and support you on your journey, as you see what is possible in your career. Applications for Telstra’s Summer Vacation Program start July 7. Don’t miss out on this opportunity! #TeamTelstra #TelstraSummerVac",
                  "https://www.youtube.com/watch?v=4R6Vy7QOgKA&t=4s  ",
                ],
              }}
            />

            <OppCard
              details={{
                EY: [
                  "/sponsors/2020/ey-major.png",
                  "7 July 2020",
                  "Breaking Down Barriers Program",
                  "When – Tuesday 21st July  Where – Virtual  Time – 10am – 12:30pm. Register at the link below!",
                  "https://globaleysurvey.ey.com/jfe/form/SV_43pqDbzTEfL4Lbf ",
                ],
              }}
            />
          </div>
        </div>*/}
        {/*End of opportunities grid table*/}
      </div>
    );
  }
}
export default Opportunities;
