import React from "react";
import "./Answers.css";

function Answers({
  answers,
  handleAnswer,
  id,
  handleNextQuestion,
  showAnswers,
  correct_answer,
}) {
  return (
    <>
      <div className="answer">
        {/* using map method we getting the each answer and passing as the button value */}
        {answers.map((answer, indx) => {
          const showAnswer = showAnswers
            ? answer === correct_answer
              ? "green-button"
              : "red-button"
            : "";
          return (
            <button
              className={showAnswer}
              key={indx}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          );
        })}
        {/* <button>button1</button>
        <button>button1</button>
        <button>button1</button>
        <button>button1</button> */}
      </div>
      {showAnswers && (
        <button className="next-button" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </>
  );
}

export default Answers;
