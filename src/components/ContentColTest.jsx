import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import StyledList from "./StyledList";

function ContentColTest({ content }) {
  return (
    <div>
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
    </div>
  );
}

export default ContentColTest;
