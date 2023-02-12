import React from "react";
import SecondaryHeading from "../components/headings/SecondaryHeading";
import TertiaryHeading from "../components/headings/TertiaryHeading";
import Hero from "../components/Hero";
import TwoColsGrid from "../components/inner-content/TwoColsGrid";
import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import StyledList from "../components/StyledList";
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
      <section className="[ feats inner-content ]">
        <Container>
          <TwoColsGrid
            col1={
              <>
                <SecondaryHeading
                  headingText={feats.secondaryHeading}
                  type={2}
                />
                <StyledList listItems={feats.listItems} />
              </>
            }
            col2={null}
          />
        </Container>
      </section>
    </div>
  );
}

export default Checking;
