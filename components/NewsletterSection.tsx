// @ts-nocheck comment
import React from 'react';
import styles from '../styles/Newsletter.module.css';
import NewsletterForm from './NewsletterForm';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import Image from 'next/image';

const NewsletterSection = ({ setOpen, open, callbackModal, fade }) => {
  return (
    <div id={styles.container}>
      <div id={styles.newsletterBgContainer}>
        <Image
          src={'/newsletter-background.png'}
          className={styles.background}
          alt="banner"
          fill
        />
      </div>
      {fade ? (
        <div data-aos="fade">
          <button className={styles.subscribeBtn} onClick={() => setOpen(true)}>
            Subscribe to our newsletter
          </button>
        </div>
      ) : (
        <button className={styles.subscribeBtn} onClick={() => setOpen(true)}>
          Subscribe to our newsletter
        </button>
      )}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={styles.signUpForm}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          <Fade in={open}>
            <NewsletterForm handleClose={callbackModal} />
          </Fade>
        </>
      </Modal>
    </div>
  );
};

export default NewsletterSection;
