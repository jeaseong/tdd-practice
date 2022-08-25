import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);
  const onClickPlus = () => {
    setCounter((cur) => cur + 1);
  };
  const onClickMinus = () => {
    setCounter((cur) => cur - 1);
  };
  const onClickDisableBtn = () => {
    setDisable((cur) => !cur);
  };
  return (
    <div className="App">
      <h3 data-testid="counter">{counter}</h3>
      <button disabled={disable} data-testid="minusBtn" onClick={onClickMinus}>
        -
      </button>
      <button disabled={disable} data-testid="plusBtn" onClick={onClickPlus}>
        +
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        data-testid="onOffBtn"
        onClick={onClickDisableBtn}
      ></button>
    </div>
  );
}

export default Counter;
