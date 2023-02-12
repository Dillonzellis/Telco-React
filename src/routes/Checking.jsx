import React from "react";
import Button from "../components/Button";
import SecondaryHeading from "../components/headings/SecondaryHeading";
import TertiaryHeading from "../components/headings/TertiaryHeading";
import Hero from "../components/Hero";
import ContentSection from "../components/inner-content/ContentSection";
import ImgCol from "../components/inner-content/ImgCol";

import Header from "../components/layout/Header";
import StyledList from "../components/StyledList";
import { feats, hero, rewards } from "../data/checking-page";

function Checking() {
  return (
    <div className="[ checking ]">
      <Header />
      <section className="[ hero ]">
        <Hero
          subheading={hero.subheading}
          headingText={hero.headingText}
          body={hero.body}
          btnText={hero.button.btnText}
          btnLink={hero.button.btnLink}
          imgSrc={hero.imgSrc}
        />
      </section>

      <ContentSection
        sectionName={feats.sectionName}
        twoCols={true}
        col1={
          <>
            <SecondaryHeading headingText={feats.secondaryHeading} type={2} />
            <StyledList listItems={feats.listItems} />
          </>
        }
      />

      <ContentSection
        twoCols={true}
        col1={<ImgCol imgSrc={rewards.imgSrc} />}
        col2={
          <>
            <SecondaryHeading headingText={rewards.secondaryHeading} type={2} />
            <StyledList listItems={rewards.listItems} />
            <TertiaryHeading headingText={rewards.tertiaryHeading} />
            <StyledList listItems={rewards.listItems2} />
            <Button
              btnLink={rewards.button.btnLink}
              btnText={rewards.button.btnText}
            />
          </>
        }
      />
    </div>
  );
}

export default Checking;
