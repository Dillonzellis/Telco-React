import React from "react";
import SecondaryHeading from "../headings/SecondaryHeading";
import StyledList from "../StyledList";

let dangerous = true;

function ContentCol({ content, dangerous }) {
  return (
    <div className="[ content-col ]">
      <div className="grid gap-y-4">
        {content.map((item) => (
          <>
            {item.secondaryHeading && (
              <SecondaryHeading headingText={item.secondaryHeading} />
            )}
            {/* (dangerous ? () : () ) */}
            {item.liItems && (
              <StyledList
                liItems={item.liItems.map((li) => (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: li.replace(
                        /(<a.+<\/a>)/g,
                        (_, match) => `${match}`
                      ),
                    }}
                  />
                ))}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
export default ContentCol;
