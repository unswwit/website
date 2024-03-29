// @ts-nocheck comment
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Header {
  imageLoading?: any;
  imgUrl: string;
  title: string;
}

const PageHeader = ({ imageLoading, imgUrl, title }: Header) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (typeof imageLoading === 'function') {
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
        className="cover_image"
        onLoad={
          typeof imageLoading === 'function' ? () => setImageLoaded(true) : null
        }
        fill
        priority
      />

      {/* text */}
      <div className="headerTitle">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
