import React from "react";
import SecondaryHeading from "../headings/SecondaryHeading";
import StyledList from "../StyledList";

function ContentCol({ content }) {
  return (
    <div className="[ content-col ]">
      <div className="grid gap-y-4">
        {content.map((item) => (
          <>
            {item.secondaryHeading && (
              <SecondaryHeading headingText={item.secondaryHeading} />
            )}
            {item.liItems && (
              <StyledList
                liItems={item.liItems.map((yep) => {
                  return <li>{yep}</li>;
                })}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default ContentCol;
