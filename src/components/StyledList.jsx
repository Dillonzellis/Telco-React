import React from "react";

function StyledList({ liItems }) {
  return (
    <>
      <ul className="grid gap-y-2">{liItems}</ul>
    </>
  );
}

export default StyledList;
