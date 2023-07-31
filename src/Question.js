import React from "react";
import "./Question.css";
import Answers from "./Answers";

const Question = ({
  // receving props and destructed to get the property directly
  handleAnswer,
  handleNextQuestion,
  showAnswers,
  questions,
  currentIndex,
}) => {
  console.log(questions);
  return (
    <>
      <div className="question">
        <p>Question {currentIndex + 1} of 5</p>
        <h1>{questions.question}</h1>
      </div>
      <Answers
        {...questions}
        handleNextQuestion={handleNextQuestion}
        showAnswers={showAnswers}
        handleAnswer={handleAnswer}
      />
    </>
  );
};

export default Question;
