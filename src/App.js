import { useState, useEffect, startTransition } from "react";
import "./App.css";
import Question from "./Question";

function App() {
  // url is used to get the data in this url
  // const API_URL = "http://localhost:3500/questions";
  const [questions, setQuestions] = useState(
    [
      // .sort(
      //   () => Math.random() - 0.5
      // ),  this code is used to sort the array to change the order of element on each time
      {
        id: 1,
        question: "Which of the follwoing is NOT a JS primitive type in JS",
        correct_answer: "Integer",
        incorrect_answers: ["Symbol", "String", "Bigint"],
        answers: ["Integer", "Symbol", "String", "Bigint"].sort(
          () => Math.random() - 0.5
        ),
      },
      {
        id: 2,
        question: "What does console.log( +'3' + + '5') output in JS",
        correct_answer: 8,
        incorrect_answers: [10, 9, "35"],
        answers: [8, 10, 9, "35"].sort(() => Math.random() - 0.5),
      },
      {
        id: 3,
        question: "What does Object.keys('foo')  output in JS",
        correct_answer: "[0, 1, 2]",
        incorrect_answers: ["TypeError", " [ ]", "[f, o, o]"],
        answers: ["[0, 1, 2]", "TypeError", "[ ]", "[f, o, o]"].sort(
          () => Math.random() - 0.5
        ),
      },
      {
        id: 4,
        question: "Which of the follwoing is NOT a JS primitive type in JS",
        correct_answer: "PUSH",
        incorrect_answers: ["DELETE", "OPTIONS", "TRACE"],
        answers: ["PUSH", "DELETE", "OPTIONS", "TRACE"].sort(
          () => Math.random() - 0.5
        ),
      },
      {
        id: 5,
        question: "What does 0.1 + 0.2 === 0.3  output in JS",
        correct_answer: "FALSE",
        incorrect_answers: ["TRUE", "TypeError", "Reference Error"],
        answers: ["FALSE", "TRUE", "TypeError", "Reference Error"].sort(
          () => Math.random() - 0.5
        ),
      },
    ].sort(() => Math.random() - 0.5)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  // const [fetchError, setFetchError] = useState(null);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [start, setStart] = useState(true);

  // we will get the data inside useEffect function and use fetch api to get the data and will update that in setQuestions
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const data = await response.json();
        console.log(data);
        const question = questions.map((questions) =>
          console.log(questions.question)({
            ...questions,
            answers: [
              questions.correct_answer,
              ...questions.incorrect_answers,
            ].sort(() => Math.random - 0.5),
          })
        );
        console.log(questions);
        setQuestions(question);
        console.log("a");

        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      }
    };
immideatly invoked function to call fetchdata function
    (async () => await fetchData())();
  }, []);

  setQuestions(question); */
  // this function will check the answer we clicked is equal to the answer if it's equal then we will increase score by 1
  const handleAnswer = (answer) => {
    if (answer === questions[currentIndex].correct_answer) {
      setScore((prevcount) => prevcount + 1);
      // it will increase the score if answer is not right
    } else if (answer !== questions[currentIndex].correct_answer) {
      setWrongAnswer((prevcount) => prevcount + 1);
    }
    setShowAnswers(true);
  };

  // this function will change the question when we click the Next button after selecting the answer
  const handleNextQuestion = () => {
    setCurrentIndex((prevcount) => prevcount + 1);
    setShowAnswers(false);
  };
  return (
    <div className="Container">
      {/* short sircuting using logical and operator it will display the value true else display empty array */}
      {start && (
        <>
          <div className="start-container">
            <h1 className="start">Welcome to the quiz</h1>
            <p>click the start button to start the quiz</p>
            <button className="start-button" onClick={() => setStart(!start)}>
              Start
            </button>
          </div>
        </>
      )}
      {!start &&
        // using ternary operator displalying different screen for different conditon
        (currentIndex >= questions.length ? (
          <>
            <div className="end-container">
              <h1 className="end">Quizz over</h1>
              <p>Your score:{score}</p>
              <p>
                Correct answer: <span className="success">{score}</span>
              </p>
              <p>
                wrong answer: <span className="unsuccess">{wrongAnswer}</span>
              </p>
              <div className="feedback">
                <h2>Feedback Area</h2>
                <textarea
                  name="feedback"
                  id="feedback"
                  cols="70"
                  rows="3"
                  placeholder="Please Enter Your Feedback here"
                ></textarea>
              </div>
            </div>
          </>
        ) : (
          // This is a question component and we share the property in the component
          <Question
            key={questions.id}
            handleAnswer={handleAnswer}
            currentIndex={currentIndex}
            showAnswers={showAnswers}
            handleNextQuestion={handleNextQuestion}
            questions={questions[currentIndex]}
          />
        ))}
    </div>
  );
}

export default App;
