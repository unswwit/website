import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost47 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #47" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Introducing Hedy Lamarr, Actress & Co-inventor</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>March 16, 2021</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Hedy Lamarr was a triple threat; an actress, film producer and inventor. Through her 85 years (1914-2000), she was successful in every discipline she was involved in. You may have seen her in popular 1940s films, having appeared in over 30. However, she also played a vital role co-inventing an early version of frequency-hopping (method of transmitting radio signals). 
            </p>
            <br />
        
            <p className={styles.postContent}>
              From a young age, Hedy was intrigued with how technologies functioned, although she undertook no formal education and remained primarily self-taught. Whilst she pursued her acting career initially, it was during a time of upheaval, World War II, where her innovative contributions would help the U.S. military and influence future inventions, notably WiFi as we know it.
            </p>
            <br />

            <p className={styles.postContent}>
              Prompted by the urgency of World War II, Hedy’s idea was to develop a device that stopped enemy ships from being able to block torpedo guidance signals. Along with her neighbour George Athiel, the idea was brought to life by building a device where the radio transmitter and torpedo receiver jumped between frequencies simultaneously, such that by the time an enemy ship could locate a signal, the signal would have jumped to another frequency before it could be blocked.  The idea was initially rejected by the US Navy, but in the mid-1950s was used to to develop sonobuoys, devices that were dropped in water to detect submarines, and further remains the basis of Bluetooth, and foundation of Wi-Fi.
            </p>
            <br />
            <p className={styles.postContent}>
              In the 1940s, women like Lamarr were often valued for their beauty, not for their ability to think, invent, or create. Despite her brilliance, Lamarr did not receive a cent from the US military, nor the multi-billion-dollar industry her innovations paved the way for. Her work went unpublicized by the media, and unrecognised by the scientific community for decades. 
            </p>
            <br />

            <p className={styles.postContent}>
              Eventually, in 1997 Lamarr became the first woman to receive the Invention Convention’s Bulbie Gnass Spirit of Achievement Award - the Oscar of the inventing world. In 2014, she was inducted posthumously to the National Inventors Hall of Fame for her frequency-hopping technology. Lamarr has now been dubbed “the mother of Wi-Fi”, and numerous books and graphic novels have been published to tell her story. 
            </p>
            <br />
            
            <p className={styles.postContent}>
              With the string of accomplishments she achieved over her years, it was indeed remarkable to witness such a renown, multitalented figure like Hedy who demonstrated early stint with different technological inventions and credible Hollywood recognitions. Throughout her pathway to success, Hedy persistently strived to contribute her innovation for good.
            </p>
            <br />

            <p className={styles.postContent}>
              In the public eye, she was often overlooked in her marvelous intelligence but if there is an outstanding trait to commemorate her value-added contributions, it would be the courageous drive to chase after her passion in face of adversity. It is really inspiring to resonate with her independent traits which serve as a strong testament to “self empowerment” today.
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/georgie2021.jpg",
              styles.authorProfile,
              "Georgie Mansfield",
              "Education Executive"
            ]
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost47;
