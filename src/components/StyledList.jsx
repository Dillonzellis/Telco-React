import React from "react";

function StyledList({ listItems, accent }) {
  return (
    <>
      {/* styled-list-accent */}
      <ul
        className={`${
          accent ? "styled-list-accent" : "styled-list"
        } ml-6 grid gap-y-2`}
      >
        {listItems.map((li) => (
          <li>{li}</li>
        ))}
      </ul>
    </>
  );
}

export default StyledList;
