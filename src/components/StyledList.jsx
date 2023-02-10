import React from "react";

function StyledList({ liItems }) {
  return (
    <>
      <ul className="styled-list ml-6 grid gap-y-2">{liItems}</ul>
    </>
  );
}

export default StyledList;
