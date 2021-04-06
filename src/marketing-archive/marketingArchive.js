//All necessary imports for this javascript
import React, { Component } from "react";
import ".././style.css";
import styles from "./marketingArchive.module.css";
import { Link } from "react-router-dom";
import PageHeader from ".././header";

class MarketingArchive extends Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/marketing-header.png" title="Marketing Archive" />

        {/*Start of text*/}
        <div className={styles.introParagraph}>
          <p className={styles.intro}>
            Check out all the creative posts our marketing team have been making
            in the marketing archive!
          </p>
        </div>

        {/*2020 section*/}
        <div className={styles.yearSection}>
          <Link
            to="/marketing-archive/content"
            style={{ textDecoration: "none" }}
          >
            <p className={styles.year}>2020</p>
          </Link>
        </div>
      </div>
    );
  }
}
export default MarketingArchive;
