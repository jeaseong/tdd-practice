import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const onClickPlus = () => {
    setCounter((cur) => cur + 1);
  };
  const onClickMinus = () => {
    setCounter((cur) => cur - 1);
  };
  return (
    <div className="App">
      <h3 data-testid="counter">{counter}</h3>
      <button data-testid="minusBtn" onClick={onClickMinus}>
        -
      </button>
      <button data-testid="plusBtn" onClick={onClickPlus}>
        +
      </button>
    </div>
  );
}

export default App;
