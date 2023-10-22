import { css } from "@ss/css";
import Image from "next/image";

import FlexSection from "../layout/FlexSection";
import sponsors from "./sponsors.png";

const SponsorsAndAffiliations = () => {
  return (
    <FlexSection>
      <h2>Sponsors and Affiliations</h2>
      <Image
        className={css({ marginTop: "6.19rem" })}
        src={sponsors}
        alt="Media wall showing all sponsors that sponsor WIT"
      />
    </FlexSection>
  );
};

export default SponsorsAndAffiliations;
