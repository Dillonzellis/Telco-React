import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Products() {
  return (
    <div className="[ products ]">
      <Header />
      <Hero
        headingText="Products"
        body="Banking with Telco Credit Union offers you Convenience and Security that doesn’t break the bank. Our added services are free or have very low fees. We have the technology you need to keep you in control of your finances and the extra security of Fraud Monitoring to help you keep your money safe. You work hard for money; we make managing it easy."
        imgSrc="https://dev3.growthbydesign.org/wp-content/uploads/2023/01/products-hero.png"
      />
    </div>
  );
}

export default Products;
