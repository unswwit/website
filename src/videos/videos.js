import React, { useEffect, useState } from "react";
import PageHeader from ".././header";
import ".././style.css";
import styles from "./videos.module.css";
import YouTubeSubscribe from "./youtubeSubscribe";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Videos = (props) => {
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const currVideoNumber = props.match.params.videoNumber;

    // Importing Video Details
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        // Redirect to 404 page if visiting an invalid video number in the url
        const allVideos = googleData["videos"]["elements"];

        if (allVideos.length <= 0 || currVideoNumber > allVideos.length) {
          props.history.push("/404");
          return;
        }
        // load the page content for the current video
        const currVideo = allVideos.filter((video) => {
          return video.videoNumber === currVideoNumber;
        })[0];
        setVideo(currVideo);

        setLoading(false);
      },
      simpleSheet: false,
    });

    // Start at the top of the page
    window.scrollTo(0, 0);
  }, [props.match.params.videoNumber, props.history]);

  console.log(video);

  return (
    <>
      {/*Cover Photo*/}
      <PageHeader imgUrl="/headers/videos-header.jpg" title="Videos" />
      {loading && (
        <div id={styles.videoLoadingContainer}>
          <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id={styles.videoLoading}
          />
        </div>
      )}
      {/*Start of Our Story*/}
      {/*Start of Our Mission*/}

      {!loading && (
        <div className={styles.videosBody}>
          <h2 className={styles.oppSubheading}>Welcome to our channel</h2>
          <img
            className={styles.youtubeImg}
            src={process.env.PUBLIC_URL + "/videos/yt.png"}
            alt="Youtube"
          />

          <div className={styles.ourMissionSection}>
            <div className={styles.ourStory}>
              <p className={styles.ourMissionContent}>
                Join us on our YouTube channel to keep up to date with WIT’s
                latest events, training and development videos + some extra
                behind the scene clips!
              </p>
            </div>
          </div>
          <p className={styles.subscribeText}>SUBSCRIBE HERE</p>
          {/*https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw?sub_confirmation=1&feature=subscribe-embed-click*/}
          <YouTubeSubscribe
            channelid={"UCQ8PGe3P4ZuDSNCb9vCeTiw"}
            theme={"default"}
            layout={"full"}
            count={"hidden"}
            className={styles.subscribe}
          />
          {/* YouTube Embedded Video */}
          <div id={styles.videoContainer}>
            <div className={styles.iframeWrapper}>
              <div className={styles.responsiveIframe}>
                <iframe
                  src={`https://youtube.com/embed/8cj8US6FEb8?autoplay=0`}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen="true"
                  title="video"
                  className={styles.embeddedVideo}
                />
              </div>
              <p className={styles.videoName}>
                WIT International Women's Day Brunch 2021
              </p>
              <p className={styles.videoDate}>March 9, 2021</p>
            </div>
          </div>
          {/* See more episodes */}
          <p className={styles.subHeading}>More From WIT</p>
          {/* <div className={styles.previews}>
            {episodes.map((episode, index) => {
              return (
                <div key={index} className={styles.podcastContainer}>
                  <EpisodeTemplate
                    className={styles.podcastContainer}
                    key={index}
                    episodeNo={episode.episodeNo}
                    title={episode.title}
                    cover={`podcast-covers/${episode.img}`}
                    date={episode.date}
                    description={episode.description}
                  />
                </div>
              );
            })}
          </div> */}
        </div>
      )}
    </>
  );
};

export default Videos;
