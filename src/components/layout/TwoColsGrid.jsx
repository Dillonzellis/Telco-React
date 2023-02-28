import React from "react";

function TwoColsGrid({ col1, col2, className }) {
  return (
    <div className={`grid grid-cols-2 gap-x-20 py-12 ${className}`}>
      {col1 && <div className="grid gap-y-4">{col1}</div>}
      {col2 && <div className="grid gap-y-4">{col2}</div>}
    </div>
  );
}

export default TwoColsGrid;
