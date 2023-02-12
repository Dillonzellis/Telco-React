import React from "react";
import Button from "./Button";
import Container from "./layout/Container";

import PrimaryHeading from "./headings/PrimaryHeading";

function Hero({ headingText, subheading, body, imgSrc, btnText, btnLink }) {
  return (
    <section className="[ hero ] bg-primary-400">
      <Container>
        <div className="[ section-container ] grid grid-cols-2 gap-12 py-12 font-medium text-slate-50">
          <div className="[ content-col ] grid gap-y-4">
            {subheading && (
              <div className="[ sub-wrapper ] flex items-center">
                <img
                  className="mr-2"
                  src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/plus.png"
                  alt=""
                />
                <div className="text-xl">{subheading}</div>
              </div>
            )}
            <PrimaryHeading headingText={headingText} />
            {body && body.map((item, index) => <p key={index}>{item}</p>)}
            {btnText && <Button btnText={btnText} btnLink={btnLink} />}
          </div>
          <div className="[ img-col ] mx-auto">
            <img
              className="hero-shadow absolute -translate-x-1/2 shadow-lg"
              src={imgSrc}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
