import React from "react";
import "../style.css";

const PageHeader = ({ imageLoading, imgUrl, title }) => {
  return (
    <div className="coverPhoto">
      {/* dark overlay */}
      <div className="dark" />

      {/* header image */}
      <img
        src={process.env.PUBLIC_URL + imgUrl}
        alt="header"
        className="cover_image"
        onLoad={imageLoading ? imageLoading(false): null}
      />

      {/* text */}
      <div className="headerTitle">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default PageHeader;
