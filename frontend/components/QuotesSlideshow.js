import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import quotes from "../styles/QuotesSlideshow.module.css";
import Image from "next/image";

const QuotesSlideshow = ({
  height,
  data,
  homeLeftArrow,
  homeRightArrow,
  customSlideStyle,
  customQuoteStyle,
}) => {
  const subcoms = Object.keys(data);

  const displayBackground = (key) => {
    let quoteBlock = null;

    if (data[key][1].includes("Careers")) {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockCareers,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.careersRoleColour)}
        </div>
      );
    } else if (data[key][1].includes("Competitions")) {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockCompetitions,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.competitionsRoleColour)}
        </div>
      );
    } else if (data[key][1].includes("Externals")) {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockExternals,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.externalsRoleColour)}
        </div>
      );
    } else if (data[key][1].includes("HR")) {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockHR,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.hrRoleColour)}
        </div>
      );
    } else if (data[key][1].includes("Publications")) {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockPublications,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.publicationsRoleColour)}
        </div>
      );
    } else if (data[key][1].includes("Marketing")) {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockMarketing,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.marketingRoleColour)}
        </div>
      );
    } else if (data[key][1].includes("IT")) {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockIT,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.itRoleColour)}
        </div>
      );
    } else if (data[key][1].includes("Media")) {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockMedia,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.mediaRoleColour)}
        </div>
      );
    } else {
      quoteBlock = (
        <div
          className={[
            quotes.quoteBlock,
            quotes.quoteBlockDefault,
            customSlideStyle,
          ].join(" ")}
        >
          {displaySlideInfo(key, quotes.defaultRoleColour)}
        </div>
      );
    }
    return quoteBlock;
  };

  const displaySlideInfo = (key, colorClass) => {
    return (
      <>
        <div className={quotes.authorBlock}>
          <Image
            className={quotes.authorImage}
            src={`/portraits/${data[key][2]}`}
            alt={data[key][0]}
            height='90px'
            width='90px'
          />
          <div className={quotes.authorDetails}>
            <p className={quotes.authorName}>{data[key][0]}</p>
            <p className={[quotes.authorRoles, colorClass].join(" ")}>
              {data[key][1]}
            </p>
          </div>
        </div>
        <div className={[quotes.quoteContainer, customQuoteStyle].join(" ")}>
          <div className={quotes.beginQuote}>“</div>
          <p className={quotes.quoteText}>{data[key][3]}</p>
          <div className={quotes.horizontalLine} />
          <div className={quotes.endQuote}>”</div>
        </div>
      </>
    );
  };

  // displays one slide with the given key of the dictionary
  const displaySlide = (key) => {
    return (
      <Slide
        index={key}
        innerClassName={[quotes.slideContainer, customSlideStyle].join(" ")}
        key={key}
      >
        <div className={quotes.quoteBackground}>{displayBackground(key)}</div>
      </Slide>
    );
  };

  return (
    <CarouselProvider
      className={[quotes.slideComponent, customSlideStyle].join(" ")}
      naturalSlideWidth={1400}
      naturalSlideHeight={height}
      totalSlides={subcoms.length}
    >
      <Slider
        className={quotes.slideComponent}
        classNameTray={quotes.slideComponent}
        classNameTrayWrap={quotes.slideComponent}
      >
        {Array.from(
          { length: Object.keys(data).length },
          (_, index) => index
        ).map((slideNum) => displaySlide(+slideNum))}
      </Slider>
      <ButtonBack
        className={[homeLeftArrow, quotes.buttonBack].join(" ")}
      ></ButtonBack>
      <ButtonNext
        className={[homeRightArrow, quotes.buttonNext].join(" ")}
      ></ButtonNext>
    </CarouselProvider>
  );
};

export default QuotesSlideshow;
