import Col from "react-bootstrap/Col";

import "../styles/quiz.css";

function AnswerOption({ title, answer, correctAnswer, handleAnswer }) {
  let state;
  let isDisabled = true;
  let isCorrect = answer === title && answer === correctAnswer;
  let isWrong = answer === title && answer !== correctAnswer;

  if (answer === false) {
    state = "answer mt-3";
    isDisabled = false;
  } else if (isCorrect) {
    state = "answer-correct mt-3";
  } else if (isWrong) {
    state = "answer-wrong mt-3";
  } else {
    state = "answer-disabled mt-3";
  }

  return (
    <Col xs={6} lg={3} className="d-flex justify-content-center">
      <button
        className={state}
        disabled={isDisabled}
        onClick={() => handleAnswer(title)}
      >
        <span>{title}</span>
      </button>
    </Col>
  );
}

export default AnswerOption;
