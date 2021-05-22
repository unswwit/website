import React, { useEffect } from "react";
import PageHeader from ".././header";
import ".././style.css";
import styles from "./our-story.module.css";

const OurStory = () => {
    useEffect(()=> {
        window.scrollTo(0,0);
    }, []);
    
    return(
        <div>
            {/*Cover Photo*/}
            <PageHeader 
                imgUrl = "/headers/our-story-header.jpg"
                title="Our Story"
            />
    
            {/*Start of Our Story*/}
            {/*Start of Our Mission*/}
            <h2 className={styles.oppSubheading}>Our Mission</h2>
        </div>
    );
};

export default OurStory;