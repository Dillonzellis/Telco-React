import React from "react";
import TertiaryHeading from "../components/headings/TertiaryHeading";
import Hero from "../components/Hero";
import InnerContent from "../components/inner-content/InnerContent";
import Header from "../components/layout/Header";
import { feats, hero, rewards } from "../data/checking-page";

function Checking() {
  return (
    <div className="[ checking ]">
      <Header />
      <Hero
        subheading={hero.subheading}
        headingText={hero.headingText}
        body={hero.body}
        btnText={hero.button.btnText}
        btnLink={hero.button.btnLink}
        imgSrc={hero.imgSrc}
      />
      <InnerContent content={feats} />
      <InnerContent content={rewards} imgLeft={true} imgSrc={rewards.imgSrc} />
      {/* <TertiaryHeading headingText="tertiary heading" type={5} /> */}
    </div>
  );
}

export default Checking;
