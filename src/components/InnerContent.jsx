import React from "react";
import Container from "./Container";

function InnerContent() {
  return (
    <div>
      <Container
        content={
          <div className="">
            <div className="">inner content</div>
          </div>
        }
      />
    </div>
  );
}

export default InnerContent;
