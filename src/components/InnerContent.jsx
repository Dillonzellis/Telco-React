import React from "react";
import Container from "./Container";
import SecondaryHeading from "./SecondaryHeading";
import StyledList from "./StyledList";

function InnerContent({ imgLeft, headingText, liItems, imgSrc }) {
  return (
    <div className="[ innerContent ]">
      <Container
        content={
          <div className="grid grid-cols-2 items-center gap-12 py-12">
            {imgLeft ? (
              <>
                <div className="[ img-col ]">
                  {imgSrc && <img src={imgSrc} alt="" srcset="" />}
                </div>
                <div className="[ content-col ]">
                  <div className="grid gap-y-4">
                    <SecondaryHeading headingText={headingText} />
                    {liItems && (
                      <StyledList
                        liItems={liItems.map((item) => {
                          return <li>{item}</li>;
                        })}
                      />
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="[ content-col ]">
                  <div className="grid gap-y-4">
                    <SecondaryHeading headingText={headingText} />
                    {liItems && (
                      <StyledList
                        liItems={liItems.map((item) => {
                          return <li>{item}</li>;
                        })}
                      />
                    )}
                  </div>
                </div>

                <div className="[ img-col ]">
                  {imgSrc && <img src={imgSrc} alt="" srcset="" />}
                </div>
              </>
            )}
          </div>
        }
      />
    </div>
  );
}

export default InnerContent;
