import TertiaryHeading from "../components/headings/TertiaryHeading";
import Item from "../components/inner-content/Item";
import Container from "../components/layout/Container";
import TwoColsGrid from "../components/layout/TwoColsGrid";
import { generalQuestions, loanQuestions } from "../data/questions";

function Questions() {
  const { item: generalItems } = generalQuestions;
  const { item: loanItems } = loanQuestions;

  const generalQuestionsItems = generalItems.map((obj) => (
    <Item>
      <TertiaryHeading headingText={obj.question} type="div" />
      <p className="ml-4">{obj.answer}</p>
    </Item>
  ));

  const loanQuestionsItems = loanItems.map((obj) => (
    <Item>
      <TertiaryHeading headingText={obj.question} type="div" />
      <p className="ml-4">{obj.answer}</p>
    </Item>
  ));

  return (
    <Container>
      <div className="grid gap-y-8">
        <TwoColsGrid
          className="items-baseline"
          col1={generalQuestionsItems}
          col2={loanQuestionsItems}
        />
      </div>
    </Container>
  );
}

export default Questions;
