import React from "react";
import Container from "./Container";
import ContentColTest from "./ContentColTest";
import ImgCol from "./ImgCol";

function InnerContentTest({ content, imgLeft, imgSrc }) {
  return (
    <div className="[ innerContent ]">
      <Container
        content={
          <div className="grid grid-cols-2 items-center gap-12 py-12">
            {imgLeft ? (
              <>
                <ImgCol imgSrc={imgSrc} />
                <ContentColTest content={content} />
              </>
            ) : (
              <>
                <ContentColTest content={content} />
                <ImgCol imgSrc={imgSrc} />
              </>
            )}
          </div>
        }
      />
    </div>
  );
}

export default InnerContentTest;
