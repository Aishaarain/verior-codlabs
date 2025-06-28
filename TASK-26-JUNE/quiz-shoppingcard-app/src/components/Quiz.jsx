
import React, { useState } from "react";

const quizData = [
  {
    question: "What is JSX?",
    options: ["Python", "JS extension", "React syntax", "PHP"],
    answer: "React syntax"
  },
  {
    question: "Which company created React?",
    options: ["Google", "Facebook", "Amazon", "Microsoft"],
    answer: "Facebook"
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Applied Program Interface",
      "Advanced Programming Instruction",
      "Application Protocol Interface"
    ],
    answer: "Application Programming Interface"
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (<>
   return (
  <div className="container">
    <h1>Quiz App</h1>

    {showResult ? (
      <div>
        <h2>Your Score: {score} / {quizData.length}</h2>
        <button onClick={() => {
          setCurrent(0);
          setScore(0);
          setSelected(null);
          setShowResult(false);
        }}>
          Restart Quiz
        </button>
      </div>
    ) : (
      <div>
        <h2>Q{current + 1}: {quizData[current].question}</h2>

        {quizData[current].options.map((opt, index) => (
          <div key={index} style={{ margin: '0.5rem 0' }}>
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={opt}
              checked={selected === opt}
              onChange={() => handleAnswer(opt)}
            />
            <label htmlFor={`option-${index}`} style={{ marginLeft: '0.5rem' }}>
              {opt}
            </label>
          </div>
        ))}

        <p style={{ marginTop: '1rem' }}>
          Question {current + 1} of {quizData.length}
        </p>

        <button
          onClick={handleNext}
          disabled={selected === null}
          style={{ marginTop: '1rem' }}
        >
          {current === quizData.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    )}
  </div>
);

    
    </> 
  );
}




























