import React, { useState } from "react";

const Summary = () => {
  const [checked, setChecked] = useState(false);
  const onClickChecbox = () => {
    setChecked((cur) => !cur);
  };
  return (
    <div>
      <form>
        <input
          type="checkbox"
          checked={checked}
          onChange={onClickChecbox}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default Summary;
