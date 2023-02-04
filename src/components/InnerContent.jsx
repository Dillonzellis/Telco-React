import React from "react";
import Container from "./Container";
import SecondaryHeading from "./SecondaryHeading";
import StyledList from "./StyledList";

function InnerContent({ liItems }) {
  return (
    <div>
      <Container
        content={
          <div className="">
            <SecondaryHeading headingText="secondary heading text" />
            <div className="">inner content</div>
            <StyledList
              liItems={liItems.map((item) => {
                return <li>{item}</li>;
              })}
            />
          </div>
        }
      />
    </div>
  );
}

export default InnerContent;
