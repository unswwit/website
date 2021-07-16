import React, { useEffect, useState } from "react";
import PageHeader from ".././header";
import ".././style.css";
import styles from "./videos.module.css";
import YouTubeSubscribe from "./youtubeSubscribe";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
// TO UNCOMMENT WHEN REACH > 9 VIDEOS
// import PaginationComp from "../components/Pagination";

const Videos = (props) => {
  const [video, setVideo] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoNumber, setVideoNumber] = useState("0");
  const [sourceLoading, setSourceLoading] = React.useState(true);
  // TO UNCOMMENT WHEN REACH > 9 VIDEOS
  // set how many posts to view per page
  // const postsPerPage = 9;
  // const [selectedPosts, setSelectedPosts] = useState([]);
  // // current page number
  // const [currentPage, setCurrentPage] = useState(1);

  // retrieve current video content
  const handleVideoNumber = (numVideos) => {
    let url = window.location.href.split("/");
    if (url[url.length - 1] && url[url.length - 1] !== "videos") {
      setVideoNumber(url[url.length - 1]);
      return url[url.length - 1];
    }
    return `${+numVideos - 1}`;
  };

  useEffect(() => {
    setLoading(true);

    // Start at the top of the page
    window.scrollTo(0, 0);

    // Importing Video Details
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        // Redirect to 404 page if visiting an invalid video number in the url
        const allVideos = googleData["videos"]["elements"];
        const currVideoNumber = handleVideoNumber(allVideos.length);

        if (allVideos.length <= 0 || currVideoNumber > allVideos.length) {
          props.history.push("/404");
          return;
        }

        // load the page content for the current video
        var videoIndex = 0;
        const currVideo = allVideos.filter((video, index) => {
          if (video.videoNumber === currVideoNumber) {
            videoIndex = index;
            return true;
          } else {
            return false;
          }
        })[0];
        setVideo(currVideo);

        // load video previews
        let sortedVideos = allVideos.slice(0, videoIndex).reverse();
        const additionalVideos = allVideos
          .slice(videoIndex + 1, allVideos.length)
          .reverse();
        sortedVideos = [...additionalVideos, ...sortedVideos];
        // REMOVE THE LINE BELOW WHEN REACH > 9 VIDEOS
        setVideos(sortedVideos);
        // TO UNCOMMENT WHEN REACH > 9 VIDEOS
        // setVideos(sortedVideos.slice(0, postsPerPage));
        // setCurrentPage(1);
        // setSelectedPosts(sortedVideos);

        setLoading(false);
      },
      simpleSheet: false,
    });
  }, [videoNumber, props.history]);

  const currentVideo = (currentNumber) => {
    setLoading(true);

    // Start at the top of the page
    window.scrollTo(0, 0);

    // Importing Video Details
    Tabletop.init(
      {
        key: process.env.REACT_APP_GOOGLE_SHEETS,
        callback: (googleData) => {
          // Redirect to 404 page if visiting an invalid video number in the url
          const allVideos = googleData["videos"]["elements"];
          const currVideoNumber = handleVideoNumber(allVideos.length);

          if (allVideos.length <= 0 || currVideoNumber > allVideos.length) {
            props.history.push("/404");
            return;
          }

          // load the page content for the current video
          var videoIndex = 0;
          const currVideo = allVideos.filter((video, index) => {
            if (video.videoNumber === currVideoNumber) {
              videoIndex = index;
              return true;
            } else {
              return false;
            }
          })[0];
          setVideo(currVideo);

          // load video previews
          let sortedVideos = allVideos.slice(0, videoIndex).reverse();
          const additionalVideos = allVideos
            .slice(videoIndex + 1, allVideos.length)
            .reverse();
          sortedVideos = [...additionalVideos, ...sortedVideos];
          // REMOVE THE LINE BELOW WHEN REACH > 9 VIDEOS
          setVideos(sortedVideos);
          // TO UNCOMMENT WHEN REACH > 9 VIDEOS
          // setVideos(sortedVideos.slice(0, postsPerPage));
          // setCurrentPage(1);
          // setSelectedPosts(sortedVideos);

          setLoading(false);
        },
        simpleSheet: false,
      },
      [videoNumber, props.history]
    );
  };

  // control when to stop loading
  useEffect(() => {
    setTimeout(() => {
      setSourceLoading(false);
    }, 1000);
  }, []) 

  // TO UNCOMMENT WHEN REACH > 9 VIDEOS
  // called when pagination item clicked to slice the correct amount of videos for viewing
  // const paginate = (pageNumber) => {
  //   setVideos(
  //     selectedPosts.slice(
  //       (pageNumber - 1) * postsPerPage,
  //       pageNumber * postsPerPage
  //     )
  //   );
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div>
    {sourceLoading ? ( <LoadingScreen />) : ( 
      <>
        {/* Cover Photo */}
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
        {/* Start of Videos */}
        {!loading && (
          <div className={styles.videosBody}>
            <h1 className={styles.vidSubheading}>Welcome to our channel</h1>
            <img
              className={styles.youtubeImg}
              src={process.env.PUBLIC_URL + "/videos/youtube.png"}
              alt="Youtube"
            />

            <p className={styles.desc}>
              Join us on our YouTube channel to keep up to date with WIT’s latest
              events, training and development videos + some extra behind the
              scene clips!
            </p>
            {/* Subscribe Button */}
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
                    src={`https://youtube.com/embed/${video.youtubeVideoID}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen={true}
                    title="video"
                    className={styles.embeddedVideo}
                  />
                </div>
                <p className={styles.videoName}>{video.name}</p>
                <p className={styles.videoDate}>{video.date}</p>
              </div>
            </div>
            {/* See more videos */}
            <p className={styles.subHeading}>More From WIT</p>
            <div className={styles.videoContainer}>
              {videos.map((video, index) => {
                return (
                  <div className={styles.videoDescription} key={index}>
                    <Link
                      to={`/media/videos/${video.videoNumber}`}
                      onClick={() => currentVideo(video.videoNumber)}
                    >
                      <img
                        className={styles.videoImages}
                        src={
                          process.env.PUBLIC_URL +
                          `/event-covers/${video.year}/${video.img}`
                        }
                        alt={video.name}
                      />
                      <p className={styles.moreName}>{video.name}</p>
                      <p className={styles.moreDate}>{video.date}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* Pagination */}
        {/* TO UNCOMMENT WHEN REACH > 9 VIDEOS
        <PaginationComp
          totalPages={Math.ceil(selectedPosts.length / postsPerPage)}
          paginate={paginate}
          page={currentPage}
        /> */}
      </>
      )}
    </div>
  );
};

export default Videos;
