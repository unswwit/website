import { css } from "@ss/css";
import { HStack, styled } from "@ss/jsx";
import Image from "next/image";

import TeamBanner from "@/assets/landing-page/2023-team-header.webp";

const MainWrapper = styled("section", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

const MottoPill = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 47,
    padding: "10px 19px",
    borderRadius: 30,
    border: "1px solid #D18C2F",
    background: "#f48801",

    fontFamily: "montserrat",
    fontSize: 22,
    fontWeight: 700,
  },
});

const MainHero = () => {
  return (
    <MainWrapper>
      <h1
        className={css({
          fontSize: 40,
          fontWeight: 700,
          marginTop: 95,
          textTransform: "uppercase",
        })}
      >
        UNSW Women In Technology
      </h1>
      <h2 className={css({ fontSize: 24, fontStyle: "italic", fontWeight: 400, mt: 25 })}>
        "Empowering and inspiring the architects of change"
      </h2>
      <HStack gap="17px" mt="36px">
        <MottoPill>Collaborate</MottoPill>
        <MottoPill>Inspire</MottoPill>
        <MottoPill>Change</MottoPill>
      </HStack>
      <Image
        className={css({ maxWidth: 721, maxHeight: 495, flexShrink: 0, borderRadius: 12, mt: 37 })}
        src={TeamBanner}
        alt="2023 Team Header"
      />
    </MainWrapper>
  );
};

export default MainHero;
