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
  const displayBackground = (exec) => {
    return (
      <div
        className={[
          styles.quoteBlock,
          styles.quoteBlockDefault,
          customSlideStyle,
        ].join(' ')}
      >
        {displaySlideInfo(exec, styles.defaultRoleColour)}
      </div>
    );
  };

  const displaySlideInfo = (exec, colorClass) => {
    return (
      <>
        <div className={styles.authorBlock}>
          <Image
            className={styles.authorImage}
            src={'http:' + exec.fields.image.fields.file.url}
            alt={exec.fields.name}
            width={90}
            height={90}
          />
          <div className={styles.authorDetails}>
            <p className={styles.authorName}>{exec.fields.name}</p>
            <p className={[styles.authorRoles, colorClass].join(' ')}>
              {exec.fields.position}
            </p>
          </div>
        </div>
        <div className={[styles.quoteContainer, customQuoteStyle].join(' ')}>
          <div className={styles.beginQuote}>“</div>
          <p className={styles.quoteText}>{exec.fields.quote}</p>
          <div className={styles.horizontalLine} />
          <div className={styles.endQuote}>”</div>
        </div>
      </>
    );
  };

  // displays one slide with the given key of the dictionary
  const displaySlide = (exec, index) => {
    return (
      <Slide
        innerClassName={[styles.slideContainer, customSlideStyle].join(' ')}
        key={index}
      >
        <div className={styles.quoteBackground}>{displayBackground(exec)}</div>
      </Slide>
    );
  };

  return (
    <CarouselProvider
      className={[styles.slideComponent, customSlideStyle].join(' ')}
      naturalSlideWidth={1400}
      naturalSlideHeight={height}
      totalSlides={data.length}
    >
      <Slider
        className={styles.slideComponent}
        classNameTray={styles.slideComponent}
        classNameTrayWrap={styles.slideComponent}
      >
        {data.map((exec, index) => displaySlide(exec, index))}
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
