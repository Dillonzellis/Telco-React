import React from "react";
import Hero from "../components/Hero";
import Header from "../components/layout/Header";

import { audioRes, hero } from "../data/products-page";

function Products() {
  return (
    <div className="[ products ]">
      <Header />

      <section>
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
    </div>
  );
}

export default Products;
