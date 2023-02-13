import React from "react";

function StyledList({ listItems, accent, dangerous }) {
  return (
    <>
      <ul
        className={`${
          accent ? "styled-list-accent" : "styled-list"
        } ml-6 grid gap-y-2`}
      >
        {listItems.map((li, index) =>
          dangerous ? (
            <li key={index} dangerouslySetInnerHTML={{ __html: li }} />
          ) : (
            <li key={index}>{li}</li>
          )
        )}
      </ul>
    </>
  );
}

export default StyledList;
