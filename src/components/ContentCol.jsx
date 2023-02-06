import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import StyledList from "./StyledList";

function ContentCol({ headingText, liItems }) {
  return (
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
  );
}

export default ContentCol;
