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
import {
  audioRes,
  billPay,
  directDeposit,
  hero,
  wiring,
} from "../data/products-page";

function Products() {
  return (
    <div className="[ products ]">
      {/* HERO */}
      <section className="[ hero ]">
        <Hero
          className="[ hero ]"
          subheading={hero.headings.subHeading}
          headingText={hero.headings.headingText}
          body={hero.body}
          btnText={hero.button.btnText}
          btnLink={hero.button.btnLink}
          imgSrc={hero.imgSrc}
        />
      </section>

      {/* AUDIO RES */}
      <ContentSection
        sectionName={audioRes.sectionName}
        twoCols={true}
        col1={
          <>
            <SecondaryHeading
              headingText={audioRes.headings.secondaryHeading}
              type={2}
            />
            <StyledList
              listItems={audioRes.listItems.items}
              dangerous={audioRes.listItems.dangerous}
            />
          </>
        }
      />

      {/* BILL PAY */}
      <ContentSection
        sectionName={billPay.sectionName}
        twoCols={true}
        col1={
          <ImgCol
            imgSrc={billPay.imgs.imgSrc}
            imgClass={billPay.imgs.imgClass}
          />
        }
        col2={
          <>
            <Item>
              <SecondaryHeading
                headingText={billPay.headings.secondaryHeading}
                type={2}
              />
              <StyledList
                listItems={billPay.listItems.items}
                dangerous={billPay.listItems.dangerous}
              />
            </Item>

            <Item>
              <SecondaryHeading
                headingText={billPay.headings.secondaryHeading2}
                type={2}
              />
              <StyledList listItems={billPay.listItems.items2} />
            </Item>

            <Item>
              <SecondaryHeading
                headingText={billPay.headings.secondaryHeading3}
                type={2}
              />
              <StyledList listItems={billPay.listItems.items3} />
            </Item>
            <div className="">
              <a className="font-semibold text-primary-200" href="#">
                Click here
              </a>{" "}
              for more information and disclosures regarding Courtesy Pay.
            </div>
          </>
        }
      />

      {/* DIRECT DEPOSIT */}
      <ContentSection
        sectionName={directDeposit.sectionName}
        twoCols={true}
        col1={
          <>
            <Item>
              <SecondaryHeading
                headingText={directDeposit.headings.secondaryHeading}
                type={2}
              />
              <StyledList listItems={directDeposit.listItems.items} />
            </Item>

            <TertiaryHeading
              headingText={directDeposit.headings.tertiaryHeading}
              type={3}
            />
            <StyledList
              listItems={directDeposit.listItems.items2}
              dangerous={directDeposit.listItems.dangerous}
            />
          </>
        }
        col2={
          <ImgCol
            imgSrc={directDeposit.imgs.imgSrc}
            imgClass={directDeposit.imgs.imgClass}
          />
        }
      />

      {/* WIRING */}
      <ContentSection
        sectionName={wiring.sectionName}
        accent={true}
        twoCols={true}
        col1={
          <ImgCol imgSrc={wiring.imgs.imgSrc} imgClass={wiring.imgs.imgClass} />
        }
        col2={
          <>
            <SecondaryHeading
              headingText={wiring.headings.secondaryHeading}
              textColor={wiring.headings.textColor}
              type={2}
            />
            <p>
              Telco Plus Credit Union offers domestic wire transfers and Western
              Union transfers. Domestic wires can be sent the same day if
              received in our office by 3:30 pm. Please call us if you have any
              questions. <a href="#">903-753-5588</a>
            </p>

            <StyledList
              listItems={wiring.listItems.items}
              accent={wiring.listItems.accent}
            />
            <Button
              btnLink={wiring.button.btnLink}
              btnText={wiring.button.btnText}
            />
          </>
        }
      />
    </div>
  );
}

export default Products;
