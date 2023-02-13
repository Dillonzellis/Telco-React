import React from "react";

function SecondaryHeading({ headingText, type, textColor }) {
  const Component = `h${type}`;

  return (
    <Component
      className={`font-serif text-4xl font-semibold ${
        textColor ? textColor : "text-neutral-900"
      }`}
    >
      {headingText}
    </Component>
  );
}

export default SecondaryHeading;
