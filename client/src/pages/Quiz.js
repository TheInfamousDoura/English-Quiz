import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import apiClient from "../services";
import endPoints from "../services/endpoints";
import "../styles/quiz.css";
import QuizContainer from "../containers/quizContainer.js";

function Quiz() {
  const { state } = useLocation();
  const [wordsList, setWordsList] = useState([]);
  const navigate = useNavigate();
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({
    number: 0,
    id: null,
    word: "",
    pos: "",
    answer: false,
  });

  useEffect(() => {
    async function fetchWordsList() {
      const result = await apiClient.get(endPoints.wordsList);
      return result;
    }

    fetchWordsList()
      .then((res) => res.data)
      .then((data) => {
        setWordsList(data);
        setCurrentQuestion({
          number: 0,
          ...data[0],
          answer: false,
        });
      })

      .catch((err) => console.log(err.message));
  }, []);

  const handleNextQuestion = () => {
    let nextWord = currentQuestion.number + 1;
    setCurrentQuestion({
      number: nextWord,
      ...wordsList[nextWord],
      answer: false,
    });
  };

  const increaseTotalCorrectAnswers = () => {
    setTotalCorrectAnswers(totalCorrectAnswers + 1);
  };

  const updateAnswerValue = (syntactic) => {
    setCurrentQuestion({
      ...currentQuestion,
      answer: syntactic,
    });
  };

  const handleAnswer = (syntactic) => {
    if (syntactic === currentQuestion.pos) {
      increaseTotalCorrectAnswers();
    }

    updateAnswerValue(syntactic);
  };

  const handleOnNextButtonClick = () => {
    if (currentQuestion.number === 9) {
      navigate("/rank", { state: { ...state, score: totalCorrectAnswers } });
    } else {
      handleNextQuestion();
    }
  };

  return (
    <QuizContainer
      currentQuestion={currentQuestion}
      totalCorrectAnswers={totalCorrectAnswers}
      handleAnswer={handleAnswer}
      handleOnNextButtonClick={handleOnNextButtonClick}
      state={state}
    />
  );
}

export default Quiz;
