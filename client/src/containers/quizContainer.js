import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Button from "../components/Button";
import AnswerOption from "../components/AnswerOption.js";

function QuizContainer(props) {
  const { currentQuestion, handleAnswer, handleOnNextButtonClick } = props;

  return (
    <Container
      style={{ height: "83vh" }}
      className="d-flex flex-column justify-content-between"
    >
      <div className="question-container">
        <span>{currentQuestion.word}</span>
      </div>

      <Row>
        {["adverb", "verb", "noun", "adjective"].map((syntactic, index) => (
          <AnswerOption
            key={index}
            title={syntactic}
            answer={currentQuestion.answer}
            correctAnswer={currentQuestion.pos}
            handleAnswer={handleAnswer}
          ></AnswerOption>
        ))}
      </Row>

      <Button
        title={currentQuestion.number === 9 ? "Show my Rank" : "Next Question"}
        onClick={handleOnNextButtonClick}
        disabled={currentQuestion.answer ? false : true}
      ></Button>
    </Container>
  );
}

export default QuizContainer;
