import React from "react";
import {
  plusChecking,
  rewardsChecking,
} from "../components/data/checkingContentCol";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InnerContentTest from "../components/InnerContentTest";

import { hero } from "../components/data/products-page";

// const heroItem = hero[0];

function Products() {
  return (
    <div className="[ products ]">
      <Header />
      <Hero
        headingText={hero.headingText}
        body={hero.body}
        imgSrc={hero.imgSrc}
      />
      <InnerContentTest content={rewardsChecking} />
    </div>
  );
}

export default Products;
