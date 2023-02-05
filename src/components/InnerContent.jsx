import React from "react";
import Container from "./Container";
import SecondaryHeading from "./SecondaryHeading";
import StyledList from "./StyledList";

function InnerContent({ imgLeft, headingText, liItems, imgSrc }) {
  return (
    <div className="[ innerContent ]">
      <Container
        content={
          <div className="grid grid-cols-2 gap-12 py-12">
            <div className="[ content-col ] grid gap-y-4">
              <SecondaryHeading headingText={headingText} />
              {liItems && (
                <StyledList
                  liItems={liItems.map((item) => {
                    return <li>{item}</li>;
                  })}
                />
              )}
            </div>
            <div className="[ img-col ]">
              {imgSrc && <img src={imgSrc} alt="" srcset="" />}
            </div>
          </div>
        }
      />
    </div>
  );
}

export default InnerContent;
