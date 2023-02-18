import React from "react";

function PrimaryHeading({ headingText }) {
  return (
    <h1 className="font-serif text-4xl font-semibold lg:text-6xl">
      {headingText}
    </h1>
  );
}

export default PrimaryHeading;
