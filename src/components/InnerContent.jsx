import React from "react";
import Container from "./Container";
import SecondaryHeading from "./SecondaryHeading";

function InnerContent() {
  return (
    <div>
      <Container
        content={
          <div className="">
            <SecondaryHeading headingText="secondary heading text" />
            <div className="">inner content</div>
          </div>
        }
      />
    </div>
  );
}

export default InnerContent;
