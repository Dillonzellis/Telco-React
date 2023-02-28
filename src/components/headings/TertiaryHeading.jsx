import React from "react";

function TertiaryHeading({ headingText, type }) {
  if (type === "div") {
    return <div className="text-lg font-semibold">{headingText}</div>;
  }

  const Component = `h${type}`;

  return <Component className="text-lg font-semibold">{headingText}</Component>;
}

export default TertiaryHeading;
