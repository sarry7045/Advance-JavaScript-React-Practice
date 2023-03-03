import React, { useRef, useState } from "react";
import { useEffect } from "react";

const UseeRef = () => {
  const [number, setNumber] = useState(0);
  const countClick = useRef(0);
  const inputValue = useRef();

  function handleClick() {
    setNumber((num) => num + 1);
    countClick.current++;
  }

  useEffect(() => {
    inputValue.current.value = "Suraj";
    inputValue.current.focus();
  });

  return (
    <div>
      {number}
      <button onClick={handleClick}>Increment Number</button>

      {countClick.current}
      <input type="text" ref={inputValue} />
    </div>
  );
};

export default UseeRef;
