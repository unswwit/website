// @ts-nocheck comment
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from '../styles/QuotesSlideshow.module.css';
import Image from 'next/image';

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

    if (data[key][1].includes('Careers')) {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockCareers,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.careersRoleColour)}
        </div>
      );
    } else if (data[key][1].includes('Competitions')) {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockCompetitions,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.competitionsRoleColour)}
        </div>
      );
    } else if (data[key][1].includes('Externals')) {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockExternals,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.externalsRoleColour)}
        </div>
      );
    } else if (data[key][1].includes('HR')) {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockHR,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.hrRoleColour)}
        </div>
      );
    } else if (data[key][1].includes('Publications')) {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockPublications,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.publicationsRoleColour)}
        </div>
      );
    } else if (data[key][1].includes('Marketing')) {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockMarketing,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.marketingRoleColour)}
        </div>
      );
    } else if (data[key][1].includes('IT')) {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockIT,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.itRoleColour)}
        </div>
      );
    } else if (data[key][1].includes('Media')) {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockMedia,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.mediaRoleColour)}
        </div>
      );
    } else {
      quoteBlock = (
        <div
          className={[
            styles.quoteBlock,
            styles.quoteBlockDefault,
            customSlideStyle,
          ].join(' ')}
        >
          {displaySlideInfo(key, styles.defaultRoleColour)}
        </div>
      );
    }
    return quoteBlock;
  };

  const displaySlideInfo = (key, colorClass) => {
    return (
      <>
        <div className={styles.authorBlock}>
          <Image
            className={styles.authorImage}
            src={`/portraits/${data[key][2]}`}
            alt={data[key][0]}
            width={90}
            height={90}
          />
          <div className={styles.authorDetails}>
            <p className={styles.authorName}>{data[key][0]}</p>
            <p className={[styles.authorRoles, colorClass].join(' ')}>
              {data[key][1]}
            </p>
          </div>
        </div>
        <div className={[styles.quoteContainer, customQuoteStyle].join(' ')}>
          <div className={styles.beginQuote}>“</div>
          <p className={styles.quoteText}>{data[key][3]}</p>
          <div className={styles.horizontalLine} />
          <div className={styles.endQuote}>”</div>
        </div>
      </>
    );
  };

  // displays one slide with the given key of the dictionary
  const displaySlide = (key) => {
    return (
      <Slide
        index={key}
        innerClassName={[styles.slideContainer, customSlideStyle].join(' ')}
        key={key}
      >
        <div className={styles.quoteBackground}>{displayBackground(key)}</div>
      </Slide>
    );
  };

  return (
    <CarouselProvider
      className={[styles.slideComponent, customSlideStyle].join(' ')}
      naturalSlideWidth={1400}
      naturalSlideHeight={height}
      totalSlides={subcoms.length}
    >
      <Slider
        className={styles.slideComponent}
        classNameTray={styles.slideComponent}
        classNameTrayWrap={styles.slideComponent}
      >
        {Array.from(
          { length: Object.keys(data).length },
          (_, index) => index
        ).map((slideNum) => displaySlide(+slideNum))}
      </Slider>
      <ButtonBack
        className={[homeLeftArrow, styles.buttonBack].join(' ')}
      ></ButtonBack>
      <ButtonNext
        className={[homeRightArrow, styles.buttonNext].join(' ')}
      ></ButtonNext>
    </CarouselProvider>
  );
};

export default QuotesSlideshow;
