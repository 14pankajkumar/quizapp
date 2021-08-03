import React, { useEffect, useState } from "react";
import { Questions } from "./components";
const API_URL = "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"

function App() {
  const [quetions, setquetions] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setscore] = useState(0);
  const [showAnswers, setshowAnswers] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setquetions(data.results);
      })
  }, []);

  const handleAnswer = (answer) => {
    // Check for the answer
    if (!showAnswers) {
      // prevent double answer
      if (answer === quetions[currentIndex].correct_answer) {
        // increase the score
        setscore(score + 1)
      }
  }

    setshowAnswers(true)

    // show another question

    // change score if correct
  }

  return quetions.length > 0 ? (
    <div className="container">
      {currentIndex >= quetions.length ? (
        <h1 className="text-3xl text-white font-bold">Your score is {score}</h1>
      ) : (
        <Questions 
          data={quetions[currentIndex]}
          showAnswers={showAnswers}
          handleAnswer={handleAnswer} 
        />
      )}
    </div>
  ): (
    <h1 className="text-2xl text-white font-bold">Loading...</h1>
  )
}

export default App;
