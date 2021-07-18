import React from "react";
import "../style.css";

const PageHeader = () => {
  return (
    <div className="coverPhoto">
      {/* dark overlay */}
      <div className="dark" />

      {/* header image */}
      <img
        src={process.env.PUBLIC_URL + this.props.imgUrl}
        alt="header"
        className="cover_image"
      />

      {/* text */}
      <div className="headerTitle">
        <h1>{this.props.title}</h1>
      </div>
    </div>
  );
}

export default PageHeader;
