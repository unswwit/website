import styles from "../styles/videos.module.css";
import { formatDate } from "../lib/helpers";
import Link from "next/link";

export default function VideoCard({ video }) {
    const {
      date,
      title,
      episodeNo,
      video,    // links to the video
      category,
    } = video.fields;

  const dateFormatted = formatDate(date);

    return (
        <div className={styles.videoContainer}>
            <div className={styles.videoName}>
                <h1>{title}</h1>
            </div>
            <div className={styles.videoDate}>
                <h2>{dateFormatted}</h2>
            </div>
                <h2>{category}</h2>
        </div>
    );

}