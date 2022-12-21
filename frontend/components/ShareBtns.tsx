import styles from '../styles/ShareBtn.module.css';
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import { useEffect, useState } from 'react';

const ShareBtns = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
    console.log(url);
  }, []);

  return (
    <>
      <FacebookShareButton className={styles.shareBtn} url={url}>
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>
      <LineShareButton className={styles.shareBtn} url={url}>
        <LineIcon size={30} round={true} />
      </LineShareButton>
      <LinkedinShareButton className={styles.shareBtn} url={url}>
        <LinkedinIcon size={30} round={true} />
      </LinkedinShareButton>
      <TwitterShareButton className={styles.shareBtn} url={url}>
        <TwitterIcon size={30} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton className={styles.shareBtn} url={url}>
        <WhatsappIcon size={30} round={true} />
      </WhatsappShareButton>
    </>
  );
};

export default ShareBtns;
