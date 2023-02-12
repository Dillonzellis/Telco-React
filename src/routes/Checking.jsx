import React from "react";
import SecondaryHeading from "../components/headings/SecondaryHeading";
import TertiaryHeading from "../components/headings/TertiaryHeading";
import Hero from "../components/Hero";
import ContentSection from "../components/inner-content/ContentSection";
import TwoColsGrid from "../components/inner-content/TwoColsGrid";
import Container from "../components/layout/Container";
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
        sectionName="feats"
        twoCols={true}
        col1={
          <>
            <SecondaryHeading headingText={feats.secondaryHeading} type={2} />
            <StyledList listItems={feats.listItems} />
          </>
        }
      />
    </div>
  );
}

export default Checking;
