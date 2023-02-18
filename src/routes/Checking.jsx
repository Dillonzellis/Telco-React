import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import SecondaryHeading from "../components/headings/SecondaryHeading";
import TertiaryHeading from "../components/headings/TertiaryHeading";
import Hero from "../components/Hero";
import ContentSection from "../components/inner-content/ContentSection";
import ImgCol from "../components/inner-content/ImgCol";
import Item from "../components/inner-content/Item";
import StyledList from "../components/StyledList";
import { feats, hero, plus, rewards, secured } from "../data/checking-page";

function Checking() {
  return (
    <div className="[ checking ]">
   

      {/* HERO */}
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

      {/* FEATS */}
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

      {/* REWARDS */}
      <ContentSection
        sectionName={rewards.sectionName}
        twoCols={true}
        col1={<ImgCol imgSrc={rewards.imgSrc} imgClass={rewards.imgClass} />}
        col2={
          <>
            <SecondaryHeading headingText={rewards.secondaryHeading} type={2} />
            <StyledList listItems={rewards.listItems} />
            <TertiaryHeading headingText={rewards.tertiaryHeading} type={3} />
            <StyledList listItems={rewards.listItems2} />
            <Button
              btnLink={rewards.button.btnLink}
              btnText={rewards.button.btnText}
            />
          </>
        }
      />

      {/* PLUS CHECKING */}
      <ContentSection
        sectionName={plus.sectionName}
        twoCols={true}
        col1={
          <>
            <Item>
              <SecondaryHeading headingText={plus.secondaryHeading} type={2} />
              <StyledList listItems={plus.listItems} />
            </Item>

            <Item>
              <SecondaryHeading headingText={plus.secondaryHeading2} type={2} />
              <StyledList listItems={plus.listItems2} />
            </Item>
            <Button
              btnLink={plus.button.btnLink}
              btnText={plus.button.btnText}
            />
          </>
        }
        col2={<ImgCol imgSrc={plus.imgSrc} imgClass={plus.imgClass} />}
      />

      {/* SECURED CHECKING */}
      <ContentSection
        sectionName={secured.sectionName}
        accent={true}
        twoCols={true}
        col1={
          <ImgCol
            imgSrc={secured.imgs.imgSrc}
            imgClass={secured.imgs.imgClass}
          />
        }
        col2={
          <>
            <SecondaryHeading
              headingText={secured.headings.secondaryHeading}
              textColor={secured.headings.textColor}
              type={2}
            />
            <div className="">{secured.body.bodyText}</div>
            <StyledList
              listItems={secured.listItems.items}
              accent={secured.listItems.accent}
            />
            <div className="font-semibold">{secured.body.bodyText2}</div>
          </>
        }
      />
    </div>
  );
}

export default Checking;
