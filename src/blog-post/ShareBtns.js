import React from "react";
import styles from "./ShareBtn.module.css";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TelegramShareButton,
  TelegramIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareBtns = () => {
  return (
    <>
      <FacebookShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>

      <FacebookMessengerShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <FacebookMessengerIcon size={30} round={true} />
      </FacebookMessengerShareButton>

      <TwitterShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <TwitterIcon size={30} round={true} />
      </TwitterShareButton>

      <TelegramShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <TelegramIcon size={30} round={true} />
      </TelegramShareButton>

      <WhatsappShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <WhatsappIcon size={30} round={true} />
      </WhatsappShareButton>

      <LinkedinShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <LinkedinIcon size={30} round={true} />
      </LinkedinShareButton>

      <LineShareButton className={styles.shareBtn} url={window.location.href}>
        <LineIcon size={30} round={true} />
      </LineShareButton>
      
    </>
  );
};

export default ShareBtns;
