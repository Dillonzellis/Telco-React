import React from "react";

function TwoColsGrid({ col1, col2 }) {
  return (
    <div className="grid grid-cols-2 items-center gap-12 py-12">
      {col1 && <div className="grid gap-y-4">{col1}</div>}
      {col2 && <div className="">{col2}</div>}
    </div>
  );
}

export default TwoColsGrid;
