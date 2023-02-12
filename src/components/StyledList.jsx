import React from "react";

function StyledList({ listItems }) {
  return (
    <>
      <ul className="styled-list ml-6 grid gap-y-2">
        {listItems.map((li) => (
          <li>{li}</li>
        ))}
      </ul>
    </>
  );
}

export default StyledList;
