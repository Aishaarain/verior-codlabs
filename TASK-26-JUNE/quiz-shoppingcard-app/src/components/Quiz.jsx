
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
    <h1>Shopping Cart App 🛒</h1>
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
      <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.name}</h3>
              <p>Price: ${item.price} × {item.qty}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
             
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
    
    </> 
  );
}




























