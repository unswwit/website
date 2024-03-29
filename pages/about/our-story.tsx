import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Header';
import styles from '../../styles/OurStory.module.css';
import Timeline from '../../components/OurStoryTimeline';
import LoadingScreen from '../../components/LoadingScreen';
import Head from 'next/head';
import Image from 'next/image';

// Start at the top of the page
const OurStory = () => {
  const [headerLoading, setHeaderLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // control when to stop loading
  useEffect(() => {
    setTimeout((loading) => {
      if (!loading) {
        setHeaderLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <Head>
        <title>Our Story | UNSW WIT</title>
      </Head>
      {headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div id={styles.container}>
            {/*Cover Photo*/}
            <PageHeader
              imgUrl="/headers/our-story-header.jpg"
              title="Our Story"
              imageLoading={setHeaderLoading}
            />
            {/*Start of Our Story*/}
            {/*Start of Our Mission*/}
            <h2 className={styles.oppSubheading} id={styles.topHeading}>
              Our Mission
            </h2>
            <div className={styles.ourMissionSection}>
              <div className={styles.ourMissionImg}>
                <Image
                  src="/our-story/our-mission.jpeg"
                  alt="WIT members"
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.ourStory}>
                <p className={styles.ourMissionContent}>
                  Formed in 2016, UNSW Women in Technology (WIT) is currently a
                  network of over 3000 students that aims to collaborate,
                  empower, and up-skill female and males students within STEM to
                  encourage diversity within the technology industry.
                </p>
                <p className={styles.ourMissionContent}>
                  At WIT, we are proud of being able to provide opportunities
                  that develop all students&apos; professional and technical
                  skills. Whether it&apos;s personal, academic, or social, we
                  want our members to become the best version of themselves.
                </p>
                <p className={styles.ourMissionContent}>
                  Our society captures a diverse range of disciplines, enabling
                  us to inspire students from various backgrounds by providing
                  them with a variety of events and multimedia resources such as
                  blogs, podcasts, videos, guides to succeeding professionally
                  and within uni, hackathons, course revision workshops,
                  professional development workshops, and so much more!
                </p>
              </div>
            </div>
            {/*Start of Our Mascot*/}
            <h2 className={styles.oppSubheading}>Our Mascot</h2>
            <div className={styles.ourMascotSection}>
              <div className={styles.ourMascotImg}>
                <Image
                  src="/our-story/our-mascot.png"
                  alt="Introducing Willow the Australian Wombat, WIT's mascot"
                  width={2048}
                  height={500}
                />
              </div>
              <div className={styles.ourStory}>
                <p className={styles.ourMascotContent}>
                  Have you met Willow? Willow is WIT&apos;s trusty mascot and
                  biggest supporter. Willow, like us, shares a dislike of bugs
                  (the crawley kind and the codey kind) and believes in
                  empowering all creatures. Willow is only four years old but
                  she understands the power of nurturing young creatures and
                  showing them how to navigate the forest. When she&apos;s not
                  burrowed under the desk having a quick snooze, she can be
                  found munching on a shrub salad and cheering on the WIT team
                  in everything they do.
                </p>
                <p className={styles.ourMascotContent}>
                  Willow debuted as WIT&apos;s mascot in 2020, and has been
                  bringing laughter and motivation to our community ever since!
                  In 2021, Willow was brought to life from the screen to O-Week
                  as a handmade crocheted plushie. Through a&nbsp;
                  <a
                    href="https://www.facebook.com/unsw.wit/posts/2510541182584081"
                    className={styles.link}
                    target="_blank"
                    title="Facebook: photoshoot of Willow plushie"
                    rel="noopener noreferrer"
                  >
                    cute live-action photo shoot
                  </a>
                  , styled with her favourite orange flower, Willow recreated
                  iconic WIT memes and embodied every stage of a student in tech
                  - from fuelling up on coffee to taking power naps during study
                  sessions.
                </p>
              </div>
            </div>
            {/*End of Our Mascot*/}
            {/*Start of Our History*/}
            <h2 className={styles.oppSubheading}>Our History</h2>
            <div className={styles.ourHistorySection}>
              <div className={styles.ourStory}>
                <p className={styles.ourHistoryContent}>
                  Women in Technology was founded by UNSW STEM students, Silvia
                  Lin and her co-founders Rachel Lin, Emily Chen, Anushka Dutt,
                  Chelsea Leung, Karen Huang and Kris Mansfield.
                </p>
                <p className={styles.ourHistoryContent}>
                  The vision which sparked WIT was to empower and unite female
                  students studying technology disciplines by providing a
                  platform to share experiences and knowledge. They were
                  passionate about wanting to ensure that young women were
                  better informed about the opportunities within technology and
                  had a network to support them. The team&apos;s goals were
                  centralised around breaking the stereotypes of the tech
                  industry and forming a close-knit community where they could
                  provide support for each other, both in pursuing a career in
                  tech and developing themselves as individuals.
                </p>
                <p className={styles.ourHistoryContent}>
                  Today, WIT continues to uphold their vision and grow with many
                  more upcoming initiatives to come.
                </p>
              </div>
            </div>
            <Timeline />
            {/*End of Our History*/}
          </div>
        </>
      )}
    </div>
  );
};

export default OurStory;
