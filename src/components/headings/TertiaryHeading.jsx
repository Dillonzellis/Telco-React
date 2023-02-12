import React from "react";

function TertiaryHeading({ headingText, type }) {
  const Component = `h${type}`;

  return <Component>{headingText}</Component>;
}

export default TertiaryHeading;
