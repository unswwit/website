import React from "react";
import "./publications.css";
import PubArticle from "./publications-article";
import PageHeader from ".././header";

class Publications extends React.Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/publications-header.png" title="Publications" />

        <div className="publicationsBody">
          {/*2020 articles*/}

          <h1>2020</h1>
          <div className="row">
            <PubArticle
              imgUrl="./publications/first-year-guide.png"
              heading="First Year Guide"
              date="10/02/2020"
              url="https://issuu.com/womenintechnology/docs/first_year_guide"
            />
            <PubArticle
              imgUrl="./publications/careers-guide.png"
              heading="Careers Guide"
              date="27/7/2020"
              url="https://issuu.com/womenintechnology/docs/wit_2020_careers_guide?fbclid=IwAR3RBADvuCd7KRAxeD4yK0USlDoQkVp05kY2SSYiYmjB2nZjBsI3xs_rX5c"
            />
            <PubArticle
              imgUrl="./publications/magazine-2020.png"
              heading="WIT magazine 2020"
              date="22/10/2020"
              url="https://issuu.com/womenintechnology/docs/wit_magazine"
            />  
          </div>
        </div>
      </div>
    );
  }
}

export default Publications;
