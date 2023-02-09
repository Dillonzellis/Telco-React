import React from "react";
import Hero from "../components/Hero";
import Header from "../components/layout/Header";
import { hero } from "../data/checking-page";

function Checking() {
  return (
    <div className="[ checking ]">
      <Header />
      <Hero
        subheading={hero.subheading}
        headingText={hero.headingText}
        body={hero.body}
        btnLink="#"
        btnText="open an account"
        imgSrc={
          "https://dev3.growthbydesign.org/wp-content/uploads/2022/11/checking-hero.png"
        }
      />
      {/* <InnerContent
        headingText="Great features of Telco Plus Checking Accounts!"
        liItems={checkingLiItems}
      />
      <InnerContent
        imgLeft={true}
        headingText="Why Rewards Plus Checking?"
        liItems={checkingLiItems}
        imgSrc="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/rewards-checking.png"
      />
      <InnerContent
        headingText="Plus Checking"
        liItems={checkingLiItems}
        imgSrc="https://dev3.growthbydesign.org/wp-content/uploads/2023/01/pls-checking.jpg"
      /> */}
    </div>
  );
}

export default Checking;
