import React, { useEffect, useState } from "react";
import Image from "next/image";

const PageHeader = ({ imageLoading, imgUrl, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (typeof imageLoading === "function") {
      imageLoading(false);
    }
  }, [imageLoaded, imageLoading]);

  return (
    <div className="coverPhoto">
      {/* dark overlay */}
      <div className="dark" />

      {/* header image */}
      <Image
        src={imgUrl}
        alt="header"
        className="coverImage"
        onLoad={
          typeof imageLoading === "function" ? () => setImageLoaded(true) : null
        }
        layout={"fill"}
        priority="True"
      />

      {/* text */}
      <div className="headerTitle">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;