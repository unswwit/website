import { styled } from "@ss/jsx";
import Image from "next/image";

import FlexSection from "../layout/FlexSection";
import banner from "./eventBanner.png";

const EventCard = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "0.75rem",
    border: "1px solid #DEDEDE",
    background: "#ECECEC",
    maxW: "23.375rem",
    w: "100%",
    p: "1rem",
    gap: "1rem",
    padding: "2rem",
    "& h3": {
      fontSize: "1.5rem",
      color: "#000",
      fontWeight: "700",
    },
    "& p": {
      fontSize: "1.375rem",
      color: "#000",
    },
    "& img": {
      borderRadius: "0.75rem",
    },
  },
});

const EventWrapper = styled("div", {
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    mt: "5.44rem",
  },
});

const WhatWeHaveBeenUpTo = () => {
  return (
    <FlexSection>
      <h2>See what we've been up to</h2>
      <EventWrapper>
        <EventCard>
          <Image src={banner} alt="Event card alt tag" />
          <h3>Events</h3>
          <p>
            Formed in late 2016, we have grown to be a platform that empowers, unites, and up-skills
            female and male students alike that are passionate about our mission.
          </p>
          <button>See More</button>
        </EventCard>
        <EventCard>
          <Image src={banner} alt="Event card alt tag" />
          <h3>Events</h3>
          <p>
            Formed in late 2016, we have grown to be a platform that empowers, unites, and up-skills
            female and male students alike that are passionate about our mission.
          </p>
          <button>See More</button>
        </EventCard>
        <EventCard>
          <Image src={banner} alt="Event card alt tag" />
          <h3>Events</h3>
          <p>
            Formed in late 2016, we have grown to be a platform that empowers, unites, and up-skills
            female and male students alike that are passionate about our mission.
          </p>
          <button>See More</button>
        </EventCard>
      </EventWrapper>
    </FlexSection>
  );
};

export default WhatWeHaveBeenUpTo;
