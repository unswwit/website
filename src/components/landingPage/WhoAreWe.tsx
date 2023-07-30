import { css } from "@ss/css";

import FlexSection from "../layout/FlexSection";

const WhoAreWePage = () => {
  return (
    <FlexSection mt="40px">
      <h2>Who Are We?</h2>
      <p className={css({ textAlign: "center" })}>
        Formed in late 2016, we have grown to be a platform that empowers, unites and up-skills
        female and male students alike that are passionate about our mission. Women in Technology
        (WIT) aims to cultivate future leaders that are prepared to challenge the prejudices and
        bring change into the industry while building a strong community where they can find lasting
        friendships and support.
      </p>
    </FlexSection>
  );
};

export default WhoAreWePage;
