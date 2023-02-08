import React from "react";
import Hero from "../components/Hero";
import Header from "../components/layout/Header";

import InnerContent from "../components/inner-content/InnerContent";
import { audioRes, hero } from "../data/products-page";

function Products() {
  return (
    <div className="[ products ]">
      <Header />
      <Hero
        headingText={hero.headingText}
        body={hero.body}
        imgSrc={hero.imgSrc}
      />
      <InnerContent content={audioRes} dangerous={true} />
    </div>
  );
}

export default Products;
