import { useState } from 'react';
import styles from '../styles/OurStoryTimeline.module.css';
import { marks, valueToYear } from '../data/story';
import Timeline from '../components/Timeline';
import Image from 'next/image';

export default function OppositeContentTimeline() {
  const [year, setYear] = useState(valueToYear[249.6]);
  const handleYear = (newYear: any) => {
    setYear(newYear);
  };

  return (
    <div>
      <Timeline
        id={styles.timelineStyle}
        page={'ourStory'}
        step={41.6}
        valueToYear={valueToYear}
        marks={marks}
        updateYear={handleYear}
      />
      <div className={styles.timelineCard}>
        <div className={styles.timelineCardImageContainer}>
          <Image
            src={`/our-story/timelinePhotos/${year}.jpg`}
            className={styles.timelineCardImage}
            width="370"
            height="400"
            alt="TIMELINE"
          />
        </div>
        <div className={styles.timelineCardText}>
          <p className={styles.witJourneyText}>WIT&apos;s Journey in {year}</p>
          {year === '2016' ? (
            <ul>
              <li>
                WIT was founded becoming the 1st UNSW society catering
                specifically to female students in technology.
              </li>
              <li>WIT launched digitally on Facebook, garnering 100+ likes.</li>
            </ul>
          ) : year === '2017' ? (
            <ul>
              <li>
                WIT&apos;s first stall was held at UNSW&apos;s Orientation Week,
                where we signed up over 100 students. From there, we doubled our
                membership base to 200+ students in 2017.
              </li>
              <li>We partnered up with four sponsors in its first year.</li>
            </ul>
          ) : year === '2018' ? (
            <ul>
              <li>
                Numerous, successful events were held including our Empowerment
                Program, annual Hackathon (which hosted 100+ participants) and
                first high school outreach event and site visits at AWS.
              </li>
              <li>Our student base grew to 900+ members.</li>
              <li>Our sponsorship base more than doubled to 10 sponsors.</li>
            </ul>
          ) : year === '2019' ? (
            <ul>
              <li>Our student base grew to 1400+ members.</li>
              <li>
                Fostering WIT&apos;s culture with a strong sense of community
                and openness was refocused on within the internal team.
              </li>
            </ul>
          ) : year === '2020' ? (
            <ul>
              <li>
                Hosted 47 events, reaching 79.4k people and achieving a 50%
                increase in event attendance since 2019.
              </li>
              <li>
                Our education portfolio was born releasing three flagship
                publications, our podcast, Talk WIT Us, and blog.
              </li>
              <li>
                WIT was named ARC Club of the Year 2020&apos;, an accolade
                awarded to the society which makes the highest contribution to
                student life by supporting, developing and representing
                students.
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                Awarded Arc Development Program of the year for our flagship
                Empowerment Mentoring Program
              </li>
              <li>
                Restructured and introduced VP Externals, VP Internals, VP
                Multimedia, VP Technology{' '}
              </li>
              <li>Sponsorship base grew to 28 sponsors</li>
              <li>
                Produced 37 multimedia publications including blogs, podcasts,
                videos and flagship publications which amassed a reach of 22.1k
                over 2022
              </li>
              <li>
                Held 22 events including our flagship events, workshops,
                networking nights and competitions
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
