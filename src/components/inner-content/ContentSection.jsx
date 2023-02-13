import React from "react";
import Container from "../layout/Container";
import TwoColsGrid from "./TwoColsGrid";

function ContentSection({ sectionName, twoCols, col1, col2, accent }) {
  return (
    <section
      className={`${sectionName} ${
        accent ? "bg-neutral-700 text-white" : ""
      }`.trim()}
    >
      <Container>
        {twoCols && <TwoColsGrid col1={col1} col2={col2} />}
      </Container>
    </section>
  );
}

export default ContentSection;
