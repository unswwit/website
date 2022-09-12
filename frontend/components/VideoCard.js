import styles from "../styles/videos.module.css";
import { formatDate } from "../lib/helpers";
import Link from "next/link";

export default function VideoCard({ vid }) {
    const {
      date,
      title,
      episode_no,
      video,    // links to the video
      category,
    } = vid.fields;

  const dateFormatted = formatDate(date);

    return (
        <div className={styles.videoContainer}>
            <div className={styles.videoInfo}>
                <h1>{title}</h1>
                <p>{dateFormatted}</p>
                <p>{category}</p>
            </div>
        </div>
    );

}