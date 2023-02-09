import React from "react";
import Container from "../layout/Container";
import ContentCol from "./ContentCol";
import ImgCol from "./ImgCol";

function InnerContent({ content, imgLeft, imgSrc, dangerous }) {
  return (
    <section className="[ innerContent ]">
      <Container
        content={
          <div className="grid grid-cols-2 items-center gap-12 py-12">
            {imgLeft ? (
              <>
                <ImgCol imgSrc={imgSrc} />
                <ContentCol content={content} dangerous={dangerous} />
              </>
            ) : (
              <>
                <ContentCol content={content} dangerous={dangerous} />
                <ImgCol imgSrc={imgSrc} />
              </>
            )}
          </div>
        }
      />
    </section>
  );
}

export default InnerContent;
