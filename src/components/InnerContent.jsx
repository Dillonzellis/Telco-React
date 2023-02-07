import React from "react";
import Container from "./Container";
import ContentCol from "./ContentCol";
import ImgCol from "./ImgCol";

function InnerContent({ imgLeft, headingText, liItems, imgSrc }) {
  return (
    <div className="[ innerContent ]">
      <Container
        content={
          <div className="grid grid-cols-2 items-center gap-12 py-12">
            {imgLeft ? (
              <>
                <ImgCol imgSrc={imgSrc} />
                <ContentCol headingText={headingText} liItems={liItems} />
              </>
            ) : (
              <>
                <ContentCol headingText={headingText} liItems={liItems} />
                <ImgCol imgSrc={imgSrc} />
              </>
            )}
          </div>
        }
      />
    </div>
  );
}

export default InnerContent;
