import React from "react";
import ImgCol from "./ImgCol";
import Container from "../layout/Container";
import ContentCol from "./ContentCol";

function InnerContent({ content, imgLeft, imgSrc }) {
  return (
    <div className="[ innerContent ]">
      <Container
        content={
          <div className="grid grid-cols-2 items-center gap-12 py-12">
            {imgLeft ? (
              <>
                <ImgCol imgSrc={imgSrc} />
                <ContentCol content={content} />
              </>
            ) : (
              <>
                <ContentCol content={content} />
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
