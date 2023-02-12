import React from "react";

function TertiaryHeading({ headingText, type }) {
  const Component = `h${type}`;

  return <Component className="text-lg font-semibold">{headingText}</Component>;
}

export default TertiaryHeading;
