import React from "react";
import Button from "./Button";
import Container from "./Container";

import PrimaryHeading from "./PrimaryHeading";

function Hero({
  headingText,
  subheading,
  body,
  body2,
  imgSrc,
  btnText,
  btnLink,
}) {
  return (
    <div className="bg-primary-400">
      <Container
        content={
          <div className="grid grid-cols-2 gap-12 py-12 font-medium text-slate-50">
            <div className="[ content-col ] grid gap-y-4">
              {subheading ? (
                <div className="[ sub-wrapper ] flex items-center">
                  <img
                    className="mr-2"
                    src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/plus.png"
                    alt=""
                  />
                  <div className="text-xl">{subheading}</div>
                </div>
              ) : null}
              <PrimaryHeading headingText={headingText} />
              <p>{body}</p>
              {body2 ? <p>{body2}</p> : null}
              {btnText ? <Button btnText={btnText} btnLink={btnLink} /> : null}
            </div>
            <div className="[ img-col ] mx-auto">
              <img
                className="absolute -translate-x-1/2 shadow-lg"
                src={imgSrc}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}

export default Hero;