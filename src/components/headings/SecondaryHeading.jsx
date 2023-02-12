import React from "react";

function SecondaryHeading({ headingText, type }) {
  const Component = `h${type}`;

  return (
    <Component className="font-serif text-4xl font-semibold">
      {headingText}
    </Component>
  );
}

export default SecondaryHeading;
