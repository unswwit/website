import styles from '../styles/ShareBtn.module.css'
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
} from 'react-share'

const ShareBtns = () => {
  return (
    <>
      <FacebookShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>
      <LineShareButton className={styles.shareBtn} url={window.location.href}>
        <LineIcon size={30} round={true} />
      </LineShareButton>
      <LinkedinShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <LinkedinIcon size={30} round={true} />
      </LinkedinShareButton>
      <TwitterShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <TwitterIcon size={30} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton
        className={styles.shareBtn}
        url={window.location.href}
      >
        <WhatsappIcon size={30} round={true} />
      </WhatsappShareButton>
    </>
  )
}

export default ShareBtns
