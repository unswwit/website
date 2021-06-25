import React, { useEffect } from "react";
import PageHeader from ".././header";
import ".././style.css";
import styles from "./videos.module.css";
import YouTubeSubscribe from "./youtubeSubscribe";

const Videos = () => {
	// Start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/*Cover Photo*/}
      <PageHeader imgUrl="/headers/our-story-header.jpg" title="Videos" />
      {/*Start of Our Story*/}
      {/*Start of Our Mission*/}
      <h2 className={styles.oppSubheading}>Welcome to our channel</h2>
			<img className={styles.youtubeImg}
            src={process.env.PUBLIC_URL + "/videos/yt.png"}
            alt="Youtube"
        />

      <div className={styles.ourMissionSection}>
        <div className={styles.ourStory}>
          <p className={styles.ourMissionContent}>
					Join us on our YouTube channel to keep up to date with WIT’s latest events, training and development videos + some extra behind the scene clips!
          </p>
        </div>
      </div>
			<p className = {styles.subscribeText}>
				SUBSCRIBE HERE
			</p>
			{/*https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw?sub_confirmation=1&feature=subscribe-embed-click*/}
			<YouTubeSubscribe
          channelid={"UCQ8PGe3P4ZuDSNCb9vCeTiw"}
          theme={"default"}
          layout={"full"}
          count={"hidden"}
					className={styles.subscribe}
        />
    </div>
  );
};

export default Videos;