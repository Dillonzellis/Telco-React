import React from "react";
import Hero from "../components/Hero";
import Header from "../components/layout/Header";

function Checking() {
  return (
    <div className="[ checking ]">
      <Header />
      <Hero
        subheading="CHECKING"
        headingText="Checking with Telco Plus"
        body="Banking is personal, so we offer various services and solutions to meet your needs. From our easy-to-use digital banking tools to the convenience of Mobile Banking, there are many ways we can make your life easier."
        body2="Checking is one of the most important accounts you will open here at Telco Plus. You can access your account online, or in person. We offer a wide range of additional services and tools such as paperless statements, alerts for low balances and new deposits, direct deposit, and free bill pay. Check out all of our checking products today!"
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
