import { css } from "@ss/css";
import { styled } from "@ss/jsx";
import Image from "next/image";

import HeroBackground from "@/assets/landing-page/landing-hero-section.svg";
import Button from "@/components/button";
import Footer from "@/components/footer";
import CommunityInNumbersPage from "@/components/landingPage/CommunityInNumbers";
import HearFromUsPage from "@/components/landingPage/HearFromUs";
import MainHero from "@/components/landingPage/MainHero";
import SponsorsAndAffiliations from "@/components/landingPage/SponsorsAndAffiliations";
import WhatWeHaveBeenUpTo from "@/components/landingPage/WhatWeHaveBeenUpTo";
import WhoAreWePage from "@/components/landingPage/WhoAreWe";

export const metadata = {
  title: "Home | UNSW WIT",
};

const MainWrapper = styled("main", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    textAlign: "center",
  },
});

const Home = () => {
  return (
    <>
      <div className={css({ position: "relative" })}>
        <Image
          className={css({ position: "absolute", zIndex: "-1" })}
          src={HeroBackground}
          alt="Landing Hero Section"
        />
      </div>
      <MainWrapper>
        <MainHero />
        <WhoAreWePage />
        <HearFromUsPage />
        <CommunityInNumbersPage />
        <div>
          <h2>Multimedia</h2>
          {/* Multimedia Stuff */}
          <Button title="View More" />
        </div>
        <WhatWeHaveBeenUpTo />
        <SponsorsAndAffiliations />
        <div>
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter to stay up to date with our events and opportunities!</p>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email Address" required />
            </div>
            <div>
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name" placeholder="First Name" required />
            </div>
            <div>
              <label htmlFor="first-name">Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name" required />
            </div>
            <div>
              <label htmlFor="first-name">Degree</label>
              <input type="text" name="degree" placeholder="Degree" required />
            </div>
            <Button title="Subscribe" />
          </form>
        </div>
        <Footer />
      </MainWrapper>
    </>
  );
};

export default Home;
