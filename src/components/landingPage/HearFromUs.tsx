import { css } from "@ss/css";

import FlexSection from "../layout/FlexSection";

const HearFromUsPage = () => {
  return (
    <FlexSection mt="74px">
      <h2>Hear From Us</h2>
      <p className={css({ mt: 59 })}>
        Want to know how our amazing organisation all started? Interested in how we have grown and
        expanded since then?
      </p>
      <div>{/* Carousel */}</div>
    </FlexSection>
  );
};

export default HearFromUsPage;
